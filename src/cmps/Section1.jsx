import content1 from '../assets/img/content1.svg'
import elementRight from '../assets/img/element-right-section1.png'
import content2 from '../assets/img/element-right-section1 - 2.svg'
import content3 from '../assets/img/content3.svg'

export function Section1() {
    return (
        <section className="section1 full main-layout">
            <div className="section1-inner-container flex">
                <div className="element-heading-container">
                    <div className="element"></div>
                    <h1>Build & manage distributed teams like no one else.</h1>
                </div>
                <div className="content">
                    <article className="flex">
                        <img src={content1} alt="img" />
                        <div className="inner-content">
                            <h3>Experienced Individuals</h3>
                            <p>
                                Our network is made up of highly experienced
                                professionals who are passionate about what they
                                do.
                            </p>
                        </div>
                    </article>
                    <article className="flex">
                        <img src={content2} alt="img" />
                        <div className="inner-content">
                            <h3>Easy to Implement</h3>
                            <p>
                                Our processes have been refined over years of
                                implementation meaning our teams always deliver.
                            </p>
                        </div>
                    </article>
                    <article className="flex">
                        <img src={content3} alt="img" />
                        <div className="inner-content">
                            <h3>Enhanced Productivity</h3>
                            <p>
                                Our customized platform with in-built analytics
                                helps you manage your distributed teams.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
            <img src={elementRight} alt="" className="element-right full" />
        </section>
    )
}
