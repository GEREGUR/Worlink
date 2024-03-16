"use client";

import { Twirl } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { useClickAway } from "react-use";
import { useRef } from "react";

const links = [
  {
    id: 1,
    link: "Главная",
  },
  {
    id: 2,
    link: "О нас",
  },
  {
    id: 3,
    link: "Каталог",
  },
  {
    id: 4,
    link: "Модели",
  },
  {
    id: 5,
    link: "Связь",
  },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setNav(false));

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
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
      {nav && (
        <ul className="absolute right-0 top-0 flex h-screen w-[60vh] flex-col items-center justify-center bg-[#240A0B] text-slate-100 transition-all duration-300 ease-out  md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer px-4 py-6 text-4xl capitalize hover:scale-105 hover:text-white"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
