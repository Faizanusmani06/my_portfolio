import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf";

function Footer() {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/moh-faizan-505319229/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Faizanusmani06",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mohfaizan993312@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          <FaTwitter size={30} />
        </>
      ),
      href: "https://x.com/MohFaizan993312",
      style: "rounded-br-md",
    },
  ];
  return (
    <div class="flex  p-6 bg-black footer justify-between">
      <a
        class="link-underline text-white text-2xl opacity-60 font-bold"
        href="/"
      >
        Moh Faizan
      </a>
      <div className="">
        <ul className="flex gap-4">
          {links.map(({ id, child, href, download }) => (
            <li key={id}>
              <a
                href={href}
                className="text-white opacity-60"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
