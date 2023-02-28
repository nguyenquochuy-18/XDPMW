<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function home()
    {
        //
          //
            $category=new Category();
            $categoryList=$category->getAllCategory();

            $product=new Product();
            $productList=$product->getAllProduct();
            return view('admin',compact('productList','categoryList'))->with('id');


    }
    public function index()
    {
        //
        $category=new Category();
        $categoryList=$category->getAllCategory();

        $product=new Product();
        $productList=$product->getAllProduct();
        return view('admin',compact('productList','categoryList'))->with('id','product');

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $category=new Category();
        $categoryList=$category->getAllCategory();

        return view('admin', compact('categoryList'))->with('id','addproduct');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $product=new Product();
        $product->pro_code=$request->pro_code;
        $product->pro_name=$request->pro_name;
        if ($request->hasFile('pro_image'))
        {
            $file = $request->pro_image;
            $file_name=time().'.'.$file->getClientoriginalName();
            $file->move(public_path('uploads'),$file_name);
            $product->pro_image=$file_name;

        }

        $product->cate_name=$request->cate_name;
        $product->pro_brand=$request->pro_brand;
        $product->pro_color=$request->pro_color;
        $product->pro_price=$request->pro_price;
        $product->pro_amount=$request->pro_amount;
        $product->pro_sex=$request->pro_sex;
        $product->pro_detail=$request->pro_detail;
        $product->pro_discount=$request->pro_discount;
        $product->pro_gift=$request->pro_gift;

        $product->save();

        return redirect()->route('product.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
