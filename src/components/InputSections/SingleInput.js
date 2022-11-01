import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';

export default class SingleInput extends React.Component {
    render() {
        const { id, type, inSection, description, handleInput, value } = this.props;
        return (
                <Col xs={12} className='m-0 p-0 '>
                    <InputGroup size='sm' className="mb-2">
                        <InputGroup.Text>{description}</InputGroup.Text>
                        <Form.Control
                            value={value}
                            id={id}
                            type={type}
                            aria-label={id}
                            onChange={(e) => {
                                handleInput(e.target.value, id, inSection);
                            }}
                        />
                    </InputGroup>
                </Col>
        )
    }

}