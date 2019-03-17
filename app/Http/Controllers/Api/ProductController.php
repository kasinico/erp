<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Models\Tenant;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use League\Fractal\Serializer\ArraySerializer;

class ProductController extends Controller
{
    private $fractal;

    public function __construct() {
        $this->fractal = new Manager();
        $this->fractal->setSerializer(new ArraySerializer());
    }

    public function get($id) {
        $product = Product::query()->where('id', $id)->with(['tenant'])->first();

        $resource = $product ? new Item($product, function (Product $product) {
            return [
                'id'            => (int) $product->id,
                'name'          => $product->name,
                'description'   => $product->description,
                'size'          => $product->size,
                'starting_inventory'    => $product->starting_inventory,
                'inventory_at_hand'     => $product->inventory_at_hand,
                'minimum_required'      => $product->minimum_required,
                'buying_price'          => $product->buying_price,
                'sale_price'            => $product->sale_price,
                'tenant_id'             => $product->tenant_id,
                'tenant_name'           => $product->tenant->name
            ];
        }) : [];

        return response()->json($this->fractal->createData($resource)->toArray(), 200);
    }

    public function filter () {
        $profile = UserProfile::query()->whereHas('user', function ($q) {
            return $q->where('user_id', auth('api')->id());
        })->with(['tenant'])->first();
        $query = Product::query()->whereHas('tenant', function ($q) use ($profile) {
            return $q->where('tenant_id', $profile->tenant->id);
        });
        $resource = new Collection($query->get(), function (Product $product) {
            return [
                'id'        => (int) $product->id,
                'name'          => $product->name,
                'description'   => $product->description,
                'size'          => $product->size,
                'starting_inventory'    => $product->starting_inventory,
                'inventory_at_hand'     => $product->inventory_at_hand,
                'minimum_required'      => $product->minimum_required,
                'buying_price'          => $product->buying_price,
                'sale_price'            => $product->sale_price,
                'tenant_id'             => $product->tenant_id,
                'tenant_name'           => $product->tenant->name
            ];
        });

        return response()->json($this->fractal->createData($resource)->toArray(), 200);
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

        return response()->json(['detail'=>request('name') .' saved successfully']);
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

        return response()->json(['detail'=>$product->name .' saved successfully'], 200);
    }
}
