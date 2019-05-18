<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RolesResource;
use App\Models\Roles;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    public function get($id) {
        $role = Roles::query()->where('id', $id)->first();

        if ($role) return response()->json(RolesResource::make($role), 200);

        return response()->json(['message' => 'Role '.$id.' not found'], 400);
    }

    public function filter()
    {
        $roles = Roles::query()->get();
        return response()->json(RolesResource::collection($roles), 200);
    }

    public function create()
    {
        $role = new Roles();
        $role->name = request('name');
        $role->description = request('description');
        $role->save();

        return response()->json(RolesResource::make($role), 200);
    }

    public function update($id)
    {
        $role = Roles::query()->where('id', $id)->first();

        if ($role) return response()->json(['message' => 'Role '.$id.' not found'], 400);

        $role->name = request('name', $role->name);
    }
}
