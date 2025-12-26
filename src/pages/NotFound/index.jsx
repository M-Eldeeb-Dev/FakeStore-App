import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { Helmet } from "react-helmet";
import "./index.scss";
function NotFound() {
  const routePath = "NotFound";
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Fake Store</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navbar path={routePath} />
      <div className="not-found-container">
        <div className="text-center">
          <div className="ghost-icon">
            <i className="fa-solid fa-ghost"></i>
          </div>

          <h1 className="display-1">404</h1>
          <h2 className="mb-3">Oops! Page Not Found</h2>

          <p className="lead mb-4">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link to="/" className="btn btn-lg btn-home">
            <i className="fa-solid fa-house me-2"></i> Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
