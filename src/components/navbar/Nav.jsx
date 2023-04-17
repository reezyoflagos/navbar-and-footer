import React from 'react'
import  './style.css'

const Nav = () => {
  return (
    <div className='nav'>
        <img  className='img1'    src='./images/degenius.png'/>
        <div className='navs'>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About Us 
                    </li>
                    <li>
                    Contact Us 
                    </li>
                    <li>
                    <button>
                        <img  className='buna'  src='./images/rent.png'/>
                        Download App
                    </button>
                    </li>
            </ul>

        </div>
      
    </div>
  )
}

export default Nav
