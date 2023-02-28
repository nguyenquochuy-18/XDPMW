<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Category extends Model
{
    use HasFactory;
    protected $table='category';

    public function getAllCategory(){
        $category=DB::table('category')->select('*');
        $categoryList=$category->get();
        return $categoryList;
    }
}
