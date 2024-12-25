import { useState } from "react";

export default ({isActive, next, back, study, setStudy}) => {
        const [studyInfo, setInfo] = useState({
            schoolName: '',
            schoolLocation: '',
            degree: '',
            field: '',
            gradDate: ''
        })
    
        const inputs = document.querySelectorAll('.clear');
    
        function handleAdd() {
            setStudy([...study, studyInfo]);
            for (let input of inputs) input.value = '';
        }

    return (
        <>
            {isActive ?
                <div className="form-inputs-container">
                    <button 
                        className="back-btn btn-strip"
                        onClick={back}
                    >
                        ← Go Back
                    </button>

                    <label className="label">
                        <span className="label-text">School Name</span>
                        <input
                            type="text"
                            className="clear"
                            onChange={e => setInfo({...studyInfo, schoolName: e.target.value})}
                            placeholder="e.g. Massachusetts Institute of Technology"
                        />
                    </label>

                    <label className="label">
                        <span className="label-text">School Location</span>
                        <input
                            type="text"
                            className="clear"
                            onChange={e => setInfo({...studyInfo, schoolLocation: e.target.value})}
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

                    <button
                        className="next-btn"
                        onClick={next}
                    >
                        Next: Skills
                    </button>
                </div> :
                null
            }
        </>
    )
}