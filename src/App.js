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

  //delete certain contact
  const removeContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setContactList(contactList.filter((contact) => contact.id !== id));
    }
  };

  //delete all contacts
  const clearAllContacts = () => {
    if (window.confirm("Are you sure you want to clear all contacts?")) {
      setContactList([]);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <CreateContact onCreateContact={createContactHandler} />
      {contactList.length !== 0 && (
        <ContactList
          contacts={contactList}
          onRemoveContact={removeContact}
          onClearAllContacts={clearAllContacts}
        />
      )}
    </React.Fragment>
  );
};

export default App;
