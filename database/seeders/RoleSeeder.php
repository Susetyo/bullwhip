<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert(['name' => 'administrator']);
        DB::table('roles')->insert(['name' => 'gudang']);
        DB::table('roles')->insert(['name' => 'manajer']);
        DB::table('roles')->insert(['name' => 'pesanan']);
        DB::table('roles')->insert(['name' => 'produksi']);
    }
}
