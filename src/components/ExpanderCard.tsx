import React, { useState, useCallback } from "react";
import { clsx } from "clsx";
import { Maximize2, Minimize2 } from "lucide-react";

type ExpanderCardProps = {
  title: string;
  children?: React.ReactNode;
};

const ExpanderCard = ({ title, children }: ExpanderCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const closeCard = useCallback(() => {
    setExpanded(false);
  }, [setExpanded]);
  return (
    <>
      {/* Hack to make sure the space this card takes up doesn't collapse when the card expands */}
      <div className={clsx("h-16", { hidden: !expanded })}></div>
      <div
        onClick={() => {
          if (!expanded) setExpanded(true);
        }}
        className={clsx("border-accent border-[0.5px] h-16 rounded-md", {
          "absolute top-0 w-full h-full min-h-fit bg-accent z-10 transition motion-reduce:transition-none ease-in duration-300":
            expanded,
          "cursor-nwse-resize hover:shadow-solid transition-none": !expanded,
        })}
      >
        <div className="relative flex flex-col justify-center items-center h-full w-full p-2">
          <h2 className={clsx({ underline: expanded })}>{title}</h2>
          {expanded && children}
          <div
            className={clsx(
              "bg-gradient-to-b from-transparent to-accent-light absolute bottom-0 cursor-n-resize w-full h-8",
              {
                hidden: !expanded,
              }
            )}
            onClick={closeCard}
          ></div>
          <div
            className={clsx(
              "bg-gradient-to-r from-transparent to-accent-light absolute right-0 cursor-w-resize w-8 h-full",
              {
                hidden: !expanded,
              }
            )}
            onClick={closeCard}
          ></div>
          <div className="absolute bottom-0 right-0 p-1 rotate-90">
            {expanded ? (
              <Minimize2
                onClick={closeCard}
                className="w-7 h-7 cursor-nw-resize"
              />
            ) : (
              <Maximize2 className="w-3 h-3" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpanderCard;
