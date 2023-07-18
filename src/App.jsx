import { Route, Routes } from 'react-router'
import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'
import { About } from './pages/About'
import { ContactUs } from './pages/ContactUs'
import { Home } from './pages/Home'
import { createContext, useState } from 'react'

export const MenuOpenContext = createContext()

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function onToggleMenu() {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)
    }

    return (
        <MenuOpenContext.Provider value={isMenuOpen}>
            <section className="main-app main-layout">
                <div
                    className={`blur-screen ${isMenuOpen ? 'menu-open' : ''}`}
                    onClick={onToggleMenu}
                ></div>
                <AppHeader onToggleMenu={onToggleMenu} />
                <main className="main-layout full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                    </Routes>
                </main>
                <AppFooter />
            </section>
        </MenuOpenContext.Provider>
    )
}

export default App
