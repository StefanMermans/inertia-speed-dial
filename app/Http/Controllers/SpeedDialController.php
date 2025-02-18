<?php

namespace App\Http\Controllers;

use App\Models\Site;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SpeedDialController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request): Response
    {
        return Inertia::render('SpeedDial', [
            'sites' => Site::all(),
            'editing' => $request->boolean('editing'),
            'site' => $request->whenFilled(
                'site',
                static fn () => Site::findOrFail($request->site),
                static fn () => null,
            ),
            'creating' => $request->boolean('creating'),
        ]);
    }
}
