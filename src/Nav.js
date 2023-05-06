import React, {useEffect, useState} from 'react'
import "./nav.css";

function Nav() {
    const[show , handleShow] = useState(false);


  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        // do this
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY < 100) {
          // do this
          handleShow(false);
        } else handleShow(true);
      });
    };
  });

  return (
    <div className={`nav ${show && "nav_black"}`}>
        {/* <img
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
      ></img> */}
      <h2 className='nav_logo'>Movie Times</h2>
        <img
        className='nav_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix Logo'
      ></img>



    </div>
  )
}

export default Nav