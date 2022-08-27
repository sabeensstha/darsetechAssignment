import React, { useEffect, useState } from "react";

const Fetching = () => {
  const [users, setusers] = useState([{}]);
  const getusers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((userss) => {
        setusers(userss);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getusers();
  }, []);
  return (
    <div>
    <h5>Qno10</h5>
    <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
      {users.map((user) => {
        return (
          
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          
        );
      })}
      </table>
    </div>
  );
};

export default Fetching;
