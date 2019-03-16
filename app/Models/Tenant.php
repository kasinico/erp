<?php

namespace App\Models;

use App\Http\Traits\Encryptable;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model {
    use Encryptable;

    protected $encryptable = [
        'name',
        'email',
        'phone',
    ];

    protected $fillable = [
        'name', 'email', 'phone'
    ];

}
