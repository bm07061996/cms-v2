<?php

namespace App\Http\Controllers;

use App\Models\Secret;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SecretController extends Controller
{
    public function index()
    {
        return Inertia::render('Secrets/Index', [
            'user'    => auth()->user(),
            'secrets' => Secret::paginate(10, ['_id', 'key', 'value']),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'key'   => 'required|string|max:100',
            'value' => 'required|string',
        ]);

        Secret::updateOrCreate(['key' => $validated['key']], ['value' => $validated['value']]);

        return back()->with('success', 'Secret saved.');
    }

    public function destroy(Secret $secret)
    {
        $secret->delete();
        return back()->with('success', 'Secret deleted.');
    }
}
