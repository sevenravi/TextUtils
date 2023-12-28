import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState(''); 
    const [fword, findword] = useState(''); 
    const [rword, replaceword] = useState(''); 

    const handelUppercase =()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","Success")
    }

    const handelLowercase =()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","Success")
    }

    const handelClr =()=>{
        setText('')  
        props.showAlert("Text cleared","Success")      
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handlefindchange = (event)=>{
        findword(event.target.value);
    }
    const handlereplacechange = (event)=>{
        replaceword(event.target.value);
        
    }
    
    const handelReplace=()=>{
        let newtext = text.replaceAll(fword,rword);
        setText(newtext);
        props.showAlert("Text is replaced","Success")
    }

    const handleCopy =()=>{
        var text = document.getElementById("mybox")
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard","Success")
    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces is removed","Success")
    }

    return (
            <>
        <div className='container my-2' style={{color : props.mode==='dark'?'white':'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>                
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelUppercase}> Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelLowercase}> Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handelClr}> Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}> Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}> Remove Extra Spaces</button>

            <div className='form-floating my-3'>
            <textarea className='form-control' value={fword} style={{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} onChange={handlefindchange}></textarea>
            <label htmlFor="form-floating">Find</label>

            </div>
            <div className="form-floating my-2" >
            <textarea className='form-control' value={rword} style={{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} onChange={handlereplacechange}></textarea>
            <label htmlFor="form-floating">Replace</label>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handelReplace}> Replace</button>

            
        </div>
        <div className="container my-2" style={{color : props.mode==='dark'?'white':'black'}}>
            <h2>Text summary:</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words, {text.length} Characters</p>
            <h3>Preview:</h3>
            <p>{text.length>0?text:"Enter Text "}</p>
            
        </div>
            </>
    )
}
