<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use MongoDB\Laravel\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $connection = 'mongodb';

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'permissions',
        'reset_token',
        'reset_token_expires',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'reset_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'permissions' => 'array',
        ];
    }

    public function isAdmin()
    {
        return $this->role === 'admin';
    }

    public function hasPermission($permission)
    {
        return $this->isAdmin() || in_array($permission, $this->permissions ?? []);
    }

    public function getRouteKeyName()
    {
        return '_id';
    }
}
