import { Coffee, Heart, Lock } from "lucide-react"
import { Link } from "react-router"

export function SupportBanner() {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b">
      <div className="container px-4 py-2 flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Developed with</span>
        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
        <span className="text-muted-foreground">by Bucca</span>
        <span className="text-muted-foreground mx-1">•</span>
        <a 
          href="https://www.buymeacoffee.com/bucca" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium transition-colors"
        >
          <Coffee className="w-4 h-4" />
          Support my work
        </a>
        <span className="text-muted-foreground mx-1">•</span>
        <Link 
          to="/admin/login" 
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
        >
          <Lock className="w-4 h-4" />
          Admin
        </Link>
      </div>
    </div>
  )
} 