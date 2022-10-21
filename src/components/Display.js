import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Row>
                <h1>{this.props.value}</h1>
            </Row>
        )
    }
}