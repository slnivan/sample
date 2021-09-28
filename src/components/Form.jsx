import classes from "./Form.module.css";
import Button from "./UI/Button";
import Input from "./UI/Input";
import React, {useState, useReducer} from 'react'

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init)
  
  return (
    <form className={classes.form}>
      <Input />
      <Input />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
