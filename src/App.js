import React from 'react';
import CarouselComponent from './CarouselComponent';
import CardComponent from './CardComponent';
import SlickComponent from './SlickComponent';
import './App.scss';
import NewsComponent from './NewsComponent';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carouselLinks: null
    };
  }

  componentDidMount() {
    const links = this.getCarouselLinks();
    this.setState({ carouselLinks: links });
  }

  getCarouselLinks() {
    return  [{ type: 'image', src: '/image1.jpg' },
    { type: 'video', src: 'https://seritiza.com/wp-content/uploads/2017/11/BusinessDay_TV_09_Oct_17_17.10.mp4?_=1' },
    { type: 'image', src: '/image2.jpg' },
    { type: 'video', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }];
  }

  render() {
    return (
      <div>
        <CarouselComponent links={this.state.carouselLinks}/>
        <div className="news-comps" style={{ backgroundImage: 'url(/seriti-news-1.jpg)' }}>
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-10 offset-md-1">
        <NewsComponent />
        </div>
        </div></div></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div className="col-md-1"></div>
        <div style={{ marginTop: "35px" }}>        
        <CardComponent />
        <SlickComponent />
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}