import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Fly from '../assets/1.jpg';
import Sky from '../assets/2.jpg';
import Sk from '../assets/3.jpg';


export default class CarouselBox1 extends Component {
    render () {
        return (
            <Carousel indicators={false}>
                <Carousel.Item>
                    <img 
                    className='d-block w-100 img-fluid'
                    src ={Fly}
                    alt = 'fly'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className='d-block w-100 img-fluid'
                    src ={Sky}
                    alt = 'fly'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className='d-block w-100 img-fluid'
                    src ={Sk}
                    alt = 'fly'
                    />
                </Carousel.Item>
                
            </Carousel>
           
        )
    }
}
