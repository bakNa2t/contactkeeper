import Card from "../UI/Card";
import styles from "./ContactList.module.css";

const ContactList = (props) => {
  return (
    <Card className={styles.persons}>
      <ul>
        {props.contacts.map((contact) => (
          <li key={contact.id}>
            <p>
              Contact name: <span>{contact.name.toUpperCase()}</span>
            </p>
            <p>
              Contact phone number: <span>{contact.phoneNumber}</span>
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ContactList;
