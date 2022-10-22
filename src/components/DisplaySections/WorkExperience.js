import React from 'react';

export default class WorkExperienceSection extends React.Component {
    constructor(props) {
        super(props);
    }

    createSingleJobDiv(job) {
        return (
            <>
                <h3>{job.value}</h3>
                <h4>{job.startDate} - {job.endDate}</h4>
            </>
        )
    }

    render() {
        const jobs = { ...this.props }
        return (
                Object.keys(jobs).map(job => this.createSingleJobDiv(jobs[job]))
                )
    }
}