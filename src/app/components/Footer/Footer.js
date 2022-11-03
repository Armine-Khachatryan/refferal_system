import React from "react";
import InstagramFooter from '../../assets/images/InstagramFooter.png';
import YoutubeFooter from '../../assets/images/YoutubeFooter.png';
import LogoWhite from '../../assets/images/ProfilePic.png';
import {useNavigate} from "react-router-dom";
import classes from './Footer.module.css';




function Footer () {
    const navigate=useNavigate();


    return (
        <div className={classes.footerWhole}>
            <div className="container">
                <div className={classes.main}>
                    <div className={classes.logoFooter} onClick={()=>navigate('/')}>
                        <img className={classes.logoFooterIcon} src={LogoWhite} alt="logo"/>
                    </div>
                    <div className={classes.footerMediumPart}>
                        <div className={classes.instagramYoutubeFooter}>
                            <a href="https://www.instagram.com/darrellsteg/"
                               target="_blank" rel="noreferrer noopener"
                               className={classes.socialIconsFooter}>
                                <img className={classes.instagramYoutubeImgFooter} src={InstagramFooter}
                                     alt="iconInstagram"/>
                                <div className={classes.footerFont}>Instagram</div>
                            </a>
                        </div>
                        <div className={classes.instagramYoutubeFooter}>
                            <a href="https://www.youtube.com/c/Darrellsteg"
                               target="_blank" rel="noreferrer noopener"
                               className={classes.socialIconsFooter}>
                                <img className={classes.instagramYoutubeImgFooter}  src={YoutubeFooter}
                                     alt="iconYoutube"/>
                                <div className={classes.footerFont}>Youtube</div>
                            </a>
                        </div>
                    </div>
                    {window.location.pathname==="/privacy-policy"? <div className={classes.policyDiv}></div>:
                        <div className={classes.policyDiv}
                             onClick={()=>navigate('/privacy-policy')}>Privacy Policy</div>}
                </div>
            </div>
        </div>
    )
}

export default Footer;
