import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Fly from '../assets/Fly.jpg';
import Sky from '../assets/Sky.jpg'

export default class CarouselBox extends Component {
    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                    className='d-block w-100 img-fluid'
                    src ={Fly}
                    alt = 'fly'
                    />
                    <Carousel.Caption>
                        <h3>frfredfe</h3>
                        <p>rferfgregergerger</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className='d-block w-100 img-fluid'
                    src ={Sky}
                    alt = 'fly'
                    />
                    <Carousel.Caption>
                        <h3>frfredfe</h3>
                        <p>rferfgregergerger</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className='d-block w-100 img-fluid'
                    src ={Fly}
                    alt = 'fly'
                    />
                    <Carousel.Caption>
                        <h3>frfredfe</h3>
                        <p>rferfgregergerger</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           
        )
    }
}
