import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.png';
import image3 from './assets/image3.jpg';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={image1} alt="img desc"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2}  alt="img desc"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3}  alt="img desc"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        )
    }
}

export default DemoCarousel;
