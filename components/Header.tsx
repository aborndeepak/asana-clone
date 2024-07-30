
"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";

export function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Asana Clone</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Login</Navbar.Link>
        <Navbar.Link href="create-account">
            <Button color="dark">Get Start</Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
