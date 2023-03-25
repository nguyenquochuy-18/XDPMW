<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\Product as ProductResource;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     */
    public function home()
    {
        //
        //
        $product=new Product();
        $productList=$product->getAllProduct();
        $category = new Category();
        $categoryList = $category->getAllCategory();

        // $product = DB::table('product')->select('*');
        // $productList = $product->get();

        return view('/admin', compact('productList','categoryList'))->with('id','home');
    }
    public function api()
    {
        //
        //
        $products = Product::all();
        // $productList = ProductResource::collection($products);
        $productList =  ProductResource::collection($products);

        return response()->json($productList, 200);
    }


    public function index()
    {
        //
        $category = new Category();
        $categoryList = $category->getAllCategory();

        // $product = new Product();
        // $productList = $product->getAllProduct();
        // return view('admin', compact('productList', 'categoryList'))->with('id', 'product');

        $productList = Product::all();
        // $productList = [

        //     'data' => ProductResource::collection($products)
        // ];
        // return response()->json($arr, 200);
        return view('admin', compact('productList','categoryList'))->with('id', 'product');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $category = new Category();
        $categoryList = $category->getAllCategory();

        return view('admin', compact('categoryList'))->with('id', 'addproduct');
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
        // $product = new Product();
        // $product->pro_code = $request->pro_code;
        // $product->pro_name = $request->pro_name;
        // if ($request->hasFile('pro_image')) {
        //     $file = $request->pro_image;
        //     $file_name = time() . '.' . $file->getClientoriginalName();
        //     $file->move(public_path('uploads'), $file_name);
        //     $product->pro_image = $file_name;
        // }

        // $product->cate_name = $request->cate_name;
        // $product->pro_brand = $request->pro_brand;
        // $product->pro_color = $request->pro_color;
        // $product->pro_price = $request->pro_price;
        // $product->pro_amount = $request->pro_amount;
        // $product->pro_sex = $request->pro_sex;
        // $product->pro_detail = $request->pro_detail;
        // $product->pro_discount = $request->pro_discount;
        // $product->pro_gift = $request->pro_gift;

        // $product->save();

        // return redirect()->route('product.index');

        $input = $request->all();
        $validator = Validator::make($input, [
            'pro_code' => 'required', 'pro_name' => 'required'
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $product = Product::create($input);
        $arr = [
            'status' => true,
            'message' => "Sản phẩm đã lưu thành công",
            'data' => new ProductResource($product)
        ];
        // return response()->json($arr, 201);
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
        $product=Product::findOrFail($id);
        $category=new Category();
        $categoryList=$category->getAllCategory();
        return view('/admin',compact('product','categoryList'))->with('id','editproduct');
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
        $product=Product::find($id);
        $product->pro_code=$request->pro_code;
        $product->pro_name=$request->pro_name;

        if($request->hasFile('pro_image')){
            $file=$request->pro_image;
            // $delFile=$product->pro_image;
            // $delFile->exists(public_path('uploads'),$delFile->getClientoriginalName());
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
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $product=Product::find($id);
        $product->delete();

        return redirect()->route('product.index');
    }
}
