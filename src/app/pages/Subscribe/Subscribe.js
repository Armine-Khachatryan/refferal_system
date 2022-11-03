import React, {useEffect, useState} from "react";
import GoogleLogin from "react-google-login";
import Google_Logo from '../../assets/images/Google_Logo.png';
import {useSearchParams} from "react-router-dom";
import {gapi} from 'gapi-script';
import classes from './Subscribe.module.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import config from "../../config";
import axios from "axios";


function Subscribe(props) {

    const [token, setToken] = useState("");
    const [subscribed, setSubscribed] = useState("")
    const [x, setX] = useState("")
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        setX(searchParams.get("q"));
    }, [])


    const setText = (data) => {
        setSubscribed(data);
    };

    const responseGoogle = (response) => {
        console.log(response, "googleResponse");
    }

    const clientId = '116618851583-mc54nhldthpj99bqnte037pv1al4tkk4.apps.googleusercontent.com';


    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: 'openid email profile https://www.googleapis.com/auth/youtube.force-ssl'
            });
        };
        gapi.load('client:auth2', initClient);
    });

    console.log(x, 'rvgnj');

    let postSubscription = async (value) => {
        console.log(value, "values");
        try {
            let response = await axios.post(`${config.baseUrl}api/v1/link/${x}/`, {token: value},
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
            if (response.status === 200) {
             setText("subscribe")
              return   setTimeout(() => {
                    window.location.href = "https://www.youtube.com/c/Darrellsteg"
                  // window.open("https://www.youtube.com/c/Darrellsteg",
                  //     '_blank')
                }, 2000);
            }
            else if (response.status === 400) {
                setText("subscribed")
            } else {
                setText("error")
            }
        } catch (error) {
            console.log(error, 'createRoomError');
            setText("error")
        }
    }


    const functionSwitchCase = (parameter) => {
        switch (parameter) {
            case "subscribe":
                return <div className={classes.textDiv}>You subscribed successfully</div>
            case "subscribed":
                return <div className={classes.textDiv}>Request failed or you are already subscribed</div>
            case "error":
                return <div className={classes.textDiv}>Request failed or you are already subscribed</div>
        }
    }

    return (
        <div className={classes.wholePage}>
            <Header openLoginModal={props.openLoginModal}/>
            <div className="container">
                <div className={classes.textDiv}>By clicking this button you will also subscribe Darrell's
                youtube page!</div>
                <div className={classes.googleLoginPart}>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login"
                        // onSuccess={responseGoogle}
                        onSuccess={async (response) => {
                            console.log(response);
                            console.log(response.accessToken, "response.accessToken")
                            postSubscription(response.accessToken)
                            setToken(response.accessToken);
                            console.log(token, "tokne")
                            console.log(typeof (token))
                        }}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={(renderProps) => (
                            <div className={classes.googleBtn} onClick={renderProps.onClick}>
                                <div className={classes.googleIconWrapper}>
                                    <img className={classes.googleIcon}
                                         src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                </div>
                                <p className={classes.btnText}><b>Sign in with google</b></p>
                            </div>
                            // <div className={classes.btnHeader} onClick={renderProps.onClick}
                            // btnImage={Google_Logo}>
                            // Subscribe
                            // </div>
                        )}
                    />
                </div>
                {functionSwitchCase(subscribed)}
            </div>
            <Footer/>
        </div>
    )
}


export default Subscribe;