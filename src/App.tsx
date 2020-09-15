import React, { useRef, useState } from "react";
import "./App.css";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";

interface IValues {
  email: "";
  password: "";
  firstName: "";
}

function App() {
  const [values, handleChange] = useForm<IValues>({
    email: "",
    password: "",
    firstName: "",
  });
  const [count, setCount] = useState(() =>
    JSON.parse((window.localStorage.getItem("count") as any) || 0)
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <div>{!data || loading ? "loading..." : data}</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((c: number) => c + 1)}>Increment</button>
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
    </div>
  );
}

export default App;
