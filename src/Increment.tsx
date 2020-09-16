import React from "react";
import { useCountRenders } from "./useCountRenders";

interface Props {
  onClick: (n: number) => void;
  n?: number;
}

export const Increment = React.memo(({ onClick, n = 1 }: Props) => {
  useCountRenders();

  return <button onClick={() => onClick(n)}>Increment by {n}</button>;
});
