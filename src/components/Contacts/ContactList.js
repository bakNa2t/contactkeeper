import Card from "../UI/Card";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import logoKeeper from "../../assets/images/logo_keeper_512.png";
import styles from "./ContactList.module.css";
import Button from "../UI/Button";

const ContactList = (props) => {
  return (
    <Card className={styles.contacts}>
      <div className={styles.header}>
        <img src={logoKeeper} alt="logo" />
        Contacts
      </div>
      <ul>
        {props.contacts.map((contact) => (
          <li key={contact.id}>
            <p>
              Name:{" "}
              <span>
                {contact.name
                  .split(" ")
                  .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
                  .join(" ")}
              </span>
            </p>
            <p>
              Phone number:
              <span>
                {"+7 "}
                {contact.phoneNumber.replace(
                  /\(?([0-9]{0,3})\)?[-. ]?([0-9]{0,3})?[-. ]?([0-9]{0,4})/s,
                  "($1) $2-$3"
                )}
              </span>
            </p>
            {contact.email.length !== 0 && (
              <p>
                Email: <span>{contact.email.toLowerCase()}</span>
              </p>
            )}
            <button
              type="button"
              className={styles["edit-btn"]}
              // onClick={props.onEditContact}
            >
              <FaPencilAlt />
            </button>
            <button
              type="button"
              className={styles["delete-btn"]}
              onClick={props.onRemoveContact.bind(null, contact.id)}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <Button
        type="button"
        className={styles["clear-btn"]}
        onClick={props.onClearAllContacts}
      >
        Clear all contact
      </Button>
    </Card>
  );
};

export default ContactList;
