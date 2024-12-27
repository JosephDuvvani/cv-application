import { useState } from "react"

export default ({isActive, jobs, setJobs, formOpen, setFormOpen}) => {
    const [jobInfo, setInfo] = useState({
        title: '',
        employer: '',
        location: '',
        startDate: '',
        endDate: ''
    });

    const inputs = document.querySelectorAll('.clear');

    function addJob() {
        if (jobInfo.title === '') {
            document.querySelector('.label_job-title').classList.toggle('error', true);
            return;
        }

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

    if (jobInfo.title !== '') document.querySelector('.label_job-title').classList.toggle('error', false);

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
            <Inputs jobInfo={jobInfo} setInfo={setInfo} />

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

function Inputs({jobInfo, setInfo}) {
    function handleTitleChange(e) {
        setInfo({...jobInfo, title: e.target.value})

        if (e.target.value !== '')
            document.querySelector('.label_job-title').classList.toggle('error', false);
    }

    return ( 
        <>     
            <label className="label label_job-title validate">
                <span className="label-text">Job Title *</span>
                <input 
                    type="text"
                    className="clear"
                    placeholder="e.g. Jr Web Developer"
                    value={jobInfo.title}
                    onChange={e => handleTitleChange(e)}
                    required
                />
                <span className="error-message">You must enter your job title</span>
            </label>

            <label className="label">
                <span className="label-text">Employer</span>
                <input 
                    type="text"
                    className="clear" 
                    placeholder="e.g. Amazon"
                    value={jobInfo.employer}
                    onChange={e => setInfo({...jobInfo, employer: e.target.value})}
                />
            </label>

            <label className="label">
                <span className="label-text">Location</span>
                <input 
                    type="text"
                    className="clear"
                    placeholder="e.g. New York City, New york"
                    value={jobInfo.location}
                    onChange={e => setInfo({...jobInfo, location: e.target.value})}
                />
            </label>

            <label className="label">
                <span className="label-text">Start Date</span>
                <input 
                    type="date"
                    className="clear"
                    value={jobInfo.startDate.split("/").join("-")}
                    onChange={e => setInfo({...jobInfo, startDate: e.target.value})}
                />
            </label>

            <label className="label">
                <span className="label-text">End Date</span>
                <input 
                    type="date"
                    className="clear"
                    value={jobInfo.endDate.split("/").join("-")}
                    onChange={e => setInfo({...jobInfo, endDate: e.target.value})}
                />
            </label>
    </>
    )
}

export function WorkCards({jobs, setJobs, formOpen, setFormOpen}) {
    const [editId, setEditId] = useState('');
    const [jobInfo, setInfo] = useState({
        title: '',
        employer: '',
        location: '',
        startDate: '',
        endDate: ''
    });
  
    function handleDelete(id) {
        const temp = [...jobs].filter(job => job.id !== id);
        setJobs(temp);
        if (jobs.length === 1) setFormOpen(true);    
    }

    function showEdit(job) {
        setInfo(job.value);
        setFormOpen(false);
        setEditId(job.id);
    }

    if (formOpen && editId !== '') setEditId('');

    function saveEdit(id) {
        if (jobInfo.title === '') {
            document.querySelector('.label_job-title').classList.toggle('error', true);
            return;
        }

        const temp = [...jobs].map(job => 
            job.id === id ? job = {...job, value: jobInfo} : job
        )
        setJobs(temp);
        setEditId('');
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
                                            className="card-btn card-btn_edit btn-strip"
                                            onClick={() => showEdit(job)}
                                        >
                                            <span className="card-btn-icon btn-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <title>square-edit-outline</title>
                                                    <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
                                                </svg>
                                            </span>
                                        </button>

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

                                {
                                    editId === job.id &&
                                    <form action="" className="edit-form">
                                        <Inputs jobInfo={jobInfo} setInfo={setInfo} />
                                        <div className="edit-btns">
                                            <button 
                                                type="button"
                                                className="save-edit-btn"
                                                onClick={() => saveEdit(job.id)}
                                            >
                                                Save                                          
                                            </button>

                                            <button 
                                                type="button"
                                                className="cancel-edit-btn"
                                                onClick={() => setEditId('')}
                                            >
                                                Cancel                                          
                                            </button>
                                        </div>
                                    </form>  
                                }
                            </div>
                        </li>
                    )
                }   
            </ul>
        </div>
    )
}