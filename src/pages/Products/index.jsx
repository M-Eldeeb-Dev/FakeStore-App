import { Navbar, Footer, LoadingSpinner } from "../../components";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Helmet } from "react-helmet";
import "./index.scss";
import { Link } from "react-router-dom";

function Products() {
  const { products, cart, loading, getProductsByCategory } =
    useContext(ProductContext);

  const filteredCategories = [
    { id: 1, name: "all" },
    { id: 2, name: "electronics" },
    { id: 3, name: "jewelery" },
    { id: 4, name: "men's clothing" },
    { id: 5, name: "women's clothing" },
  ];

  return (
    <>
      <Helmet>
        <title>Our Products - Fake Store | Browse Premium Collection</title>
        <meta
          name="description"
          content="Browse our extensive collection of electronics, jewelry, men's and women's clothing. Find quality products at competitive prices."
        />
        <meta
          name="keywords"
          content="products, electronics, jewelry, clothing, men's fashion, women's fashion, online shopping"
        />
      </Helmet>

      <Navbar path="Products" cart={cart} />
      <section className="products-page container-fluid">
        <div className="container py-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
            <h2 className="products-title">Our Products</h2>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {filteredCategories.map((category) => (
                <button
                  className="btn btn-filter text-white"
                  key={category.id}
                  onClick={() => getProductsByCategory(category.name)}
                >
                  <i className="bi bi-funnel "></i>{" "}
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="row g-4">
              {products.map((product) => (
                <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                  <div className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                    </div>

                    <div className="product-body">
                      <h6 className="product-title">{product.title}</h6>
                      <p className="product-price">${product.price}</p>
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Products;
