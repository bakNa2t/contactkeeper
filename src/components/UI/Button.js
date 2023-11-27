import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button + " " + props.className}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children.toUpperCase()}
    </button>
  );
};

export default Button;
