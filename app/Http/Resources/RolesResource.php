<?php


namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\Resource;

class RolesResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request) {
        return [
            'id'    => (int) $this->id,
            'name'  => $this->name,
            'description'   => $this->description
        ];
    }
}