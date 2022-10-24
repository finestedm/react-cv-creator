import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class PersonalInformationSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, phone, email, personalWebsite, aboutSelf, photo } = this.props
        return (
            <div>
                <Row >
                    <Col className='Heading p-2'>
                        <h2>{firstName.value} {lastName.value}</h2>
                        <h6><small>{phone.value !== '' && 'Contact number:  '} </small> {phone.value}</h6>
                        <h6><small>{email.value !== '' && 'E-mail address:  '} </small>  {email.value}</h6>
                        <h6><small>{personalWebsite.value !== '' && 'My website:  '} </small><u>{personalWebsite.value}</u></h6>
                    </Col>
                    <Col xs={4} className='Heading p-2'>
                        {photo !== undefined && <img className='person-photo float-end' src={photo}></img>}   {/*generate this element only if photo is uploaded (defined))*/}
                    </Col>
                </Row>
                <Row>
                    <Col className='about-self p-2'>
                        <h6><u><i>{aboutSelf.value !== '' && 'About Self'}</i></u></h6>
                        <p>{aboutSelf.value}</p>               
                    </Col>
                </Row>
            </div>
        )
    }

}