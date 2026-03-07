<?php

namespace App\Http\Controllers;

use App\Models\Secret;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;

class LogController extends Controller
{
    private function validateSecret(Request $request): bool
    {
        $secret = Secret::where('key', 'secret_key')->first();
        return $secret && $request->query('secret_key') === $secret->value;
    }

    public function show(Request $request)
    {
        if (!$this->validateSecret($request)) abort(403, 'Invalid secret key.');


        $logFile = storage_path('logs/laravel-' . now()->format('Y-m-d') . '.log');

        if (!file_exists($logFile)) {
            return response('No log file for today.', 404);
        }

        return response(file_get_contents($logFile), 200)
            ->header('Content-Type', 'text/plain');
    }

    public function clearCache(Request $request)
    {
        if (!$this->validateSecret($request)) abort(403, 'Invalid secret key.');

        Artisan::call('cache:clear');
        Artisan::call('config:clear');
        Artisan::call('route:clear');
        Artisan::call('view:clear');

        Log::info('Cache cleared via LogController.');

        return response()->json(['message' => 'Cache cleared successfully.']);
    }
}
