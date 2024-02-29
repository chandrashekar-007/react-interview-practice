import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Tables from './Table'
import { InfinitySpin } from "react-loader-spinner";
import {ThreeDots} from "react-loader-spinner"
import {ProgressBar} from "react-loader-spinner"


// id email name username phone address.

const JsonUser = () => {

    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true);

    const API = "https://jsonplaceholder.typicode.com/users";

    const userData = async url => {
    try {

    const res = await axios.get(url);
    const data = res.data;
    setLoader(false)
    setUsers(data);

    } catch (error) {
      console.log("Error is :- "+ error);
    }

    };

    useEffect(() => {
      userData(API);
    }, []);

    if(loader){
      return (
        <>
        <div className="spinner">
          <span className="spin">
            <InfinitySpin 
            width='300'
            color="#0d1c57"
          />
          </span>
          <span>
            {/* <ThreeDots 
              height="100" 
              width="80" 
              radius="2"
              color="#0d1c57" 
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            /> */}
          </span>
          <span>
            {/* <ProgressBar
              height="80"
              width="100"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor = '#F4442E'
              barColor = '#0d1c57'
            /> */}
          </span>
          <span className="text">Loading... Please wait...</span>
        </div>
      </>
      )
    }

  return (
    <Tables users={users}/>

  );
};

export default JsonUser;
