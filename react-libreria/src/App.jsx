import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/about'
import Contacts from './pages/contacts'
import Books from './pages/books'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Books' element={<Books />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
