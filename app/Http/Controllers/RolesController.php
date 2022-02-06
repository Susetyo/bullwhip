<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use Inertia\Inertia;

class RolesController extends Controller
{
    public function index(){
        $roles = Role::all();
        return Inertia::render('Role/List', ['roles'=>$roles]);
    }

    public function create(){
        return Inertia::render('Role/Add');
    }

    public function store(Request $request){
        $request->validate(['name'=>'required']);
        $role = Role::create([
            'name'=>$request->name
        ]);
        return redirect('/roles');
    }

    public function edit($id){
        $role_by_id=Role::find($id);
        return Inertia::render('Role/Edit',['role_by_id'=>$role_by_id]);
    }

    public function update(Request $request, $id){
        $role_by_id=Role::find($id);
        $role_by_id->name=$request->name;
        $role_by_id.save();
        return redirect('/roles');    
    }

    public function destroy($id){
        $role_by_id=Role::find($id);
    }
}
