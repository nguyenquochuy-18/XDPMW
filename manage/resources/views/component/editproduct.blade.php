<style>
    .form-group{
        margin-left:2%;
    }

    .form-group label{
        font-weight: 900;

    }
</style>



<script src="https://cdn.ckeditor.com/4.20.1/standard-all/ckeditor.js"></script>

<form action="/admin/updateproduct-m/{{$product->id}}" method="POST" enctype="multipart/form-data">
    @method('PATCH')
    @csrf
    <div class="form-group row">
      <label for="" class="col-1">Name</label>
      <div class="col-1"></div>
        <div class="col-8">
            <input  type="text" name="pro_name" id="" class="form-control" placeholder="" aria-describedby="helpId" value="{{$product->pro_name}}">
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-1">Image</label>
        <div class="col-1"></div>
          <div class="col-8">
              <input  type="file" name="pro_image" id="" class="form-control" placeholder="{{$product->pro_image}}" aria-describedby="helpId" value="{{$product->pro_image}}">
          </div>
      </div>
    <div class="form-group row">
      <label for="" class="col-1">Category</label>
      <div class="col-1"></div>
        <div class="col-8">
            <select name="category" id="" class="col-12 form-control" >
                @foreach($categoryList as $value)
                @if ($value->cate_name==$product->category)
                    <option value="{{$value->cate_name}}" selected>{{$value->cate_name}}</option>
                @else
                    <option value="{{$value->cate_name}}">{{$value->cate_name}}</option>
                @endif

                @endforeach
            </select>
        </div>

    </div>
    <div class="form-group row">
        <label for="" class="col-1">Brand</label>
        <div class="col-1"></div>
          <div class="col-8">
              <input  type="text" name="pro_brand" id="" class="form-control" placeholder="" aria-describedby="helpId"  value="{{$product->pro_brand}}">
          </div>
      </div>

      <div class="form-group row">
        <label for="" class="col-1">Color</label>
        <div class="col-1"></div>
          <div class="col-8">
              <input  type="text" name="pro_color" id="" class="form-control" placeholder="" aria-describedby="helpId"  value="{{$product->pro_color}}">
          </div>
      </div>

    <div class="form-group row">
        <label for="" class="col-1">Price</label>
        <div class="col-1"></div>
        <div class="col-8">
            <input  type="text" name="pro_price" id="" class="form-control" placeholder="" aria-describedby="helpId"  value="{{$product->pro_price}}">
        </div>
    </div>

    <div class="form-group row">
        <label for="" class="col-1">Amount</label>
        <div class="col-1"></div>
        <div class="col-8">
            <input  type="text" name="pro_amount" id="" class="form-control" placeholder="" aria-describedby="helpId"  value="{{$product->pro_amount}}">
        </div>
    </div>

    <div class="form-group row">
        <label for="" class="col-1">Active</label>
        <div class="col-1"></div>
          <div class="col-8">
              <select name="pro_active" id="" class="col-12 form-control" >

                @if ($product->pro_active==0)
                    <option value="0" selected>Female</option>
                @else
                    <option value="0" >Female</option>
                @endif
                @if ($product->pro_active==1)
                    <option value="1" selected>Male</option>
                @else
                    <option value="1" >Male</option>
                @endif
                @if ($product->pro_active==2)
                    <option value="2" selected>Male & Female</option>
                @else
                    <option value="2" >Male & Female</option>
                @endif

              </select>
          </div>

      </div>

    <div class="form-group row">
        <label for="" class="col-1">Detail</label>
        <div class="col-1"></div>
        <div class="col-8">
            <textarea name="pro_detail" id="pro_detail" cols="105" rows="10" >{{$product->pro_detail}}</textarea>
            {{-- <input  type="text" name="pro_active" id="" class="form-control" placeholder="" aria-describedby="helpId"> --}}
        </div>

    </div>


    <div class="form-group row">
        <label for="" class="col-1">Discount</label>
        <div class="col-1"></div>
        <div class="col-8">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">%</span>
                </div>
                {{-- <input type="text" class="form-control" placeholder="US Dollar"> --}}
                <input type="number" name="pro_discount" id="" class="form-control" placeholder="Discount"
            aria-describedby="helpId" value="{{$product->pro_discount}}">

            </div>

        </div>
    </div>

    <div class="form-group row">
        <label for="" class="col-1">Gift</label>
        <div class="col-1"></div>
        <div class="col-8">
            <textarea name="pro_gift" id="pro_gift" cols="105" rows="10">{{$product->gift}}</textarea>

        </div>

    </div>

    <div class="form-group row">
        <label for="" class="col-1">Save</label>
        <div class="col-1"></div>
        <div class="col-8">
            <a href="{{route('get.productM')}}"> <button type="button" class="btn btn-secondary">Cancel</button></a>
            <button type="submit" class="btn btn-success">Submit</button>
        </div>

    </div>
</form>

<script>
    CKEDITOR.replace('pro_detail', {
      uiColor: '#CCEAEE',
      removeButtons: 'PasteFromWord'
    });
    CKEDITOR.replace('pro_gift', {
      uiColor: '#CCEAEE',
      removeButtons: 'PasteFromWord'
    });
  </script>
