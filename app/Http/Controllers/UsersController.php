<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;


class UsersController extends Controller
{
    public function index(){
        $users = User::select('users.*','roles.name as roles_name')->join('roles','roles.id','=','users.role_id')->get();
        return Inertia::render('User/List', ['users'=>$users]);
    }

    public function create(){
        $roles = Role::all();
        return Inertia::render('User/Add',['roles'=>$roles]);
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'address' => 'required',
            'phone_number' => 'required',
            'role_id' => 'required'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'role_id' => (int)$request->role_id
        ]);

        return redirect('/users');
    }


    public function destroy($id){
        $user=User::find($id);
        $user->delete();
        return redirect('/users');
    }
}
