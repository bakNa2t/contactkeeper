import React, { useState } from "react";
import CreateContact from "./components/Contacts/CreateContact";
import ContactList from "./components/Contacts/ContactList";
import Header from "./components/UI/Header";
import "./App.css";

const App = () => {
  const [contactList, setContactList] = useState([]);
  const createContactHandler = (name, phoneNumber) => {
    setContactList((prevContactList) => {
      return [
        ...prevContactList,
        {
          name: name,
          phoneNumber: phoneNumber,
          id: Math.random().toFixed(5).toString(),
        },
      ];
    });
  };

  return (
    <React.Fragment>
      <Header />
      <CreateContact onCreateContact={createContactHandler} />
      {contactList.length !== 0 && <ContactList contacts={contactList} />}
    </React.Fragment>
  );
};

export default App;
