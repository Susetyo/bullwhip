<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;

class ItemsController extends Controller
{
    public function index(){
        $items = Item::all();
        return Inertia::render('Item/List', ['items'=> $items]);
    }

    public function create(){
        return Inertia::render('Item/Add');
    }

    public function store(Request $request){
        $request->validate(['name'=>'required']);
        $item = Item::create(['name'=>$request->name]);
        return redirect('/items');
    }

    public function edit($id){
        $item_by_id=Item::find($id);
        return Inertia::render('Item/Edit',['item'=>$item_by_id]);
    }

    public function update(Request $request, $id){
        $request->validate(['name'=>'required']);
        $item=Item::find($id);
        $item->name=$request->name;
        $item->save();
        return redirect('/items');    
    }

    public function destroy($id){
        $item=Item::find($id);
        $item->delete();
        return redirect('/items');
    }
}
