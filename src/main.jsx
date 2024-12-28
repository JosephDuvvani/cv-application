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
  //Local Storage
  const storeHeading = () => localStorage.setItem('heading', JSON.stringify(heading));

  const storeWork = () => localStorage.setItem('work', JSON.stringify(work));

  const storeEducation = () => localStorage.setItem('education', JSON.stringify(education));

  const storeSkills = () => localStorage.setItem('skills', JSON.stringify(skills));

  const storeSummary = () => localStorage.setItem('summary', summary);
 
  if (!localStorage.getItem('heading')) {
    const string = JSON.stringify({
      firstname: '',
      lastname: '',
      profession: '',
      phone: '',
      email: ''
    })
    localStorage.setItem('heading', string);
  }
  if (!localStorage.getItem('work')) localStorage.setItem('work', JSON.stringify([]));
  if (!localStorage.getItem('education')) localStorage.setItem('education', JSON.stringify([]));
  if (!localStorage.getItem('skills')) 
    localStorage.setItem('skills', JSON.stringify([{value: '', id: crypto.randomUUID()}]));
  if (!localStorage.getItem('summary')) localStorage.setItem('summary', '');

  const [active, setActive] = useState(0);

  const [heading, setHeading] = useState(JSON.parse(localStorage.getItem('heading')));

  const [work, setWork] = useState(JSON.parse(localStorage.getItem('work')));

  const [education, setEducation] = useState(JSON.parse(localStorage.getItem('education')));

  const [skills, setSkills] = useState(JSON.parse(localStorage.getItem('skills')));

  const [summary, setSummary] = useState(localStorage.getItem('summary'));

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
            populateStorage={storeWork}
          />}
        {active === 2 && education.length > 0 && 
          <SchoolCards 
            study={education} 
            setStudy={setEducation} 
            formOpen={schoolFormOpen}
            setFormOpen={setSchoolFormOpen}
            populateStorage={storeEducation}
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
                populateStorage={storeHeading}
               />
              <Work
                isActive = {active === 1}
                next = {handleNext}
                back = {handleBack}
                jobs={work}
                setJobs={setWork}
                formOpen={workFormOpen}
                setFormOpen={setWorkFormOpen}
                populateStorage={storeWork}
               />
               <Education
                isActive = {active === 2}
                next = {handleNext}
                back = {handleBack}
                study={education}
                setStudy={setEducation}
                formOpen={schoolFormOpen}
                setFormOpen={setSchoolFormOpen}
                populateStorage={storeEducation}
               />
               <Skills
                isActive = {active === 3}
                next = {handleNext}
                back = {handleBack}
                skills={skills}
                setSkills={setSkills}
                populateStorage={storeSkills}
               />
               <Summary
                isActive = {active === 4}
                next = {handleNext}
                back = {handleBack}
                info = {summary}
                setInfo = {setSummary}
                populateStorage={storeSummary}
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
