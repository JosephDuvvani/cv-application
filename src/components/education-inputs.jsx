import { useState } from "react";

export default ({isActive, study, setStudy}) => {
        const [studyInfo, setInfo] = useState({
            name: '',
            location: '',
            degree: '',
            field: '',
            gradDate: ''
        })
        const [formOpen, setFormOpen] = useState(study.length === 0);
    
        const inputs = document.querySelectorAll('.clear');
    
        function handleAdd() {  
            const id = crypto.randomUUID()
            setStudy([...study, {value: studyInfo, id: id}]);
            for (let input of inputs) input.value = '';
            setInfo({
                name: '',
                location: '',
                degree: '',
                field: '',
                gradDate: ''
            })
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
                    Add another one 
                </button>
            }
            {isActive && formOpen ?
                <div className="form-inputs-container">
                    <label className="label">
                        <span className="label-text">School Name</span>
                        <input
                            type="text"
                            className="clear"
                            onChange={e => setInfo({...studyInfo, name: e.target.value})}
                            placeholder="e.g. Massachusetts Institute of Technology"
                        />
                    </label>

                    <label className="label">
                        <span className="label-text">School Location</span>
                        <input
                            type="text"
                            className="clear"
                            onChange={e => setInfo({...studyInfo, location: e.target.value})}
                            placeholder="e.g. Cambridge, Massachusetts"
                        />
                    </label>

                    <label className="label">
                        <span className="label-text">Degree</span>
                        <input
                            type="text"
                            className="clear"
                            onChange={e => setInfo({...studyInfo, degree: e.target.value})}
                            placeholder="e.g. Bachelor of Science"
                        />
                    </label>

                    <label className="label">
                        <span className="label-text">Field of Study</span>
                        <input
                            type="text"
                            className="clear"
                            onChange={e => setInfo({...studyInfo, field: e.target.value})}
                            placeholder="e.g. Computer Science"
                        />
                    </label>

                    <label className="label">
                        <span className="label-text">Graduation Date (Or Expected Graduation Date)</span>
                        <input
                            type="date"
                            className="clear"
                            onChange={e => setInfo({...studyInfo, gradDate: e.target.value})}
                        />
                    </label>

                    <button
                        type="button"
                        className="add-btn add-job-btn btn-strip"
                        onClick={handleAdd}
                    >
                        <span className="add-btn_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                                </svg>
                        </span>
                        Add Job
                    </button>
                </div> :
                null
            }
        </>
    )
}

export function SchoolCards({study, setStudy}) {
    function handleDelete(id) {
        const temp = [...study].filter(school => school.id !== id);
        setStudy(temp);
    }

    return (
        <div className="cards">
            <ul className="card-list">
                {
                    study.map(school => 
                        <li key={school.id}>
                            <div className="school-card card">
                                <header className="card-header">
                                    <div className="card-title">
                                        {school.value.degree} - {school.value.name} | {school.value.field}
                                    </div>                                  

                                    <div className="card-btns">
                                        <button
                                            type="button"
                                            className="card-btn  btn-strip"
                                            onClick={() => handleDelete(school.id)}
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
                                <div>{school.value.location} | {school.value.gradDate}</div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}