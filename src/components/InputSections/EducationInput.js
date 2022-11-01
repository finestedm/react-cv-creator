import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default class EducationInput extends React.Component {

    render() {
        const { id, endDate, inSection, type, handleInput, deleteEntry, value, profile, achievements} = this.props;
        return (
            <div className='p-0 m-0 border rounded border-secondary mb-2'>
                <Row className='p-1 text-center'>
                    <Col>
                        <h6  className='mb-0'>School # {id}</h6>
                    </Col>
                </Row>
                <Row className='p-2'>
                    <InputGroup as={Col} size='sm' >
                        <InputGroup.Text>School name</InputGroup.Text>
                        <Form.Control
                            id={id}
                            type={type}
                            aria-label={id}
                            value = {value}
                            onChange={(e) => {
                                handleInput(e.target.value, id, inSection);
                            }}
                        />
                    </InputGroup>
                    <InputGroup as={Col} size='sm' >
                        <InputGroup.Text>Graduation date</InputGroup.Text>
                        <Form.Control
                            id={endDate}
                            type='date'
                            aria-label={endDate}
                            value={endDate}
                            onChange={(e) => {
                                handleInput(e.target.value, id, inSection, 'endDate');
                            }}
                        />
                    </InputGroup>
                </Row>
                <Row className="p-2">
                        <InputGroup as={Col} size='sm'>
                        <InputGroup.Text>Profile</InputGroup.Text>
                            <Form.Control
                            id={id}
                            type={type}
                            aria-label={id}
                            value={profile}
                            onChange={(e) => handleInput(e.target.value, id, inSection, 'profile')}
                        />
                    </InputGroup>
                </Row>
                <Row className="p-2">
                        <InputGroup as={Col} size='sm'>
                        <InputGroup.Text>Achievements</InputGroup.Text>
                            <Form.Control
                            id={id}
                            type={type}
                            aria-label={id}
                            value={achievements}
                            onChange={(e) => handleInput(e.target.value, id, inSection, 'achievements')}
                        />
                    </InputGroup>
                </Row>
                <Row className="p-2">
                    <Col className='d-grid'>
                        <Button
                            onClick={() => deleteEntry(id, inSection)}
                            className='btn-sm'
                            variant='outline-danger'>
                            Delete this education entry
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }

}