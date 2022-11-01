import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class PersonalInformationSection extends React.Component {

    render() {
        const {photo} = this.props
        return (
            <div>
                <Row >
                    <Col className='Heading p-2'>
                        <h2 className='colored'>{this.props[0].value} {this.props[1].value}</h2>
                        <h6><small>{this.props[2].value !== '' && 'Contact number:  '} </small> {this.props[2].value}</h6>
                        <h6><small>{this.props[3].value !== '' && 'E-mail address:  '} </small>  {this.props[3].value}</h6>
                        <h6><small>{this.props[4].value !== '' && 'My website:  '} </small><u>{this.props[4].value}</u></h6>
                    </Col>
                    <Col xs={4} className='Heading p-2'>
                        {photo !== undefined && <img className='person-photo float-end' src={photo} alt="your portrait"></img>}   {/*generate this element only if photo is uploaded (defined))*/}
                    </Col>
                </Row>
                <Row>
                    <Col className='about-self p-2'>
                        <h6 className='colored'><i>{this.props[5].value !== '' && 'About Self'} <hr className='mt-0'></hr> </i></h6>
                        <p>{this.props[5].value}</p>               
                    </Col>
                </Row>
            </div>
        )
    }

}