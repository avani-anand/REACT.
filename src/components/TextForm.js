import React ,{useState} from 'react';

export default function (props) {


    const handleUpClick=()=>{
        // console.log("uppercase was clicked" +text);
         let newText= text.toUpperCase();
         setText(newText)
    }
    const handleLwClick=()=>{
        // console.log("uppercase was clicked" +text);
        let newText=text.toLocaleLowerCase();
        setText(newText)
         
    }

    const handleonChange=(event)=>{     //because of this function we make changes in textarea then it invokes this function onchange function gives event so we use event in handleonChange and "event.target.value" it set the text we type in Textarea
        console.log("on change");
        setText(event.target.value)  
    }

    const[text, setText]=useState();//it means that the ("text ")value is( "enter text here" )but if we want to change its value then we use "setText" to change its value like setText("avani") now "text" value is "avani" because we can not change its value directly(like text=avni) we can only change  it by this function" usestate"
    // text="new text";  we cant set text directly thats why we use update function 
    //  setText("new text"); //this is corect way to change its value

    return (

        <>
        <div className='container'>

            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLwClick}>convert to Uppercase</button>

        </div>

        <div className="container">
            <h1>tour text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 *text.split(" ").length }takes minutes to read</p>
            <h2>preview  words</h2>
            <p>{text}</p>
        </div>

        </>
    );
}
