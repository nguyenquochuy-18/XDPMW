import React, { Component } from 'react'

export default class trendproducts extends Component {
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
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="img/product/product1.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search" /></button></li>
                      <li><button><i className="ti-shopping-cart" /></button></li>
                      <li><button><i className="ti-heart" /></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title"><a href="single-product.html">Quartz Belt Watch</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="img/product/product2.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search" /></button></li>
                      <li><button><i className="ti-shopping-cart" /></button></li>
                      <li><button><i className="ti-heart" /></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Beauty</p>
                    <h4 className="card-product__title"><a href="single-product.html">Women Freshwash</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="img/product/product3.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search" /></button></li>
                      <li><button><i className="ti-shopping-cart" /></button></li>
                      <li><button><i className="ti-heart" /></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="img/product/product4.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search" /></button></li>
                      <li><button><i className="ti-shopping-cart" /></button></li>
                      <li><button><i className="ti-heart" /></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="img/product/product5.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search" /></button></li>
                      <li><button><i className="ti-shopping-cart" /></button></li>
                      <li><button><i className="ti-heart" /></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title"><a href="single-product.html">Man Office Bag</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="img/product/product6.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search" /></button></li>
                      <li><button><i className="ti-shopping-cart" /></button></li>
                      <li><button><i className="ti-heart" /></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Kids Toy</p>
                    <h4 className="card-product__title"><a href="single-product.html">Charging Car</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="img/product/product7.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search" /></button></li>
                      <li><button><i className="ti-shopping-cart" /></button></li>
                      <li><button><i className="ti-heart" /></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Accessories</p>
                    <h4 className="card-product__title"><a href="single-product.html">Blutooth Speaker</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div> 
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img className="card-img" src="img/product/product8.png" alt="" />
                    <ul className="card-product__imgOverlay">
                      <li><button><i className="ti-search" /></button></li>
                      <li><button><i className="ti-shopping-cart" /></button></li>
                      <li><button><i className="ti-heart" /></button></li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>Kids Toy</p>
                    <h4 className="card-product__title"><a href="#">Charging Car</a></h4>
                    <p className="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================ trending product section end ================= */}  
      
        </main>
      </div>
    )
  }
}
