import { act, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import Header from './components/header.jsx'
import Heading from './components/heading-inputs.jsx'
import Work, { WorkCards } from './components/work-inputs.jsx'
import Education, { SchoolCards } from './components/education-inputs.jsx'
import Skills from './components/skills-inputs.jsx'
import Summary from './components/summary-input.jsx'

function Main() {
  const [active, setActive] = useState(0);
  const [heading, setHeading] = useState({
    firstname: '',
    lastname: '',
    profession: '',
    phone: ' ',
    email: ' '
  });

  const [work, setWork] = useState([]);

  const [education, setEducation] = useState([]);

  const [skills, setSkills] = useState([]);

  const [summary, setSummary] = useState('');

  function handleNext() {
    setActive(active + 1);
  }
  function handleBack() {
    setActive(active - 1);
  }

  return (
    <main>
      <Header activeIndex = {active} />

      <section className='form-section'>
        {active === 1 && work.length > 0 && <WorkCards jobs={work} setJobs={setWork} />}
        {active === 2 && education.length > 0 && <SchoolCards study={education} setStudy={setEducation} />}

        <div className="form-container">
          <form action="">
              <Heading
                isActive = {active === 0}
                next = {handleNext}
                back = {handleBack}
                info = {heading}
                setInfo = {setHeading}
               />
              <Work
                isActive = {active === 1}
                next = {handleNext}
                back = {handleBack}
                jobs={work}
                setJobs={setWork}
               />
               <Education
                isActive = {active === 2}
                next = {handleNext}
                back = {handleBack}
                study={education}
                setStudy={setEducation}
               />
               <Skills
                isActive = {active === 3}
                next = {handleNext}
                back = {handleBack}
                skills={skills}
                setSkills={setSkills}
               />
               <Summary
                isActive = {active === 4}
                next = {handleNext}
                back = {handleBack}
                info = {summary}
                setInfo = {setSummary}
               />
          </form>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
)
