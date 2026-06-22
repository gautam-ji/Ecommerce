import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import  Cart from './pages/Cart'
import Collection from './pages/Collection'
import  Contact from './pages/Contact'
import  Login from './pages/Login'
import  Orders from './pages/Orders'
import  PlaceOrder from './pages/PlaceOrder'
import  About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

// export const backendUrl =  import.meta.env.VITE_BACKEND_URL



const App = () => {
  return (
    <div className='px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]' >
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='collection' element={<Collection/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='placeorder' element={<PlaceOrder/>}/>
      
     </Routes>
      <Footer/>
    </div>
  )
}

export default App