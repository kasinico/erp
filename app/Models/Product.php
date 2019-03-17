<?php

namespace App\Models;

use App\Http\Traits\Encryptable;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use Encryptable;

    protected $encryptable = ['name', 'description', 'size', 'starting_inventory', 'inventory_at_hand', 'minimum_required', 'sale_price', 'tenant_id' ];

    protected $fillable = ['name', 'description', 'size', 'starting_inventory', 'inventory_at_hand', 'minimum_required', 'sale_price', 'tenant_id', 'buying_price'];

    public function tenant() {
        return $this->belongsTo('App\Models\Tenant', 'tenant_id', 'id');
    }
}
