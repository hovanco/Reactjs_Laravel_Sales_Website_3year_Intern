import React, { Component } from 'react';
import './Style_SlideAutoplay.css';
import ImageSlide from '../../images/a.jpg';
import ImageSlide1 from '../../images/shoe1.jpg';
import ImageSlide2 from '../../images/shoe3.jpg';


export default class SlideAutoplay extends Component {
  render() {
    return (
      <div className="start__body">
        <div className="abc">
          <div className="slider">
            <input name="input-slider" id="input-slide-0" type="radio" className="input-slide input-slide-num" />
            <input name="input-slider" id="input-slide-1" type="radio" className="input-slide input-slide-num" />
            <input name="input-slider" id="input-slide-2" type="radio" className="input-slide input-slide-num" />
            <input name="input-slider" id="input-slide-3" type="radio" className="input-slide input-slide-num" />
            <input name="input-slider" id="input-slide-autoplay" type="radio" className="input-slide" defaultChecked />
            <ul className="list__slide">
              <li className="slide-0" />
              <li className="slide-1" />
              <li className="slide-2" /> 
              <li className="slide-3" />        
            </ul>
            <div className="slide-description">
              <label className="slide-0">
                {/* <h1 className="text-slide">Pure CSS</h1> */}
                <img src={ImageSlide}></img>
              </label>
              <label className="slide-1">
                {/* <h1 className="text-slide">Pure CSS</h1> */}
                <img src={ImageSlide1}></img>
              </label>
              <label className="slide-2">
                {/* <h1 className="text-slide">Pure CSS</h1> */}
                <img src={ImageSlide2}></img>
              </label>
              <label className="slide-3">
                {/* <h1 className="text-slide">Pure CSS</h1> */}
                <img src={ImageSlide}></img>
              </label>
            </div>
            <div className="slider-arrow-prev">
              <label className="slide-0" htmlFor="input-slide-0" />
              <label className="slide-1" htmlFor="input-slide-1" />
              <label className="slide-2" htmlFor="input-slide-2" />
              <label className="slide-3" htmlFor="input-slide-3" />
            </div>
            <div className="slider-arrow-next">
              <label className="slide-0" htmlFor="input-slide-0" />
              <label className="slide-1" htmlFor="input-slide-1" />
              <label className="slide-2" htmlFor="input-slide-2" />
              <label className="slide-3" htmlFor="input-slide-3" />
            </div>        
            <div className="slider-dot">
              <label className="slide-0" htmlFor="input-slide-0" />
              <label className="slide-1" htmlFor="input-slide-1" />
              <label className="slide-2" htmlFor="input-slide-2" />
              <label className="slide-3" htmlFor="input-slide-3" />
            </div>        
          </div>
        </div>
      </div>
    )
  }
}
