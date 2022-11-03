import React, {useState} from "react";
import './App.css';
import Landing from "./app/pages/Landing/Landing";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Subscribe from "./app/pages/Subscribe/Subscribe";
import LoginModal from "./app/components/LoginModal/LoginModal";
import ReferralLinkModal from "./app/components/ReferralLinkModal/ReferralLinkModal";
import PrivacyPolicy from "./app/pages/PrivacyPolicy/PrivacyPolicy";

function App() {

    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);// const [confirmEmailModalIsOpen, setConfirmEmailModalIsOpen] = useState(false);
    const [referralLinkModalIsOpen, setReferralLinkModalIsOpen] = useState(false);
    const [url, setUrl]=useState("")


    function openLoginModal() {
        setLoginModalIsOpen(true);
    }

    function closeLoginModal(){
        setLoginModalIsOpen(false)
    }

    function openReferralLinkModal() {
        setReferralLinkModalIsOpen(true);
    }

    function closeReferralLinkModal(){
        setReferralLinkModalIsOpen(false)
    }

  return (
      <>
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Landing openLoginModal={openLoginModal}/>}/>
              <Route exact path="/landing" element={<Landing openLoginModal={openLoginModal}/>}/>
              <Route  path="/subscribe" element={<Subscribe openLoginModal={openLoginModal}/>} />
              <Route  path="/privacy-policy" element={<PrivacyPolicy openLoginModal={openLoginModal}/>} />
          </Routes>
      </BrowserRouter>
    <LoginModal loginModalIsOpen={loginModalIsOpen}
                closeLoginModal={closeLoginModal}
                openReferralLinkModal={openReferralLinkModal}
                setUrl={setUrl}
    />
    <ReferralLinkModal referralLinkModalIsOpen={referralLinkModalIsOpen}
                       closeReferralLinkModal={closeReferralLinkModal}
                       url={url}
    />
      </>
  );
}

export default App;
