import React from "react";
import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";
import Card from "./Card";
import '../components10/ProgressBar.css'

const Users = () => {
  const users = [
    {
      name: "bhanu",
      id: "1",
      profession: "developer"
    },
    {
      name: "shanu",
      id: "2",
      profession: "software developer"
    },
    {
      name: "manu",
      id: "3",
      profession: " react developer"
    },
    {
      name: "golu",
      id: "4",
      profession: "frontend developer"
    },
    {
      name: "shibu",
      id: "5",
      profession: "backend developer"
    }
  ];

  // avtar html_url "id" login
  const [user, setUser] = useState([]);

  const API = "https://api.github.com/users";
  // const API = "https://jsonplaceholder.typicode.com/users";
  const func = async (url) => {
    const res = await axios.get(url);
    const data = await res.data;
    setUser(data);
  };

  useEffect(() => {
    func(API);
  }, []);

  return (
    <div className="container">
      <p>User Data</p>
      <div className="card">
        <Card user={user}  />
      </div>
    </div>
  );
};

export default Users;
