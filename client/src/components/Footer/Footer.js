import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
  <div className='footer-container'>
    <div className = 'flex-row'>          
        {/* left */}
        <div className= 'card1 px-1 py-1'> 
          <div className='left'>       
            <h3>OUR NEWSLETTER</h3>
              <p className='newsLetter-p'>Subscribe to our newsletter to receive special offers and updates on new products</p>
              {/* <p>Email *</p> */}
              <input className='input-box' placeholder='Email *' type="email" />
              <div>
                <button className='footer-button'>Subscribe</button> 
              </div>  
            </div>      
        </div>
        
        {/* middle */}
        <div className="card1 px-1 py-1">
          <div className ='middle'>
            <h5>Have your favourite Pizza</h5>           
          </div>
        </div>
        
        {/* right */}
        <div className="card1 px-1 py-1">  
          <div className='right'>      
            <h3>CONTACT</h3>
            <p>12th cross street, Melbourne</p>
            <p>pizza@myweb.com</p>
            <p> 123-456-7890</p>  
          </div>     
        </div>
     </div> 
  </div>

    
  )
}

export default Footer
