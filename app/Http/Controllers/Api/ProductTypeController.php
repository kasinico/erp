<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProductTypeResource;
use App\Models\ProductType;
use App\Models\UserProfile;
use function foo\func;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductTypeController extends Controller
{

    public function get($id) {
        $type = ProductType::query()->where('id', $id)->with(['tenant'])->first();

        return response()->json($type ? new ProductTypeResource($type) : [], 200);
    }

    public function filter() {
        $profile = UserProfile::query()->whereHas('user', function ($q) {
            return $q->where('user_id', auth('api')->id());
        })->with(['tenant'])->first();
        $query = ProductType::query()->whereHas('tenant', function ($q) use ($profile) {
            return $q->where('tenant_id', $profile->tenant->id);
        })->with(['tenant']);

        return response()->json(ProductTypeResource::collection($query->get()), 200);
    }

    public function create() {
        $type = new ProductType();

        $profile = UserProfile::query()->whereHas('user', function ($q) {
            return $q->where('user_id', auth('api')->id());
        })->with(['tenant'])->first();
        $type->create([
            'name'  => request('name'),
            'description'   => request('description')
        ]);

        $type->tenant()->associate($profile->tenant);

        return response()->json(ProductTypeResource::make($type), 200);
    }

    public function update($id) {
        $type = ProductType::query()->where('id', $id)->with(['tenant'])->first();

        if (!$type) return response()->json(['detail'=> 'Product Type of id '. $id .' was not found']);

        $type->name = request('name', $type->name);
        $type->description = request('description', $type->description);

        return response()->json(ProductTypeResource::make($type));
    }

}
