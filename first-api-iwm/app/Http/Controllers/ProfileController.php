<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfileRequest;
use App\Http\Requests\UpdateProfileRequest;
use App\Models\Profile;
use App\Models\Framework;
use App\Models\Hobby;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{

    public function profile(){

        $profile = Profile::first();
        $framework = Framework::all()->where('profile_id', $profile->id);
        $hobby = Hobby::all()->where('profile_id', $profile->id);
        return response()->json([
            'profile' => $profile,
            'framework' => $framework,
            'hobby' => $hobby
        ], 200);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProfileRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Profile $profile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Profile $profile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Profile $profile)
    {
        try {
            DB::beginTransaction();
            $fields=$request->validate([
                'name'=> 'nullable',
                'lastname'=>'nullable',
                'email'=>'nullable | email',
                'country'=>'nullable',
                'city'=>'nullable',
                'summary'=>'nullable',
                'level' => 'nullable',
                'year' => 'nullable',
                'description' => 'nullable',
                'type' => 'required',
                'id' => 'nullable'
            ]);
            if ($fields['type'] == 'profile') {
                $profile = Profile::first();
                $profile->name = $fields['name']??$profile->name;
                $profile->lastname = $fields['lastname']??$profile->lastname;
                $profile->email = $fields['email']??$profile->email;
                $profile->country = $fields['country']??$profile->country;
                $profile->city = $fields['city']??$profile->city;
                $profile->summary = $fields['summary']??$profile->summary;
                $profile->save();
            } else if ($fields['type'] == 'framework') {
                $framework = Framework::find($fields['id']);
                $framework->name = $fields['name'] ?? $framework->name;
                $framework->level = $fields['level'] ?? $framework->level;
                $framework->year = $fields['year'] ?? $framework->year;
                $framework->save();
            } else if ($fields['type'] == 'hobby') {
                $hobby = Hobby::find($fields['id']);
                $hobby->name = $fields['name'] ?? $hobby->name;
                $hobby->description = $fields['description'] ?? $hobby->description;
                $hobby->save();
            }
            DB::commit();
        } catch (\Exception $exception) {
            throw new \Exception($exception->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profile $profile)
    {
        //
    }
}
