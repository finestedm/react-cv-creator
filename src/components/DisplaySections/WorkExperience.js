import React from 'react';

export default class WorkExperienceSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstJob, firstJobStartDate, firstJobEndDate} = this.props
        return (
            <>
                <h1>{firstJob.value}</h1>
                <h2>{firstJobStartDate.value} - {firstJobEndDate.value}</h2>

            </>
        )
    }

}