<style>
    .form-group {
        margin-left: 2%;
    }

    .form-group label {
        font-weight: 900;

    }
</style>

<script src="https://cdn.ckeditor.com/4.20.1/standard-all/ckeditor.js"></script>

<form action="" method="POST" enctype="multipart/form-data">
    @method('POST')
    @csrf
    <div class="form-group row">
        <label for="" class="col-1">Code</label>
        <div class="col-1"></div>
        <div class="col-8">
            <input type="text" name="pro_code" id="" class="form-control" placeholder="Product's Code"
                aria-describedby="helpId">
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-1">Name</label>
        <div class="col-1"></div>
        <div class="col-8">
            <input type="text" name="pro_name" id="" class="form-control" placeholder="Product's name"
                aria-describedby="helpId">
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-1">Image</label>
        <div class="col-1"></div>
        <div class="col-8">
            <input type="file" name="pro_image" id="" class="form-control" placeholder=""
                aria-describedby="helpId">
        </div>
    </div>
    <div class="form-group row">
        <label for="" class="col-1">Category</label>
        <div class="col-1"></div>
        <div class="col-8">
            <select name="cate_name" id="" class="col-12 form-control">
                @foreach ($categoryList as $value)
                    <option value="{{$value->cate_name}}">{{ $value->cate_name }}</option>
                @endforeach
            </select>
        </div>

    </div>
    <div class="form-group row">
        <label for="" class="col-1">Brand</label>
        <div class="col-1"></div>
        <div class="col-8">
            <input type="text" name="pro_brand" id="" class="form-control" placeholder="Brand's name"
                aria-describedby="helpId">
        </div>
    </div>

    <div class="form-group row">
        <label for="" class="col-1">Color</label>
        <div class="col-1"></div>
        <div class="col-8">
            <input type="text" name="pro_color" id="" class="form-control" placeholder="Product's color"
                aria-describedby="helpId">
        </div>
    </div>

    <div class="form-group row">
        <label for="" class="col-1">Price</label>
        <div class="col-1"></div>
        <div class="col-8">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">VNĐ</span>
                </div>
                {{-- <input type="text" class="form-control" placeholder="US Dollar"> --}}
                <input type="number" name="pro_price" id="" class="form-control price" placeholder="Product's price"
                    aria-describedby="helpId" >

            </div>
        </div>

    </div>


    <div class="form-group row">
        <label for="" class="col-1">Amount</label>
        <div class="col-1"></div>
        <div class="col-8">
            <input type="number" name="pro_amount" id="" class="form-control" placeholder="Amount"
                aria-describedby="helpId">
        </div>
    </div>

    <div class="form-group row">
        <label for="" class="col-1">Sex</label>
        <div class="col-1"></div>
        <div class="col-8">
            <select name="pro_sex" id="" class="col-12 form-control">
                <option value="1">Male</option>
                <option value="0">Female</option>
                <option value="2">Male & Female</option>
            </select>
        </div>

    </div>

    <div class="form-group row">
        <label for="" class="col-1">Detail</label>
        <div class="col-1"></div>
        <div class="col-8">
            <textarea name="pro_detail" id="pro_detail" cols="105" rows="10"></textarea>
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
                <input type="number" name="pro_discount" id="" class="form-control"
                    placeholder="Discount" aria-describedby="helpId">

            </div>

        </div>
    </div>

    <div class="form-group row">
        <label for="" class="col-1">Gift</label>
        <div class="col-1"></div>
        <div class="col-8">
            <textarea name="pro_gift" id="pro_gift" cols="105" rows="10"></textarea>

        </div>

    </div>

    <div class="form-group row">
        <label for="" class="col-1">Save</label>
        <div class="col-1"></div>
        <div class="col-8">
            <a href=""> <button type="button"
                    class="btn btn-secondary">Cancel</button></a>
            <button type="submit" class="btn btn-secondary">Save</button>

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
