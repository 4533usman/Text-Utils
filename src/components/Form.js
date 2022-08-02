import React from 'react'
import { useState } from 'react'
export default function Form(props) {
    const [text, settext] = useState("");
    // <-------------converted To Lowercase---------------->
    function lowercase() {
        // console.log("Converted To LowerCase")
        let lower = text.toLowerCase();
        settext(lower);
        props.showalert("Converted To LowerCase","Success");
    }
    // <-------------converted To Uppercase---------------->
    function uppercase() {
        // console.log("Converted To Uppercase")
        let upper = text.toUpperCase();
        settext(upper);
        props.showalert("Converted To UpperCase","Success");
    }
    // <-------------Deleting The Text In The Text Box---------------->
    function cleartext() {
        // console.log("Text Has Been Cleared")
        settext("");
        props.showalert("Text Has Been Deleted","Success");
    }
    // <-------------Copying The Text To The ClipBoard---------------->
    function copytext() {
        // console.log("Text Has Been Copied")
        document.getElementById("floatingTextarea2").select();
        //    text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text);
        props.showalert("Copied To ClipBoard","Success");
    }
    // <-------------Remove All The Extra Spaces From The Text---------------->
    function remove_spaces() {
        // console.log("Extra Spaces Has Been Removed")
        let newstr = text.replace(/\s+/g, ' ').trim(" ");
        settext(newstr);
        props.showalert("Extra Has Been Removed","Success");
    }
    // <-------------Method For Writing The Text In The TextArea---------------->
    const onchangehandler = (event) => {
        settext(event.target.value);
    }
    return (
        <div className="container my-2">
            <div className="form-floating">
                <textarea style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429', height: 200 }} className="form-control" onChange={onchangehandler}  placeholder="Write Text To Analyze" value={text} id="floatingTextarea2" ></textarea>
                <label style={{color: props.mode==='light'?'black':'white'}} forhtml="floatingTextarea2">Word-Counter Character-Counter</label>
            </div>
            <div className="my-2">
                <button disabled={text.length===0} style={{color: props.mode==='light'?'white':'black',background: props.mode==='light'?'#141429':'white' }} className="btn  btn-sm mx-1 my-1" onClick={lowercase}>LowerCase</button>
                <button disabled={text.length===0}  style={{color: props.mode==='light'?'white':'black',background: props.mode==='light'?'#141429':'white' }} className="btn  btn-sm mx-1 my-1" onClick={uppercase}>UpperCase</button>
                <button  disabled={text.length===0}  style={{color: props.mode==='light'?'white':'black',background: props.mode==='light'?'#141429':'white' }} className="btn  btn-sm mx-1 my-1" onClick={cleartext}>Clear Text</button>
                <button  disabled={text.length===0}  style={{color: props.mode==='light'?'white':'black',background: props.mode==='light'?'#141429':'white' }} className="btn  btn-sm mx-1 my-1" onClick={copytext}>Copy Text</button>
                <button  disabled={text.length===0}  style={{color: props.mode==='light'?'white':'black',background: props.mode==='light'?'#141429':'white' }} className="btn  btn-sm mx-1 my-1" onClick={remove_spaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-2">
                <h3 style={{color: props.mode==='light'?'black':'white'}}>Text Summary</h3>
                <div style={{color: props.mode==='light'?'black':'white'}}>{text.length} Characters and {text.split(" ").filter((element)=>{return element.length!==0}).length} Words.</div>
                <div style={{color: props.mode==='light'?'black':'white'}}>{.008 * 60 * text.split(" ").length} Seconds Required to Read.</div>
                <h3 style={{color: props.mode==='light'?'black':'white'}}>Text Preview</h3>
                <p style={{color: props.mode==='light'?'black':'white'}}>{text.length>0?text:"Nothing To Preview"}</p>
            </div>
        </div>
    )
}
