import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./CreateContact.module.css";

const CreateContact = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [error, setError] = useState();

  const createContactHandler = (e) => {
    e.preventDefault();

    if (inputName.trim().length === 0 || inputPhoneNumber.trim().length === 0) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid name, phone number and email. This fields cannot be empty.",
      });
      return;
    }

    if (+inputPhoneNumber.length !== 10) {
      setError({
        title: "Invalid phone number",
        message: "Please enter a valid phone number (10 digits).",
      });
      return;
    }

    props.onCreateContact(inputName, inputPhoneNumber, inputEmail);
    setInputName("");
    setInputPhoneNumber("");
    setInputEmail("");
  };

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const phoneNumberChangeHandler = (e) => {
    setInputPhoneNumber(
      e.target.value.replace(/(\d{4})(\d{3})(\d{4})/, "($1) $2-$3")
    );
  };

  const emailChangeHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createContactHandler}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name..."
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label htmlFor="phone">Phone Number (10 digits):</label>
          <input
            id="phone"
            type="number"
            placeholder="Enter phone number..."
            onChange={phoneNumberChangeHandler}
            value={inputPhoneNumber}
          />
          <label htmlFor="email">Email (optional):</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email..."
            onChange={emailChangeHandler}
            value={inputEmail}
          />
          <Button type="submit">Add Contact</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default CreateContact;
