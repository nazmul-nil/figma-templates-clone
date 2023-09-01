// importing react router dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import Products from './components/pages/Products'
import FAQ from './components/pages/FAQ'
import Pricing from './components/pages/Pricing'

function App() {

  return (
    <div className='overflow-x-hidden '>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
      </Router>
      </div>
  )
}

export default App
