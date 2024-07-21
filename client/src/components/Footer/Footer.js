import React, { useState} from 'react'
import { useMutation } from '@apollo/client';
import { ADD_NEWSLETTER } from '../../utils/mutations';


import './Footer.css'


const Footer = () => {
  const [name, setName] = useState('');
  console.log('name', name)
  const [addNewsletter] = useMutation(ADD_NEWSLETTER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addNewsletter({
      variables: {
        email: name,
      },

    });
    setName('');
  }
    
    
  return (
  <div className='footer-container'>
    <div className = 'flex-row'>          
        {/* left */}
        <div className= 'card1 px-1 py-1'> 
          <div className='left'>       
            <h3>OUR NEWSLETTER</h3>
              <p className='newsLetter-p'>Subscribe to our newsletter to receive special offers and updates on new products</p>
              {/* <p>Email *</p> */}
              <form
                  className="flex-row justify-center justify-space-between-md align-center"
                  onSubmit={handleFormSubmit}
              >
              <input className='input-box' placeholder='Email *' type="email" 
              value={name} onChange={(event) => setName(event.target.value)} />
              <div>
                <button className='footer-button' type="submit">Subscribe</button> 
              </div>
              </form>  
            </div>      
        </div>
        
        {/* middle */}
        <div className="card1 px-1 py-1">
          <div className ='middle'>
            <h5>Thank you for shopping</h5>           
          </div>
        </div>
        
        {/* right */}
        <div className="card1 px-1 py-1">  
          <div className='right'>      
            <h3>CONTACT</h3>
            <p>1234 cross street, Crossings, Cross,Earth</p>
            <p>pizza@myweb.com</p>
            <p> 123-456-7890</p>  
          </div>     
        </div>
     </div> 
  </div>

    
  )
}

export default Footer
