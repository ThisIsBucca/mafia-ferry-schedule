import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Ship, Clock, Calendar, Info } from "lucide-react"

export function Schedule() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const schedules = [
    {
      ship: "MV. Songosongo",
      routes: [
        {
          route: "Mafia → Nyamisati",
          days: "Mon, Thu",
          departure: "7:00 AM",
          arrival: "~11:00 AM",
          duration: "4 hrs",
          notes: "🚢 Cargo focus • Possible stops",
        },
        {
          route: "Nyamisati → Mafia",
          days: "Tue, Fri",
          departure: "12:00 PM",
          arrival: "~4:00 PM",
          duration: "4 hrs",
          notes: "⏳ Tide-dependent",
        },
      ],
    },
    {
      ship: "MV. Kilindoni",
      routes: [
        {
          route: "Mafia → Nyamisati",
          days: "Wed, Sun",
          departure: "8:00 AM",
          arrival: "~1:00 PM",
          duration: "5 hrs",
          notes: "✨ More passenger-friendly",
        },
        {
          route: "Nyamisati → Mafia",
          days: "Mon, Sat",
          departure: "10:00 AM",
          arrival: "~3:00 PM",
          duration: "5 hrs",
          notes: "📦 Large capacity",
        },
      ],
    },
  ]

  return (
    <section className="py-20" id="schedule">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Ship className="w-4 h-4" />
            <span className="text-sm font-medium">Updated Schedule</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Ferry Schedule
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Plan your journey with our regular ferry services between Mafia Island and Nyamisati
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {schedules.map((schedule, index) => (
            <motion.div
              key={schedule.ship}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative rounded-2xl border bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="px-6 py-4 bg-primary/5 border-b">
                  <h3 className="text-xl font-semibold">{schedule.ship}</h3>
                </div>
                <div className="p-6 space-y-6">
                  {schedule.routes.map((route, routeIndex) => (
                    <div key={route.route} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{route.route}</h4>
                        <span className="text-sm text-muted-foreground">{route.duration}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{route.days}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{route.departure}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Info className="w-4 h-4" />
                            <span>{route.notes}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{route.arrival}</span>
                          </div>
                        </div>
                      </div>
                      {routeIndex < schedule.routes.length - 1 && (
                        <div className="border-t border-dashed" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            ⚠️ Schedule may vary due to weather conditions and tides. Please confirm locally before travel.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 