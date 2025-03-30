import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'

export function SessionTimeout() {
  const { user, signOut } = useAuth()
  const [warningShown, setWarningShown] = useState(false)

  useEffect(() => {
    if (!user) return

    const timeoutWarning = setTimeout(() => {
      setWarningShown(true)
      toast((t) => (
        <div className="flex items-center gap-4">
          <p>Your session will expire soon</p>
          <button
            onClick={() => {
              // Refresh session logic here
              toast.dismiss(t.id)
            }}
            className="px-3 py-1 rounded bg-primary text-primary-foreground text-sm"
          >
            Stay Logged In
          </button>
        </div>
      ), { duration: 10000 })
    }, 45 * 60 * 1000) // 45 minutes

    const timeout = setTimeout(() => {
      if (warningShown) {
        signOut()
        toast.error('Session expired. Please log in again.')
      }
    }, 60 * 60 * 1000) // 1 hour

    return () => {
      clearTimeout(timeoutWarning)
      clearTimeout(timeout)
    }
  }, [user, warningShown])

  return null
} 