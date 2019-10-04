import React from 'react';
import { Carousel } from 'react-bootstrap';

export default class CarouselComponent extends React.Component {

    constructor(props){
        super(props);
        this.enableControls = this.enableControls.bind(this);
    }

    enableControls(id) {
        var video = document.getElementById(id);
        if (video.hasAttribute("controls")) {
            video.removeAttribute("controls")   
         } else {
            video.setAttribute("controls","controls")   
         }
    }

    handleSelect(selectedIndex, e) {
        const video = document.getElementsByTagName("video");
        if (video) {
            for (var i = 0, len = video.length; i < len; i++) {
                if (video[i] != e.target) {
                    video[i].pause();
                }
            }
        }
    };

    render() {
        return (
            <Carousel onSelect={this.handleSelect}>
                {this.props.links && this.props.links.map((link, index) => {
                    if (link.type == 'image') {
                        return (<Carousel.Item>
                            <img className="casouselImage" src={link.src} />
                        </Carousel.Item>)
                    } else {
                        return (<Carousel.Item>
                            <div class="video-thumbnail" onClick={() => this.enableControls(`carouselVideo_${index}`)}>
                            <video width="100%" height="350" id={`carouselVideo_${index}`}>
                                <source src={link.src} type="video/mp4" />
                            </video>
                            </div>
                        </Carousel.Item>)
                    }
                })}
            </Carousel>)
    }
}