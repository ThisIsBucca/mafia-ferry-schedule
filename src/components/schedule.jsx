import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Ship, Clock, Calendar, Info, Loader2, AlertCircle, RefreshCcw } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { createClient } from '@supabase/supabase-js'

export function Schedule() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Create a new public Supabase client specifically for this component
  const publicSupabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      }
    }
  )

  const { data: schedules, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['public-schedules'],
    queryFn: async () => {
      try {
        const { data, error } = await publicSupabase
          .from('schedules')
          .select('*')
          .order('created_at', { ascending: true })
        
        if (error) {
          console.error('Schedule fetch error:', error)
          throw error
        }
        
        console.log('Fetched schedules:', data)
        return data
      } catch (error) {
        console.error('Schedule fetch failed:', error)
        throw error
      }
    },
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60,
    retry: 3
  })

  // Add debug log for component state
  console.log('Component state:', { schedules, isLoading, isError })

  if (isLoading) {
    return (
      <section className="py-20" id="schedule">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm font-medium">Loading Schedules</span>
            </div>
            <h2 className="text-2xl mt-4 text-muted-foreground">
              Please wait while we fetch the latest schedules
            </h2>
          </motion.div>
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="py-20" id="schedule">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-8">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Schedule Error</span>
            </div>
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
              <h2 className="text-2xl font-semibold text-destructive mb-2">
                Unable to Load Schedules
              </h2>
              <p className="text-muted-foreground mb-4">
                {error instanceof Error ? error.message : 'Error fetching schedules. Please try again.'}
              </p>
              <button
                onClick={() => refetch()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
              >
                <RefreshCcw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  if (!schedules || schedules.length === 0) {
    return (
      <section className="py-20" id="schedule">
        <div className="container px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
              <Ship className="w-4 h-4" />
              <span className="text-sm font-medium">Ferry Schedule</span>
            </div>
            <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  No Schedules Available
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                There are currently no ferry schedules available. Please check back later or contact our support team for assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-20" id="schedule">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 sm:mb-8">
            <Ship className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">Live Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Ferry Schedule
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Plan your journey with our regular ferry services between Mafia Island and Nyamisati
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-8 lg:grid-cols-2">
          {schedules?.map((schedule, index) => (
            <motion.div
              key={schedule.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative rounded-xl sm:rounded-2xl border bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-primary/5 border-b">
                  <h3 className="text-lg sm:text-xl font-semibold">{schedule.ship_name}</h3>
                </div>
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-medium">{schedule.route}</h4>
                    <span className="text-xs sm:text-sm text-muted-foreground">{schedule.duration}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{schedule.days}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{schedule.departure}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Info className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="truncate">{schedule.notes || 'No additional notes'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{schedule.arrival}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            ⚠️ Schedule may vary due to weather conditions and tides. Please confirm locally before travel.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 