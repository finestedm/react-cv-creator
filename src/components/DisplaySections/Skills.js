import React from 'react';
import { Col, Row } from "react-bootstrap";

export default class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    createSingleSkillDiv(skill) {
        const skillLevelCalculatedToPercents = (skill.level * 20 + '%');
        return (
            <li>
                <Row>
                    <Col className='d-flex flex-row p-1 align-items-center'>
                        <span className='h5 mb-0 col-4'>{skill.value}</span>
                        <span className="progress col-7 " >
                            <div className="progress-bar" role="progressbar" style={{ width: skillLevelCalculatedToPercents}} aria-valuenow='0' aria-valuemin="0" aria-valuemax="100"></div>
                        </span>
                    </Col>
                </Row>
            </li>
        )
    }

    render() {
        const skills = { ...this.props }
        return (
            <>
                <h6 className='colored'><i>{Object.keys(skills).every(skill => skill[0].value !== '' ) && 'Skills'}<hr className='mt-0'></hr></i></h6>    {/*add heading only if first employer name has been added' */}
                <ul>
                    {Object.keys(skills).map(skill => skills[skill].value !== '' && this.createSingleSkillDiv(skills[skill]))}
                </ul>
            </>
        )
    }
}