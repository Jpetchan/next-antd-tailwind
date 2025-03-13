import React from "react";
import { Button } from "antd";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { IMenuItem } from "@/interfaces/menu-item";

interface IProps {
  active: string;
  items: IMenuItem[];
}

const SubMenu = ({ items, active }: IProps) => {
  const navigate = useRouter();
  return (
    <div className="bg-white px-5 border border-b-1 flex flex-row py-2 overflow-y-auto">
      {items.map((i) => {
        return (
          <Button
            key={i.key}
            type="text"
            className={"!text-blue-700"}
            onClick={() => navigate.push(`${i.key}`)}
          >
            {i.name}
          </Button>
        );
      })}
    </div>
  );
};

export default SubMenu;
