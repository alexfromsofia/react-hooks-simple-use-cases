import { useLayoutEffect, useRef, useState } from "react";

export const useMeasure = (
  deps: any[]
): [DOMRect | undefined, React.RefObject<HTMLDivElement>] => {
  const [rect, setRect] = useState<DOMRect>();
  const ref = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    if (!ref || !ref.current) return;

    setRect(ref.current?.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [rect, ref];
};
