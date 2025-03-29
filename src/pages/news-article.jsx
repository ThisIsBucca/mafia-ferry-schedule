import { useParams } from "react-router"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { articles } from "../data/articles"
import { Link } from "react-router"

export function NewsArticle() {
  const { id } = useParams()
  const article = articles[id]

  if (!article) {
    return (
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-lg text-muted-foreground">The article you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          {/* Article Header */}
          <header className="relative mb-12">
            {/* Decorative Elements */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-16 w-16 rounded-full bg-primary/10"
              />
            </div>

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Published on {article.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readingTime} minutes
                </span>
              </div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {article.title}
              </motion.h1>

              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {article.category}
              </motion.div>
            </div>
          </header>

          {/* Article Content */}
          <motion.div 
            className="prose prose-lg dark:prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div 
              className="relative"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.div>

          {/* Article Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Published on {new Date(article.date).toLocaleDateString()}</span>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                Back to Home
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </article>
  )
} 