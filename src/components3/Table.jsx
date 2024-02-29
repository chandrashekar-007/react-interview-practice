import React from "react";
import Table from "react-bootstrap/Table";
import "../App.css";

const Tables = ({ users }) => {
  console.log(users);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0
            ? ( users.map((elem) => {
                const { id, email, name, username, phone } = elem;
                const {street , city , zipcode} = elem.address;

                return (
                  <tr key={id}>
                    <td>
                      {id}
                    </td>
                    <td>
                      {name}
                    </td>
                    <td>
                      {email}
                    </td>
                    <td>
                      {username}
                    </td>
                    <td>
                      {phone}
                    </td>
                    <td>{street},{city} ,{" "}{zipcode}</td>
                  </tr>
                );
              }))
            : <div className="text-center">Data Not Found</div>}
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
