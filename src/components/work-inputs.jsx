import { useState } from "react"

export default ({isActive, next, back, jobs, setJobs}) => {
    const [jobInfo, setInfo] = useState({
        jobTitle: '',
        employer: '',
        location: '',
        startDate: '',
        endDate: ''
    })

    const inputs = document.querySelectorAll('.clear');

    function addJob() {
        setJobs([...jobs, jobInfo]);
        for (let input of inputs) input.value = '';
    }

    return (
        <>
        { isActive ? (
            <div className="form-inputs-container">
                <button 
                    className='back-btn btn-strip' 
                    onClick={back}
                >
                    ← Go Back
                </button>

                <label className="label">
                    <span className="label-text">Job Title</span>
                    <input 
                        type="text"
                        className="clear"
                        placeholder="e.g. Jr Web Developer"
                        onChange={e => setInfo({...jobInfo, jobTitle: e.target.value})}
                    />
                </label>

                <label className="label">
                    <span className="label-text">Employer</span>
                    <input 
                        type="text"
                        className="clear" 
                        placeholder="e.g. Amazon"
                        onChange={e => setInfo({...jobInfo, employer: e.target.value})}
                    />
                </label>

                <label className="label">
                    <span className="label-text">Location</span>
                    <input 
                        type="text"
                        className="clear"
                        placeholder="e.g. New York City, New york"
                        onChange={e => setInfo({...jobInfo, location: e.target.value})}
                    />
                </label>

                <label className="label label_work-date">
                    <span className="label-text">Start Date</span>
                    <input 
                        type="date"
                        className="clear"
                        onChange={e => setInfo({...jobInfo, startDate: e.target.value})}
                    />
                </label>

                <label className="label label_work-date">
                    <span className="label-text">End Date</span>
                    <input 
                        type="date"
                        className="clear"
                        onChange={e => setInfo({...jobInfo, endDate: e.target.value})}
                    />
                </label>

                <button
                    type="button"
                    className="add-btn add-job-btn btn-strip"
                    onClick={addJob}
                >
                    <span className="add-btn_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                            </svg>
                    </span>
                    Add Job
                </button>

                <button className="next-btn" onClick={next}>
                    Next: Education
                </button>
            </div>) : null}
        </>
    )
}