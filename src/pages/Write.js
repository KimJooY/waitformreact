import React, { useEffect, useState } from "react";
import "../css/write.css"
import AlarmModal from "./AlarmModal";
import Loader from "../components/Loader";
import NavBlack from "../components/NavBlack";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import isLogin from '../control/isLogin';
import getCKEditorValue from "../control/getCkEditorValue";
import axios from "axios";
import getAccessToken from "../control/getAccessToken";
import { useHistory } from "react-router-dom";

const Wirte = (props) =>{

    const serverURL = "http://localhost:8080"

    const history = useHistory();

    const isloged = isLogin();

    const [title,settitle] = useState("");
    const [content,setContent] = useState("");

    const[numOfChars,setNumOfChars] = useState(0);
    const[CharsOverCheck, setCharsOverCheck] = useState(true);
    const[CharsUnderCheck, setCharsUnderCheck] = useState(true);
    const[loading, setLoaing] = useState(false);

    const[canSubmit, setCanSubmit] =useState(false);

    useEffect(()=>{
        setNumOfChars(content.length);
    },[content])
    useEffect(()=>{
        console.log("********************************");
        console.log(canSubmit);
    },[canSubmit])

    useEffect(()=>{

        if(numOfChars>4000)
            setCharsOverCheck(true);
        else
            setCharsOverCheck(false);

        if(numOfChars<500)
            setCharsUnderCheck(true);
        else
            setCharsUnderCheck(false);

    },[numOfChars])
    useEffect(()=>{
        if(!CharsOverCheck && !CharsUnderCheck)
            setCanSubmit(true);
        else
            setCanSubmit(false);

    },[CharsOverCheck,CharsUnderCheck])

    const onTitleHandler = (event) =>{
        settitle(event.currentTarget.value);
        console.log("Board Title = "+ title);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(getAccessToken());
        console.log(getCKEditorValue(content));
        write_CallML();
        // const token =getAccessToken();
        // axios
        //     .post("http://localhost:8080/board/upload",{
        //         "content" : content,
        //         "title" : title
        //        },
        //        {
        //          headers: {
        //            Authorization: 'Bearer ' + token
        //          }
        //        })
        //     .then( (response) =>{
        //         console.log(response);
        //         alert(response.data.message);
                
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //         alert(error);
        //     })
    }

    const write_CallML = async () =>{
        const token = getAccessToken();
        try{
            const wRes = await axios.post(serverURL+"/board/upload",{
                "content" : content,
                "title" : title
               },
               {
                 headers: {
                   Authorization: 'Bearer ' + token
                 }
               })
               console.log("??? ?????? ??????");
               const board_id = wRes.data.data.boardId;
               setLoaing(true);
               const mRes = await axios.get("http://localhost:8000/ML/"+board_id);
               console.log("?????????????????? ??????");
               console.log(mRes);

               const recc = await axios.post(serverURL+"/recommend",{
                "members":[
                    {"memberId":mRes.data.clustered_id[0]+1},
                    {"memberId":mRes.data.clustered_id[1]+1},
                    {"memberId":mRes.data.clustered_id[2]+1},
                    {"memberId":mRes.data.clustered_id[3]+1},
                    {"memberId":mRes.data.clustered_id[4]+1}
                ],
                "boardId":parseInt(mRes.data.board_idx)
               },
               {
                headers: {
                  Authorization: 'Bearer ' + token
                }
              })
               console.log("?????? ??????");
               setLoaing(false);
               alert((parseInt(mRes.data.clustered_id[0])+1)+", "+(parseInt(mRes.data.clustered_id[1])+1)+", "+
                    (parseInt(mRes.data.clustered_id[2])+1)+", "+(parseInt(mRes.data.clustered_id[3])+1)+", "+
                    (parseInt(mRes.data.clustered_id[4])+1) +"  ???????????? ?????? ??????");
               console.log(recc)

        }catch(error){
            setLoaing(false);
            console.log("ML?????? ?????? ?????? ??? ?????? ?????? ?????? ???????????? ??????");
            console.log(error);
        }
    }

    return (
        <>
            <NavBlack isloged={isloged} />
            {loading && <Loader type='spin' color="#000000" message={"??????????????? ???"}></Loader>}
            <section className="write-section">
    
                <div className="ckeditor-div">
                    <form onSubmit={onSubmit}>
                            <div className="title">
                                <label><h3>*??? ??????</h3><input placeholder="????????? ??????????????????." onChange={onTitleHandler} value={title}/></label>
                            </div>
                            <h3>*??????</h3>
                            <CKEditor
                                editor={ ClassicEditor }
                                config = {{
                                    placeholder : "????????? ???????????????."
                                }}
                                data=""
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setContent(data);
                                    
                                    console.log( { event, editor, data } );
                                    console.log("Board Contetns = "+content);
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                                } }
                            />
                        <div className="byte-check">
                                {CharsOverCheck && <p style={{color : "red"}} >! ????????? ?????? ??? ?????????</p>}
                                {CharsUnderCheck && <p style={{color : "red"}}>! ????????? ????????? ?????? ?????? ?????? ????????????</p>}
                        </div>
                        <div className="write-form-btn">
                            <button
                            disabled = { canSubmit ? false :true }
                            className= { canSubmit ? "canSubmit" : "cantSubmit" }
                            type="submit">??????</button>

                            <button
                            style={{backgroundColor : "#060607", cursor: "pointer"}} 
                            onClick={ (event)=> { event.preventDefault(); history.goBack();}}>??????</button>

                        </div>
                    </form>
                </div>
            </section>
            <AlarmModal></AlarmModal>
        </>
    );
}

export default Wirte;