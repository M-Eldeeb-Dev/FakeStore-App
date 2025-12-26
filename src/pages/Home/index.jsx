import { Navbar, Footer } from "../../components";
import { mainImage } from "../../assets";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./index.scss";

function Home() {
  const routePath = "Home";

  return (
    <>
      <Helmet>
        <title>Fake Store - Quality Meets Style | Premium Products</title>
        <meta
          name="description"
          content="Discover our curated collection of premium electronics, jewelry, and fashion at Fake Store. Quality products with exceptional service."
        />
        <meta
          name="keywords"
          content="online store, electronics, jewelry, fashion, premium products, shopping"
        />
      </Helmet>

      <Navbar path={routePath} />

      <header className="hero-section">
        <img src={mainImage} alt="Store Hero" className="hero-img" />

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="display-3">Quality Meets Style</h1>
            <p className="lead">
              Discover our curated collection of premium electronics, jewelry,
              and fashion.
            </p>
            <Link to="/products" className="btn btn-primary btn-shop">
              Shop Now <i className="fa-solid fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </header>

      <Footer />
    </>
  );
}

export default Home;
