import { useState } from "react"

export default ({isActive, next, back, skills, setSkills}) => {
    const [ability, setAbility] = useState([]);

    function addSkill() {
        const id = crypto.randomUUID();
        setSkills([...skills, {value: '', id: id}]);
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
                    <button 
                        className="back-btn btn-strip"
                        onClick={back}
                    >
                        ← Go Back
                    </button>

                    <SkillFields abilities={skills} setList={setSkills} />

                    <button
                    type="button"
                        className={"add-btn add-skill-btn btn-strip" + (!isFull() ? " btn-disable" : "")} 
                        onClick={addSkill}                   
                    >
                        <span className="add-btn_icon">
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

function SkillFields({abilities, setList}) {
    function handleEdit(value, id) {
        let temp = [...abilities].map(skill => 
            skill = skill.id === id ? {...skill, value: value} : skill
        );
        setList(temp)
    }

    function handleDelete(id) {
        const temp = [...abilities].filter(skill => skill.id !== id)
        console.log(temp)
        setList(temp)
    }

    return (
        <ul className="skills-list">
            {
                abilities.map(skill => (
                    <li key={skill.id}>
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
                            className={"delete-btn delete-btn_skill"}
                            onClick={() => handleDelete(skill.id)}
                        >
                            delete
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}