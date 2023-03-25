import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class topmenu extends Component {
  render() {
    return (
          
        <header className="header_area" >
          <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand logo_h" href="/"><img src="../img/logo.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                  <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                    <li className="nav-item " activeClassName="active" ><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item submenu dropdown">
                      {/* <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop Category</a> */}
                      <Link className="nav-link dropdown-toggle" activeClassName="active" to="/category">Shop Category</Link>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <Link className="nav-link dropdown-toggle" activeClassName="active" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <a href="#" className="nav-link dropdown-toggle" activeClassName="active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/contact">Contact</Link></li>
                  </ul>
                  <ul className="nav-shop">
     
                    <li className="nav-item"><button><i className="ti-shopping-cart" /><span className="nav-shop__circle">3</span></button> </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
  
    )
  }
}
