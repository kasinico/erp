<?php

namespace App\Models;

use App\Http\Traits\Encryptable;
use Illuminate\Database\Eloquent\Model;

class ProductType extends Model
{
    use Encryptable;

    protected $encryptable = ['name', 'description'];

    protected $fillable = ['name', 'description', 'tenant_id'];

    public function tenant() {
        return $this->belongsTo('App\Models\Tenant', 'tenant_id', 'id');
    }
}
