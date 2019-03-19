<?php

namespace App\Http\Controllers\Api;

use App\Models\ProductType;
use App\Models\UserProfile;
use function foo\func;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use League\Fractal\Serializer\ArraySerializer;

class ProductTypeController extends Controller
{
    protected $fractal;

    public function __construct() {
        $this->fractal = new Manager();
        $this->fractal->setSerializer(new ArraySerializer());
    }

    public function get($id) {
        $type = ProductType::query()->where('id', $id)->with(['tenant'])->first();

        $resource = new Item($type, function (ProductType $type) {
            return [
                'id'            => (int) $type->id,
                'name'          => $type->name,
                'description'   => $type->description,
                'tenant_id'     => $type->tenant_id,
                'tenant_name'   => $type->tenant->name,
            ];
        });

        return response()->json($this->fractal->createData($resource)->toArray(), 200);
    }

    public function filter() {
        $profile = UserProfile::query()->whereHas('user', function ($q) {
            return $q->where('user_id', auth('api')->id());
        })->with(['tenant'])->first();
        $query = ProductType::query()->whereHas('tenant', function ($q) use ($profile) {
            return $q->where('tenant_id', $profile->tenant->id);
        })->with(['tenant']);

        $resource = new Collection( $query->get(), function (ProductType $type) {
            return [
                'id'            => (int) $type->id,
                'name'          => $type->name,
                'description'   => $type->description,
                'tenant_id'     => $type->tenant_id,
                'tenant_name'   => $type->tenant->name,
            ];
        });

        return response()->json($this->fractal->createData($resource)->toArray(), 200);
    }

    public function create() {

    }

    public function update() {

    }

}
