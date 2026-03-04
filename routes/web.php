<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\SecretController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/logs/view', [LogController::class, 'show']);
Route::get('/cache/clear', [LogController::class, 'clearCache']);

Route::get('/', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
    
    Route::middleware('permission:users')->group(function () {
        Route::resource('users', UserController::class);
    });

    Route::middleware('permission:settings')->group(function () {
        Route::get('/settings', [SettingController::class, 'index']);
        Route::post('/settings', [SettingController::class, 'update']);
        Route::get('/secrets', [SecretController::class, 'index']);
        Route::post('/secrets', [SecretController::class, 'store']);
        Route::delete('/secrets/{secret}', [SecretController::class, 'destroy']);
    });
});
