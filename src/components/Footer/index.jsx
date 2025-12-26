import { Link } from 'react-router-dom'
import './index.scss'

function Footer() {
  return (
    <>
      <footer className="footer-special-style pt-5 pb-4">
        <div className="container text-center text-md-start">
          <div className="row text-center text-md-start">


            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Fake Store</h5>
              <p>Your one-stop shop for everything you don't actually need, but definitely want.</p>
            </div>


            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Links</h5>
              <div className="links d-flex flex-column gap-2">                
                <Link className='footer-link' to={'/'} >Home</Link>
                <Link className='footer-link' to={'/products'} >Products</Link>
                <Link className='footer-link' to={'/about'} >About</Link>
                <Link className='footer-link' to={'/contact'} >Contact</Link>
              </div>

            </div>


            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
              <p><i className="fas fa-home me-3"></i> Nasr City | Cairo</p>
              <p><i className="fas fa-envelope me-3"></i> support@fakestore.com</p>
              <p><i className="fas fa-phone me-3"></i> + 20 102 132 5101</p>
            </div>
          </div>

          <hr className="mb-4" />


          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p>© {new Date().getFullYear()} Copyright: <strong>FakeStore.com</strong></p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-end">
                <Link to="https://www.facebook.com/" target="_blank" className="me-4 footer-link"><i className="fab fa-facebook-f"></i></Link>
                <Link to="https://twitter.com/" target="_blank" className="me-4 footer-link"><i className="fab fa-twitter"></i></Link>
                <Link to="https://www.instagram.com/" target="_blank" className="me-4 footer-link"><i className="fab fa-instagram"></i></Link>
                <Link to="https://github.com/" target="_blank" className='footer-link'><i className="fab fa-github "></i></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer