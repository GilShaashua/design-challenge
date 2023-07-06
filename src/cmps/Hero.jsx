import elementLeftSide from '../assets/img/element-left-side.png'
import elementRightSide from '../assets/img/element-right-side.svg'

export function Hero() {
    return (
        <section className="hero full main-layout">
            <img
                src={elementLeftSide}
                alt="element"
                className="element-left-side full"
            />

            <div className="container">
                <img
                    src={elementRightSide}
                    alt="element"
                    className="element-right-side"
                />
                <div className="hero-inner-container flex align-center">
                    <div className="title">
                        <h1>Find the</h1>
                        <h1>
                            best <span>talent</span>
                        </h1>
                    </div>
                    <div className="paragraph">
                        <div className="paragraph-inner-container">
                            <div className="line-element"></div>
                            <p>
                                Finding the right people and building high
                                performing teams can be hard. Most companies
                                arent tapping into the abundance of global
                                talent. We're about to change that.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
