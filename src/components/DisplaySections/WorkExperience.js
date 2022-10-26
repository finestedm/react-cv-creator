import React from 'react';
import { Col, Row } from "react-bootstrap";

export default class WorkExperienceSection extends React.Component {
    constructor(props) {
        super(props);
    }

    createSingleJobDiv(job) {
        return (
            <li>
                <Row>
                    <Col xs={4}>
                        <h5 className='mb-0'>{job.value}</h5>
                        <h6><small>{job.startDate} - {job.endDate}</small></h6>
                    </Col>
                    <Col>
                        <p className='col'> {job.description}</p>
                    </Col>
                </Row>
            </li>
        )
    }

    render() {
        const jobs = { ...this.props }
        return (
            <>
                <h6 className='colored'><i>{Object.keys(jobs).every(job => jobs[0].value !== '') && 'Work experience'}<hr className='mt-0'></hr></i></h6>    {/*add 'Work Experience heading only if first employer name has been added' */}
                <ol>
                    {Object.keys(jobs).map(job => jobs[job].value !== '' && this.createSingleJobDiv(jobs[job]))}
                </ol>
            </>
        )
    }
}