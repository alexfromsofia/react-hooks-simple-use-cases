import React, { useCallback, useState } from "react";
import "./App.css";
import { Increment } from "./Increment";
import { useFetch } from "./hooks/useFetch";
import { useMeasure } from "./hooks/useMeasure";
import Form from "./Form";

interface IValues {
  email: "";
  password: "";
  firstName: "";
}

const style = {
  display: "flex",
  flexDirection: "column" as "column",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  const favouriteNums = [7, 21, 44, 123];
  const [count, setCount] = useState(() =>
    JSON.parse((window.localStorage.getItem("count") as any) || 0)
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const [rect, divRef] = useMeasure([data]);
  const increment = useCallback((n) => setCount((c: number) => c + n), [
    setCount,
  ]);

  return (
    <div className="App">
      <div style={style}>
        <div ref={divRef}>
          {!data || loading ? "loading..." : data}
          <pre>{JSON.stringify(rect, null, 2)}</pre>
        </div>
      </div>
      <div>Count: {count}</div>
      <Form />
      <Increment onClick={increment} />
      {favouriteNums.map((n) => (
        <Increment onClick={increment} n={n} key={n} />
      ))}
    </div>
  );
}

export default App;
