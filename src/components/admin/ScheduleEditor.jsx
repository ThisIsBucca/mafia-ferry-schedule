import { useForm } from "react-hook-form"
import { useSchedules } from "../../hooks/useSchedules"

export function ScheduleEditor({ schedule, onClose }) {
  const { createSchedule, updateSchedule } = useSchedules()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: schedule || {
      ship_name: "",
      route: "",
      days: "",
      departure: "",
      arrival: "",
      duration: "",
      notes: ""
    }
  })

  const onSubmit = async (data) => {
    try {
      if (schedule) {
        await updateSchedule.mutateAsync({ id: schedule.id, ...data })
      } else {
        await createSchedule.mutateAsync(data)
      }
      onClose()
    } catch (error) {
      console.error("Failed to save schedule:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Ship Name</label>
        <input
          {...register("ship_name", { required: "Ship name is required" })}
          className="w-full rounded-lg border p-2"
        />
        {errors.ship_name && (
          <span className="text-sm text-red-500">{errors.ship_name.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Route</label>
        <input
          {...register("route", { required: "Route is required" })}
          className="w-full rounded-lg border p-2"
        />
        {errors.route && (
          <span className="text-sm text-red-500">{errors.route.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Days</label>
        <input
          {...register("days", { required: "Days are required" })}
          className="w-full rounded-lg border p-2"
        />
        {errors.days && (
          <span className="text-sm text-red-500">{errors.days.message}</span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Departure</label>
          <input
            type="time"
            {...register("departure", { required: "Departure time is required" })}
            className="w-full rounded-lg border p-2"
          />
          {errors.departure && (
            <span className="text-sm text-red-500">{errors.departure.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Arrival</label>
          <input
            type="time"
            {...register("arrival", { required: "Arrival time is required" })}
            className="w-full rounded-lg border p-2"
          />
          {errors.arrival && (
            <span className="text-sm text-red-500">{errors.arrival.message}</span>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Duration</label>
        <input
          {...register("duration", { required: "Duration is required" })}
          className="w-full rounded-lg border p-2"
        />
        {errors.duration && (
          <span className="text-sm text-red-500">{errors.duration.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Notes</label>
        <textarea
          {...register("notes")}
          className="w-full rounded-lg border p-2"
          rows={3}
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-lg border hover:bg-muted"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {schedule ? "Update" : "Create"} Schedule
        </button>
      </div>
    </form>
  )
} 