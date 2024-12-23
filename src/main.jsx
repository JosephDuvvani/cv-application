import { act, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import Header from './components/header.jsx'
import Heading from './components/heading-inputs.jsx'
import Work from './components/work-inputs.jsx'
import Education from './components/education-inputs.jsx'
import Skills from './components/skills-inputs.jsx'
import Summary from './components/summary-input.jsx'

function Main() {
  const [active, setActive] = useState(0);

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
        <div className="form-container">
          <form action="">
              <Heading
                isActive = {active === 0}
                next = {handleNext}
                back = {handleBack}
               />
              <Work
                isActive = {active === 1}
                next = {handleNext}
                back = {handleBack}
               />
               <Education
                isActive = {active === 2}
                next = {handleNext}
                back = {handleBack}
               />
               <Skills
                isActive = {active === 3}
                next = {handleNext}
                back = {handleBack}
               />
               <Summary
                isActive = {active === 4}
                next = {handleNext}
                back = {handleBack}
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
