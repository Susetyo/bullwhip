<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\RolesController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [AuthenticatedSessionController::class, 'create'])
                ->middleware('guest')
                ->name('login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth','verified'])->group(function(){
    Route::get('/roles',[RolesController::class,'index'])->name('roles');
    Route::get('/role',[RolesController::class,'create']);
    Route::post('/role',[RolesController::class,'store']);
    Route::get('/role/{id}',[RolesController::class,'edit']);
    Route::put('/role/{id}',[RolesController::class,'update']);
    Route::delete('/role/{id}',[RolesController::class,'destroy']);
});

require __DIR__.'/auth.php';
