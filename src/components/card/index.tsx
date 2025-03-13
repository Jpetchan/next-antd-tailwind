import React from "react";
import { twMerge } from "tailwind-merge";

const CustomCard = ({
  children,
  customClass,
  customContainerClass,
}: {
  children: React.ReactNode;
  customClass?: string;
  customContainerClass?: string;
}) => (
  <div className={twMerge("p-2", customContainerClass)} style={{ zIndex: 200 }}>
    <div
      className={twMerge(
        "w-full rounded-lg border-gray-200 border bg-white p-2",
        customClass
      )}
    >
      {children}
    </div>
  </div>
);

export default CustomCard;
