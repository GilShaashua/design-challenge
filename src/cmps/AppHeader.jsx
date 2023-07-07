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
                        <NavLink to={'/design-challenge'}> home </NavLink>
                        <NavLink to={'/design-challenge/about'}>about</NavLink>
                    </nav>
                </div>
                <button>
                    <NavLink to={'/design-challenge/contact-us'}>
                        contact us
                    </NavLink>
                </button>
            </div>
        </header>
    )
}
