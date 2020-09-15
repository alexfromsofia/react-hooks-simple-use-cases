import { useLayoutEffect, useState } from "react";

export const useMeasure = (ref: React.MutableRefObject<any>, deps: any[]) => {
  const [rect, setRect] = useState<DOMRect | {}>({});

  useLayoutEffect(() => {
    if (!ref || !ref.current) return;

    setRect(ref.current?.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rect;
};
