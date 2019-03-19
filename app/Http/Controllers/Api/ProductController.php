<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProductResource;
use App\Http\Resources\TenantResource;
use App\Models\Product;
use App\Models\Tenant;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{

    public function get($id) {
        $product = Product::query()->where('id', $id)->with(['tenant'])->first();

        return response()->json($product ? new ProductResource($product) : [], 200);
    }

    public function filter () {
        $profile = UserProfile::query()->whereHas('user', function ($q) {
            return $q->where('user_id', auth('api')->id());
        })->with(['tenant'])->first();
        $query = Product::query()->whereHas('tenant', function ($q) use ($profile) {
            return $q->where('tenant_id', $profile->tenant->id);
        });

        return response()->json(ProductResource::collection($query->get()), 200);
    }

    public function create() {
        $product = new Product();
        $profile = UserProfile::query()->whereHas('user', function ($q) {
            return $q->where('user_id', auth('api')->id());
        })->with(['tenant'])->first();
        $product->create([
            'name'                  => request('name'),
            'description'           => request('description'),
            'size'                  => request('size'),
            'starting_inventory'    => request('starting_inventory'),
            'inventory_at_hand'     => request('inventory_at_hand'),
            'minimum_required'      => request('minimum_required'),
            'sale_price'            => request('sale_price'),
            'buying_price'          => request('buying_price'),
        ]);
        $product->tenant()->associate($profile->tenant);

        return response()->json(new ProductResource($product), 200);
    }

    public function update($id) {
        $product = Product::query()->where('id', $id)->first();
        $product->name          = request('name', $product->name);
        $product->description   = request('description', $product->description);
        $product->size          = request('size', $product->size);
        $product->starting_inventory    = request('starting_inventory', $product->starting_inventory);
        $product->inventory_at_hand     = request('inventory_at_hand', $product->inventory_at_hand);
        $product->minimum_required      = request('minimum_required', $product->minimum_required);
        $product->sale_price            = request('sale_price', $product->sale_price);
        $product->buying_price          = request('buying_price', $product->buying_price);
        $product->save();

        return response()->json(TenantResource::make($product), 200);
    }
}
