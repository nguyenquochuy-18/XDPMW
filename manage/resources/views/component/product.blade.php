<style>
    .action {
        width: 190px;
    }


</style>

<script>

</script>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <a name="" id="" class="btn btn-primary" href="{{route('product.create')}}" role="button">ADD</a>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Active</th>

                            <th>Discount</th>

                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody id="result">
                        {{-- <script type="text/javascript">
                            $(function(){
                                $.get("http://localhost:8000/admin/api/products", function(data){
                                    result=JSON.parse(data)
                                    for(i=0;i<result.length;i++){
                                        $('#result').append(
                                            <tr>
                                                <td>${result[i].id}</td>
                                                <td>${result[i].pro_name}</td>
                                                <td>${result[i].pro_image}</td>
                                                <td>${result[i].cate_name}</td>
                                                <td>${result[i].pro_brand}</td>
                                                <td>${result[i].pro_color}</td>
                                                <td>${result[i].pro_price}</td>
                                                <td>${result[i].pro_amount}</td>
                                                <td>${result[i].pro_sex}</td>

                                                <td>${result[i]pro_discount}</td>

                                                <td>
                                                    <div class="form-group row ">
                                                        <form action="/admin/editproduct-m/${result[i].id}" method="POST" class=" col-6 action">
                                                            @method('GET')
                                                            @csrf
                                                            <button type="submit" class="btn btn-success "><i class="bi bi-pencil-square">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                                </svg>
                                                            Edit</i> </button>
                                                        </form>
                                                        <form action="/admin/delproduct-m/${result[i].id}" method="POST" class=" col-6 ">
                                                            @method('DELETE')
                                                            @csrf
                                                            <button type="submit" class="btn btn-danger ">
                                                                <i class="bi bi-trash3-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                                                </svg> Del</i></button>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }
                                },

                                );
                            })
                        </script> --}}

                        @if (!empty($productList))

                        @foreach($productList as $key=>$value)
                        <tr>
                            <td>{{$value->id}}</td>
                            <td>{{$value->pro_name}}</td>
                            <td>{{$value->pro_image}}</td>
                            <td>{{$value->cate_name}}</td>
                            <td>{{$value->pro_brand}}</td>
                            <td>{{$value->pro_color}}</td>
                            <td>{{$value->pro_price}}</td>
                            <td>{{$value->pro_amount}}</td>
                            <td>{{$value->pro_sex}}</td>

                            <td>{{$value->pro_discount}}</td>

                            <td>
                                <div class="form-group row ">
                                    <form action="/admin/editproduct/{{$value->id}}" method="POST" class=" col-6 action">
                                        @method('GET')
                                        @csrf
                                        <button type="submit" class="btn btn-success "><i class="bi bi-pencil-square">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                              </svg>
                                        Edit</i> </button>
                                    </form>
                                    <form action="/admin/delproduct/{{$value->id}}" method="POST" class=" col-6 ">
                                        @method('DELETE')
                                        @csrf
                                        <button type="submit" class="btn btn-danger ">
                                            <i class="bi bi-trash3-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                              </svg> Del</i></button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>


    <script>
          CKEDITOR.replace('detail', {
        uiColor: '#CCEAEE',
        removeButtons: 'PasteFromWord'
    });
    </script>
