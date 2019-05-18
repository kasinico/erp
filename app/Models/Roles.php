<?php

namespace App\Models;

use App\Http\Traits\Encryptable;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    use Encryptable;

    protected $encryptable = ['name', 'description'];
}
