import { Typewriter } from "react-simple-typewriter"
import React from "react"


const TypeWriter = () => {
 
    
  return (

    <div style={{display: 'grid', placeContent:'center', fontSize:'30px' , minHeight:'100vh'}}>
    <h2 style={{margin: 'auto 0'}}>
        I am{" "}
        <span style={{color:'red'}}>
            <Typewriter
             words= {["Developer",'Programmer','Blogger','Designer',]}
             loop= {0}
             cursor
             cursorStyle='|'
             cursorColor="red"
             typeSpeed= {70}
             deleteSpeed= {50}
             delaySpeed={2000}
            />
        </span>
        {/* <span>
            <Cursor cursorStyle="|" />
        </span> */}
    </h2>
    </div>
  )
}

export default TypeWriter
