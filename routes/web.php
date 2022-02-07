<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\UsersController;
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

Route::get('/', [AuthenticatedSessionController::class, 'create'])
                ->middleware('guest')
                ->name('login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth','verified'])->group(function(){    
    Route::get('/roles',[RolesController::class,'index'])->name('roles');
    Route::get('/role',[RolesController::class,'create'])->name('roles.create');
    Route::post('/role',[RolesController::class,'store'])->name('roles.store');
    Route::get('/role/{id}',[RolesController::class,'edit'])->name('roles.edit');
    Route::put('/role/{id}',[RolesController::class,'update'])->name('roles.update');
    Route::delete('/role/{id}',[RolesController::class,'destroy'])->name('roles.destroy');

    Route::get('/items',[ItemsController::class,'index'])->name('items');
    Route::get('/item',[ItemsController::class,'create'])->name('items.create');
    Route::post('/item',[ItemsController::class,'store'])->name('items.store');
    Route::get('/item/{id}',[ItemsController::class,'edit'])->name('items.edit');
    Route::put('/item/{id}',[ItemsController::class,'update'])->name('items.update');
    Route::delete('/item/{id}',[ItemsController::class,'destroy'])->name('items.destroy');

    Route::get('/users',[UsersController::class,'index'])->name('users');
    Route::get('/user',[UsersController::class,'create'])->name('users.create');
    Route::post('/user',[UsersController::class,'store'])->name('users.store');
    Route::delete('/users/{id}',[UsersController::class,'destroy'])->name('users.destroy');
});

require __DIR__.'/auth.php';
