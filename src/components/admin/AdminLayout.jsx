import { Navigate, Outlet, Link, useLocation } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { supabase } from "../../lib/supabase"

export function AdminLayout() {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/admin/login" replace />

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card">
        <div className="container px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/admin" className="font-bold text-lg">Admin Dashboard</Link>
            <div className="flex gap-4">
              <Link 
                to="/admin/schedules" 
                className={`text-sm ${
                  location.pathname === '/admin/schedules'
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Schedules
              </Link>
              <Link 
                to="/admin/articles" 
                className={`text-sm ${
                  location.pathname === '/admin/articles'
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Articles
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <button 
              onClick={() => supabase.auth.signOut()}
              className="text-sm text-red-500 hover:text-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>
      <main className="container px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
} 