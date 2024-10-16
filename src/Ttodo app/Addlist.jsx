import { useState } from "react";

function Addlist(obj){

    let [heading, setHeading] = useState("");
    let [color, setColor] = useState("");
    let [content, setContent] = useState("");
    
    
    
    let createCard=()=>{
        
        obj.setCard([...obj.card,{

            heading: heading,
            color: color,
            content: content,
            id: new Date().getTime()
        }])

        obj.setShow(false);
        
    }
    
    return(

        <li style={{backgroundColor:color}} className="input-container">
            <input value={heading} onChange={(e)=>setHeading(e.target.value)} type="text" placeholder="topic ......" />
            choose your background color
            <div className="color-container">
                
                <div onClick={()=>setColor("#FFE9D0")} className="round colorFFE9D0 "></div>
                <div onClick={()=>setColor("#FFBE98")} className="round colorFFBE98"></div>
                <div onClick={()=>setColor("#B3C8CF")} className="round colorB3C8CF"></div>
            </div>
            <textarea name="" id="" value={content} onChange={(e)=>setContent(e.target.value)} placeholder="type your content here... ................................................."></textarea>
            <button onClick={createCard}>create Sticky <i className="fa-solid fa-arrow-right"></i></button>
        </li>  
    )
}

export default Addlist;