import React from "react";
import {useNavigate} from 'react-router-dom';
import InstagramNew from '../../assets/images/InstagramNew.png';
import YoutubeNew from '../../assets/images/YoutubeNew.png'
import Logo from '../../assets/images/ProfilePic.png';
import classes from './Header.module.css';


function Header(props) {

    const navigate=useNavigate();


    return (
        <div className="container">
            <div className={classes.header}>
                <div className={classes.logo} onClick={()=>navigate('/')}>
                    <img src={Logo} alt="logo"/>
                </div>
                <div className={classes.headerMediumPart}>
                    <div className={classes.lastPart} onClick={props.openLoginModal}>Get Referral link</div>
                </div>
                <div className={classes.lastDiv}>
                    <div className={classes.instagramYoutube}>
                        <a href="https://www.instagram.com/darrellsteg/"
                           target="_blank" rel="noreferrer noopener"
                           className="socialIcons">
                            <img className={classes.instagramYoutubeImg} src={InstagramNew} alt="iconInstagram"/>
                        </a>
                    </div>
                    <div className={classes.instagramYoutube}>
                        <a href="https://www.youtube.com/c/Darrellsteg"
                           target="_blank" rel="noreferrer noopener"
                           className="socialIcons">
                            <img className={classes.instagramYoutubeImg} src={YoutubeNew} alt="iconYoutube"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;

