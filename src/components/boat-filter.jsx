import { useState } from "react"

export function BoatFilter({ filters, onFilterChange }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Filter Ferries</h3>
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Date</label>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => onFilterChange("date", e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Direction</label>
          <select
            value={filters.direction}
            onChange={(e) => onFilterChange("direction", e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="all">All Directions</option>
            <option value="to-mafia">To Mafia Island</option>
            <option value="from-mafia">From Mafia Island</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Price Range</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => onFilterChange("minPrice", e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
            <span className="text-muted-foreground">-</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange("maxPrice", e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Time of Day</label>
          <select
            value={filters.timeOfDay}
            onChange={(e) => onFilterChange("timeOfDay", e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="all">Any Time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
      </div>
    </div>
  )
} 