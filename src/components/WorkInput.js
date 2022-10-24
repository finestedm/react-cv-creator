import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default class WorkInput extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { id, startDate, endDate, inSection, type, handleInput } = this.props;
        return (
            <div className='p-0 m-0'>
            <Row >
                <InputGroup as={Col} size='sm' className="mb-2">
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
                <InputGroup as={Col} size='sm' className="mb-2">
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
            <Row>
                    <InputGroup as={Col} size='sm' className="mb-4">
                    <InputGroup.Text>Job description</InputGroup.Text>
                        <Form.Control
                        as="textarea"
                        id={id}
                        type={type}
                        aria-label={id}
                        onChange={(e) => {
                            handleInput(e.target.value, id, inSection, 'description');
                        }}
                    />
                </InputGroup>
                </Row>
            </div>
        )
    }

}