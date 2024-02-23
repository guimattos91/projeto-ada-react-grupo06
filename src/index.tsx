import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import { GlobalStyle } from 'style/style'

import 'bootstrap/dist/css/bootstrap.min.css'
import { LoginContextProvider } from 'context/LoginContext'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <LoginContextProvider>
        <App />
        <GlobalStyle />
      </LoginContextProvider>
    </Suspense>
  </React.StrictMode>,
)
