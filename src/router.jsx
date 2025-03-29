import { createBrowserRouter } from "react-router"
import { MainContent } from "./App"
import { Blog } from "./pages/blog"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { NewsArticle } from "./pages/news-article"
import { BlogPost } from "./pages/blog-post"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/news/:id",
    element: (
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <NewsArticle />
        <Footer />
      </div>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <BlogPost />
        <Footer />
      </div>
    ),
  },
]) 