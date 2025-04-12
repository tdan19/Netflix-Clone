import React, { useEffect, useState } from 'react'
import './Nav.css'
import netflixlogo from './../../Assets/logo.png'
function Nav() {
    const [show, handShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handShow(true);
      } else {
        handShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", handShow);
    };
  }, []);
        
  return (
    
    <div>
    <div className={`nav ${show && "nav-black"}`}>
    <div className="images">
      <img className="navs" src={netflixlogo} alt="Netflix-logo" />
  
    <button className='avator'>Sign In</button>
  

    </div>
    </div>
    </div>
  )
}

export default Nav
