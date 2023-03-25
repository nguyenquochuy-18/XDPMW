<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;


class User extends JsonResource
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
            'name'=>$this->name,
            'email'=>$this->email,
            'email_verified_at'=>$this->email_verified_at,
            'password'=>$this->password,

            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y'),
          ];
    }
}
