import './app.css'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

export function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id"  element={<Card />} />
        <Route path="*"  element={<NotFound />} />
      </Routes>
    <Footer/>
    </BrowserRouter>  
    </>
  )
}
