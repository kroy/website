import React, { useState } from "react";
import { ResetIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

interface FlipCardProps {
  front?: React.ReactNode;
  back?: React.ReactNode;
  bottomRail?: React.ReactNode;
}

const FlipCard = ({ front, back, bottomRail }: FlipCardProps) => {
  const [frontSide, setFrontSide] = useState<boolean>(true);
  return (
    <div
      className={clsx(
        "w-full h-full md:h-96 flex flex-col rounded-md hover:shadow-solid transition duration-300 ease-in-out p-2",
        {
          "bg-accent-light cursor-pointer": frontSide,
          "bg-accent-dark text-accent-light flipper": !frontSide,
        }
      )}
      onClick={() => {
        if (frontSide) setFrontSide(false);
      }}
    >
      <div className={clsx("h-full w-full relative", { flipper: !frontSide })}>
        {frontSide ? front : back}
        <div
          className={clsx("absolute bottom-0 right-0 cursor-w-resize", {
            hidden: frontSide,
          })}
          onClick={() => setFrontSide(true)}
        >
          <div className="flex justify-center items-center w-7 h-7 rounded-md bg-accent-light text-accent-dark">
            <ResetIcon />
          </div>
        </div>
        {bottomRail && (
          <div className="absolute bottom-0 left-0 w-2/3 flex justify-around items-center">
            {bottomRail}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlipCard;
