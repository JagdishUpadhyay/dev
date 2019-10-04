import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export default class FormComponent extends React.Component {

    render() {
        return (
            <div className="container-fluid">
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
                        <Form.Check type="checkbox" label="Receive mails regarding this promotion" />
                    </Form.Group>
                    <div className="row" style={{ display: "flex", flex: 1 }}>
                        <div style={{ flex: 1 }}>
                            <Button variant="primary" type="submit">
                                Submit
            </Button>
                        </div>
                        <div style={{ flex: 1 }}>
                            <Button variant="secondary">
                                Cancel
            </Button>
                        </div>
                    </div>
                </Form>
            </div>)
    }
}