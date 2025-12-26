import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, Footer, LoadingSpinner } from "../../components";
import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Helmet } from "react-helmet";
import "./index.scss";

function ProductDetails() {
  const { id } = useParams();
  const { product, productLoading, getProductsById, addToCart } =
    useContext(ProductContext);
  const routePath = "ProductDetails";

  useEffect(() => {
    getProductsById(id);
  }, []);

  const addToCartPopUp = () => {
    addToCart();
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: `${product.title} Product Added To Cart Successfully`,
      confirmButtonColor: "#6366f1",
    });
  };

  return (
    <>
      <Helmet>
        <title>
          {product?.title
            ? `${product.title} - Fake Store`
            : "Product Details - Fake Store"}
        </title>
        <meta
          name="description"
          content={
            product?.description ||
            "View detailed information about this product at Fake Store."
          }
        />
        <meta
          name="keywords"
          content={`${product?.category || "product"}, ${
            product?.title || "shopping"
          }, online store`}
        />
      </Helmet>

      <Navbar path={routePath} />

      <section className="product-details-page">
        <div className="container py-5">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb custom-breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/products">Products</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Product Details
              </li>
            </ol>
          </nav>

          {productLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="product-image-card">
                  <div className="image-placeholder">
                    <img src={product.image} alt={product.title} />
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="product-info-card">
                  <div className="product-badge">Product ID: {product.id}</div>

                  <h1 className="product-name">{product.title}</h1>

                  <div className="product-rating mb-3">
                    <div className="stars-container">
                      {[...Array(5)].map((_, index) => {
                        const ratingValue = index + 1;
                        const rating = product?.rating?.rate || 0;

                        if (rating >= ratingValue) {
                          return (
                            <i key={index} className="fa-solid fa-star"></i>
                          );
                        } else if (rating >= ratingValue - 0.5) {
                          return (
                            <i
                              key={index}
                              className="fa-solid fa-star-half-stroke"
                            ></i>
                          );
                        } else {
                          return (
                            <i key={index} className="fa-regular fa-star"></i>
                          );
                        }
                      })}
                    </div>
                    <span className="rating-value">
                      {product?.rating?.rate || 0}
                    </span>
                    <span className="rating-separator">•</span>
                    <span className="rating-count">
                      {product?.rating?.count || 0} Stock
                    </span>
                  </div>

                  <div className="product-price mb-4">
                    <span className="current-price">${product.price}</span>
                    <span className="original-price">
                      ${product.price + 50}
                    </span>
                  </div>

                  <div className="product-description mb-4">
                    <h5>Description</h5>
                    <p>{product.description}</p>
                  </div>

                  <div className="product-features mb-4">
                    <h5>Features</h5>
                    <ul>
                      <li>
                        <i className="fa-solid fa-check"></i> Premium Quality
                        Materials
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Durable
                        Construction
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Modern Design
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i> Easy to Use
                      </li>
                    </ul>
                  </div>

                  <div className="product-actions">
                    <button
                      className="btn btn-add-cart"
                      onClick={addToCartPopUp}
                    >
                      <i className="fa-solid fa-cart-shopping me-2"></i>
                      Add to Cart
                    </button>
                    <Link to="/products" className="btn btn-buy-now">
                      Back To Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;
