<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            //
            $table->increments('id');
            $table->string('pro_code');
            $table->string('pro_name');
            $table->string('cate_name');
            $table->string('pro_brand');
            $table->string('pro_color');
            $table->integer('pro_price');
            $table->integer('pro_amount');
            $table->integer('pro_sex');
            $table->longText('pro_detail');
            $table->integer('pro_discount');
            $table->longText('pro_gift');
            $table->string('pro_image');
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
        Schema::dropIfExists('products', function (Blueprint $table) {
            //
        });
    }
};
