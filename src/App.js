import React, { useState, useEffect } from "react";
import CreateContact from "./components/Contacts/CreateContact";
import ContactList from "./components/Contacts/ContactList";
import Header from "./components/UI/Header";
import "./App.css";

// get contacts from local storage
const getContactsFromLocalStorage = () => {
  let contact = localStorage.getItem("contact");
  if (contact) {
    return JSON.parse(localStorage.getItem("contact"));
  } else {
    return [];
  }
};

const App = () => {
  const [contactList, setContactList] = useState(getContactsFromLocalStorage());
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

  //filter contacts

  //add contacts to local storage
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contactList));
  }, [contactList]);

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
