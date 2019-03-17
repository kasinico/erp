<?php

namespace App\Http\Controllers\Api;

use App\Models\Tenant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use League\Fractal\Serializer\ArraySerializer;

class TenantController extends Controller
{
    private $fractal;

    public function __construct() {
        $this->fractal = new Manager();
        $this->fractal->setSerializer(new ArraySerializer());
    }

    public function get($id) {
        $tenant = Tenant::query()->where('id', $id)->first();

        $resource = $tenant ? new Item($tenant, function (Tenant $tenant) {
            return [
                'id'        => (int) $tenant->id,
                'name'      => $tenant->name,
                'phone'     => $tenant->phone,
                'email'     => $tenant->email,
                'address'   => $tenant->address
            ];
        }) : [];

        return response()->json($this->fractal->createData($resource)->toArray(), 200);
    }

    public function filter() {
        $query = Tenant::query();
        $expected_keys = ['id', 'name', 'phone', 'email', 'address'];

        $resource = new Collection($query->get(), function (Tenant $tenant) {
            return [
                'id'        => (int) $tenant->id,
                'name'      => $tenant->name,
                'phone'     => $tenant->phone,
                'email'     => $tenant->email,
                'address'   => $tenant->address
            ];
        });

        return response()->json($this->fractal->createData($resource)->toArray(), 200);
    }

    public function create() {
        $tenant = new Tenant();
        $tenant->create([
            'name'  => request('name'),
            'email' => request('email'),
            'address'   => request('address'),
            'phone'     => request('phone')
        ]);

        return response()->json(['detail'=>request('name') .' saved successfully.'], 200);
    }

    public function update($id) {
        $tenant = Tenant::query()->where('id', $id)->first();
        $tenant->name = request('name', $tenant->name);
        $tenant->email = request('email', $tenant->email);
        $tenant->phone = request('phone', $tenant->phone);
        $tenant->address = request('address', $tenant->address);
        $tenant->save();

        return response()->json(['detail'=>$tenant->name .' saved successfully.'], 200);
    }
}
