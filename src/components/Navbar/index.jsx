import { Link } from 'react-router-dom'
import './index.scss'
function Navbar({path, cart}) {

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-special-style navbar-dark">
        <div className="container">
          <div className="logo d-flex align-items-center gap-3">
            <div className="icon"></div>
            <Link className="navbar-brand" to={'/'}>Fake Store</Link>
          </div>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${path === 'Home' && 'active'}`} to={'/'} aria-current="page">
                  Home
                  <span className="visually-hidden">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${path === 'Products' && 'active'}`} to={'/products'} >Products</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${path === 'About' && 'active'}`} to={'/about'} >About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${path === 'Contact' && 'active'}`} to={'/contact'} >Contact</Link>
              </li>
            </ul>
            {path === 'Products' &&
              <div className="form px-5 d-flex align-items-center gap-3">
                <form className="d-flex my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="form-control me-sm-2"
                    type="text"
                    placeholder="Search"
                    id='search'
                  />
                </form> 
                <a><i className="fa-solid fa-cart-shopping text-white"><span className='mx-2 text-info'>{cart}</span></i></a>
              </div>       
            }
          </div>
        </div>
      </nav>
      


    </>
    
  )
}

export default Navbar