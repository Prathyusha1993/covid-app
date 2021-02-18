import React, { Component } from 'react';
import { IMG01, IMG02, IMG03 } from './img.jsx';
import { Link } from 'react-router-dom';

class HomeBlog extends Component{
    
    render(){
        return(
            <section className="blog-section">
        <div className="container">
          <div className="section-header text-center">
            <h5>READ OUR BLOG</h5>
            <h2>Featured News and Advices</h2>
            <p className="sub-title">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-widget">
                <Link to="/blog/blog-list" className="blog-img">
                  <img src={IMG01} alt="" />
                </Link>
                <div className="date-col">
                  <span>14 Aug 2020</span>
                </div>
                <div className="blog-content text-center">
                  <h6>Expert Nursing</h6>
                  <h5>Is Running Really Good for the Heart?</h5>
                  <p>There are lorem ipsum is simply free many variations of Ipsum the majority suffered.</p>
                  <Link to="/blog/blog-list" className="readmore-btn" tabIndex={-1}><i className="fas fa-chevron-circle-right" /> Read more</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-widget">
                <Link to="/blog/blog-list" className="blog-img">
                  <img src={IMG02} alt="" />
                </Link>
                <div className="date-col">
                  <span>12 Aug 2020</span>
                </div>
                <div className="blog-content text-center">
                  <h6>Heath care Expert</h6>
                  <h5>Modeling data increase to endovascular therapy</h5>
                  <p>There are lorem ipsum is simply free many variations of Ipsum the majority suffered.</p>
                  <Link to="/blog/blog-list" className="readmore-btn" tabIndex={-1}><i className="fas fa-chevron-circle-right" /> Read more</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-widget">
                <Link to="/blog/blog-list" className="blog-img">
                  <img src={IMG03} alt="" />
                </Link>
                <div className="date-col">
                  <span>10 Aug 2020</span>
                </div>
                <div className="blog-content text-center">
                  <h6>Individual Approach</h6>
                  <h5>Get the Exercise Tips for Limited Mobility</h5>
                  <p>There are lorem ipsum is simply free many variations of Ipsum the majority suffered.</p>
                  <Link to="/blog/blog-list" className="readmore-btn" tabIndex={-1}><i className="fas fa-chevron-circle-right" /> Read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        );
    }
}
export default HomeBlog;