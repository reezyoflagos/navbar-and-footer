import React from 'react'
import './styl.css'

const Footer = () => {
  return (
    <div className='Footer'>

        <div className='foot1'> 
                <img  className='read'   src='./images/degenius.png'/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorem assumenda nostrum reiciendis cum. Ducimus, unde!
                </p>
                <div className='images'>
                <img src='./images/king.png'/>
                <img src='./images/steam.png'/>
                <img src='./images/doge.png'/>
                <img src='./images/bnb.png'/>

                </div>
                


           
        </div>
        <div className='reas'>
        <div className='Foot2'>
                <h3>
                    Links
                </h3>

              <ul>
                 <li>Home</li>
                 <li> About us</li>
                <li>Contact us</li>
                  <li>Applin</li>
              </ul>
               
 
                </div>
        <div className='Foot3'>
                <h3>
                    Support
                </h3>
                <li>FAQs</li>
                 <li>Help Center</li>
                <li>Secuirty</li>
                  <li>Acessibilty</li>
        </div>
        <div className='Foot4'>
            <h3>
                Legal
            </h3>
            <li>Privacy Policy</li>
            <li>Terms and conditions</li>
            <li>Secuirity</li>
            <li>Accesibility</li>
                
        </div>
      
    </div>
    </div>
  )
}

export default Footer
