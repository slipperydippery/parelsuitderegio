<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePearlThemeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pearl_theme', function (Blueprint $table) {
            $table->integer('pearl_id')->unsigned();
            $table->foreign('pearl_id')->references('id')->on('pearls')->onDelete('cascade');
            $table->integer('theme_id')->unsigned();
            $table->foreign('theme_id')->references('id')->on('themes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pearl_theme');
    }
}
