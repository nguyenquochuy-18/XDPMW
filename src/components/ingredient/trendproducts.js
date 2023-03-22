import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';


export default class trendproducts extends Component {
  constructor(props) {
    super();

    this.state = {
      product: []
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



  renderProducts = () => {
    let products =this.state.product.map((data, index) =>
     
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className=" text-center card-product">
            <div className="card-product__img">               
              <img className="card-img"   src={"http://aromashopqhuy.x10.mx/uploads/"+data.pro_image} alt="" />
              <ul className="card-product__imgOverlay">
                <li><Link to={"/product-detail/"+data.pro_name} pro_name={data.pro_name}><button><i className="ti-search" /></button></Link></li>
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
        <main className="site-main">
          {/*================ Hero Carousel start =================*/}
          <section className="section-margin mt-0">
            <div className="owl-carousel owl-theme hero-carousel">
              <div className="hero-carousel__slide">
                <img src="img/home/hero-slide1.png" alt="" className="img-fluid" />
                <a href="#" className="hero-carousel__slideOverlay">
                  <h3>Wireless Headphone</h3>
                  <p>Accessories Item</p>
                </a>
              </div>
              <div className="hero-carousel__slide">
                <img src="img/home/hero-slide2.png" alt="" className="img-fluid" />
                <a href="#" className="hero-carousel__slideOverlay">
                  <h3>Wireless Headphone</h3>
                  <p>Accessories Item</p>
                </a>
              </div>
              <div className="hero-carousel__slide">
                <img src="img/home/hero-slide3.png" alt="" className="img-fluid" />
                <a href="#" className="hero-carousel__slideOverlay">
                  <h3>Wireless Headphone</h3>
                  <p>Accessories Item</p>
                </a>
              </div>
            </div>
          </section>
          {/*================ Hero Carousel end =================*/}
          {/* ================ trending product section start ================= */}
          <section className="section-margin calc-60px">
            <div className="container">
              <div className="section-intro pb-60px">
                <p>Popular Item in the market</p>
                <h2>Trending <span className="section-intro__style">Product</span></h2>
              </div>
              <div className="row">
                 {this.renderProducts()}
              </div>
            </div>
          </section>
          {/* ================ trending product section end ================= */}

        </main>
      </div>
    )
  }
}
