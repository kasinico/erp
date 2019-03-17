<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use League\Fractal;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Collection;
use League\Fractal\Serializer\ArraySerializer;

class UserProfileController extends Controller {

    private $fractal;

    public function __construct() {
        $this->fractal = new Manager();
        $this->fractal->setSerializer(new ArraySerializer());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
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

        $user = User::create([
            'name' => '',
            'email' => request('email'),
            'password' => bcrypt(request('password'))
        ]);

        $profile = UserProfile::create([
            'first_name'    => request('first_name'),
            'last_name' => request('last_name'),
            'middle_name'   => request('middle_name', null),
            'phone_number'  => request('phone_number'),
            'is_active' => true
        ]);
        $profile->user()->associate($user);
        $profile->is_super_user = false;
        $profile->save();

        $success['detail'] = "User registered succesfully";
        return response()->json(['success'=>$success], 200);
    }

    public function get($id) {

        $profile = UserProfile::query()->with(['user'])->where('id', $id)->get()->first();

        $resource = $profile ? new Item($profile, function(UserProfile $profile) {
            return [
                'id'      => (int) $profile->id,
                'first_name'    => $profile->first_name,
                'middle_name'   => $profile->middle_name,
                'last_name'     => $profile->last_name,
                'email'         => $profile->user->email,
                'is_active'     => $profile->is_active == 1,
                'is_super_user'     => $profile->is_super_user == 1,
            ];
        }) : [];

        return response()->json($this->fractal->createData($resource)->toArray(), 200);

    }

    public function filter() {
        $query = UserProfile::query()->with(['user']);
        if (request()->has('user'))
            $query->whereHas('user', function ($q) {
                $q->where('user.id', request()->get('user'));
            });

        $resource = new Collection($query->get(), function (UserProfile $profile) {
            return [
                'id'      => (int) $profile->id,
                'first_name'    => $profile->first_name,
                'middle_name'   => $profile->middle_name,
                'last_name'     => $profile->last_name,
                'email'         => $profile->user->email,
                'is_active'     => $profile->is_active == 1,
                'is_super_user'     => $profile->is_super_user == 1,
            ];
        });

        return response()->json($this->fractal->createData($resource)->toArray(), 200);

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
