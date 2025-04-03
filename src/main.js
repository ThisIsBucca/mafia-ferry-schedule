import * as React from './node_modules/react/index.js'
import ReactDOM from './node_modules/react-dom/client.js'
import { QueryClient, QueryClientProvider } from './node_modules/@tanstack/react-query/dist/index.js'
import { ReactQueryDevtools } from './node_modules/@tanstack/react-query-devtools/dist/index.js'
import App from './App.js'
import './styles/globals.css'
import { AuthProvider } from './contexts/AuthContext.js'

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