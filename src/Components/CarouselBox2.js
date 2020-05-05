import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Fly from '../assets/imgProduct/1.JPG';
import Sky from '../assets/imgProduct/2.JPG';
import Sk from '../assets/imgProduct/3.JPG';


export default class CarouselBox2 extends Component {
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
