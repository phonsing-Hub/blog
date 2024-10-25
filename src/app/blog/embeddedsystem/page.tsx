import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Divider, Image, ScrollShadow, Link } from "@nextui-org/react";
import { embeddedsystem as emb } from "@/data/blog";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "embeddedsystem",
  description: "embeddedsystem",
};
const BLUR_FADE_DELAY = 0.01;

export default function page() {
  const textclassdefult =
    "rose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert";
  return (
    <>
      <section id="AuthPageContent" className="flex-[3] px-4">
        <ScrollShadow className="h-[92vh] pt-10" size={10}>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-4xl">{emb.name}</h1>
            <Divider className="my-2" />
            </BlurFade>
          <p className="text-xs font-bold text-center my-4">apl ps @2002</p>
        </ScrollShadow>
      </section>

      <section id="BlogNavbar2" className="hidden xl:flex flex-[1] pt-10">
        {/* <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p>BlogNavbar</p>
        </BlurFade> */}
      </section>
    </>
  );
}
