import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: "John Doe",
      role: "Tourist",
      content: "The ferry service was excellent! The crew was friendly and professional, and the journey was smooth and comfortable.",
      image: "/images/testimonials/michael.jpg",
    },
    {
      name: "Sarah Smith",
      role: "Local Resident",
      content: "I use this ferry service regularly. It's reliable, punctual, and the safety measures are top-notch.",
      image: "/images/testimonials/sarah.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Business Traveler",
      content: "The modern vessels and professional service make this the best ferry service to Mafia Island.",
      image: "/images/testimonials/emma.jpg",
    },
  ]

  return (
    <section className="py-16" id="testimonials">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">What Our Passengers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from our satisfied passengers about their experiences
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 