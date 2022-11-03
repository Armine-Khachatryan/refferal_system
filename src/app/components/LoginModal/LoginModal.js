import React from "react";
import Modal from 'react-modal';
import Input from "../../UI/Input/Input";
import useValidation from "../../hooks/useValidation";
import useInput from "../../hooks/useInput";
import classes from './LoginModal.module.css';
import YellowBigButton from "../../UI/YellowBigButton/YellowBigButton";
import axios from "axios";
import config from "../../config";




function LoginModal (props){
    const {isNotEmpty, isEmail}=useValidation();

    const customStyles = {
        content: {
            padding: '96px 20px',
            maxWidth: '752px',
            width: '100%',
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
    };

    const {
        value: fullName,
        isValid:fullNameIsValid,
        hasError: fullNameHasError,
        valueChangeHandler: fullNameChangeHandler,
        inputBlurHandler: fullNameBlurHandler,
        reset: resetFullName,
         } = useInput(isNotEmpty);


    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
         } = useInput(isEmail);


    const values = {
        email: email,
        full_name: fullName
    }

    let postLogin = async (values) => {
        try {
            let response = await axios.post(`${config.baseUrl}api/v1/referral/`, values)
            props.setUrl(response.data.url)
             closeLoginModalAndReset();
            props.openReferralLinkModal();
        } catch (error) {

            if (error.response.status >= 400 && error.response.status < 499) {
                console.log(error);
            } else {
                console.log(error);
            }
        }
    }

    let formIsValid = false;
    if (fullNameIsValid
        && emailIsValid
    ) {
        formIsValid = true;
    }

    const submitHandler = async event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        await postLogin(values);
        await resetFullName();
        await resetEmail();
    };


    let emailMessage =null;
    if(!email){
        emailMessage = "Email is required";
    }
    else if (!emailIsValid){
        emailMessage = "Invalid email";
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            submitHandler()
        }
    }


    function closeLoginModalAndReset(){
        props.closeLoginModal();
        resetFullName();
        resetEmail();
    }

    return(
        <>
            <Modal
                isOpen={props.loginModalIsOpen}
                onRequestClose={closeLoginModalAndReset}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className={classes.modalInside}>
                    <div className={classes.modalTitle}>Welcome to our system</div>
                    <form
                        className={classes.formClass}
                        onSubmit={submitHandler}
                    >
                        <Input
                            hasError = {fullNameHasError}
                            errorText="Please enter a Username."
                            input={{
                                value: fullName,
                                placeholder: "Full Name",
                                type: "text",
                                onChange: fullNameChangeHandler,
                                onBlur: fullNameBlurHandler
                            }}
                        />
                        <Input
                            hasError = {emailHasError}
                            errorText={emailMessage}
                            input={{
                                value: email,
                                placeholder: "Email",
                                type: "email",
                                onChange: emailChangeHandler,
                                onBlur: emailBlurHandler,
                                onKeyPress:handleKeyPress
                            }}
                        />
                        <YellowBigButton disabled={!formIsValid} type={"submit"}>Next</YellowBigButton>
                    </form>
                </div>
            </Modal>
        </>
    )
}


export default LoginModal;