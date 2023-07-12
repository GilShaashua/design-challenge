import { AboutDescription } from '../cmps/AboutDescription'
import { Banner } from '../cmps/Banner'
import { Cilents } from '../cmps/Clients'
import { MeetDirectors } from '../cmps/MeetDirectors'

export function About() {
    return (
        <section className="about-container full main-layout">
            <AboutDescription />
            <MeetDirectors />
            <Cilents />
            <Banner />
        </section>
    )
}
