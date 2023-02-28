<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

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
//     return view('welcome');
// });
Route::get('/', [ProductController::class, 'home'])->name('admin.home');
// Route::get('/admin', function () {
//     return view('admin');
// })->middleware(['auth', 'verified'])->name('admin');

Route::middleware('auth')->group(function () {
    Route::get('/admin/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/admin/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/admin/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Products

    Route::get('/admin', [ProductController::class, 'home'])->name('admin.home');
    Route::get('/admin/product', [ProductController::class, 'index'])->name('product.index');
    Route::get('/admin/addproduct', [ProductController::class, 'create'])->name('product.create');
    Route::post('/admin/addproduct', [ProductController::class, 'store'])->name('product.store');

    //Categorys
    Route::get('/admin/category', [CategoryController::class, 'index'])->name('category.index');
    // Route::get('/admin/category', [CategoryController::class, 'create'])->name('category.create');
    Route::post('/admin/category', [CategoryController::class, 'store'])->name('category.store');
    Route::delete('/admin/category/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');

});


require __DIR__.'/auth.php';
