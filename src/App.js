import React, { useState } from "react";
import CreateContact from "./components/Contacts/CreateContact";
import ContactList from "./components/Contacts/ContactList";
import Header from "./components/UI/Header";
import "./App.css";

const App = () => {
  const [contactList, setContactList] = useState([]);
  const createContactHandler = (name, phoneNumber, email) => {
    setContactList((prevContactList) => {
      return [
        ...prevContactList,
        {
          name: name,
          phoneNumber: phoneNumber,
          email: email,
          id: new Date().getTime().toString(),
        },
      ];
    });
  };

  const clearAllContacts = () => {
    setContactList([]);
  };

  return (
    <React.Fragment>
      <Header />
      <CreateContact onCreateContact={createContactHandler} />
      {contactList.length !== 0 && (
        <ContactList
          contacts={contactList}
          onClearAllContacts={clearAllContacts}
        />
      )}
    </React.Fragment>
  );
};

export default App;
