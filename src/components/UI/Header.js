import styles from "./Header.module.css";
import { IoIosContacts } from "react-icons/io";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        ContactKeeper
        <IoIosContacts />
      </h1>
    </div>
  );
};

export default Header;
