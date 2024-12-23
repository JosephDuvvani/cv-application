export default ({isActive, next, back}) => {
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
                    <input type="text" placeholder="e.g. Jr Web Developer" />
                </label>

                <label className="label">
                    <span className="label-text">Employer</span>
                    <input type="text" placeholder="e.g. Amazon" />
                </label>

                <label className="label">
                    <span className="label-text">Location</span>
                    <input type="text" placeholder="e.g. New York City, New york" />
                </label>

                <label className="label label_work-date">
                    <span className="label-text">Start Date</span>
                    <input type="date" />
                </label>

                <label className="label label_work-date">
                    <span className="label-text">End Date</span>
                    <input type="date" />
                </label>

                <button className="next-btn" onClick={next}>
                    Next: Education
                </button>
            </div>) : null}
        </>
    )
}