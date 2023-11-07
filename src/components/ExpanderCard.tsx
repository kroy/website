import React, { useState } from "react";
import { clsx } from "clsx";
import { Maximize2, Minimize2 } from "lucide-react";

type ExpanderCardProps = {
  title: string;
  children?: React.Node;
};

const ExpanderCard = ({ title, children }: ExpanderCardProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      onClick={() => {
        if (!expanded) setExpanded(true);
      }}
      className={clsx(
        "border-accent border-[0.5px] hover:shadow-solid shadow-pop-light h-16 rounded-md",
        {
          "absolute top-0 w-full h-full bg-accent z-10": expanded,
          "cursor-pointer": !expanded,
        }
      )}
    >
      <div className="relative flex flex-col justify-center items-center h-full w-full p-2">
        <h2>{title}</h2>
        {expanded && children}
        <div className="absolute bottom-0 right-0 p-1 rotate-90">
          {expanded ? (
            <Minimize2
              onClick={() => {
                setExpanded(false);
              }}
              className="w-4 h-4"
            />
          ) : (
            <Maximize2 className="w-4 h-4" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpanderCard;
