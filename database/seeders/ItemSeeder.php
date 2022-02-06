<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert(['name' => 'advice debet']);
        DB::table('items')->insert(['name' => 'amplop cokelat besar (E)']);
        DB::table('items')->insert(['name' => 'amplop coklat folio (D)']);
        DB::table('items')->insert(['name' => 'amplop coklat kecil (A)']);
        DB::table('items')->insert(['name' => 'amplop coklat sedang (C)']);
    }
}
