import {
  Kbd,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  User,
} from "@nextui-org/react";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const searchInput = (
  <Input
    aria-label="Search"
    classNames={{
      inputWrapper: "bg-default-100",
      input: "text-sm",
    }}
    endContent={
      <Kbd className="hidden lg:inline-block" keys={["command"]}>
        K
      </Kbd>
    }
    labelPlacement="outside"
    placeholder="Search..."
    startContent={
      <FaSearch className="text-base text-default-400 pointer-events-none flex-shrink-0 bg-default-100" />
    }
    type="search"
  />
);

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
  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/" className="flex items-end gap-1">
          <User
            name={<p className=" font-bold">{DATA.name}</p>}
            description="@APL PS"
            avatarProps={{
              src: "../me.jpg",
              isBordered: true,
              color: "primary",
            }}
          />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end" className="hidden md:flex">
        {searchInput}
        {Doc}
      </NavbarContent>
    </Navbar>
  );
}
