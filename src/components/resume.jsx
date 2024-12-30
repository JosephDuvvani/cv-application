import html2pdf from "html2pdf.js"
import { useRef } from "react"

export default ({personal, work, education, skills, summary}) => {
    const docRef = useRef(null);

    const downloadPDF = () => {
        const doc = docRef.current;

        const opt = {
            margin: 0.5,
            filename: 'my-resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          };

        html2pdf().from(doc).set(opt).save();
    }

    return (
        <>
        <div className="resume-doc-container">
            <div ref={docRef} className="resume-doc">
                <header className="doc-header">
                    <h1 className="fullname">
                        {personal.firstname} {personal.lastname}
                    </h1>

                    <div className="profession">{personal.profession}</div>
                </header>

                <section className="doc-section">
                        <div className="title-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                            </svg>
                        </div>
                        <h2 className="title">Profile</h2>

                    <p className="section-content">{summary}</p>
                </section>
                <section className="doc-section">
                    <div className="title-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" />
                        </svg>                  
                    </div>

                    <h2 className="title">Work History</h2>

                    <ul className="section-content">
                        {
                            work.length > 0 &&
                            work.map(job => 
                                <li key={job.id} className="job">
                                    <h2 className="sub-title">{job.value.title} at {job.value.employer}, {job.value.location}</h2>
                                    <div className="job-span">{job.value.startDate} - {job.value.endDate}</div>
                                </li>
                            )
                        }
                    </ul>
                </section>

                <section className="doc-section html2pdf__page-break">
                    <div className="title-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                        </svg>
                    </div>
                    <h2 className="title">Education</h2>
                    <ul className="section-content">
                        {
                            education.length > 0 &&
                            education.map(school => 
                                <li key={school.id} className="school">
                                    <h2 className="sub-title">{school.value.degree} | {school.value.field}</h2>
                                    <h3 className="school-info">{school.value.name}, {school.value.location}</h3>
                                    <div className="grad-date">{school.value.gradDate}</div>
                                </li>
                            )
                        }
                    </ul>
                </section>

                <aside className="extra-info">
                    <div className="contacts">
                        <h3 className="sub-title">Contacts</h3>
                        <div className="phone">{personal.phone}</div>
                        <div className="email">{personal.email}</div>
                    </div>
                    <div className="skills">
                        <h3 className="sub-title">Skills</h3>
                        <ul className="doc-skills-list">
                            {
                                skills.map(skill => 
                                    <li key={skill.id} className="skills-list-item">
                                        <div className="skill">
                                            <span>{skill.value}</span>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
        
        <div className="download-btn-container">
            <button 
                className="btn download-btn"
                onClick={downloadPDF}
            >
                Download PDF
            </button>
        </div>
        </>
    )  
}