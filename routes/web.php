<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\SpeedDialController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/speed-dial', [SpeedDialController::class, 'index'])->name('speed-dial');
    Route::get('/', [SpeedDialController::class, 'index'])->name('dashboard');
    Route::get('sites', [SiteController::class, 'index'])->name('sites.index');
    Route::put('sites/{site}', [SiteController::class, 'update'])->name('sites.update');
    Route::delete('sites/{site}', [SiteController::class, 'destroy'])->name('sites.destroy');
    Route::post('sites', [SiteController::class, 'store'])->name('sites.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
