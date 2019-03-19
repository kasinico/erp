<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('register', 'Api\UserProfileController@register');
Route::post('login', 'Api\UserController@login');
Route::middleware(['auth:api'])->group(function () {

    Route::get('self', 'Api\UserProfileController@index');

    /* User End-Points */
    Route::get('/user',         'Api\UserProfileController@filter');
    Route::get('/user/{id}',    'Api\UserProfileController@get');

    /* Tenants */
    Route::get('tenant',        'Api\TenantController@filter');
    Route::get('tenant/{id}',   'Api\TenantController@get');
    Route::post('tenant',       'Api\TenantController@create');
    Route::post('tenant/{id}',  'Api\TenantController@update');

    /* Product Types */
    Route::get('product_type',          'Api\ProductTypeController@filter');
    Route::get('product_type/{id}',     'Api\ProductTypeController@get');
    Route::post('product_type',         'Api\ProductTypeController@create');
    Route::post('product_type/{id}',    'Api\ProductTypeController@update');

    /* Products */
    Route::get('product',       'Api\ProductController@filter');
    Route::get('product/{id}',  'Api\ProductController@get');
    Route::post('product',      'Api\ProductController@create');
    Route::post('product/{id}', 'Api\ProductController@update');
});
