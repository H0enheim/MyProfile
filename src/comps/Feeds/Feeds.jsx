import React from 'react'
import './Feeds.scss';
// import {Avatar} from '@mui/material';

import Button from 'react-bootstrap/Button';
import Posts from '../Posts/Posts';
import Post2 from '../Posts/Post2';

export default function Feeds() {
    // const[UserPostDescrip, setUserPostDescrip] = useState(" ");
    const handleButtonClick = (e) => {
        e.PreventDefault();

    }
    return (
        <div className="Main-Feeds-Cont">
            <div className="top-cont">
                <div className="feed-input-cont">
                    {/* <div className="avatar-cont">Ben</div> */}
                    <div className="input-cont">
                        <input id="Post-desc" placeholder="Search for Jobs.." />
                        {/* value = {UserPostDescrip}
                        onChange = {(e) => {setUserPostDescrip(e.target.value)}} */}
                    </div>
                </div>
                <div className="feed-post-button-cont">
                    <Button id="Buttonz" onClick={handleButtonClick}>Search</Button>

                </div>
                <hr id="hr-id" />
                <div className="iconButtons_action">
                    <div className="icon_button_action">
                        <h5 className="action_button_text">Quick Find</h5>

                    </div>
                    <div className="icon_button_action">
                        <label html="Upload_file">
                            <input type="file" accept="image/*,video/*,PDF/*" id="Upload_file" hidden="true" />
                        </label>
                        <h5 className="action_button_text">Upload Resume</h5>


                    </div>
                    <div className="icon_button_action">
                        <h5 className="action_button_text">Updates</h5>

                    </div>
                </div>
            </div>
            <div className="bottom-cont">
                <h3 id="Abt">About</h3>
                <Posts />
                <Post2 />
            </div>
        </div>
    )
}
