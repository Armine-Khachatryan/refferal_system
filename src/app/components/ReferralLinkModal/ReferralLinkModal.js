import React, {useState} from "react";
import Modal from 'react-modal';
import Close from '../../assets/images/Close.png'
import classes from './ReferralLinkModal.module.css';
import YellowBigButton from "../../UI/YellowBigButton/YellowBigButton";
import CopyImg from "../../assets/images/Copy.png";


function ReferralLinkModal (props) {


    const customStyles = {
        content: {
            padding: '24px 24px 150px 24px',
            maxWidth: '1136px',
            width: '100%',
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [showReferrals, setShowReferrals]=useState();
    const [inputValue, setInputValue]=useState("");
    const [copied, setCopied]=useState(false);



    function findLink (){
        setShowReferrals(prevState=>!prevState);
        setInputValue(props.url)
    }


    function Copy(){
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            console.log(copied)
        });
    }


    function closeAndReset (){
        setShowReferrals(false)
        setInputValue("")
        setCopied(false)
        props.closeReferralLinkModal();
    }


    return (
        <>
            <Modal
                isOpen={props.referralLinkModalIsOpen}
                onRequestClose={closeAndReset}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className={classes.referralWhole}>
                    <div className={classes.referralUpPart}>
                        <div className={classes.refLink}>Referral link</div>
                        <img className={classes.closePart} onClick={closeAndReset} src={Close} alt="iconClose"/>
                    </div>
                    {showReferrals && <div className={classes.referralSecondWhole}>
                        <div className={classes.below}>
                            <div className={classes.belowPart}>
                                <input className={classes.linkReferral}
                                       value={inputValue}
                                       onChange={(event)=>setInputValue(event.target.value)}
                                />
                                <button className={classes.copyBtn}
                                        onClick={Copy}
                                >
                                    <img className={classes.copyImg} src={CopyImg} alt="iconCopy"/>
                                    Copy</button>
                            </div>
                            {copied && <div className={classes.copiedText}>Code successfully copied</div>}
                        </div>
                    </div>
                    }
                    {!showReferrals && <YellowBigButton OnClick={findLink}>Generate referral link</YellowBigButton>}
                </div>
            </Modal>
        </>
    )
}

export default ReferralLinkModal;