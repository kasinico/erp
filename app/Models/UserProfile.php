<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Traits\Encryptable;

class UserProfile extends Model {
    use Encryptable;

    protected $encryptable = [
        'first_name',
        'middle_name',
        'last_name',
        'phone_number',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name','middle_name', 'last_name', 'phone_number', 'is_active',
    ];

    public function user() {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }

    public function tenant() {
        return $this->belongsTo('App\Models\Tenant', 'tenant_id', 'id');
    }

}
