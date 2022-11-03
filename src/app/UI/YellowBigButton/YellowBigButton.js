import React from "react";
import classes from './YellowBigButton.module.css';

function YellowBigButton (props) {
    return(
        <button className={classes.yellowBigButton}
                type={props.type || 'button'}
                disabled={props.disabled}
                onClick={props.OnClick}>
            {props.children}
        </button>
    )
}


export default YellowBigButton;