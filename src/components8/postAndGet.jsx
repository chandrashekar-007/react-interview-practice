import React, { useState } from 'react'
import Loader from './Loader'
import "./postAndGet.css"


export const Requests = () => {

    const [loader,setLoader] = useState(false)
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const fetchData=()=>{
        return fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                title: user.email,
                pswd: user.password
            })
        })
        .then((res)=> res.json()).then((data)=>console.log(data))
        
    }

    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoader(true)
        fetchData()
        setTimeout((e) => {
        setUser({
            email:"",
            password:""
        })
        setLoader(false)
        }, 2000);
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="email">
                <span>
                    <label htmlFor='emailTrigger'>Email</label>
                </span>
                <input type="email" name="email" value={user.name} autoComplete="off" onChange={handleChange} id="emailTrigger" />
            </div>
            <div className="password">
                <span>
                    <label htmlFor='pswdTrigger'>Password</label>
                </span>
                <input type="password" name="password" id="pswdTrigger" onChange={handleChange} autoComplete='off' value={user.password} />
            </div>
            <button disabled={(user.email==="" || user.password==="")?true:false} type="submit">{
            loader?(<Loader/>):"Submit"}</button>
        </form>
    </div>
  )
}
