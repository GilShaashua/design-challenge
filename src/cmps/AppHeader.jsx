import { NavLink } from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="app-header full main-layout">
            <div className="app-header-inner-container flex align-center space-between">
                <div className="logo-nav-inner-container flex align-center">
                    <div className="logo">
                        <h1> myteam </h1>
                    </div>
                    <nav>
                        <NavLink to={'/'}> home </NavLink>
                        <NavLink to={'/about'}> about </NavLink>
                    </nav>
                </div>
                <div className="contact-us-container">
                    <button>contact us</button>
                </div>
            </div>
        </header>
    )
}
