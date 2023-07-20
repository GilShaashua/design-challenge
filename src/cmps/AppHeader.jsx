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
                        <svg
                            className="element-mobile"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="200"
                            viewBox="0 0 100 200"
                            fill="none"
                        >
                            <rect
                                x="100"
                                y="100"
                                width="100"
                                height="100"
                                transform="rotate(180 100 100)"
                                fill="#2C6269"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200ZM100 133C118.225 133 133 118.225 133 100C133 81.7746 118.225 67 100 67C81.7746 67 67 81.7746 67 100C67 118.225 81.7746 133 100 133Z"
                                fill="#F67E7E"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M100 0H0V4H100V0ZM100 8H0V12H100V8ZM0 16H100V20H0V16ZM100 24H0V28H100V24ZM0 32H100V36H0V32ZM100 40H0V44H100V40Z"
                                fill="#79C8C7"
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
