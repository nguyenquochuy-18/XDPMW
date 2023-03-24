import React, { Component } from "react";
import Items from "./category/items";
import { map, orderBy as funcOrderBy } from "lodash";
import { Link } from "react-router-dom";
// import "./category/pagination"

export default class category extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
      strSearch: "",
      orderBy: "",
      orderDir: "",
      strSort: "",
    };
    this.handleSort = this.handleSort.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  async componentDidMount() {
    await fetch("https://aromashopqhuy.x10.mx/admin/api/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ product: data });
      })
      .catch(console.log);
  }

  renderProducts = () => {
    let productsDataOrigin = this.state.product;
    let productsData = [];
    const search = this.state.strSearch;

    let { orderBy, orderDir } = this.state;

    //Search
    if (search.length > 0) {
      productsDataOrigin.forEach((item) => {
        if (item.pro_name.toLowerCase().indexOf(search) !== -1) {
          productsData.push(item);
        }
      });
    } else {
      productsData = productsDataOrigin;
    }

    //Chuyển pro_price về dạng số trước khi Sort vì lúc lấy về từ host pro_price đã bị ép thành kiểu String
    productsData.map((data, index) => (
      data.pro_price = parseFloat(data.pro_price)
    ));
    //sort
    productsData = funcOrderBy(productsData, [orderBy], [orderDir]);

    let products = productsData.map((data, index) => (
      <div className="col-md-6 col-lg-4 col-xl-3 item">
        <div className=" text-center card-product">
          <div className="card-product__img">
            <img
              className="card-img2"
              src={"https://aromashopqhuy.x10.mx/uploads/" + data.pro_image}
              alt=""
            />
            <ul className="card-product__imgOverlay">
              <li>
                <button>
                  <li><Link to={"/product-detail/" + data.pro_name} pro_name={data.pro_name}><button><i className="ti-search" /></button></Link></li>
                </button>
              </li>
              <li>
                <button>
                  <i className="ti-shopping-cart" />
                </button>
              </li>
              <li>
                <button>
                  <i className="ti-heart" />
                </button>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <p>{data.cate_name}</p>
            <h4 className="card-product__title">
              <a href="single-product.html">{data.pro_name}</a>
            </h4>
            <p className="card-product__price">{Intl.NumberFormat("vi").format(data.pro_price)} đ</p>
          </div>
        </div>
      </div>
    ));

    return products;
  };

  handleSort(orderBy, orderDir, strSort) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir,
      strSort: strSort,
    });
  }

  handleSearch() {
    console.log(this.state.strSearch);
  }
  handleClear() {
    this.setState({ strSearch: "" });
  }
  handleChange(event) {
    this.setState({ strSearch: event.target.value });
  }
  render() {
    let { orderBy, orderDir, strSort } = this.state;

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
                    <button value="123" className="btn btn-secondary  dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      sort by {strSort}<span className="caret" />
                    </button>
                    <div className="dropdown-menu sort" aria-aria-labelledby="drodownMenu1" >
                      <a className="dropdown-item" onClick={() => this.handleSort('pro_name', 'asc', 'Name ASC')} role="button">  Name ASC</a>
                      <a className="dropdown-item" onClick={() => this.handleSort('pro_name', 'desc', 'Name DESC')} role="button">  Name DESC</a>
                      <a className="dropdown-item" onClick={() => this.handleSort('pro_price', 'asc', 'Price ASC')} role="button">  Price ASC</a>
                      <a className="dropdown-item" onClick={() => this.handleSort('pro_price', 'desc', 'Price DESC')} role="button">  Price DESC</a>

                    </div>
                  </div>

                  <div>
                    <div className="input-group filter-bar-search">
                      <input
                        value={this.state.strSearch}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <button type="button" onClick={this.handleSearch}>
                          <i className="ti-search" />
                        </button>
                        <button
                          type="button"
                          onClick={this.handleClear}
                          className="btn btn-warning"
                        >
                          Clear!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Filter Bar */}
                {/* Start Best Seller */}
                <section className="lattest-product-area pb-40 category-list">
                  <div className="row list">{this.renderProducts()}</div>
                  <div className="listPage">

                  </div>
                </section>
                {/* End Best Seller */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
