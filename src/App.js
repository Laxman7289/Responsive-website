import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavScrollExample from './component/Header'
import 'react-slideshow-image/dist/styles.css'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Service from './component/Service'
// import Link from './component/Link'


const App = () => {
  return (
    <>
      <NavScrollExample />
      < BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="action2" element={<Link />} /> */}
        </Routes>

      </BrowserRouter>

    </>

  )
}

export default App
