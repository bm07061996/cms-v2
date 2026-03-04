<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Secret extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'secrets';
    protected $fillable = ['key', 'value'];
}
