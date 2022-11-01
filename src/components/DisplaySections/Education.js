import React from 'react';
import { Col, Row } from "react-bootstrap";

export default class Education extends React.Component {
    createSingleSchoolDiv(school) {
        return (
            <li>
                <Row>
                    <Col xs={4}>
                        <h5 className='mb-0'>{school.value}</h5>
                        <h6 className='mb-0'>{school.profile}</h6>
                        {school.endDate !== '' && <h6><small>Finished:  {school.endDate}</small></h6>}
                    </Col>
                    <Col>
                        <p className='col'> {school.achievements}</p>
                    </Col>
                </Row>
            </li>
        )
    }

    render() {
        const schools = { ...this.props }
        return (
            <>
                <h6 className='colored'><i>{Object.keys(schools).every(school => schools[0].value !== '' ) && 'Education'}<hr className='mt-0'></hr></i></h6>    {/*add heading only if first employer name has been added' */}
                <ol>
                    {Object.keys(schools).map(school => schools[school].value !== '' && this.createSingleSchoolDiv(schools[school]))}
                </ol>
            </>
        )
    }
}