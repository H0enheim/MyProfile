import React from 'react'
import './Posts.scss'

export default function Posts() {
  return (
    <div className='Post-Cont'>
        <div className="headPortion">
            <div className="user-info-portion">
                <div className="user-avatar"></div>
                <div className="user-info">
                    <div className="userName">Background</div>
                   
                </div>
            </div>
            <div className="post-desc">
            </div>
           
        </div>
        <div className="bodyPortion">
            <h3> Creative and passionate full stack web developer looking for a front-end web developer position who is well-versed in HTML, CSS, JavaScript, and is continuously learning ReactJS and Laravel 9.
A quick-witted, adaptive and organized team player and transferrable skills, such as client interaction and good organizational skills, from my previous jobs.. A fast learner and is willing to learn new skills and knowledge which can contribute to the company.</h3>

        </div>
        <hr id ="hr-post"/>
        <div className="footerP">
        <div className="postCreateDate">Last updated: 2 days ago</div>
            <div className="addInf"></div>
        </div>
      
    </div>
  )
}
