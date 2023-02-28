<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    use HasFactory;
    protected $table='products';

    public function getAllProduct(){
        $product=DB::table('products')->select('*');
        $productList=$product->get();
        return $productList;
    }
}
