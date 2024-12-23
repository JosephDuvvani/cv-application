export default ({isActive, next, back}) => {
    return (
        <>
            {
                isActive ?
                    (
                        <div className="form-inputs-container form-inputs-container_summary">
                            <button 
                                className="back-btn btn-strip"
                                onClick={back}
                            >
                                ← Go Back
                            </button>

                            <div 
                                className="summary-input"
                                role="textbox"
                                contentEditable
                                aria-label="Tell us about your background"
                            >
                            </div>

                            <button 
                                className="next-btn"
                                onClick={next}
                            >
                                Finish
                            </button>
                        </div>
                    ) :
                    null
            }
        </>
    )
}