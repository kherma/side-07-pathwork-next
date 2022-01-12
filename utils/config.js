import { HiOutlineHome, HiOutlineCode, HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { SiNextdotjs, SiFramer, SiTailwindcss } from "react-icons/si";
import {
  GiStonePile,
  GiRibbonMedal,
  GiMedal,
  GiTrophy,
  GiLaurelsTrophy,
  GiDiamondTrophy,
} from "react-icons/gi";

// ****************
// UTILS
// *********

const titlePart = "| PATCHWORK";
export const badges = [
  {
    Icon: GiStonePile,
    color: "#a8a29e",
  },

  {
    Icon: GiRibbonMedal,
    color: "#a16207",
  },

  {
    Icon: GiMedal,
    color: "#ca8a04",
  },

  {
    Icon: GiTrophy,
    color: "#eab308",
  },

  {
    Icon: GiLaurelsTrophy,
    color: "#fde047",
  },

  {
    Icon: GiDiamondTrophy,
    color: "#38bdf8",
  },
];

// ****************
// META DATA
// *********

export const pagesMetaData = {
  home: {
    title: `Home ${titlePart}`,
    description:
      "Welcome to the world of projects made with next and framer motions. The purpose is to have fun and learn some new things!",
  },
  planet: {
    title: `Planet ${titlePart}`,
    description: "Random planet generator build with CSS and JavaScript.",
  },
  vorp: {
    title: `Vorp ${titlePart}`,
    description:
      "Animated animalistic robot that meant to be a voice assistant visualization.",
  },
  letter: {
    title: `Letter ${titlePart}`,
    description: "Animated love letter build with CSS and JavaScript.",
  },
  fizzbuzz: {
    title: `FizzBuzz ${titlePart}`,
    description: "Automated FizzBuzz generator with visualization.",
  },
  cheatsheet: {
    title: `Git CheatSheet ${titlePart}`,
    description: "Cheatsheet with GIT and GitHub commands.",
  },
};

// ****************
// LINKS DATA
// *********

export const links = {
  home: {
    link: "/",
    Icon: HiOutlineHome,
  },
  github: {
    link: "https://github.com/kherma/next-framer-motion-fun",
    Icon: HiOutlineCode,
  },
  email: {
    link: "kamil.herma01@gmail.com",
    Icon: HiOutlineMail,
  },
  linkedin: {
    link: "https://www.linkedin.com/in/kamil-herma/",
    Icon: BsLinkedin,
  },
  website: {
    link: "https://kherma.github.io/",
    Icon: CgWebsite,
  },
  techStack: [
    {
      link: "https://nextjs.org/",
      Icon: SiNextdotjs,
    },
    {
      link: "https://www.framer.com/motion/",
      Icon: SiFramer,
    },
    {
      link: "https://tailwindcss.com/",
      Icon: SiTailwindcss,
    },
  ],
  navLinks: ["/", "/planet", "/vorp", "/letter", "/fizzbuzz", "/cheatsheet"],
};
