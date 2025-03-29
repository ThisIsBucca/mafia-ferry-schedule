export function BoatDetails({ boats, selectedBoat, onSelectBoat }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Available Ferries</h3>
      <div className="space-y-4">
        {boats.map((boat) => (
          <div
            key={boat.id}
            className={`boat-card cursor-pointer ${
              selectedBoat?.id === boat.id ? "border-primary bg-primary/5" : ""
            }`}
            onClick={() => onSelectBoat(boat)}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">{boat.name}</h4>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                ${boat.price}
              </span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-primary">{boat.departureTime}</span>
                <span>→</span>
                <span className="font-medium text-primary">{boat.arrivalTime}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {boat.departure} → {boat.arrival}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Date: {boat.date}</span>
                <span>•</span>
                <span>Capacity: {boat.capacity} passengers</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 