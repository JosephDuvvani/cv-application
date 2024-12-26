export default ({isActive, setInfo}) => {
    return (
        <>
            {
                isActive ?
                    (
                        <div className="form-inputs-container form-inputs-container_summary">
                            <div 
                                className="summary-input"
                                role="textbox"
                                contentEditable
                                aria-label="Tell us about your background"
                                onInput={e => setInfo(e.target.textContent)}
                            >
                            </div>
                        </div>
                    ) :
                    null
            }
        </>
    )
}