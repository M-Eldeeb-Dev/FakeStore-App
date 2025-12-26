import { Navbar, Footer } from "../../components";
import { Helmet } from "react-helmet";
import "./index.scss";

function About() {
  const routePath = "About";
  return (
    <>
      <Helmet>
        <title>About Us - Fake Store | Our Story & Values</title>
        <meta
          name="description"
          content="Learn about Fake Store's mission to provide quality products and exceptional service. Discover our story and commitment to customer satisfaction."
        />
        <meta
          name="keywords"
          content="about us, company info, fake store, our story, mission, values"
        />
      </Helmet>

      <Navbar path={routePath} />

      <section className="about-page">
        <div className="container py-5">
          <div className="about-hero text-center mb-5">
            <h1 className="display-4 mb-4">About Fake Store</h1>
            <p className="lead">
              Your trusted destination for quality products and exceptional
              service
            </p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <h5>Fast Delivery</h5>
                <p>Quick and reliable shipping to your doorstep</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h5>Secure Payment</h5>
                <p>Your transactions are safe and protected</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <h5>24/7 Support</h5>
                <p>We're here to help you anytime</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fa-solid fa-star"></i>
                </div>
                <h5>Quality Products</h5>
                <p>Curated selection of premium items</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="content-card">
              <h3 className="mb-4">Our Story</h3>
              <p>
                Founded with a passion for bringing quality products to
                customers worldwide, Fake Store has grown to become a trusted
                name in online retail. We believe in providing not just
                products, but experiences that delight our customers.
              </p>
              <p>
                Our curated collection spans electronics, jewelry, and fashion,
                ensuring that every item meets our high standards of quality and
                style. We work directly with manufacturers and trusted suppliers
                to bring you the best products at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
