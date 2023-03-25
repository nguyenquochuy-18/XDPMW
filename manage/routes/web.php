<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::get('/', function () {
    return view('./auth/login');
});
// Route::get('/', [ProductController::class, 'home'])->name('admin.home');
// Route::get('/admin', function () {
//     return view('admin');
// })->middleware(['auth', 'verified'])->name('admin');

Route::middleware('auth')->group(function () {
    Route::get('/admin/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/admin/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/admin/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Products
    Route::get('/admin/api/products', [ProductController::class, 'api'])->name('api.product');
    Route::get('/admin', [ProductController::class, 'home'])->name('admin.index');
    Route::get('/admin/product', [ProductController::class, 'index'])->name('product.index');
    Route::get('/admin/addproduct', [ProductController::class, 'create'])->name('product.create');
    Route::post('/admin/addproduct', [ProductController::class, 'store'])->name('product.store');
    Route::get('/admin/editproduct/{id}', [ProductController::class, 'edit'])->name('product.edit');
    Route::patch('/admin/updateproduct/{id}', [ProductController::class, 'update'])->name('product.update');
    Route::delete('/admin/delproduct/{id}', [ProductController::class, 'destroy'])->name('product.destroy');

       //Categorys
    Route::get('/admin/category', [CategoryController::class, 'index'])->name('category.index');
    Route::get('/admin/api/category', [CategoryController::class, 'api'])->name('category.api');
    // Route::get('/admin/category', [CategoryController::class, 'create'])->name('category.create');
    Route::post('/admin/category', [CategoryController::class, 'store'])->name('category.store');
    Route::delete('/admin/category/{id}', [CategoryController::class, 'destroy'])->name('category.destroy');

	 Route::get('/admin/user', [UserController::class, 'index'])->name('user.index');
    Route::get('/admin/api/user', [UserController::class, 'api'])->name('user.api');
    // Route::get('/admin/category', [CategoryController::class, 'create'])->name('category.create');
    Route::post('/admin/users', [UserController::class, 'store'])->name('user.store');
    Route::delete('/admin/user/{id}', [UserController::class, 'destroy'])->name('user.destroy');

});
Route::group(['prefix' => 'api', 'as' => 'api.', 'middleware' => ['cors', 'validate_api_token']], function () {
    Route::post('api/checkLogin', 'ApiController@getLoginStatus')->name('check_login_status');
});


require __DIR__.'/auth.php';


