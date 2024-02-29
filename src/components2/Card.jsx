import React from "react";
import "../App.css";

const Card = ({user}) => {
 return(
  <>
  
  {
    user.map((data)=>{

      // const {id , name , profession} = data;
      const {id , avatar_url , login, html_url} = data;
      return (
          <div className="card-data" key={id}>
            <figure>
              <img src={avatar_url} alt="figure" />
              {/*  avtar */}
            </figure>
            <div className="data">
              <div className="name">{login}</div>
              {/* login */}
              <div className="github">
                <a href={html_url} target='_blank'><i className="fa fa-github"/></a>
              </div>
              {/* html_url */}
            </div>
          </div>
      );
    })
  }
  
  </>
 )

};

export default Card;
