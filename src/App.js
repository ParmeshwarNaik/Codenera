import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './Componant/Header'
import ProductDetails from './Componant/ProductDetails'
import AboutPage from './Componant/About/About'
import ContactUsPage from './Componant/ConatctUs/ContactUsPage'
import CartPage from './Componant/Cart/CartPage'
import FeedbackPage from './Componant/Feedback/Feedback'
const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/Productdetails" element={<ProductDetails/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        
         <Route path="/about" element={<Header/>}></Route>
        <Route
          path="/contactus"
          element={<ContactUsPage/>} 
        />
        <Route
          path="/cart"
          element={<CartPage/>} 
        />

        <Route
          path="/feedback"
          element={<FeedbackPage/>} 
        />

      </Routes>
      
       

    
       
    </>
  )
}

export default App
