import React from 'react';

export default class WorkExperienceSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstJob, firstJobStartDate, firstJobEndDate} = this.props
        return (
            <>
                <h3>{firstJob.value}</h3>
                <h4>{firstJobStartDate.value} - {firstJobEndDate.value}</h4>

            </>
        )
    }

}