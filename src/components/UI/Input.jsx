import classes from "./Input.module.css";

const Input = (props) => {
  return <input className={classes.input} onChange={props.onChange}></input>;
};

export default Input;
