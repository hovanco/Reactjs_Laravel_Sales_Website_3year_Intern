import React, { Component } from 'react';
import { Route, Link, withRouter } from "react-router-dom";
import './Style_Navbar.css';
import MegaMenu from '../megamenu/MegaMenu';
import SlideAutoplay from '../slideshow/SlideAutoplay';
import '../megamenu/Style_MegaMenu.css';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => { // custom link
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active abc' : '';
        return (
          <li className={`my-li ${active}`}>
            <Link
              to={to}
              className="my-link">
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}

class Navbar extends Component {
  logOut = () => {
    localStorage.removeItem('_token') //_token  usertoken
    localStorage.removeItem('_user') //user
    this.props.history.push(`/`)
  }

  render() {
    const user = JSON.parse(localStorage.getItem('_user'))
    return (
      <div className="navbar-containner">
        <nav className="navbar-top">
          <a href="/" className="logo">HGC GROUP</a>
          <input type="checkbox" id="box-1" />
          <label id="toggler" htmlFor="box-1">
            <span>MENU <i className="fas fa-bars" /></span>
          </label>
          <ul>
            <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
            <MenuLink label="About" to="/about" activeOnlyWhenExact={false} />
            <MenuLink label="Blog" to="/blog" activeOnlyWhenExact={false} />
            <MenuLink label="Contact" to="/contact" activeOnlyWhenExact={false} />
            {user ?
              <>
                <MenuLink label="Profile" to="/profile" activeOnlyWhenExact={false} />
                <strong className="show-username">{user.name || ""}</strong>
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                <a href="/" onClick={this.logOut} className="link-logout">Logout</a>
              </> :
              <>
                <MenuLink label="Login" to="/login" activeOnlyWhenExact={false} />
                <MenuLink label="Register" to="/register" activeOnlyWhenExact={false} />
                
              </>
            }

            <a href="/" className="shope-cart-icon"><i className="fa fa-shopping-cart"></i></a>
            <span className="count-product-cart">0</span>

          </ul>
          <div id="navbar-form">
            <input type="checkbox" id="box-2" />
            <form action="true" id="search-form">
              <input type="search" placeholder="Search" id="search-bar" />
              <button id="search-btn" type="submit">
                <span><i className="fas fa-search" /></span>
              </button>
            </form>
            <label htmlFor="box-2" id="search-form-opener">
              <span><i className="fas fa-search" /></span>
            </label>
            <label htmlFor="box-2" id="search-form-closer">
              <span><i className="fas fa-times" /></span>
            </label>
          </div>
        </nav>
        <MegaMenu />
        <SlideAutoplay />
      </div>
    )
  }
}
export default withRouter(Navbar);
