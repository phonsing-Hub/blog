import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Divider, Image, ScrollShadow, Link } from "@nextui-org/react";
import { CodeComparisonDemo } from "@/components/blog/code";
import { authentication as auth, code } from "@/data/blog";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "auth",
  description: "Authentication",
};
const BLUR_FADE_DELAY = 0.01;

export default function page() {
  const textclassdefult =
    "rose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert";
  return (
    <>
      <section id="AuthPageContent" className="flex-[3] px-4">
        <ScrollShadow hideScrollBar className="h-[85svh] pt-10" size={10}>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-4xl">{auth.name}</h1>
            <Divider className="my-2" />
            <p className={cn(textclassdefult, "indent-10")}>{auth.tittle}</p>
            <br />
            <h2 className="text-md mb-2">{auth.content_1.title}</h2>
            <div className="flex flex-col gap-2">
              <div>
                <p>{auth.content_1.num1.title}</p>
                <p className={cn(textclassdefult)}>
                  {auth.content_1.num1.content}
                </p>
              </div>
              <div>
                <p>{auth.content_1.num2.title}</p>
                <p className={cn(textclassdefult)}>
                  {auth.content_1.num2.content}
                </p>
              </div>
              <div>
                <p>{auth.content_1.num3.title}</p>
                <p className={cn(textclassdefult)}>
                  {auth.content_1.num3.content}
                </p>
              </div>
              <div>
                <p>{auth.content_1.num4.title}</p>
                <p className={cn(textclassdefult)}>
                  {auth.content_1.num4.content}
                </p>
              </div>
              <div>
                <p>{auth.content_1.num5.title}</p>
                <p className={cn(textclassdefult)}>
                  {auth.content_1.num5.content}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-md mt-6">{auth.content_2.title}</h2>
              <p className={cn(textclassdefult, "indent-10")}>
                {auth.content_2.num1.content}
              </p>
            </div>
            <Image src={auth.content_2.num1.url} className="my-2" />
            <div>
              <h2 className="text-md mt-6">{auth.content_3.title}</h2>
              <span className={cn(textclassdefult, "indent-10")}>
                <Link
                  href={auth.content_3.num1.url}
                  isExternal
                  showAnchorIcon
                  className="font-sans text-sm text-muted-foreground dark:prose-invert font-bold"
                >
                  JSON Web Token (JWT)
                </Link>
                {auth.content_3.num1.content}
              </span>
            </div>
            <br />
            <h2 className="text-md mb-2">{auth.content_3.num2.title}</h2>
            <div className="flex flex-col gap-2">
              <div>
                <p>{auth.content_3.num3.title}</p>
                <p className={cn(textclassdefult)}>
                  {auth.content_3.num3.content}
                </p>
              </div>
              <div>
                <p>{auth.content_3.num4.title}</p>
                <p className={cn(textclassdefult)}>
                  {auth.content_3.num4.content}
                </p>
              </div>
              <div>
                <p>{auth.content_3.num5.title}</p>
                <p className={cn(textclassdefult)}>
                  {auth.content_3.num5.content}
                </p>
              </div>
              <p className={cn(textclassdefult, "indent-10")}>
                {auth.content_3.num6.title}
              </p>
            </div>
            <br />
            <div>
              <p>{auth.content_3.num7.title}</p>
              <p className={cn(textclassdefult, "indent-10")}>
                {auth.content_3.num7.content}
              </p>
            </div>
            <p className={cn(textclassdefult, "mt-4")}>
              {auth.content_3.num8.title}
            </p>
          </BlurFade>
          <CodeComparisonDemo />
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
