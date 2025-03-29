import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Link } from "react-router"

export function NewsUpdates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const transportNews = [
    {
      title: "New Express Ferry Service Launches",
      date: "2024-03-15",
      excerpt: "Introducing faster ferry connections between Mafia Island and Nyamisati with reduced travel time.",
      link: "/news/new-express-ferry-service",
      category: "⛴️ Transportation",
      readingTime: "3 min read",
      icon: "⛴️"
    },
    {
      title: "Port Upgrade Project Begins",
      date: "2024-03-10",
      excerpt: "Major port expansion project to improve passenger experience and cargo handling capacity.",
      link: "/news/port-upgrade-project",
      category: "🏗️ Infrastructure",
      readingTime: "4 min read",
      icon: "🏗️"
    },
    {
      title: "Weather Advisory: Monsoon Season",
      date: "2024-03-08",
      excerpt: "Heavy monsoon season expected - travelers advised to check schedules before departure.",
      link: "/news/monsoon-season-guide",
      category: "🌤️ Travel Alert",
      readingTime: "2 min read",
      icon: "🌤️"
    },
    {
      title: "New Cargo Vessel Arrives",
      date: "2024-03-05",
      excerpt: "State-of-the-art cargo vessel to enhance goods transportation between islands.",
      link: "/news/new-cargo-vessel",
      category: "📦 Cargo",
      readingTime: "3 min read",
      icon: "📦"
    },
    {
      title: "Safety Protocol Updates",
      date: "2024-03-01",
      excerpt: "Enhanced safety measures implemented across all ferry services.",
      link: "/news/safety-protocols",
      category: "🛡️ Safety",
      readingTime: "2 min read",
      icon: "🛡️"
    }
  ]

  const islandHighlights = [
    {
      title: "Coral Reef Protection Initiative",
      date: "2024-03-12",
      excerpt: "New marine protected area established to preserve Mafia Island's coral reefs.",
      link: "/news/coral-reef-protection",
      category: "🐠 Conservation",
      readingTime: "4 min read",
      icon: "🐠"
    },
    {
      title: "Cultural Festival 2024",
      date: "2024-03-05",
      excerpt: "Annual Mafia Island Cultural Festival celebrates local traditions and heritage.",
      link: "/news/cultural-festival-2024",
      category: "🎉 Events",
      readingTime: "3 min read",
      icon: "🎉"
    },
    {
      title: "Eco-Tourism Development",
      date: "2024-03-01",
      excerpt: "New sustainable tourism program promotes responsible travel practices.",
      link: "/news/eco-tourism-guide",
      category: "🌴 Tourism",
      readingTime: "5 min read",
      icon: "🌴"
    },
    {
      title: "Local Food Festival",
      date: "2024-02-28",
      excerpt: "Celebrate Mafia Island's culinary heritage at the upcoming food festival.",
      link: "/news/food-festival",
      category: "🍽️ Culture",
      readingTime: "3 min read",
      icon: "🍽️"
    },
    {
      title: "Marine Research Center",
      date: "2024-02-25",
      excerpt: "New research facility to study marine life and ecosystem conservation.",
      link: "/news/marine-research",
      category: "🔬 Science",
      readingTime: "4 min read",
      icon: "🔬"
    }
  ]

  return (
    <section className="py-16" id="news">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
          <p className="text-lg text-muted-foreground">Stay informed about the latest transport updates and island highlights</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Transport News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Transport News</h3>
            <div className="space-y-6">
              {transportNews.map((news, index) => (
                <motion.div
                  key={news.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="rounded-xl border bg-card p-6 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl">{news.icon}</span>
                    <div>
                      <h4 className="font-medium">{news.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {news.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {news.readingTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <Link
                    to={news.link}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Island Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Island Highlights</h3>
            <div className="space-y-6">
              {islandHighlights.map((news, index) => (
                <motion.div
                  key={news.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="rounded-xl border bg-card p-6 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl">{news.icon}</span>
                    <div>
                      <h4 className="font-medium">{news.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {news.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {news.readingTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <Link
                    to={news.link}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 