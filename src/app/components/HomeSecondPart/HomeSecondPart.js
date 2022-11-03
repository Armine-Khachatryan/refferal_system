import React from "react";
import config from "../../config";
import classes from './HomeSecondPart.module.css';



function HomeSecondPart (props) {

    return(

        <div className={classes.homeSecondPart}>
            {props.profileInfo &&
                <>
                    <div className="title center">{props.profileInfo.config.setting_image_text.title}</div>
                    <div className={classes.textHomeSecondPartDiv}>
                        {props.profileInfo.config.setting_image_text.description}
                    </div>
                </>
            }
            <div className={classes.photosDiv}>
                <a href="https://www.youtube.com/c/JoyBeautyNezz"
                   target="_blank" rel="noreferrer noopener"
                   className="socialIcons">
                    <div className={classes.photoNezz}>
                        {props.profileInfo &&
                        <img src={`${config.mediaUrl}${props.profileInfo.config.setting_image_text.images[0].image}`}/>}
                    </div>
                </a>
                <a href="https://www.youtube.com/c/Darrellsteg"
                   target="_blank" rel="noreferrer noopener"
                   className="socialIcons">
                    <div className={classes.photoDarrel}>
                        {props.profileInfo &&
                        <img src={`${config.mediaUrl}${props.profileInfo.config.setting_image_text.images[1].image}`}/>}
                    </div>
                </a>
            </div>
            <div className={classes.subscribedQuestionWhole}>
                <div className={classes.subscribedTitle}>Ben jij al geabonneerd?</div>
                <div className={classes.buttonsSubscription}>
                    <div className={classes.greenBtn} onClick={props.openLoginModal}>JA TUURLIJK!</div>
                    <div className={classes.greyBtn}
                         onClick={() => window.open("https://www.youtube.com/c/Darrellsteg", "_blank")}>
                        NEE NOG NIET..</div>
                </div>
            </div>
        </div>
    )
}

export default HomeSecondPart;



