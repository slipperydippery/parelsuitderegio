<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePdfPearlTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pdf_pearl', function (Blueprint $table) {
            $table->integer('pearl_id')->unsigned();
            $table->integer('pdf_id')->unsigned();
            $table->foreign('pearl_id')->references('id')->on('pearls')->onDelete('cascade');
            $table->foreign('pdf_id')->references('id')->on('pdfs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pdf_pearl');
    }
}
