import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default class WorkInput extends React.Component {

    render() {
        const { id, startDate, endDate, inSection, type, handleInput, deleteEntry, value, description} = this.props;
        return (
            <div className='p-0 m-0 border border-secondary rounded mb-2'>
                <Row className='p-1 text-center'>
                    <Col>
                        <h6  className='mb-0'>Job # {id}</h6>
                    </Col>
                </Row>
                <Row className='p-2'>
                    <InputGroup as={Col} size='sm' >
                        <InputGroup.Text>Company name</InputGroup.Text>
                        <Form.Control
                            id={id}
                            type={type}
                            aria-label={id}
                            value={value}
                            onChange={(e) => {
                                handleInput(e.target.value, id, inSection);
                            }}
                        />
                    </InputGroup>
                    <InputGroup as={Col} size='sm' >
                        <InputGroup.Text>Time period</InputGroup.Text>
                        <Form.Control
                            id={startDate}
                            type='date'
                            aria-label={startDate}
                            value={startDate}
                            onChange={(e) => {
                                handleInput(e.target.value, id, inSection, 'startDate');
                            }}
                        />
    <                   Form.Control
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
                        <InputGroup.Text>Job description</InputGroup.Text>
                            <Form.Control
                            as="textarea"
                            id={id}
                            type={type}
                            aria-label={id}
                            value={description}
                            onChange={(e) => handleInput(e.target.value, id, inSection, 'description')}
                        />
                    </InputGroup>
                </Row>
                <Row className="p-2">
                    <Col className='d-grid'>
                        <Button
                            onClick={() => deleteEntry(id, inSection)}
                            className='btn-sm'
                            variant='outline-danger'>
                            Delete this job
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }

}