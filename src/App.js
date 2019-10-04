import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CarouselComponent from './CarouselComponent';
import CardComponent from './CardComponent';
import SlickComponent from './SlickComponent';
import './App.scss';
import NewsComponent from './NewsComponent';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CarouselComponent />
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
        {/* <div className="container-fluid">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="formId">
            <Form.Label>Employee Id</Form.Label>
            <Form.Control type="text" placeholder="Employee Id" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Employee Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="row" style={{display: "flex", flex:1}}>
            <div style={{flex:1 }}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </div>
            <div style={{flex:1 }}>
            <Button variant="secondary">
              Cancel
            </Button>
            </div>
          </div>
        </Form>
        </div> */}
        </div>
    );
  }
}