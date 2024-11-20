import React from 'react'
import { ThemeProvider } from './components/theme-provider'
import Interface from './components/Interface'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Interface />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
