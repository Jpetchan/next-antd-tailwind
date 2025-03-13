"use client";

import { Button } from "antd";
import CustomCard from "@/components/card";
import SubMenu from "@/components/menu/sub-menu";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <>
      <SubMenu
        active={pathname}
        items={[
          {
            key: "/product",
            name: "สินค้า",
          },
        ]}
      />
      <CustomCard>
        <Button type="primary">Ant Design Buttond</Button>
      </CustomCard>
    </>
  );
}
