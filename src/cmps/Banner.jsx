import { Link } from 'react-router-dom'
import bannerElement from '../assets/img/banner-element.svg'

export function Banner() {
    return (
        <section className="banner-container full main-layout">
            <img src={bannerElement} alt="element" className="full" />
            <div className="banner-inner-container flex align-center space-between">
                <h3>Ready to get started?</h3>
                <button>
                    <Link to="/contact-us">contact us</Link>
                </button>
            </div>
        </section>
    )
}
