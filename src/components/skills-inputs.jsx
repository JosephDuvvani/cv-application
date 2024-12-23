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
                        <input type="text" aria-label="Skill" />
                    </label>

                    <button
                        className="add-skill-btn btn-strip"
                    >
                        <span className="add-skill-btn_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                            </svg>
                        </span>
                        Add a skill
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