import "./Login.css";
import { AiOutlineUpload } from "react-icons/ai";
import {useNavigate} from 'react-router-dom';

import {signInWithGooglePopup, siginwithFcebook} from "../Pages/Firebase/Firebase";



export const Login = () => {
  const navigate = useNavigate();

  const SigninwithGoogle = async()=>{
    await signInWithGooglePopup();
    navigate('/')
  }

  const SigninwithFacebook = async ()=>{
    await siginwithFcebook();
  }
  return (
    <>
      <div className="main-container">
        <div className="heading">
          <h3>Register Now</h3>
          <div className="resume">
            <p className="autofil">Autofill by Resume</p>
            <p>
              <AiOutlineUpload />
              Upload
            </p>
          </div>
          <p className="format">
            File Supported: pdf, doc, docx, rtf, txt - Max. 5 MB
          </p>
        </div>
        <div className="Manually">
          <div></div>
          <p className="autofil">or Register Manually</p>
          <div></div>
        </div>
        <div className="main-form">
          <div className="form">
            <input placeholder="Name" className="blk" />
            <input placeholder="Mobile" className="blk" />
            <input className="blk" placeholder="Experience/Fresher" />
          </div>
          <div className="form">
            <input placeholder="Email" className="blk" />
            <input placeholder="Location" className="blk" />
            <input placeholder="Highest qualification" className="blk" />
          </div>
          <div className="or">
            <h1>or</h1>
          </div>
          <div className="icon">
           <div className="google" onClick={SigninwithGoogle} >
            <img src="https://technologymirror.com.ng/wp-content/uploads/2017/04/6_logo_predesign-1.jpg" className="g"/>
           </div>
           <div className="linkedin">
            <img src="https://www.citypng.com/public/uploads/preview/hd-linkedin-official-logo-transparent-background-31623962207jz85kqlqot.png" className="li"/>
           </div>
           <div className="fb" onClick={SigninwithFacebook}>

            <img src="https://media.wired.com/photos/5954a23cce3e5e760d52d91a/master/w_2560%2Cc_limit/facebook_2015_logo.jpg" className="f"/>
           </div>
          </div>
        </div>
        <input placeholder="Skills" className="skills"/>
        <p className="threeskill">*Add atleast 3 relevant skills</p>
        <div className="uploadsecond">
            <div className="upload2">
            <p>
              <AiOutlineUpload className="fa" />
              Upload
            </p>
            </div>
            <p className="title">File Supported: pdf, doc, docx, rtf, txt - Max. 5 MB</p>
            <div className="last-contain">
            <input  type="checkbox" className="ch"/>
            <p> agree to <span className="col">Terms & Conditions</span> and <span className="col">Privacy policy</span> & Receive jobs notifications</p>
            </div>
            <button className="reg" >Register</button>
        </div>
       <div>
       </div>
      </div>
    </>
  );
};