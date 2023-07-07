import { NavLink } from 'react-router-dom'
import facebookIcon from '../assets/img/icon-facebook.svg'
import pinterestIcon from '../assets/img/icon-pinterest.svg'
import twiterIcon from '../assets/img/icon-twitter.svg'

export function AppFooter() {
    return (
        <footer className="app-footer full main-layout">
            <div className="footer-inner-container flex align-center space-between">
                <div className="logo-nav-location-container flex align-center">
                    <div className="logo-nav-container">
                        <div className="logo">
                            <h1>myteam</h1>
                        </div>
                        <nav>
                            <NavLink to={'/'}> home </NavLink>
                            <NavLink to={'/about'}> about </NavLink>
                        </nav>
                    </div>
                    <div className="location-details">
                        <p>987 Hillcrest Lane</p>
                        <p>Irvine, CA</p>
                        <p>California 92714</p>
                        <p>Call Us: 949-833-7432</p>
                    </div>
                </div>
                <div className="icons-reserved">
                    <div className="icons flex align-center">
                        <img src={facebookIcon} alt="facebook" />
                        <img src={pinterestIcon} alt="pinterest" />
                        <img src={twiterIcon} alt="twitter" />
                    </div>
                    <p>Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
