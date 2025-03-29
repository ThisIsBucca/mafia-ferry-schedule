import { RouterProvider } from "react-router"
import { router } from "./router"
import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"
import { Schedule } from "./components/schedule"
import { NewsUpdates } from "./components/news-updates"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { ScrollToTop } from "./components/scroll-to-top"
import { SupportBanner } from "./components/support-banner"

// Add this near the top of your App.jsx, before the App component
const initializeTheme = `
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }
`

export function App() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      <RouterProvider router={router} />
    </>
  )
}

export function MainContent() {
  return (
    <>
      <SupportBanner />
      <Navbar />
      <main>
        <Hero />
        <Schedule />
        <NewsUpdates />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App 