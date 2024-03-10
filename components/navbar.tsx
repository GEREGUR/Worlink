"use client";

import { Twirl as Hamburger, Twirl } from "hamburger-react";
import { useState } from "react";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "portfolio",
  },
  {
    id: 4,
    link: "experience",
  },
  {
    id: 5,
    link: "contact",
  },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  console.log(nav);

  return (
    <nav className="fixed flex h-[10vh] w-full flex-row justify-between p-4 text-white">
      <div>
        <h1 className="font-signature ml-2 mt-2 text-4xl">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Worlink
          </a>
        </h1>
      </div>
      <div
        className="h-auto w-auto cursor-pointer md:hidden"
        onClick={() => setNav(!nav)}
      >
        <Twirl />
      </div>
      <ul className="hidden md:flex md:items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links link-underline cursor-pointer px-4 font-medium capitalize text-neutral-200 duration-200 hover:scale-105 hover:text-white"
          >
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
