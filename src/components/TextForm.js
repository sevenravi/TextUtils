import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState(''); 
    const [fword, findword] = useState(''); 
    const [rword, replaceword] = useState(''); 

    const handelUppercase =()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handelLowercase =()=>{
        let newText=text.toLowerCase();
        setText(newText)
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
    }

    return (
            <>
        <div className='container my-2'>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>                
            </div>
            <button className="btn btn-primary mx-2" onClick={handelUppercase}> Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handelLowercase}> Lowercase</button>

            <div className='form-floating my-3'>
            <textarea className='form-control' value={fword} onChange={handlefindchange}></textarea>
            <label htmlFor="form-floating">Find</label>

            </div>
            <div className="form-floating my-2">
            <textarea className='form-control' value={rword} onChange={handlereplacechange}></textarea>
            <label htmlFor="form-floating">Replace</label>
            </div>
            <button className="btn btn-primary mx-2" onClick={handelReplace}> Replace</button>

            
        </div>
        <div className="container my-2">
            <h2>Text summary:</h2>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <h3>Preview:</h3>
            <p>{text}</p>
            
        </div>
            </>
    )
}
