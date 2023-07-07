import user1 from '../assets/img/user1.png'
import user2 from '../assets/img/user2.png'
import user3 from '../assets/img/user3.png'
import quots from '../assets/img/quots.svg'
import elementLeftReviews from '../assets/img/element-left-reviews.svg'
import elementRightReviews from '../assets/img/element-right-reviews.svg'

export function Reviews() {
    return (
        <section className="reviews-container full main-layout">
            <img
                src={elementLeftReviews}
                alt="element-left"
                className="element-left-reviews full"
            />
            <div className="reviews-inner-container flex column align-center">
                <h1>
                    Delivering real results for top companies. <br />
                    Some of our <span> success stories. </span>
                </h1>
                <div className="reviews-content flex align-center space-between">
                    <article className="review flex column align-center">
                        <img src={quots} alt="quots" className="img-quotes" />
                        <p>
                            “The team perfectly fit the specialized skill set
                            required. They focused on the most essential
                            features helping us launch the platform eight months
                            faster than planned.”
                        </p>
                        <h4>Kady Baker</h4>
                        <img src={user1} alt="reviews1" className="img-user" />
                    </article>
                    <article className="review flex column align-center">
                        <img src={quots} alt="quots" className="img-quotes" />
                        <p>
                            “We needed to automate our entire onboarding
                            process. The team came in and built out the whole
                            journey. Since going live, user retention has gone
                            through the roof!”
                        </p>
                        <h4>Aiysha Reese</h4>
                        <img src={user2} alt="reviews1" className="img-user" />
                    </article>
                    <article className="review flex column align-center">
                        <img src={quots} alt="quots" className="img-quotes" />
                        <p>
                            “Amazing. Our team helped us build an app that
                            delivered a new experience for hiring a physio. The
                            launch was an instant success with 100k downloads in
                            the first month.”
                        </p>
                        <h4>Arthur Clarke</h4>
                        <img src={user3} alt="reviews1" className="img-user" />
                    </article>
                </div>
            </div>
            <img
                src={elementRightReviews}
                alt="element-left"
                className="element-right-reviews full"
            />
        </section>
    )
}
