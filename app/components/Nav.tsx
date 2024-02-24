'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from "@/public/asset/Logo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "catalogue",
    "fashion",
    "favorite",
    "lifestyle",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="h-[60px] max-w-full bg-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-black"
        />
        <NavbarBrand>
          <Logo />
          <h2 className="font-[900] text-xl text-gray-950 ml-1 uppercase">Fashion</h2>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 ml-[200px]">
        <NavbarItem>
          <Link color="foreground" href="#" className="uppercase">
            catalogue
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="uppercase">
            fashion
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="uppercase">
            favorite
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="uppercase">
            lifestyle
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" className="uppercase rounded bg-black text-white">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full uppercase text-black"
              href="#"
              size="sm"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}