import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/about'
import Contacts from './pages/contacts'
import Books from './pages/books'
import './App.css'
import DefaultLayout from './pages/DefaultLayout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/Books' element={<Books />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
