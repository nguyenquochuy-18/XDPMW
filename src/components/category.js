import React, { Component } from 'react'
import Items from './category/items'

export default class category extends Component {

  constructor() {
    super();

    this.state = {
      product: []
    }
  }

  async componentDidMount() {
    await fetch("https://aromashopqhuy.x10.mx/admin/api/products")
      .then(res => res.json())
      .then((data) => {
        this.setState({ product: data })
      })
      .catch(console.log)
  }




  renderProducts = () => {
    let products = this.state.product.map((data, index) =>

      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card text-center card-product">
          <div className="card-product__img">
            <img className="card-img"   src={"https://aromashopqhuy.x10.mx/uploads/"+data.pro_image} alt="" />
            <ul className="card-product__imgOverlay">
              <li><button><i className="ti-search" /></button></li>
              <li><button><i className="ti-shopping-cart" /></button></li>
              <li><button><i className="ti-heart" /></button></li>
            </ul>
          </div>
          <div className="card-body">

            <p>{data.cate_name}</p>
            <h4 className="card-product__title"><a href="single-product.html">{data.pro_name}</a></h4>
            <p className="card-product__price">{data.pro_price}</p>

          </div>
        </div>
      </div>

    );

    return products;
  }


  render() {
    return (
      <div>
        <section className="section-margin--small mb-5">
          <div className="container">
            <div className="row">
              <Items></Items>
              <div className="col-xl-9 col-lg-8 col-md-7">
                {/* Start Filter Bar */}
                <div className="filter-bar d-flex flex-wrap align-items-center">
                  <div className="sorting">
                    <select>
                      <option value={1}>Default sorting</option>
                      <option value={1}>Default sorting</option>
                      <option value={1}>Default sorting</option>
                    </select>
                  </div>
                  <div className="sorting mr-auto">
                    <select>
                      <option value={1}>Show 12</option>
                      <option value={1}>Show 12</option>
                      <option value={1}>Show 12</option>
                    </select>
                  </div>
                  <div>
                    <div className="input-group filter-bar-search">
                      <input type="text" placeholder="Search" />
                      <div className="input-group-append">
                        <button type="button"><i className="ti-search" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Filter Bar */}
                {/* Start Best Seller */}
                <section className="lattest-product-area pb-40 category-list">
                  <div className="row">
                    {this.renderProducts()}
                  </div>
                </section>
                {/* End Best Seller */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
