import { useEffect, useRef } from "react";

function Reference(){
    let inputElement=useRef();
    let focusClick=()=>{
        inputElement.current.focus()
    }
useEffect(()=>{
    setTimeout(() => {
        inputElement.current.focus()
    },5000);
})

    return(
        <div>
         <h1>Reference hook</h1>
         <input type="text" placeholder="Enter your id" ref={inputElement}/>
         <button onClick={focusClick}>click</button>
        </div>
    )
}
export default Reference;