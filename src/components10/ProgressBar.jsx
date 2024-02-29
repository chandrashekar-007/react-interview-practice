import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

export default function ProgressBar({val=0, setSuccess}) {

  let [count, setCount] = useState(val)
  useEffect(() => {
    setCount(
      Math.min(100,Math.max(val,0))
    )
    if(val === 100) setSuccess(true)
  }, [val])
  
  return (
    <div className='progress_container'>
      <div className="progress_bar" role="progressbar">
        <div className="progress_color_bar" style={{width:`${count}%`}}>
          <div className="progress_count" style={{color:count>48?"white":"black"}}>
            { count }%
          </div>
        </div>
      </div>
    </div>
  )
}
