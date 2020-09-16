import React, { useRef } from "react";
import "./App.css";
import { useForm } from "./hooks/useForm";

interface IValues {
  email: "";
  password: "";
  firstName: "";
}

function Form() {
  const [values, handleChange] = useForm<IValues>({
    email: "",
    password: "",
    firstName: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={inputRef}
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        placeholder="First Name"
        name="firstName"
        value={values.email}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        name="password"
        value={values.email}
        onChange={handleChange}
      />
      <button onClick={() => (inputRef as any).current.focus()}>Focus</button>
    </>
  );
}

export default Form;
