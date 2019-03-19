<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ProductResource extends Resource
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
            'size'          => $this->size,
            'starting_inventory'    =>$this->starting_inventory,
            'inventory_at_hand'     => $this->inventory_at_hand,
            'minimum_required'      => $this->minimum_required,
            'buying_price'          => $this->buying_price,
            'sale_price'            => $this->sale_price,
            'tenant_id'             => $this->tenant_id,
            'tenant_name'           => $this->tenant ? $this->tenant->name : null
        ];
    }
}
