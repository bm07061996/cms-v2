<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::all()->pluck('value', 'key');
        return Inertia::render('Settings', [
            'user'     => auth()->user(),
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'app_name'    => 'required|string|max:100',
            'app_timezone'=> 'required|string',
            'log_level'   => 'required|in:debug,info,warning,error',
            'maintenance' => 'required|boolean',
        ]);

        foreach ($validated as $key => $value) {
            Setting::updateOrCreate(['key' => $key], ['value' => $value]);
        }

        return back()->with('success', 'Settings saved.');
    }
}
