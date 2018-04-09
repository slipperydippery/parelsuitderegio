<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinkPearlTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('link_pearl', function (Blueprint $table) {
            $table->integer('link_id')->unsigned();
            $table->integer('pearl_id')->unsigned();

            $table->foreign('pearl_id')->references('id')->on('pearls');
            $table->foreign('link_id')->references('id')->on('pearls');

            $table->primary(array('pearl_id', 'link_id'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('link_pearl');
    }
}
