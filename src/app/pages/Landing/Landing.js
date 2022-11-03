import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../../config";
import HomeFirstPart from "../../components/HomeFirstPart/HomeFirstPart";
import HomeSecondPart from "../../components/HomeSecondPart/HomeSecondPart";
import HomeThirdPart from "../../components/HomeThirdPart/HomeThirdPart";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function Landing (props) {

    const [profileInfo,setProfileInfo]=useState()


    useEffect(() => {
        getProfileData()
    },[]);


    let getProfileData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/v1/configs/`)
            console.log(response.data, "result");
            setProfileInfo(response.data);
            console.log(profileInfo, "profileInfo")

        } catch (error) {
            console.log(error);
            console.log(error.response, 'getProfileInfoError');
        }
    }

  if(profileInfo){
      console.log(profileInfo, "profileInfo")
      console.log(profileInfo.config.setting_video.link)
      console.log(profileInfo.config.subscribe_type[0].title)
      console.log(JSON.stringify(profileInfo.config.setting_video.link))
  }



    return(
        <>
            <Header openLoginModal={props.openLoginModal}/>
            <div className="container">
                <HomeFirstPart openLoginModal={props.openLoginModal}  profileInfo={profileInfo}/>
            </div>
                <HomeSecondPart openLoginModal={props.openLoginModal}  profileInfo={profileInfo}/>
                <HomeThirdPart profileInfo={profileInfo}/>
            <Footer/>
        </>
    )
}

export default Landing;