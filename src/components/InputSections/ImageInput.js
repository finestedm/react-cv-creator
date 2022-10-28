import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class ImageInput extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Col xs={12} className='m-0 p-0'>
                <InputGroup size='sm' className="mb-2">
                    <InputGroup.Text>Your Photo</InputGroup.Text>
                    <Form.Control
                        id='photo-upload'
                        type='file'
                        aria-label='photo-upload'
                        onChange={(e) => this.props.handlePhotoUpload(e)}
                    />
                </InputGroup>
            </Col>
        )
    }

}