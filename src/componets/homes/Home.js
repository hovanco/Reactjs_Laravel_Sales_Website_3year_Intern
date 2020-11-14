import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import SlideAutoplay from '../slideshow/SlideAutoplay';
import '../slideshow/Style_SlideAutoplay.css';
class Home extends Component {
  render() {
    return (
      <>
        {/* <div className="home-containner"> */}
        <Navbar />
          {/* <h1>Home page</h1> */}
          {/* <SlideAutoplay /> */}
        {/* </div> */}
      </>
    )
  }
}
export default Home;
