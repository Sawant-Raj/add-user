import React from "react";
import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => {
          //users is an array of user objects and each user object has properties name and age
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li> //we are creating different list items so they should have a unique key
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
