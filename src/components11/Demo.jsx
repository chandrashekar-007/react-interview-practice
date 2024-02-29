import React, { useState } from 'react'
import { useEffect } from 'react';
import "../components9/Pagination.css"

// scrollHeight(complete web page height) = innerHeight(visible web page height) + scrollTop (for infinite scroll)

export default function DarkLightTheme() {

    const [item, setItem] = useState(1);
    const [show, setShow] = useState(false);
    const [dark, setDark] = useState("dark-theme");


    const arr = Array.from({length:50},(_,i)=>i+1)
    // console.log(arr);

    const handleChange=()=>{
        // dark === "dark-theme" ? setDark("light-theme")  : setDark("dark-theme")
        if(dark === "dark-theme"){
            setDark("light-theme")
            setShow(true)
        }
        else{
            setDark("dark-theme")
            setShow(false)
        }
    }

    const handleClick=(value)=>{
        setItem(value)
    }

    useEffect(() => {
      
        document.body.className = dark;
   
    }, [dark])
    


  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"4rem",minHeight:"100vh"}}>
    <button onClick={handleChange} style={{color:"white"}} className="prev btn">{show ? "Dark ":"Light "}</button>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"4rem"}}>
      {
        arr.map((val,id)=>{
            return(
                <div className={item === val ? "number hover car":"number car"}
                onClick={()=>handleClick(val)}    key={id} >
                    {val}
                </div>
            )
        })
      }
    </div>
    </div>
  )
}
