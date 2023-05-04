import React from 'react'
// import Section2 from './Sec1'
// import Section1 from './Sec2'
// import MSec from './Msec'
// import { useParams } from 'react-router-dom';
import './CSS/MyProfile.scss'
import Feeds from './Feeds/Feeds'
import Userinfo from './Userinfo/Userinfo'
import Userinfo2 from './Userinfo/Userinfo2'
import StarRating from './Rate/Rate'
import Footer from '../components/Footer'

function MyProfile() {
    // let {UserId} =useParams();

    return (
        <div className='MainProfile'>
            <div className="profile-container">
                <div className="top-seg">
                    <div className="user-profile-bg-image">
                        <img id='bg-prf-img' src="https://wallpapers.com/images/featured/ztbad1qj8vdjqe0p.jpg" alt="" srcset="" />
                    </div>
                    <div className="user-profile-image">
                        <img id='prf-img' src="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp" alt="" srcset="" />
                    </div>
                    <div className="UserName">
                        Ahmed Muhammad Kaur

                    </div>

                    <div className="UserDetails">
                        Manager at the Krusty Krab

                    </div>
                    {/* <div> <Star stars = {Star} /></div> */}
                    <div className="rating"><StarRating /></div>


                </div>

                <div className="bottom-seg">
                    <div className="right-side">
                        <Feeds />

                    </div>
                    <div className="left-side">
                        <Userinfo />
                        <Userinfo2 />
                        {/* <Section1 /> */}
                        {/* <Section2 /> */}
                        {/* <Sec3 /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
      

    )
}
export default MyProfile