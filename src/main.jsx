import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  loaded: (posthog) => {
    if (import.meta.env.DEV) posthog.debug()
  },
  autocapture: true,
  capture_pageview: true,
  debug: import.meta.env.DEV, 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostHogProvider 
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>,
)
