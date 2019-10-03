import React from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css';
import $ from "jquery";

export default class CarouselComponent extends React.Component {

    // componentDidMount() {
    //     $('#mixCarousel').carousel({
    //         interval: 3000
    //     }).on('slide.bs.carousel', function () {
    //         debugger;
    //         document.getElementById('player').pause();
    //     });
    // }

    render() {
        return (
            <Carousel id="mixCarousel">
                <Carousel.Item>
                    <img className="casouselImage" src="/image1.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <video width="100%" height="350" controls autoplay>
                        <source src="https://seritiza.com/wp-content/uploads/2017/11/BusinessDay_TV_09_Oct_17_17.10.mp4?_=1" type="video/mp4" />
                    </video>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="casouselImage" src="/image3.jpg" />
                </Carousel.Item>

                <Carousel.Item>
                    <video width="100%" height="350" controls autoplay>
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                    </video>

                </Carousel.Item>

            </Carousel>)
    }
}