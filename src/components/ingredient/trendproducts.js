import React, { Component } from 'react'

export default class trendproducts extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    await fetch("http://localhost:3333/products")
      .then(res => res.json())
      .then((data) => {
        this.setState({ products: data })
      })
      .catch(console.log)
  }

  renderProducts = () => {
    let producs = this.state.products.map((data, index) =>
     
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="card-img" src={data.image} alt="" />
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search" /></button></li>
                <li><button><i className="ti-shopping-cart" /></button></li>
                <li><button><i className="ti-heart" /></button></li>
              </ul>
            </div>
            <div className="card-body">

              <p>{data.category}</p>
              <h4 className="card-product__title"><a href="single-product.html">{data.name}</a></h4>
              <p className="card-product__price">{data.price}</p>

            </div>
          </div>
        </div>
   
    );

    return producs;
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
