<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    use HasFactory;
    protected $table='products';
    protected $fillable = ['pro_code', 'pro_name', 'cate_name', 'pro_brand', 'pro_color', 'pro_price', 'pro_amount', 'pro_sex', 'pro_detail', 'pro_discount', 'pro_gift', 'pro_image'];
    public function getAllProduct(){
        $product=DB::table('products')->select('*');
        $productList=$product->get();
        return $productList;
    }
}
