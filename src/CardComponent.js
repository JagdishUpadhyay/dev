import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import FormComponent from './FormComponent';

export default class CardComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/news1.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: '#f05625' }}>Media Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card style={{ width: '18rem' }}>
                            <video height="350" controls autoplay>
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
                            </video>

                            <Card.Body>
                                <Card.Title style={{ color: '#f05625' }}>Media Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <div style={{ margin: '10px' }}>
                                    <video height="150" controls autoplay>
                                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                                    </video>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <Card style={{ width: '18rem' }}>
                        <div className="col-md-3">
                            <Card.Body>

                                <div style={{ margin: '10px' }}>
                                    <video height="150" controls autoplay>
                                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                                    </video>
                                </div>
                                <Button variant="primary"><Link to="/details">Fill Survey</Link></Button>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}