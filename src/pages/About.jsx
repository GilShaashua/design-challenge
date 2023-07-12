import { AboutDescription } from '../cmps/AboutDescription'
import { MeetDirectors } from '../cmps/MeetDirectors'

export function About() {
    return (
        <section className="about-container full main-layout">
            <AboutDescription />
            <MeetDirectors />
        </section>
    )
}
