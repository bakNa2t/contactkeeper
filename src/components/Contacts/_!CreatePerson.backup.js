import React, { useState, useRef, Fragment } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./CreatePerson.module.css";

const CreatePerson = (props) => {
  // const nameInputRef = useRef();
  // const ageInputRef = useRef();

  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createPersonHandler = (e) => {
    e.preventDefault();
    //useRef consts
    // const inputPersonName = nameInputRef.current.value;
    // const inputPersonAge = ageInputRef.current.value;

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    /*if (
      inputPersonName.trim().length === 0 ||
      inputPersonAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }*/
    if (+inputAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    /*if (+inputPersonAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }*/
    // console.log(inputName, inputAge);
    props.onCreatePerson(inputName, inputAge);
    setInputName("");
    setInputAge("");

    //useRef value
    // props.onCreatePerson(inputPersonName, inputPersonAge);
    // inputPersonName.current.value = "";
    // inputPersonAge.current.value = "";
  };

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createPersonHandler}>
          <label htmlFor="name">Your Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name..."
            onChange={nameChangeHandler}
            value={inputName}
            // ref={nameInputRef}
          />
          <label htmlFor="age">Your Age:</label>
          <input
            id="age"
            type="number"
            placeholder="Enter age..."
            onChange={ageChangeHandler}
            value={inputAge}
            // ref={ageInputRef}
          />
          <Button type="submit">Add Person</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default CreatePerson;
