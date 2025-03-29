export function LocationInfo() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Our Locations
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Find us at these convenient locations for your journey.
        </p>
      </div>
      <div className="mx-auto grid max-w-[980px] gap-4 py-8 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Mafia Island Terminal</h3>
          <p className="mt-2 text-muted-foreground">
            Located in Kilindoni, Mafia Island. Easy access from the main town center.
          </p>
          <p className="mt-2 text-muted-foreground">
            Opening Hours: 6:00 AM - 6:00 PM
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Mainland Terminal</h3>
          <p className="mt-2 text-muted-foreground">
            Located in Nyamisati, Rufiji District. Connected to major transportation routes.
          </p>
          <p className="mt-2 text-muted-foreground">
            Opening Hours: 6:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </section>
  )
} 