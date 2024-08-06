import { ReactNode, useEffect, useRef, useState } from "react";
import { If } from "../ControlStatements/If";

export const Transition = ({
  show,
  children,
  direction,
}: {
  show: boolean;
  children: ReactNode;
  direction: string;
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const [removeState, setRemove] = useState(!show);

  useEffect(() => {
    const childElement = elementRef.current;

    if (show) {
      const from =
        direction === "left"
          ? { transform: "translateX(-100%)" }
          : { transform: "translateX(100%)" };
      const to = { transform: "translateX(0)" };

      setRemove(false);
      if (!childElement) return;
      childElement.animate([from, to], { duration: 500, fill: "forwards" });
    } else {
      if (!childElement) return;
      const from = { transform: "translateX(0)" };
      const to =
        direction === "left"
          ? { transform: "translateX(100%)" }
          : { transform: "translateX(-100%)" };

      const animation = childElement.animate([from, to], {
        duration: 500,
        fill: "forwards",
      });
      animation.onfinish = () => {
        setRemove(true);
      };
    }
  }, [show, removeState]);

  return (
    <If condition={!removeState}>
      <div ref={elementRef}>{children}</div>
    </If>
  );
};
