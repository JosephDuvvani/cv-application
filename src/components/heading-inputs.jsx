import '../styles/inputs.css';

export default ({isActive, info, setInfo}) => {
    function handleChange(e) {
        setInfo({ ...info, [e.target.name]: e.target.value });
      }
    return (
        <>
        {isActive ?
            (<div className="form-inputs-container">
            <label className="label">
                <span className="label-text">First Name</span>
                <input
                    type="text" 
                    placeholder="e.g. Peter"
                    name='firstname'
                    value={info.firstname}
                    onChange={handleChange}
                />
            </label>

            <label className="label">
                <span className="label-text">Last Name</span>
                <input
                    type="text"
                    placeholder="e.g. Quill"
                    name='lastname'
                    value={info.lastname}
                    onChange={handleChange}
                />
            </label>

            <label className="label profession-label">
                <span className="label-text">Profession</span>
                <input
                    type="text"
                    placeholder="e.g. Jr. Web Developer"
                    name='profession'
                    value={info.profession}
                    onChange={handleChange}
                />
            </label>

            <label className="label">
                <span className="label-text">Phone</span>
                <input
                    type="tel"
                    name='phone'
                    value={info.phone}
                    onChange={handleChange}
                />               
            </label>

            <label className="label">
                <span className="label-text">Email</span>
                <input
                    type="email"
                    placeholder="e.g. peterquill@yahoo.com"
                    name='email'
                    value={info.email}
                    onChange={handleChange}
                />
            </label>
        </div>) : null}
        </>
    )
}