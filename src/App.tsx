import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import { Increment } from "./Increment";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";
import { useMeasure } from "./useMeasure";

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
  const favouriteNums = [7, 21, 44, 123];
  const [count, setCount] = useState(() =>
    JSON.parse((window.localStorage.getItem("count") as any) || 0)
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef<HTMLInputElement>(null);
  const [rect, divRef] = useMeasure([data]);
  const increment = useCallback((n) => setCount((c: number) => c + n), [
    setCount,
  ]);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div ref={divRef}>
          {!data || loading ? "loading..." : data}
          <pre>{JSON.stringify(rect, null, 2)}</pre>
        </div>
      </div>
      <div>Count: {count}</div>
      <Increment onClick={increment} />
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
        {favouriteNums.map((n) => (
          <Increment onClick={increment} n={n} key={n} />
        ))}
      </>
    </div>
  );
}

export default App;
