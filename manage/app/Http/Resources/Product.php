<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;


class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // $product = new Product();
        // if ($request->hasFile('pro_image')) {
        //     $file = $request->pro_image;
        //     $file_name = time() . '.' . $file->getClientoriginalName();
        //     $file->move(public_path('uploads'), $file_name);
        //     $product->pro_image = $file_name;
        // }
        return [
            'id' => $this->id,
            'pro_code' => $this->pro_code,
            'pro_name' => $this->pro_name,
            'cate_name'=>$this->cate_name,
            'pro_brand'=>$this->pro_brand,
            'pro_color'=>$this->pro_color,
            'pro_price'=>$this->pro_price,
            'pro_amount'=>$this->pro_amount,
            'pro_sex'=>$this->pro_sex,
            'pro_detail'=>$this->pro_detail,
            'pro_discount'=>$this->pro_discount,
            'pro_gift'=>$this->pro_gift,
            'pro_image'=>$this->pro_image,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y'),
          ];
    }
}
