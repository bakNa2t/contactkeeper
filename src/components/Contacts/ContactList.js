import Card from "../UI/Card";
import logoKeeper from "../../assets/images/logo_keeper_512.png";
import styles from "./ContactList.module.css";

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
                Email: <span>{contact.email}</span>
              </p>
            )}
            <div className={styles.deleteBtn}>&#11198;</div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ContactList;
