<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ProductTypeResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'        => (int) $this->id,
            'name'      => $this->name,
            'description'   => $this->description,
            'tenant_id'     => $this->tenant_id,
            'tenant_name'   => $this->tenant->name,
        ];
    }
}
