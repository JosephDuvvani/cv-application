import { useState } from "react"

export default ({isActive, jobs, setJobs}) => {
    const [jobInfo, setInfo] = useState({
        title: '',
        employer: '',
        location: '',
        startDate: '',
        endDate: ''
    })
    const [formOpen, setFormOpen] = useState(jobs.length === 0);

    const inputs = document.querySelectorAll('.clear');

    function addJob() {
        const id = crypto.randomUUID();
        setJobs([...jobs, {value: jobInfo, id: id}]);
        for (let input of inputs) input.value = '';
        setInfo({
            title: '',
            employer: '',
            location: '',
            startDate: '',
            endDate: ''
        });
        setFormOpen(false)
    }

    return (
        <>
        {isActive && !formOpen &&
            <button type="button" className="add-more-btn" onClick={() => setFormOpen(true)}>
                <span className="add-btn_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                    </svg>
                </span>
                Add More Experience
            </button>
        }       
        { isActive && formOpen ? (
            <div className="form-inputs-container">
                <label className="label">
                    <span className="label-text">Job Title</span>
                    <input 
                        type="text"
                        className="clear"
                        placeholder="e.g. Jr Web Developer"
                        onChange={e => setInfo({...jobInfo, title: e.target.value})}
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
            </div>) : null}
        </>
    )
}

export function WorkCards({jobs, setJobs}) {
    function handleDelete(id) {
        const temp = [...jobs].filter(job => job.id !== id);
        setJobs(temp);       
    }

    return(
        <div className="cards">
            <ul className="card-list">
                {
                    jobs.map(job => 
                        <li key={job.id}>
                            <div className="work-card card">
                                <header className="card-header">
                                    <div className="card-title">{job.value.title}, {job.value.employer}</div>

                                    <div className="card-btns">

                                        <button
                                            type="button"
                                            className="card-btn btn-strip"
                                            onClick={() => handleDelete(job.id)}
                                        >
                                            <span className="card-btn-icon btn-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <title>delete</title>
                                                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                                            </svg>
                                            </span>
                                        </button>
                                    </div>
                                </header>
                                <div>{job.value.location} | {job.value.startDate} - {job.value.endDate}</div>
                            </div>
                        </li>
                    )
                }   
            </ul>
        </div>
    )
}