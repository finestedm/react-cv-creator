import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default class SkillInput extends React.Component {

    render() {
        const { id, inSection, handleInput, deleteEntry, value, level } = this.props;
        return (
            <div className='p-0 mb-2 '>
                <Row className='p-0 mb-2 '>
                    <InputGroup as={Col} size='sm' >
                        <InputGroup.Text>{id}</InputGroup.Text>
                        <Form.Control
                            id={id}
                            type='text'
                            aria-label={id}
                            value={value}
                            onChange={(e) => {
                                handleInput(e.target.value, id, inSection);
                            }}
                        />
                    </InputGroup>
                    <Col className='border border-primary rounded d-flex align-items-center'>
                        <input
                            type="range"
                            className="form-range"
                            min="1"
                            max="5"
                            id={id}
                            value={level}
                            onChange={(e) => {
                                handleInput(e.target.value, id, inSection, 'level')
                            }}
                        >
                            </input>
                    </Col>
                    <Col xs={2} className='d-grid'>
                        <Button
                            onClick={() => deleteEntry(id, inSection)}
                            className='btn-sm'
                            variant='outline-danger'>
                            ✖
                        </Button>
                    </Col>
                </Row>
                </div>
        )
    }
}