import React from 'react'
import './Userinfo.scss';

export default function Userinfo() {
  return (
    <div className='Userinfo-main-cont'>
       <h4>Userinfo</h4> 
       <hr id= "hr_info" />
        <div className="info-container">
            <div className="city">
             <h6>Address:</h6> 
             <h5>Beijing,China</h5>
       
             </div>
            {/* <div className ="from">
            <h6>Education:</h6>
            <h5>College University</h5>
    
            </div> */}
            <div className ="about">
            <h6>Occuption:</h6>
            <h5>Manager</h5>

            </div>
        </div>
    </div>
  )
}
