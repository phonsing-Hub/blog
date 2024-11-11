"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import type { MenuProps } from "antd";
import { Menu } from "antd";
import BlurFade from "@/components/magicui/blur-fade";
import { FaUserLock } from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";
import { IoHardwareChip } from "react-icons/io5";
import { TbBrandDocker } from "react-icons/tb";


type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "Guide",
    label: "Guide",
    type: "group",
    children: [
      { key: "/", label: "Introduction", icon: <LuGlobe size={18}/>},
    ],
  },
  {
    key: "documents",
    label: "Doc",
    type: "group",
    children: [
      { key: "/documents/docker", label: "Docker", icon: <TbBrandDocker size={20}/>},
    ],
  },
  {
    key: "project",
    label: "Projects",
    type: "group",
    children: [
      { key: "/projects/authentication", label: "Authentication", icon: <FaUserLock size={18}/>},
      { key: "/projects/hardware-sontrolled-system", label: "Hardware Controlled", icon: <IoHardwareChip size={18}/> },
    ],
  },
];
const BLUR_FADE_DELAY = 0.01;

const ListMenu: React.FC = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const currentTheme = theme === "system" ? systemTheme : theme;
  const menuTheme: "light" | "dark" = currentTheme === "dark" ? "dark" : "light";

  const onClick: MenuProps['onClick'] = (e) => {
    router.push(e.key);
  };

  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <Menu
        inlineCollapsed={false}
        onClick={onClick}
        theme={menuTheme}
        style={{ border: "none", background: "transparent", textOverflow: "ellipsis"}}
        selectedKeys={[pathname]}
        mode="inline"
        items={items}
      />
    </BlurFade>
  );
};

export default ListMenu;
