

import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component {  
  render() {  
    return (  
        
        <div className='container-fluid p-0' >   
          <Carousel interval={2500} keyboard={false} pauseOnHover={true}>  
            <Carousel.Item  >  
              <img className="d-block w-100"  
              src='assets/images/carouselImg1.jpg' alt="img1" />  
              <Carousel.Caption>  
                <h3>Get expert advise </h3>  
              </Carousel.Caption>  
            </Carousel.Item >  
            <Carousel.Item >  
              <img className="d-block w-100"  
              src='assets/images/carouselImg2.jpg' alt="img3" />  
              <Carousel.Caption>  
                <h3>Take a look at our unique style</h3>  
              </Carousel.Caption>  
            </Carousel.Item>  
            <Carousel.Item >  
              <img className="d-block w-100"  
              src='assets/images/carouselImg3.jpg' alt="img3" />  
              <Carousel.Caption>  
                <h3>Explore our all new collection</h3>  
              </Carousel.Caption>  
            </Carousel.Item>  
          </Carousel>  
        </div>    
    )  
  }  
}  
  
export default BootstrapCarousel; 