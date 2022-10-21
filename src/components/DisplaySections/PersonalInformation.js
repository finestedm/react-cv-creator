import React from 'react';

export default class PersonalInformationSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, birthDate, email, personalWebsite } = this.props
        return (
            <>
                <h1>{firstName.value} {lastName.value}</h1>
                <h2>{birthDate.value}</h2>
                <h2>{email.value}</h2>
                <h2>{personalWebsite.value}</h2>
            </>
        )
    }

}