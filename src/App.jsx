import { useState,useEffect } from 'react'

import Posts from './components1/Posts'
import Users from './components2/Users'
import JsonUser from './components3/JsonUser'
import TypeWriter from './components4/Typewriter'
import Slider from './components5/Slider'
import Accordion from './components6/Accordion'
import { FileExplorer } from './components7/FileExplorer'
import { fileData } from './components7/fileData'
import { Requests } from './components8/postAndGet'
import Pagination from './components9/Pagination'
import ProgressBar from './components10/ProgressBar'
import DarkLightTheme from './components11/Demo'

function App() {
  const [data, setData] = useState(fileData);
  const [val, setVal] = useState(0);
  const [success, setSuccess] = useState(false);
  // for making progress bar  it a scalable component
  useEffect(() => {
    setInterval(() => {
       setVal(prev=>prev+1)
    }, 500);
   }, [val])


  return (
    <>
    {/* 1 */}
    {/* <Posts/> */}

    {/* 2 */}
    {/* <Users/> */}
    {/* <JsonUser/> */}

    {/* 3 */}
    {/* <TypeWriter/> */}

    {/* 4 */}
    {/* <Slider/> */}

    {/* 5 */}
    {/* <Accordion/> */}

    {/* 6 */}
    {/* <FileExplorer data={data}/> */}

    {/* 7 */}
    {/* <Requests/> */}

    {/* 8 */}
    {/* <Pagination /> */}

    {/* 9 */}
    {/* <ProgressBar val={val} setSuccess={setSuccess}/>
    <span>{success? "Completed!":"Loading..."}</span> */}

    {/* 10 */}
    {/* <DarkLightTheme/> */}
    
    </>
  )
}

export default App
