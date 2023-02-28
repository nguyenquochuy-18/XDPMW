<style>
    .add {
        margin-left: 2%;
        margin-top: 1%;
    }
</style>



    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <form action="" method="POST">
            @method('POST')
            @csrf
            <div class="row">
                <label for="" class="col-2 add">Add Category</label>
                <input type="text" class="col-6" name="cate_name">
                <button class="col-1" type="submit">Create</button>
            </div>
        </form>
        <div class="card-body">

            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        @if (!empty($categoryList))

                        @foreach($categoryList as $key=>$value)
                        <tr>
                            <td>{{$value->id}}</td>
                            <td>{{$value->cate_name}}</td>
                            <td>
                                <form action="category/{{$value->id}}" method="POST">
                                    @method("DELETE")
                                    @csrf
                                    <button class="btn btn-danger" type="submit"><i class="bi bi-trash3-fill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                          </svg> Delete</i></button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>


