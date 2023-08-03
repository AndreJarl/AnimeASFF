import React from 'react'
import { AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';
function Footer() {
  return (
    <div className='lg:flex-col lg:content-center lg:items-center bg-gray-600 mt-8'>
       <div className="lg:grid lg:grid-col-3 pt-8">
            
                <div className="text-5xl ">
                  <h1 className=''>ANIMEASF</h1>
                </div>
               
              <div className='lg:flex content-center items-center'>
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Credits</p>
              </div>
               
                <div className='flex items-center'>
                     <h1><AiFillLinkedin/></h1>
                     <h1><AiFillFacebook/></h1>
                </div>

         </div>
         <p style={{fontSize: '13px', textAlign: 'center'}}>created by Andre Jarl 2023</p>
         <div className=''> 
                    <p>Disclaimer: The content presented on this website is intended for educational purposes only. All rights and copyrights to the original owners and creators of the materials are duly acknowledged and respected. This website does not claim ownership or endorse any unauthorized use of copyrighted content.</p>
        </div>
    </div>
  )
}

export default Footer