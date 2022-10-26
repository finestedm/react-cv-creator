import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default class WorkInput extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { id, startDate, endDate, inSection, type, handleInput, deleteJob} = this.props;
        return (
            <div className='p-0 m-0 border rounded mb-4'>
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
                            onChange={(e) => {
                                handleInput(e.target.value, id, inSection, 'startDate');
                            }}
                        />
    <                   Form.Control
                            id={endDate}
                            type='date'
                            aria-label={endDate}
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
                            onChange={(e) => handleInput(e.target.value, id, inSection, 'description')}
                        />
                    </InputGroup>
                </Row>
                <Row className="p-2">
                    <Col className='d-grid'>
                        <Button
                            onClick={() => deleteJob(id)}
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