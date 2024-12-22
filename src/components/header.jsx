export default () => {
    return (
        <header className="main-header">  
            <div className="main-header-logo logo">
                CV<span className="logo-separator"></span>fy
            </div>

            <nav className="navbar">
                <ul className="progress-list">
                    <li className="progress-list-item">
                        <button className="progress-btn active">Heading
                        <span className="progress-line"></span>
                        </button>
                    </li>
                    <li className="progress-list-item">
                        <button className="progress-btn done">Work History
                        <span className="progress-line"></span>
                        </button>
                    </li>
                    <li className="progress-list-item">
                        <button className="progress-btn">Education
                        <span className="progress-line"></span>
                        </button>
                    </li>
                    <li className="progress-list-item">
                        <button className="progress-btn">Skills
                        <span className="progress-line"></span>
                        </button>
                    </li>
                    <li className="progress-list-item">
                        <button className="progress-btn">Summary
                        <span className="progress-line"></span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}