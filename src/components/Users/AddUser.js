import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef(); //the ref value which is being generated here is always an object which has a current property and current holds the actual value of the ref
  const ageInputRef = useRef(); //initialized to undefined

  const [error, setError] = useState(); //initial value is undefined so no need to pass any initial value

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value; //every input element has value property
    const enteredUserage = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserage.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserage < 1) {
      //enteredAge is a string and we are comparing it with a number although js will execute it but to be on the safer side, adding + bcz it will convert enteredAge in a number
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserage);
    nameInputRef.current.value=""; //manipulatind DOM using refs is not good, we are not using react here
    ageInputRef.current.value="";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        /> //errror is an object so we can use title and message properties
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
