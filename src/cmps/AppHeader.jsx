import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuOpenContext } from '../App'

export function AppHeader({ onToggleMenu }) {
    const isMenuOpen = useContext(MenuOpenContext)

    return (
        <header className="app-header full main-layout">
            <div className="app-header-inner-container flex align-center space-between">
                <div className="logo-nav-inner-container flex align-center">
                    <div className="logo">
                        <h1> myteam </h1>
                    </div>
                    <nav className={isMenuOpen ? 'menu-open' : ''}>
                        <NavLink to={'/'} onClick={onToggleMenu}>
                            {' '}
                            home{' '}
                        </NavLink>
                        <NavLink to={'/about'} onClick={onToggleMenu}>
                            about
                        </NavLink>
                        <button
                            className="btn-contact-us-mobile"
                            onClick={onToggleMenu}
                        >
                            <NavLink to={'/contact-us'}>contact us</NavLink>
                        </button>
                        <svg
                            className="btn-close-nav-mobile"
                            onClick={onToggleMenu}
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="17"
                            viewBox="0 0 18 17"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.99989 6.37869L2.98948 0.368286L0.868164 2.48961L6.87857 8.50001L0.868164 14.5104L2.98948 16.6317L8.99989 10.6213L15.0103 16.6317L17.1316 14.5104L11.1212 8.50001L17.1316 2.48961L15.0103 0.368286L8.99989 6.37869Z"
                                fill="white"
                            />
                        </svg>
                    </nav>
                </div>
                <button className="btn-contact-us">
                    <NavLink to={'/contact-us'}>contact us</NavLink>
                </button>
                <button className="btn-mobile-nav" onClick={onToggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                        fill="none"
                    >
                        <rect width="20" height="3" fill="white" />
                        <rect y="7" width="20" height="3" fill="white" />
                        <rect y="14" width="20" height="3" fill="white" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
