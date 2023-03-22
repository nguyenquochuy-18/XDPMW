import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

function Child(props) {
    // We can use the `useParams` hook here to access
    // // the dynamic pieces of the URL.
    let { id } = useParams();

    if (props.pro_name == id) {
        return (
            <div className="container mt-4">

                <div id="thongbao" className="alert alert-danger d-none face" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="card">
                    <div className="container-fliud">
                        <form name="frmsanphamchitiet" id="frmsanphamchitiet" method="post" action="/php/twig/frontend/giohang/themvaogiohang">
                            <input type="hidden" name="sp_ma" id="sp_ma" defaultValue={5} />
                            <input type="hidden" name="sp_ten" id="sp_ten" defaultValue={props.pro_name} />
                            <input type="hidden" name="sp_gia" id="sp_gia" defaultValue={10990000.00} />
                            <input type="hidden" name="hinhdaidien" id="hinhdaidien" defaultValue="samsung-galaxy-tab-10.jpg" />
                            <div className="wrapper row">
                                <div className="preview col-md-6">
                                    <div className=" tab-content">
                                        <img src={"http://aromashopqhuy.x10.mx/uploads/" + props.pro_image} />
                                    </div>

                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">{props.pro_name}</h3>
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="fa fa-star checked" />
                                            <span className="fa fa-star checked" />
                                            <span className="fa fa-star checked" />
                                            <span className="fa fa-star" />
                                            <span className="fa fa-star" />
                                        </div>
                                        <span className="review-no">999 reviews</span>
                                    </div>
                                    <p className="product-description">{props.pro_detail}</p>
                          
                                    <h4 className="price">Giá hiện tại: <span>{props.pro_price}</span></h4>
                                    <p className="vote"><strong>100%</strong> hàng <strong>Chất lượng</strong>, đảm bảo
                                        <strong>Uy
                                            tín</strong>!</p>
                                    <h5 className="sizes">sizes:
                                        <span className="size" data-toggle="tooltip" title="cỡ Nhỏ">s</span>
                                        <span className="size" data-toggle="tooltip" title="cỡ Trung bình">m</span>
                                        <span className="size" data-toggle="tooltip" title="cỡ Lớn">l</span>
                                        <span className="size" data-toggle="tooltip" title="cỡ Đại">xl</span>
                                    </h5>
                                    <h5 className="colors">colors:
                                        <span className="color orange not-available" data-toggle="tooltip" title="Hết hàng" />
                                        <span className="color green" />
                                        <span className="color blue" />
                                    </h5>
                                    <div className="form-group">
                                        <label htmlFor="soluong">Số lượng đặt mua:</label>
                                        <input type="number" className="form-control" id="soluong" name="soluong" />
                                    </div>
                                    <div className="action">
                                        <a className="add-to-cart btn btn-default" id="btnThemVaoGioHang">Thêm vào giỏ hàng</a>
                                        <a className="like btn btn-default" href="#"><span className="fa fa-heart" /></a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}


function productDetail() {
    // let name = useParams()
    return (
        <Trendproducts />
    )
}
export default productDetail;


class Trendproducts extends Component {
    constructor(props) {
        super();

        this.state = {
            product: [],
            id: props.id
        }
    }

    async componentDidMount() {
        await fetch("http://aromashopqhuy.x10.mx/admin/api/products")
            .then(res => res.json())
            .then((data) => {
                this.setState({ product: data })
            })
            .catch(console.log)
    }

    render() {

        let pro = this.state.product.map((value, key) => {

            return (
                <div className="row">
                    <Child pro_name={value.pro_name} pro_image={value.pro_image} pro_price={value.pro_price} pro_discount={value.pro_detail}/>
                </div>
            )

        })
        return pro;
    }
}

