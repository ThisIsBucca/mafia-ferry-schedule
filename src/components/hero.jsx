import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Anchor, Clock, Calendar } from "lucide-react"

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative min-h-[90vh] flex items-center py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Daily Ferry Services Available</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Mafia Island
              </span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Experience reliable and comfortable ferry services connecting Mafia Island and Nyamisati.
              Your journey begins here.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:gap-4"
              >
                View Schedule <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="space-y-2">
                <Anchor className="w-8 h-8 text-primary" />
                <h3 className="font-semibold">Safe Travel</h3>
                <p className="text-sm text-muted-foreground">Modern vessels & experienced crew</p>
              </div>
              <div className="space-y-2">
                <Clock className="w-8 h-8 text-primary" />
                <h3 className="font-semibold">On Time</h3>
                <p className="text-sm text-muted-foreground">Regular daily departures</p>
              </div>
              <div className="space-y-2">
                <Calendar className="w-8 h-8 text-primary" />
                <h3 className="font-semibold">Flexible</h3>
                <p className="text-sm text-muted-foreground">Multiple sailing times</p>
              </div>
            </div>
          </motion.div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative aspect-square rounded-3xl bg-muted/50 border backdrop-blur-sm p-8">
              <div 
                className="h-full rounded-2xl bg-[url('/images/hero/ferrydaw.jpg')] bg-cover bg-center relative overflow-hidden"
              >
                {/* Light mode overlay */}
                <div className="absolute inset-0 bg-white/10 dark:bg-transparent backdrop-blur-[1px] dark:backdrop-blur-none" />
                {/* Light mode decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-2xl dark:hidden" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl dark:hidden" />
                {/* Optional light mode border effect */}
                <div className="absolute inset-0 border-2 border-primary/5 rounded-2xl dark:border-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 