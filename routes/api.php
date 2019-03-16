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

Route::post('/user/login', 'Api\UserProfileController@login')->middleware('auth:api');
Route::post('/user/register', 'Api\UserProfileController@register');
Route::get('/user/{id}', 'Api\UserProfileController@get');
Route::get('/user', 'Api\UserProfileController@filter');
