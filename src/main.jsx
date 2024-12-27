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
    phone: '',
    email: ''
  });

  const tempWork = [
    {
      id: '101',
      value: {
        title: 'Web Dev',
        employer: 'Google',
        location: 'London (remote)',
        startDate: '2025/06/04',
        endDate: '2027/06/01'
      }
  },
    {
      id: '102',
      value: {
        title: 'Software Developer',
        employer: 'Meta',
        location: 'London (remote)',
        startDate: '2025/06/04',
        endDate: '2027/06/01'
      }
    }
  ]

  const tempStudy = [
    {
      id: '101',
      value: {
        name: 'UCT',
        location: 'Cape Town, SA',
        degree: 'BSc',
        field: 'Computer Science',
        gradDate: '2018/03/12'
      }
  },
    {
      id: '102',
      value: {
        name: 'UJ',
        location: 'Johannesburg, SA',
        degree: 'BSc',
        field: 'IT',
        gradDate: '2020/02/05'
      }
    }
  ]  

  const [work, setWork] = useState([...tempWork]);

  const [education, setEducation] = useState([...tempStudy]);

  const [skills, setSkills] = useState([{value: '', id: crypto.randomUUID()}]);

  const [summary, setSummary] = useState('');

  const [workFormOpen, setWorkFormOpen] = useState(work.length === 0);

  const [schoolFormOpen, setSchoolFormOpen] = useState(education.length === 0);

  function isEmailValid() {
    const regEx = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);

    if (!heading.email.match(regEx)) return false;
    return true;
  }

  function handleNext() {
    if (active === 0 && isEmailValid()) {
      setActive(active + 1);
      document.querySelector('.label_email').classList.toggle('error', false);
    } else if (active === 0 && !isEmailValid()) {
      document.querySelector('.label_email').classList.toggle('error', true);
    } else {
      setActive(active + 1);
    }
  }
  function handleBack() {
    setActive(active - 1);
  }

  return (
    <main>
      <Header activeIndex = {active} />

      <section className='form-section'>
        {active > 0 &&
          <div className="direction-btn-container">
            <button 
                className="back-btn btn-strip"
                onClick={handleBack}
            >
                ← Go Back
            </button>
          </div>}
        {active === 1 && work.length > 0 && 
          <WorkCards 
            jobs={work} 
            setJobs={setWork} 
            formOpen={workFormOpen} 
            setFormOpen={setWorkFormOpen} 
          />}
        {active === 2 && education.length > 0 && 
          <SchoolCards 
            study={education} 
            setStudy={setEducation} 
            formOpen={schoolFormOpen}
            setFormOpen={setSchoolFormOpen}
          />}

        <div className="form-container">
          <form action="">
              <Heading
                isActive = {active === 0}
                next = {handleNext}
                back = {handleBack}
                info = {heading}
                setInfo = {setHeading}
                isEmailValid={isEmailValid}
               />
              <Work
                isActive = {active === 1}
                next = {handleNext}
                back = {handleBack}
                jobs={work}
                setJobs={setWork}
                formOpen={workFormOpen}
                setFormOpen={setWorkFormOpen}
               />
               <Education
                isActive = {active === 2}
                next = {handleNext}
                back = {handleBack}
                study={education}
                setStudy={setEducation}
                formOpen={schoolFormOpen}
                setFormOpen={setSchoolFormOpen}
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

        <div className="direction-btn-container">
        <button
          type="button"
          className="next-btn"
          onClick={handleNext}
        >
          {active === 4 ?
           "Finish" :
           "Next: "} 
           {active === 0 && "Work"}
           {active === 1 && "Education"}
           {active === 2 && "Skills"}
           {active === 3 && "Summary"}
        </button>
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
