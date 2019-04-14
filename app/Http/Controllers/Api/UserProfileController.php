<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class UserProfileController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $profile = UserProfile::query()->whereHas('user', function ($q) {
            return $q->where('user_id', auth('api')->id());
        })->with(['user', 'tenant'])->first();

        return response()->json($profile ? UserResource::make($profile) : [], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
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

        $user = new User([
            'name' => '',
            'email' => request('email'),
            'password' => bcrypt(request('password'))
        ]);

        $profile = new UserProfile([
            'first_name'    => request('first_name'),
            'last_name' => request('last_name'),
            'middle_name'   => request('middle_name', null),
            'phone_number'  => request('phone_number'),
            'is_active' => true
        ]);
        $profile->user()->associate($user);
        $profile->is_super_user = false;
        $profile->save();

        return response()->json(UserResource::make($profile), 200);
    }

    public function get($id) {

        $profile = UserProfile::query()->with(['user', 'tenant'])->where('id', $id)->get()->first();

        return response()->json($profile ? UserResource::make($profile) : [], 200);
    }

    public function filter() {
        $query = UserProfile::query()->with(['user', 'tenant']);
        if (request()->has('user'))
            $query->whereHas('user', function ($q) {
                $q->where('user_id', request()->get('user'));
            });
        if (request()->has('tenant'))
            $query->whereHas('tenant', function ($q) {
                $q->where('tenant_id', request('tenant'));
            });

        return response()->json(UserResource::collection($query->get()), 200);

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function show(UserProfile $userProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function edit(UserProfile $userProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserProfile $userProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserProfile $userProfile)
    {
        //
    }
}
