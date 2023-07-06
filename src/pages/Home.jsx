import { Hero } from '../cmps/Hero'
import { Section1 } from '../cmps/Section1'

export function Home() {
    return (
        <section className="home-container main-layout full">
            <Hero />
            <Section1 />
        </section>
    )
}
