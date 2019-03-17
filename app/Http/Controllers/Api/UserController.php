<?php
/**
 * Created by PhpStorm.
 * User: dkarimi
 * Date: 2/13/2019
 * Time: 11:48 AM
 */

namespace App\Http\Controllers\Api;

use App\Models\UserProfile;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
//use Validator;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request as GRequest;

class UserController extends Controller {

    public function login() {
        if (request('grant_type') == 'client_credentials' || Auth::attempt(['email' => request('username'), 'password' => request('password')])) {
            $client = new Client();
            try {
                $response = $client->request('POST', url('/').'/oauth/token', ['form_params' => request()->all()]);
            } catch (GuzzleException $e) {
                return response()->json(json_decode((string)$e->getResponse()->getBody()), $e->getCode());
            }
            return $response;
        } else {
            return response()->json(["detail"=>"Invalid credentials"], 400);
        }
    }

    public function register() {
        $validator = Validator::make(request()->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'phone_number' => 'required',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $user = new User();
        $user->create([
                'email' => request('email'),
                'password' => bcrypt(request('password'))
        ]);

        $profile = new UserProfile();
        $profile->user_id = $user['id'];
        $profile->first_name = $user['first_name'];
        $profile->last_name = $user['last_name'];
        $profile->phone_number = $user['phone_number'];
        $profile->is_active = true;
        $profile->is_super_user = false;
        $profile->save();

        $success['detail'] = "User registered succesfully";
        return response()->json(['success'=>$success], 200);
    }

    public function get() {
        return UserProfile::with('email')->get();
    }


}