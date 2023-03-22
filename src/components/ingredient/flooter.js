import React, { Component } from 'react'

export default class flooter extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
        <div className="footer-area">
          <div className="container">
            <div className="row section_gap">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget tp_widgets">
                  <h4 className="footer_title large_title">Our Mission</h4>
                  
                </div>
              </div>
              <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget tp_widgets">
                  <h4 className="footer_title">Quick Links</h4>
                  <ul className="list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Brand</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-widget instafeed">
                  <h4 className="footer_title">Gallery</h4>
                  <ul className="list instafeed d-flex flex-wrap">
                    <li><img src="../img/gallery/r1.jpg" alt="" /></li>
                    <li><img src="../img/gallery/r2.jpg" alt="" /></li>
                    <li><img src="../img/gallery/r3.jpg" alt="" /></li>
                    <li><img src="../img/gallery/r5.jpg" alt="" /></li>
                    <li><img src="../img/gallery/r7.jpg" alt="" /></li>
                    <li><img src="../img/gallery/r8.jpg" alt="" /></li>
                  </ul>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget tp_widgets">
                  <h4 className="footer_title">Contact Us</h4>
                  <div className="ml-40">
                    <p className="sm-head">
                      <span className="fa fa-location-arrow" />
                      Head Office
                    </p>
                    <p>180 Cao Lỗ, phường 4, Quận 8</p>
                    <p className="sm-head">
                      <span className="fa fa-phone" />
                      Phone Number
                    </p>
                    <p>
                      +84338234017 <br />
                   
                    </p>
                    <p className="sm-head">
                      <span className="fa fa-envelope" />
                      Email
                    </p>
                    <p>
                      aromashop@gmail.com <br />
                
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
      </div>
    )
  }
}
