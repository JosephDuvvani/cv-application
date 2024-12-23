export default ({isActive, next, back}) => {
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
                        <input type="text" placeholder="e.g. Massachusetts Institute of Technology" />
                    </label>

                    <label className="label">
                        <span className="label-text">School Location</span>
                        <input type="text" placeholder="e.g. Cambridge, Massachusetts" />
                    </label>

                    <label className="label">
                        <span className="label-text">Degree</span>
                        <input type="text" placeholder="e.g. Bachelor of Science" />
                    </label>

                    <label className="label">
                        <span className="label-text">Field of Study</span>
                        <input type="text" placeholder="e.g. Computer Science" />
                    </label>

                    <label className="label">
                        <span className="label-text">Graduation Date (Or Expected Graduation Date)</span>
                        <input type="date" />
                    </label>

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