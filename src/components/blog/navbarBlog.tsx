"use client";
import { useState, useEffect } from "react";
import {
  Kbd,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Listbox,
  ListboxItem,
  ListboxSection,
  User,
} from "@nextui-org/react";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { FaUserLock } from "react-icons/fa";
import { IoHardwareChip } from "react-icons/io5";
import { LuGlobe } from "react-icons/lu";
import { AutoComplete, ConfigProvider, theme as themeAntd } from "antd";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const options = [
  { value: "Introduction", key: "/blog" },
  { value: "Authentication", key: "/blog/authentication" },
  { value: "Embedded system", key: "/blog/embeddedsystem" },
];

const menuTittle = [
  {
    key: "/blog",
    label: "Introduction",
    icon: <LuGlobe size={18} />,
  },
];

const menuProject = [
  {
    key: "/blog/authentication",
    label: "Authentication",
    icon: <FaUserLock size={18} />,
  },
  {
    key: "/blog/embeddedsystem",
    label: "Embedded system",
    icon: <IoHardwareChip size={18} />,
  },
];

const Doc = (
  <>
    <ModeToggle />
    {Object.entries(DATA.contact.social)
      .filter(([_, social]) => social.navbar)
      .map(([name, social]) => (
        <div key={social.name}>
          <Link
            href={social.url}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-10"
            )}
          >
            <social.icon className="size-4" />
          </Link>
        </div>
      ))}
  </>
);
export default function NavbarBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = (value: string) => {
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption) {
      router.push(selectedOption.key); // นำทางไปยังเส้นทางที่เลือก
      setIsMenuOpen(false)
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const search = (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "dark"
            ? themeAntd.darkAlgorithm
            : themeAntd.defaultAlgorithm,
      }}
    >
      <AutoComplete
       className="w-full"
        options={inputValue.length > 0 ? options : []}
        placeholder={"Search ..."}
        popupMatchSelectWidth={false}
        value={inputValue}
        onChange={(value) => setInputValue(value)}
        onSelect={handleSelect}
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        notFoundContent={inputValue ? "No search" : null}
      />
    </ConfigProvider>
  );
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link href="/" className="flex items-end gap-1">
          <User
            name={<p className=" font-bold">{DATA.name}</p>}
            description="@APL PS"
            avatarProps={{
              src: "../favicon.png",
              isBordered: true,
              color: "primary",
            }}
          />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end" className="hidden lg:flex">
        {search}
        {Doc}
      </NavbarContent>
      <NavbarContent justify="end" className="lg:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu>
        {search}
        <div className="flex">{Doc}</div>
        <NavbarMenuItem>
          <Listbox
            aria-label="Actions"
            onAction={(key) => {
              router.push(String(key));
              setIsMenuOpen(false);
            }}
          >
            <ListboxSection title="Project">
              {menuTittle.map((item) => (
                <ListboxItem
                  key={item.key}
                  startContent={item.icon}
                  className={
                    pathname === item.key
                      ? "text-default-800"
                      : "text-default-400"
                  }
                >
                  {item.label}
                </ListboxItem>
              ))}
            </ListboxSection>
            <ListboxSection title="Project">
              {menuProject.map((item) => (
                <ListboxItem
                  key={item.key}
                  startContent={item.icon}
                  className={
                    pathname === item.key
                      ? "text-default-800"
                      : "text-default-400"
                  }
                >
                  {item.label}
                </ListboxItem>
              ))}
            </ListboxSection>
          </Listbox>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
