import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import railarmorImg from "@/public/railarmor.png";
import gamingImg from "@/public/gammin.png";
import InsuranceImg from "@/public/insuranceV2.png"
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Electronic Engineering",
    location: "Guelma, AL",
    description:
      "I graduated in 2022 after that, I immediately found a job as a full-stack developer at rail-logistic.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Freelancer",
    description:
      "I worked as a front-end developer for 1 years in online as freelancer. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Alger, Al",
    description:
      "I'm now a IT engineer working as full stack developer at rail company. My stack includes React, Express, JavaScript, Docker, Prisma and Postgress. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "RailArmorIQv2",
    description:
      "Redesigned and rebuilt the insurance application to improve performance and scalability",
    tags: ["React", "TypeScript", "ExpressJs", "Docker Compose", "Prisma" ,"Antd pro"],
    imageUrl: InsuranceImg,
  },
  {
    title: "RailArmorIQ",
    description:
      "I worked as a full-stack developer on this project i build both fron-end and back-end and deployed the project to the rail server.",
    tags: ["React", "Express.js", "PostgreSQL", "Docker", "Prisma"],
    imageUrl: railarmorImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Prisma",
  "Express",
  "PostgreSQL",
  "Python",
  "Docker",
  "Nest",
  "Docker compose",
  "Machine learning",
  "Deep learning"
] as const;
