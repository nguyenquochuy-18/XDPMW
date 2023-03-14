import React, { Component } from 'react'

export default class productDetail extends Component {
    render() {
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
                                <input type="hidden" name="sp_ten" id="sp_ten" defaultValue="Samsung Galaxy Tab 10.1 3G 16G" />
                                <input type="hidden" name="sp_gia" id="sp_gia" defaultValue={10990000.00} />
                                <input type="hidden" name="hinhdaidien" id="hinhdaidien" defaultValue="samsung-galaxy-tab-10.jpg" />
                                <div className="wrapper row">
                                    <div className="preview col-md-6">
                                        <div className="preview-pic tab-content">
                                            <div className="tab-pane" id="pic-1">
                                                <img src="../assets/img/product/samsung-galaxy-tab-10.jpg" />
                                            </div>
                                            <div className="tab-pane" id="pic-2">
                                                <img src="../assets/img/product/samsung-galaxy-tab.jpg" />
                                            </div>
                                            <div className="tab-pane active" id="pic-3">
                                                <img src="../assets/img/product/samsung-galaxy-tab-4.jpg" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="details col-md-6">
                                        <h3 className="product-title">Samsung Galaxy Tab 10.1 3G 16G</h3>
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
                                        <p className="product-description">Màn hình 10.1 inch cảm ứng đa điểm</p>
                                        <small className="text-muted">Giá cũ: <s><span>10,990,000.00 vnđ</span></s></small>
                                        <h4 className="price">Giá hiện tại: <span>10,990,000.00 vnđ</span></h4>
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
   
        )
    }
}
