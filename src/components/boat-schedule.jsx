import { useState } from "react"
import { BoatFilter } from "./boat-filter"
import { BoatDetails } from "./boat-details"

const initialFilters = {
  date: "",
  direction: "all",
  minPrice: "",
  maxPrice: "",
  timeOfDay: "all",
}

export function BoatSchedule() {
  const [filters, setFilters] = useState(initialFilters)
  const [selectedBoat, setSelectedBoat] = useState(null)

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  // Mock data - replace with actual API call
  const boats = [
    {
      id: 1,
      name: "Mafia Express",
      departure: "Mainland",
      arrival: "Mafia Island",
      departureTime: "08:00",
      arrivalTime: "10:00",
      date: "2024-03-20",
      price: 50,
      capacity: 100,
    },
    {
      id: 2,
      name: "Island Hopper",
      departure: "Mafia Island",
      arrival: "Mainland",
      departureTime: "14:00",
      arrivalTime: "16:00",
      date: "2024-03-20",
      price: 45,
      capacity: 80,
    },
    // Add more mock data as needed
  ]

  const filteredBoats = boats.filter((boat) => {
    if (filters.date && boat.date !== filters.date) return false
    if (filters.direction === "to-mafia" && boat.arrival !== "Mafia Island") return false
    if (filters.direction === "from-mafia" && boat.departure !== "Mafia Island") return false
    if (filters.minPrice && boat.price < Number(filters.minPrice)) return false
    if (filters.maxPrice && boat.price > Number(filters.maxPrice)) return false
    if (filters.timeOfDay !== "all") {
      const hour = parseInt(boat.departureTime.split(":")[0])
      if (filters.timeOfDay === "morning" && hour >= 12) return false
      if (filters.timeOfDay === "afternoon" && (hour < 12 || hour >= 17)) return false
      if (filters.timeOfDay === "evening" && hour < 17) return false
    }
    return true
  })

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Ferry Schedule</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Plan your journey between Mafia Island and the mainland with our reliable ferry service
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <BoatFilter filters={filters} onFilterChange={handleFilterChange} />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <BoatDetails
                boats={filteredBoats}
                selectedBoat={selectedBoat}
                onSelectBoat={setSelectedBoat}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 