<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Balamurugan M',
            'email' => 'mr.balamurugan.murugan@gmail.com',
            'password' => Hash::make('Nalmathiyazh@2025'),
            'role' => 'admin',
            'permissions' => [],
        ]);

        User::create([
            'name' => 'Perumal K',
            'email' => 'prcperumal@gmail.com',
            'password' => Hash::make('prcperumal@2026'),
            'role' => 'admin',
            'permissions' => [],
        ]);

        User::create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('password'),
            'role' => 'user',
            'permissions' => ['users', 'settings'],
        ]);
    }
}
