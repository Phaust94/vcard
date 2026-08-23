import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import posthog from 'posthog-js'

posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  defaults: '2025-05-24',
  capture_pageview: true,
  capture_pageleave: true,
  cookieless_mode: 'always',             // Prevents setting cookies/local storage
  person_profiles: 'never',             // Disables user identification features
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
