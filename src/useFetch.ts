import { useEffect, useState, useRef } from "react";

export const useFetch = (url: string) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setTimeout(() => {
          // Ensure that when request finishes the component is still rendered
          if (isCurrent.current) {
            setState({ data: y as any, loading: false });
          }
        }, 2000);
      });
  }, [url, setState]);

  return state;
};
