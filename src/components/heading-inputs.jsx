import '../styles/inputs.css';

export default ({isActive, next}) => {
    return (
        <>
        {isActive ?
            (<div className="form-inputs-container">
            <label className="label">
                <span className="label-text">First Name</span>
                <input
                    type="text" 
                    placeholder="e.g. Peter"
                />
            </label>

            <label className="label">
                <span className="label-text">Last Name</span>
                <input
                    type="text"
                    placeholder="e.g. Quill"
                />
            </label>

            <label className="label profession-label">
                <span className="label-text">Profession</span>
                <input
                    type="text"
                    placeholder="e.g. Jr. Web Developer"
                />
            </label>

            <label className="label">
                <span className="label-text">Phone</span>
                <input
                    type="tel"
                />
            </label>

            <label className="label">
                <span className="label-text">Email</span>
                <input
                    type="email"
                    placeholder="e.g. peterquill@yahoo.com"
                />
            </label>

            <button className='next-btn' onClick={next}>
                Next: Work History
            </button>
        </div>) : null}
        </>
    )
}