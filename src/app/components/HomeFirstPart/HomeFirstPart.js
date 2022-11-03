import React from "react";
import classes from './HomeFirstPart.module.css';


function HomeFirstPart (props) {



    return(
        <div className={classes.mainPart}>
            <div className={classes.part1}>
                {props.profileInfo &&
                    <>
                        <div className="title">{props.profileInfo.config.setting_text_header.title}</div>
                        <div className={classes.textFirstPart}>
                            {props.profileInfo.config.setting_text_header.description}</div>
                    </>
                }
                <div className="pinkButton" onClick={props.openLoginModal}>HELP DARRELL</div>
            </div>
            <div className={classes.imgHomeFirstPart}>
                {props.profileInfo &&
                <iframe width="400" height="450"
                        src={`${props.profileInfo.config.setting_video.link}`}
                        title="Beautynezz Wil Je Met Mij Op Date?" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>}
            </div>
        </div>
    )
}


export default HomeFirstPart;

