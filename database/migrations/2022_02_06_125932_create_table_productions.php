<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableProductions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('qty');
            $table->bigInteger('lead_time');
            $table->foreignId('pickup_id')
            ->constrained('pickups')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->foreignId('item_id')
            ->constrained('items')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('production');
    }
}
