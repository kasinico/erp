<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class TenantResource extends Resource
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
            'phone'     => $this->phone,
            'email'     => $this->email,
            'address'   => $this->address,
        ];
    }
}
