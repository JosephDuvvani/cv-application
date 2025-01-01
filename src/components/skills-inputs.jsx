import { useState } from "react"

export default ({isActive, skills, setSkills, populateStorage}) => {
    const [populate, setPopulate] = useState(false);

    function addSkill() {
        const id = crypto.randomUUID();
        setSkills([...skills, {value: '', id: id}]);
        setPopulate(true);
    }

    if (populate) {
        populateStorage();
        setPopulate(false);
    }
    
    function isFull() {
        for (let skill of skills) {
            if (skill.value === '') return false;
        }
        return true;
    }

    return (
        <>
            {isActive ?
                <div className="form-inputs-container">
                    <SkillFields
                        abilities={skills} 
                        setList={setSkills} 
                        populateStorage={populateStorage}
                    />

                    <button
                        type="button"
                        tabIndex={!isFull() ? -1 : 0}
                        className={"form-btn add-btn add-skill-btn" + (!isFull() ? " btn-disable" : "")} 
                        onClick={addSkill}                   
                    >
                        Add a skill
                    </button>
                </div> :
                null
            }
        </>
    )
}

function SkillFields({abilities, setList, populateStorage}) {
    const [populate, setPopulate] = useState(false);

    function handleEdit(value, id) {
        let temp = [...abilities].map(skill => 
            skill = skill.id === id ? {...skill, value: value} : skill
        );
        setList(temp)
        setPopulate(true)
    }

    function handleDelete(id) {
        const temp = [...abilities].filter(skill => skill.id !== id)
        console.log(temp)
        setList(temp)
        setPopulate(true)
    }

    if (populate) {
        populateStorage();
        setPopulate(false);
    }

    return (
        <ul className="skills-list">
            {
                abilities.map(skill => (
                    <li key={skill.id} className="skills-item">
                        <label className="label">
                            <input
                                type="text"
                                aria-label="Skill"                         
                                onChange={e => handleEdit(e.target.value, skill.id)}
                                value={skill.value}
                            />
                        </label>

                        <button
                            type="button"
                            className={"skill-delete-btn btn-strip"}
                            onClick={() => handleDelete(skill.id)}
                        >
                            <span className="btn-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <title>delete</title>
                                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                                </svg>
                            </span>
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}