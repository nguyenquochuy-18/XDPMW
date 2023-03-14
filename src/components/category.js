import React, { Component } from "react";
import Items from "./category/items";

export default class category extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
      isShowForm: false,
      strSearch: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    await fetch("http://aromashopqhuy.x10.mx/admin/api/products")
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

    if (search.length > 0) {
      productsDataOrigin.forEach((item) => {
        if (item.pro_name.indexOf(search) !== -1) {
          productsData.push(item);
        }
      });
    } else {
      productsData = productsDataOrigin;
    }

    let products = productsData.map((data, index) => (
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card text-center card-product">
          <div className="card-product__img">
            <img
              className="card-img"
              src={"http://aromashopqhuy.x10.mx/uploads/" + data.pro_image}
              alt=""
            />
            <ul className="card-product__imgOverlay">
              <li>
                <button>
                  <i className="ti-search" />
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
            <p className="card-product__price">{data.pro_price}</p>
          </div>
        </div>
      </div>
    ));

    return products;
  };

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
    return (
      <div>
        <section className="section-margin--small mb-5">
          <div className="container">
            <div className="row">
              <Items></Items>
              <div className="col-xl-9 col-lg-8 col-md-7">
                {/* Start Filter Bar */}
                <div className="filter-bar d-flex flex-wrap align-items-center">
                  {/* <div className="sorting">
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
                  </div> */}
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
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Filter Bar */}
                {/* Start Best Seller */}
                <section className="lattest-product-area pb-40 category-list">
                  <div className="row">{this.renderProducts()}</div>
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

function apiClient(endpoint, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      // Chúng ta phải kiểm tra kết quả của response nếu ok thì trả về data
      // còn ngươc lại chúng ta trả về Promise.reject
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { apiClient };

function DiscoverBooksScreen() {
  const [status, setStatus] = React.useState("idle");
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();
  const [query, setQuery] = React.useState();
  const [queried, setQueried] = React.useState(false);

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";
  console.log(`products?query=${encodeURIComponent(query)}`);

  React.useEffect(() => {
    if (!queried) {
      return;
    }
    setStatus("loading");
    apiClient(`products?query=${encodeURIComponent(query)}`).then(
      (responseData) => {
        setData(responseData);
        setStatus("success");
      },
      (errorData) => {
        setError(errorData);
        setStatus("error");
      }
    );
  }, [query, queried]);

  function handleSearchSubmit(event) {
    event.preventDefault();
    setQueried(true);
    setQuery(event.target.elements.search.value);
  }

  return (
    <div
      css={{ maxWidth: 800, margin: "auto", width: "90vw", padding: "40px 0" }}
    >
      <form onSubmit={handleSearchSubmit}>
        <input
          placeholder="Search books..."
          id="search"
          css={{ width: "100%" }}
        />
        <tooltip label="Search Books">
          <label htmlFor="search">
            <button
              type="submit"
              css={{
                border: "0",
                position: "relative",
                marginLeft: "-35px",
                background: "transparent",
              }}
            >
              {isLoading ? (
                <spinner />
              ) : isError ? (
                // eslint-disable-next-line no-undef
                <faTimes aria-label="error" css={{ color: colors.danger }} />
              ) : (
                <faSearch aria-label="search" />
              )}
            </button>
          </label>
        </tooltip>
      </form>

      {isError ? (
        // eslint-disable-next-line no-undef
        <div css={{ color: colors.danger }}>
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null}

      {isSuccess ? (
        data?.books?.length ? (
          <bookListUL css={{ marginTop: 20 }}>
            {data.books.map((book) => (
              <li key={book.id} aria-label={book.title}>
                <bookRow key={book.id} book={book} />
              </li>
            ))}
          </bookListUL>
        ) : (
          <p>No books found. Try another search.</p>
        )
      ) : null}
    </div>
  );
}

export { DiscoverBooksScreen };
