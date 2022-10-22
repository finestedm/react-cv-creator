import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default class WorkInput extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { id, startDate, endDate, inSection, type, handleInput } = this.props;
        return (
            <Row className="mb-3">
                <InputGroup as={Col} size='sm' className="mb-0">
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
                <InputGroup as={Col} size='sm'>
                    <InputGroup.Text>Working time period</InputGroup.Text>
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
        )
    }

}