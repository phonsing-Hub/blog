"use client";
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

import { Marquee } from "./marquee";
import { Image } from "@nextui-org/image";
const reviews = [
  {
    name: "C/C++",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    name: "Golang",
    img: "tech/golang.svg",
  },
  {
    name: "Javascript",
    img: "tech/javascript.svg",
  },
  {
    name: "Typescript",
    img: "tech/typescript.svg",
  },
  {
    name: "PHP",
    img: "tech/php.svg",
  },
  {
    name: "Python",
    img: "tech/py.svg",
  },
  {
    name: "SQL",
    img: "tech/sql.svg",
  },
  {
    name: "React",
    img: "tech/react.svg",
  },
  {
    name: "React Native",
    img: "tech/react-native.svg",
  },
  {
    name: "Next",
    img: "tech/next.svg",
  },
  {
    name: "NodeJS",
    img: "tech/node.svg",
  },
  {
    name: "Bun",
    img: "tech/bun.svg",
  },
  {
    name: "Express",
    img: "tech/express.webp",
  },
  {
    name: "Elysia",
    img: "tech/elysia.svg",
  },
  {
    name: "Go Fiber",
    img: "tech/golang.svg",
  },
  {
    name: "Go Gorm",
    img: "tech/gorm.svg",
  },
  {
    name: "MySQL",
    img: "tech/mysql.svg",
  },
  {
    name: "PostgreSQL",
    img: "tech/pg.svg",
  },
  {
    name: "MSS Server",
    img: "tech/mssql.svg",
  },
  {
    name: "MongoDB",
    img: "tech/mongodb.svg",
  },
  {
    name: "Prisma",
    img: "tech/prisma.svg",
  },
  {
    name: "Arduino",
    img: "tech/arduino.svg",
  },
  {
    name: "Easy EDA",
    img: "tech/easyeda.png",
  },
  {
    name: "Docker",
    img: "tech/docker.svg",
  },
  {
    name: "Ubuntu",
    img: "tech/ubuntu.svg",
  },
  {
    name: "Google Cloud",
    img: "tech/googlecloud.svg",
  },
  {
    name: "Linux",
    img: "tech/linux.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex justify-center items-center gap-2">
        <Image width={32} src={img} radius="none" />
        <p className="text-sm font-bold">{name}</p>
      </div>
    </figure>
  );
};

export default function TechStack() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
