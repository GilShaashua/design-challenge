import { Route, Routes } from 'react-router'
import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'
import { About } from './pages/About'
import { ContactUs } from './pages/ContactUs'
import { Home } from './pages/Home'

function App() {
    return (
        <section className="main-app main-layout">
            <AppHeader />
            <main className="main-layout full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
            </main>
            <AppFooter />
        </section>
    )
}

export default App
