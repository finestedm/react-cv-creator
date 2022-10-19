import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Display(props) {
    return (
        <Container>
            <InputGroup className="mb-3">
                <InputGroup.Text id="first-name-input">First Name </InputGroup.Text>
                <Form.Control
                    placeholder="First Name"
                    aria-label="First Name"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="last-name-input">Last Name </InputGroup.Text>
                <Form.Control
                    placeholder="Last Name"
                    aria-label="Last Name"
                />
            </InputGroup>
        </ Container>
    )
}