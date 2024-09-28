import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home'
// import 'bootstrap/dist/js/bootstrap.js'

function App() {
  
  const route  = createBrowserRouter([
    {
    path:'/',
    Element: <Home/>
  }
])

  return (
   <RouterProvider.Provider router={route}>
    <App/>
   </RouterProvider.Provider>
  )
}

export default App
