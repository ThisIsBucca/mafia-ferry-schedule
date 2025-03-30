import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"
import { format } from "date-fns"

export function NewsUpdates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { data: articles, isLoading, isError } = useQuery({
    queryKey: ['public-articles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) {
        console.error('Articles fetch error:', error)
        throw error
      }
      return data
    }
  })

  if (isLoading) {
    return (
      <section className="py-16" id="news">
        <div className="container px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-primary">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span>Loading updates...</span>
          </div>
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="py-16" id="news">
        <div className="container px-4 text-center">
          <p className="text-red-500">Unable to load updates. Please try again later.</p>
        </div>
      </section>
    )
  }

  if (!articles?.length) {
    return (
      <section className="py-16" id="news">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
          <p className="text-muted-foreground">No updates available at the moment.</p>
        </div>
      </section>
    )
  }

  // Separate articles by category
  const transportNews = articles.filter(article => article.category === 'transport')
  const islandHighlights = articles.filter(article => article.category !== 'transport')

  return (
    <section className="py-16" id="news">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
          <p className="text-lg text-muted-foreground">
            Stay informed about the latest transport updates and island highlights
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Transport News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Transport News</h3>
            <div className="space-y-6">
              {transportNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="rounded-xl border bg-card p-6 hover:bg-muted/50 transition-colors"
                >
                  {article.image_url && (
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img 
                        src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/articles/${article.image_url}`}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <h4 className="font-medium">{article.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(article.created_at), 'MMM dd, yyyy')}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.read_time || '3 min read'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Link
                    to={`/news/${article.id}`}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Island Highlights</h3>
            <div className="space-y-6">
              {islandHighlights.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="rounded-xl border bg-card p-6 hover:bg-muted/50 transition-colors"
                >
                  {article.image_url && (
                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                      <img 
                        src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/articles/${article.image_url}`}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <h4 className="font-medium">{article.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(article.created_at), 'MMM dd, yyyy')}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.read_time || '3 min read'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Link
                    to={`/news/${article.id}`}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 