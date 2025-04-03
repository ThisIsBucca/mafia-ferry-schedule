import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App'
import './styles/globals.css'
import { AuthProvider } from './contexts/AuthContext'

const queryClient = new QueryClient()

// Initialize theme
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "dark");
  document.documentElement.classList.add("dark");
}

// Render the app
const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    React.createElement(React.StrictMode, null,
      React.createElement(AuthProvider, null,
        React.createElement(QueryClientProvider, { client: queryClient },
          React.createElement(App),
          React.createElement(ReactQueryDevtools, { initialIsOpen: false })
        )
      )
    )
  )
} 