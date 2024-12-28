import { useState } from "react";

export default ({isActive, info, setInfo, populateStorage}) => {
    const [populate, setPopulate] = useState(false);

    function handleInput(e) {
        setInfo(e.target.value);
        setPopulate(true);
    }

    if (populate) {
        populateStorage();
        setPopulate(false);
    }

    return (
        <>
            {
                isActive ?
                    (
                        <div className="form-inputs-container form-inputs-container_summary">
                            <textarea 
                                className="summary-input"
                                aria-label="Tell us about your background"
                                onChange={e => handleInput(e)}
                                value={info}
                            >
                            </textarea>
                        </div>
                    ) :
                    null
            }
        </>
    )
}