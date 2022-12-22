import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter your Text'); 

    const handelUppercase =()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }



    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>                
            </div>
            <button className="btn btn-primary" onClick={handelUppercase}> Uppercase</button>
        </div>
    )
}
