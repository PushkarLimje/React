import React , { useState }from "react";
import ReactDOM,{ createRoot } from "react-dom/client";


function Android(){

    let [bgColor, setBgColor] = useState("black");
    let [name, setname]= useState("pushkar")
    // const changeColor = ()=>{
    //     setBgColor(()=>{
    //         //document.querySelector('body').style.backgroundColor = document.querySelector('button').innerHTML
    //         return ()=>{
    //             document.querySelector('body').style.backgroundColor = document.querySelector('button').innerHTML
            
    //         }
            
    //     })
    // } 
    // Remove the useState and setBgColor logic, as it's not needed for direct background color change.
    // Update changeColor to accept the color as an argument.
    const changeColor = (e) => {
        const color = e.target.innerText    ;
        setBgColor(color);
        document.body.style.backgroundColor = color;
        document.querySelector('h1').style.color = black;

    };
    
      
    const changeName = (e) => {
        setname((prevName) => prevName === "pushkar" ? "limje" : "pushkar");
    }


    return (
        <>
            <h1>Expirement name : {name}</h1>
            <button id="name"
            onClick={changeName}>change name </button>
            <p>click the color button  for changing the color of the button and background </p>
            <button onClick={changeColor}>red</button>
            <button onClick={changeColor}>blue</button>
            <button onClick={changeColor}>green</button>
            <button onClick={changeColor}>yellow</button>
            <button onClick={changeColor}>orange</button>
            <button onClick={changeColor}>grey</button>

        </>
    )
}

export default Android;