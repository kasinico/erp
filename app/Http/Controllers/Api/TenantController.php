<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\TenantResource;
use App\Models\Tenant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TenantController extends Controller
{

    public function get($id) {
        $tenant = Tenant::query()->where('id', $id)->first();

        return response()->json($tenant ? TenantResource::make($tenant) : [], 200);
    }

    public function filter() {
        $query = Tenant::query();

        return response()->json(TenantResource::make($query->get()), 200);
    }

    public function create() {
        $tenant = new Tenant();
        $tenant->create([
            'name'  => request('name'),
            'email' => request('email'),
            'address'   => request('address'),
            'phone'     => request('phone')
        ]);

        return response()->json(TenantResource::make($tenant), 200);
    }

    public function update($id) {
        $tenant = Tenant::query()->where('id', $id)->first();
        $tenant->name = request('name', $tenant->name);
        $tenant->email = request('email', $tenant->email);
        $tenant->phone = request('phone', $tenant->phone);
        $tenant->address = request('address', $tenant->address);
        $tenant->save();

        return response()->json(TenantResource::make($tenant), 200);
    }
}
