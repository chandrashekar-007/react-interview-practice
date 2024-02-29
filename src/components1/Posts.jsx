import React, { useEffect, useState } from "react";
import "../App.css";
import { InfinitySpin } from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";
import { ProgressBar } from "react-loader-spinner";
import axios from "./Axios";
import '../components10/ProgressBar.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState({
    show:false,
    msg:""
  });

  const API = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;
  // const API = "https://pokeapi.co/api/v2/pokemon";
  // const API = "https://jsonplaceholder.typicode.com";

  const getPosts = async (url) => {
  try {
    const res = await axios.get(url);
    let data= await res.data
      setSpinner(false);
	    setPosts((prev)=>[...prev, ...data]);
	    // setPosts(data);
	    // console.log(res);
    } catch (error) {
        console.log("This is error - " + error);
        setError({show:true,msg:error});
    }
  };

  useEffect(() => {
    getPosts(`${API}`);
  }, [page]);

  const handleScroll = async()=>{
    try {
      if( window.innerHeight + Math.ceil(document.documentElement.scrollTop) + 1 >= document.documentElement.scrollHeight){
          // setSpinner(true);
          setPage((prev)=>prev+1)
      }
    } catch (error) {
      console.log("Scroll error : ",error);
    }
  }

  useEffect(() => {
      
    window.addEventListener("scroll",handleScroll)

    return () => window.removeEventListener("scroll",handleScroll)
    
  }, [])
  


  if(spinner){
    return(
    <>
      <div className="spinner">
          <span className="spin">
              <InfinitySpin 
              width='300'
              color="#0d1c57"
              />
          </span>
      </div>
    </>
    )
  }

  return (
    <>
      <h2 className="center">Posts</h2>
      <div className="containers container__grid">
        {error.show === true ?(
            <div className="center">{error.msg}</div>
        ):
        (posts.slice(page*10-10,page*10).map((post) => {
          const { id, title, body } = post;

          return (
            <div className="box" style={{backgroundColor:"grey"}} key={id}>
              <h3>
                {title.slice(0, 20)}
              </h3>
              <div className="description">
                {body.slice(0, 150)}
              </div>
            </div>
          );
        }))}
      </div>
    </>
  );
};

export default Posts;
