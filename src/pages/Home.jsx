import { Banner } from '../cmps/Banner'
import { Hero } from '../cmps/Hero'
import { Section1 } from '../cmps/Section1'
import { Reviews } from '../cmps/reviews'

export function Home() {
    return (
        <section className="home-container main-layout full">
            <Hero />
            <Section1 />
            <Reviews />
            <Banner />
        </section>
    )
}
