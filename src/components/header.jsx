export default ({activeIndex}) => {
    function getClassName(index) {
        return index !== activeIndex ?
                    "progress-btn" :
                    "progress-btn active";
    }
    return (
        <header className="main-header">  
            <div className="main-header-logo logo">
                CV<span className="logo-separator"></span>fy
            </div>

            <nav className="navbar">
                <ul className="progress-list">
                    <li className="progress-list-item">
                        <button className={getClassName(0)}>
                            Heading
                            <span className="progress-line"></span>
                        </button>
                    </li>
                    <li className="progress-list-item">
                        <button className={getClassName(1)}>
                            Work History
                            <span className="progress-line"></span>
                        </button>
                    </li>
                    <li className="progress-list-item">
                        <button className={getClassName(2)}>
                            Education
                            <span className="progress-line"></span>
                        </button>
                    </li>
                    <li className="progress-list-item">
                        <button className={getClassName(3)}>
                            Skills
                            <span className="progress-line"></span>
                        </button>
                    </li>
                    <li className="progress-list-item">
                        <button className={getClassName(4)}>
                            Summary
                            <span className="progress-line"></span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}