import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Anchor, Clock, Calendar } from "lucide-react"

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            Your Gateway to 
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              {" "}Mafia Island
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 px-4"
          >
            Experience reliable ferry services connecting Mafia Island with mainland Tanzania
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#schedule"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Schedule
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border hover:bg-muted transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-primary/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
} 