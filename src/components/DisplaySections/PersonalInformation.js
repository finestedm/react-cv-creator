import React from 'react';

export default class PersonalInformationSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, birthDate, phone, email, personalWebsite, aboutSelf } = this.props
        return (
            <>
                <div className='Heading p-2'>
                    <h1>{firstName.value} {lastName.value}</h1>
                    <h4>{birthDate.value}</h4>
                    <h5>Contact number: {phone.value}</h5>
                    <h5>E-mail address: {email.value}</h5>
                    <h5><u>{personalWebsite.value}</u></h5>
                </div>
                <div className='about-self p-2'>
                    <h6><u><i>About Self</i></u></h6>
                    <p>{aboutSelf.value}</p>               
                </div>
            </>
        )
    }

}