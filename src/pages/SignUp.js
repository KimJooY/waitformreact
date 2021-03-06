import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import Footer from "../components/Footer";
import AlarmModal from "./AlarmModal";
import isEmail from "../control/isEmail";
import isPassword from "../control/isPassword";
import '../css/signup.css'
import NotLoginHomeNavBlack from "../components/NotLoginHomeNavBlack"
import isPasswordSame from "../control/passwordValCheck";

const SignUp = (props) =>{

    const serverURL = "http://localhost:8080"

    const [nickName, setNickName] = useState("");
    const [password,setPassword] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [email, setEmail] = useState ("");

    const [emailError, setEmailError] = useState(true);
    const [passWordError, setpassWordError] = useState(true);
    const [passWordValError, setpassWordValError] = useState(true);

    const [canSignUp, setCanSignUp] = useState(false);

    const history = useHistory();

    useEffect(()=>{
        const emailRegex = isEmail(email);
        if(!email || emailRegex)
            setEmailError(false);
        else
            setEmailError(true);
        // console.log("*******************************");    
        // console.log(email);
    },[email]);

    useEffect(()=>{
        const passwordRegex = isPassword(password);

        if(!password || passwordRegex)
            setpassWordError(false);
        else    
            setpassWordError(true);

        // console.log("*******************************");
        // console.log("password : "+password);
        // console.log("password len : "+password.length);
    },[password]);

    useEffect(()=>{
        const pwdValCheck = isPasswordSame(password, passwordVal);
        if(!passwordVal || pwdValCheck)
            setpassWordValError(false);
        else
            setpassWordValError(true);

        // console.log("*****************************")
        // console.log("passWordVal : "+ passwordVal);
        // console.log("pwdValCheck : "+ pwdValCheck);
    },[password,passwordVal])

    useEffect(()=>{
        if(email && password && passwordVal && !emailError && !passWordValError && !passWordError)
            setCanSignUp(true);
        else
            setCanSignUp(false);
        
        // console.log("*****************************");
        // console.log("emailError : " + emailError);
        // console.log("passWordError : "+ passWordError);
        // console.log("passwordValError : " + passWordValError);
    },[email,password,passwordVal,passWordValError,passWordError,emailError])
    

    const onNickNameHandler = (event) =>{
        setNickName(event.currentTarget.value);
        // console.log(nickName);
    }

    const onEmailHandler = (event) =>{   
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value);
    }


    const onPasswordValHandler = (event) =>{
        setPasswordVal(event.currentTarget.value);
    }


    const onSubmit = (event) =>{
       event.preventDefault();
    //    console.log(nickName+" "+password+" "+email);
        axios
            .post(serverURL+"/auth/signup",{
                "email" : email,
                "nickname" : nickName,
                "password" : password
            }).then(function (response) {
                console.log(response);
                alert(response.data.message);
                if(response.status === 200)
                    history.push("/login");
            })
            .catch(function(error){
                console.log(error);
                alert(error);
            });
    }


    return (
        <>
            <NotLoginHomeNavBlack></NotLoginHomeNavBlack>

            <div className="signup-div">
                <form onSubmit={onSubmit}>
                    <div className="signup-contents-div">
                        <label htmlFor="">NickName<input type="text" value={nickName} onChange={onNickNameHandler} placeholder="???????????? ?????? ?????????"/></label>
                        
                    </div>
                    <div className="signup-contents-div">
                        <label htmlFor="">Email<input type="email" value={email} onChange={onEmailHandler} placeholder="?????????"/></label>
                        {emailError && <div style={{textAlign:"left"}}><p style={{color :"red"}}> ????????? ????????? ?????? ??????????????????</p></div>}
                    </div>
                    <div className="signup-contents-div">
                        <label htmlFor="">Password<input type="password" value={password} onChange={onPasswordHandler} placeholder="????????????"/></label>
                        {passWordError && <div style={{textAlign:"left"}}><p style={{color :"red"}}> ??????????????? ?????? ????????? ???????????? 8 ?????? ????????? ??????????????????</p></div>}
                    </div>
                    <div className="signup-contents-div">
                        <label htmlFor="">Password Validation<input type="password" value={passwordVal} onChange={onPasswordValHandler} placeholder="???????????? ??????"/></label>
                        {passWordValError && <div style={{textAlign:"left"}}><p style={{color :"red"}}> ??????????????? ???????????? ????????????</p></div>}
                    </div>
                    <button 
                    disabled = { canSignUp ? false : true }
                    className ={ canSignUp ? "signup-able" : "signup-disable"}
                    type="submit"
                    >????????????</button>
                </form>
            </div>
            <AlarmModal></AlarmModal>
            <Footer></Footer>
        </>
    );
}

export default SignUp;