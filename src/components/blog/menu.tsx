"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import type { MenuProps } from "antd";
import { Menu } from "antd";
import BlurFade from "@/components/magicui/blur-fade";
import { FaUserLock } from "react-icons/fa";
import { PiTreeViewBold } from "react-icons/pi";
import { LuGlobe } from "react-icons/lu";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "Guide",
    label: "Guide",
    type: "group",
    children: [
      { key: "/blog", label: "Introduction", icon: <LuGlobe size={18}/>},
    ],
  },
  {
    key: "grp",
    label: "Project",
    type: "group",
    children: [
      { key: "/blog/authentication", label: "Authentication", icon: <FaUserLock size={18}/>},
      { key: "fiber", label: "Go Fiber", icon: <PiTreeViewBold size={18}/> },
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
    console.log(pathname)
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
        onClick={onClick}
        theme={menuTheme}
        style={{ width: 296, border: "none", background: "transparent" }}
        selectedKeys={[pathname]}
        mode="inline"
        items={items}
      />
    </BlurFade>
  );
};

export default ListMenu;
