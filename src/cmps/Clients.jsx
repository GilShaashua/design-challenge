import theVergae from '../assets/img/logo-the-verge.png'
import logoJakartaPost from '../assets/img/logo-jakarta-post.png'
import logoTheGuardian from '../assets/img/logo-the-guardian.png'
import logoTechRadar from '../assets/img/logo-tech-radar.png'
import logoGadgetsNow from '../assets/img/logo-gadgets-now.png'

export function Cilents() {
    return (
        <section className="clients-container full main-layout">
            <svg
                className="element-left full"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 200 200"
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
                    fill="#014E56"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100 100H0V104H100V100ZM100 108H0V112H100V108ZM0 116H100V120H0V116ZM100 124H0V128H100V124ZM0 132H100V136H0V132ZM100 140H0V144H100V140Z"
                    fill="#79C8C7"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H4V4H0V0ZM11 0H7V4H11V0ZM11 8H7V12H11V8ZM7 16H11V20H7V16ZM11 24H7V28H11V24ZM7 32H11V36H7V32ZM11 40H7V44H11V40ZM14 0H18V4H14V0ZM14 8H18V12H14V8ZM18 16H14V20H18V16ZM14 24H18V28H14V24ZM18 32H14V36H18V32ZM14 40H18V44H14V40ZM0 8H4V12H0V8ZM21 0H25V4H21V0ZM21 8H25V12H21V8ZM25 16H21V20H25V16ZM21 24H25V28H21V24ZM25 32H21V36H25V32ZM21 40H25V44H21V40ZM0 16H4V20H0V16ZM28 0H32V4H28V0ZM28 8H32V12H28V8ZM32 16H28V20H32V16ZM28 24H32V28H28V24ZM32 32H28V36H32V32ZM28 40H32V44H28V40ZM0 24H4V28H0V24ZM35 0H39V4H35V0ZM35 8H39V12H35V8ZM39 16H35V20H39V16ZM35 24H39V28H35V24ZM39 32H35V36H39V32ZM35 40H39V44H35V40ZM0 32H4V36H0V32ZM42 0H46V4H42V0ZM42 8H46V12H42V8ZM46 16H42V20H46V16ZM42 24H46V28H42V24ZM46 32H42V36H46V32ZM42 40H46V44H42V40ZM0 40H4V44H0V40ZM49 0H53V4H49V0ZM49 8H53V12H49V8ZM53 16H49V20H53V16ZM49 24H53V28H49V24ZM53 32H49V36H53V32ZM49 40H53V44H49V40Z"
                    fill="#79C8C7"
                />
            </svg>
            <div className="clients-inner-container flex column justify-center">
                <h2>Some of our clients</h2>
                <div className="client-logos flex align-center space-between">
                    <img
                        className="theVergae"
                        src={theVergae}
                        alt="The Vergae"
                    />
                    <img
                        className="logoJakartaPost"
                        src={logoJakartaPost}
                        alt="Logo Jakarta Post"
                    />
                    <img
                        className="logoTheGuardian"
                        src={logoTheGuardian}
                        alt="Logo The Guardian"
                    />
                    <img
                        className="logoTechRadar"
                        src={logoTechRadar}
                        alt="Logo Tech Radar"
                    />
                    <img
                        className="logoGadgetsNow"
                        src={logoGadgetsNow}
                        alt="Logo Gadgets Now"
                    />
                </div>
            </div>
        </section>
    )
}