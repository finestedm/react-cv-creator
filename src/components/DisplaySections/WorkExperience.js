import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class WorkExperienceSection extends React.Component {
    constructor(props) {
        super(props);
    }

    createSingleJobDiv(job) {
        return (
            <Row className='d-flex flex-row justify-content-start'>
                <Col>
                    <h5>{job.value}</h5>
                    <h6> {job.startDate} - {job.endDate}</h6>
                </Col>
                <Col xs={8}>
                    <p className='col '> {job.description}</p>
                </Col>
            </Row>
        )
    }

    render() {
        const jobs = { ...this.props }
        return (
            <>
                <h4><u><i>Work experience</i></u></h4>
                {Object.keys(jobs).map(job => this.createSingleJobDiv(jobs[job]))}
            </>    )
    }
}