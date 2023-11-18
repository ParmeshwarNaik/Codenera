import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Assets/Imges/Logo.png';
import Heading from "../Assets/Imges/Headling.jpg"

import Productlist from './Productlist';
import ProductFilter from './ProductFilter';
const Header = () => {
  const textOverlayStyle = {
  position: 'absolute',
  top: '40%',
  left: '40%',
  transform: 'translate(-50%, -50%)',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '64px',
  marginLeft: '10px',
  
};


  return (
    <div >
      <div className='link' style={{display:'flex',justifyContent:"space-evenly",marginLeft:"950px",marginRight:"10px" ,backgroundColor:"black", borderRadius:"10px"}}>
      <Link style={{color:"white",marginLeft:"10px", padding:"2px 1px 2px 2px"}} to="/">Home</Link>
      
      <Link style={{color:"white", padding:"2px 1px 5px 10px"}} to="/about">About</Link>
      <Link style={{color:"white", padding:"2px 1px 2px 10px"}} to="/cart">Cart</Link>
      <Link style={{color:"white", padding:"2px 1px 2px 10px"}} to="/contactus">Contact Us</Link>
      <Link style={{color:"white", padding:"2px 1px 2px 10px"}} to="/feedback">Feedback</Link>

      </div>
      <div className='navbar 'style={{display:'flex', justifyContent:"space-around",alignItems:"center" ,height:"150px",width:"100%"}} >
        <img style={{width:"100px",marginLeft:"-200px"}} src={Logo} alt='Logo'/>
        <span style={{marginLeft:"-400px"}}><h2>Company Name</h2></span>
        <div className='search' style={{backgroundColor:"whitesmoke",width:"500px", padding:"15px" ,borderRadius:"10px", boxShadow:"0 5px 5px 0 grey"}} >
          <input  style={{backgroundColor:"white", width:"400px",height:"25px",margin:"5px", border:"none"}} type='text' placeholder='       Enter keyword Here'/>
          <button style={{backgroundColor:"aqua",fontWeight:"bolder",padding:"5px 7px",border:"none"}} type='search'>SEARCH</button>
        </div>
       
      </div>
      <div className='category' style={{display:"flex",alignContent:"center",background:"rgb(20, 91, 147)"}}>
          <Link  style={{padding:"5px", color:"white",fontWeight:"bolder", textDecoration:"none",marginLeft:"20px"}} to="/">Category 1 </Link>
          <Link style={{padding:"5px", color:"white",fontWeight:"bolder",textDecoration:"none",marginLeft:"20px"}}  to="/">Category 2</Link>
          <Link style={{padding:"5px", color:"white",fontWeight:"bolder",textDecoration:"none",marginLeft:"20px"}}  to="/">Category 3</Link>
          <Link  style={{padding:"5px", color:"white",fontWeight:"bolder",textDecoration:"none",marginLeft:"20px"}} to="/">Category 4</Link>
          <Link style={{padding:"5px", color:"white",fontWeight:"bolder",textDecoration:"none",marginLeft:"20px"}}  to="/">Category 5</Link>
          <Link style={{padding:"5px", color:"white",fontWeight:"bolder",textDecoration:"none",marginLeft:"20px"}}  to="/">Category 6 </Link>
        </div>
        <div className='main' style={{display:"flex"}}>
          <div className='filter' style={{width:"30%",height:"500px"}}>
            <ProductFilter/>
          </div>
          <div className='proudct' style={{width:"70%",backgroundColor:"white",margin:"0 15px "}}>
            
            <img style={{height:"130px",backgroundSize:"cover",width:"100%"}} src={Heading} alt='HeadingImg'></img>
           <div class="text-overlay" style={textOverlayStyle}>
            Welcome
          </div > 
          <div className='productlist' >

          <Productlist/>
          </div>
          
          </div>
          
          
        </div>
    </div>
  )
}

export default Header;