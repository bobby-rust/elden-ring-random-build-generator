function Header() {
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <div className="logo-inner">
                    <div className='logo'><div className="ER">ER</div><div className="BG">BG</div></div>
                </div>
            </div>
            <div className="title-container">
                <div className="title-inner">
                    <h1 className="title">Elden Ring Random Build Generator</h1>
                </div>
            </div>
            <div className="dev-message-container">
                <div className="dev-message-inner">
                    <p className="dev-message">This tool is in development. Some features may not work. View this project on <a target="_blank" rel="noreferrer" href="https://github.com/bobby-rust/elden-ring-random-build-generator/tree/master">github</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Header
