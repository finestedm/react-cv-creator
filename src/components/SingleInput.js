import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default class SingleInput extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { id, type, value, inSection, handleInput } = this.props;
        return (
            <Row>
                <InputGroup size='sm' className="mb-3">
                    <InputGroup.Text>{id}</InputGroup.Text>
                    <Form.Control
                        // placeholder={value}
                        id={id}
                        type={type}
                        aria-label={id}
                        onChange={(e) => {
                            handleInput(e.target.value, id, inSection);
                        }}
                    />
                </InputGroup>
            </Row>
        )
    }

}