import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/images/hero/mafia-island-beach.jpg"
          alt="Mafia Island Beach"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[90vh] flex-col items-center justify-center text-center text-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:leading-[1.1]">
            Discover Paradise on Earth
          </h1>
          <p className="mt-6 max-w-[750px] text-lg md:text-xl">
            Experience the pristine beauty of Mafia Island, where turquoise waters meet white sandy beaches, and marine life thrives in harmony with nature.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#schedule"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Ferry Schedule
          </motion.a>
          <motion.a
            href="#explore"
            className="inline-flex items-center justify-center rounded-md border border-white bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Mafia Island
          </motion.a>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container py-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                ),
                title: "Marine Park",
                description: "Home to diverse marine life and pristine coral reefs",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                ),
                title: "Pristine Beaches",
                description: "Miles of untouched coastline and crystal-clear waters",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                title: "Reliable Service",
                description: "Regular ferry schedules for convenient island access",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                <motion.div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </motion.div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
} 