import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Divider, Image, ScrollShadow, Link, Chip } from "@nextui-org/react";
import { CodeComparisonDemo } from "@/components/blog/code";
import { authentication as auth } from "@/data/blog";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "authentication",
  description: "Authentication",
};
const BLUR_FADE_DELAY = 0.01;

export default function page() {
  const textclassdefult =
    "rose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert";
  return (
    <>
      <section
        id="AuthPageContent"
        className="BlogPage flex-[4] px-4 py-12 overflow-auto"
      >
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-4xl">{auth.name}</h1>
          <Divider className="my-2" />
          <div id="introduction">
            <p className=" indent-10 text-pretty">{auth.introduction}</p>
          </div>
          <br />
          <div id="auth">
            <p className="text-pretty">{auth.content.auth}</p>
          </div>
          <br />
          <div id="jwt">
            <p className="text-pretty">{auth.content.jwt}</p>
          </div>
          <div id="jwt" className="text-pretty ml-10">
            <ul className="grid gap-1">
              <li>
                <Chip radius="sm" variant="dot" color="danger" className="mr-1">
                  Header
                </Chip>
                เก็บข้อมูลเกี่ยวกับชนิดของอัลกอริทึมที่ใช้เข้ารหัส (เช่น HS256)
              </li>
              <li>
                <Chip
                  radius="sm"
                  variant="dot"
                  color="success"
                  className="mr-1"
                >
                  Payload
                </Chip>
                เก็บข้อมูลของผู้ใช้งาน เช่น user ID หรือสิทธิ์การเข้าถึง
                (Claims)
              </li>
              <li>
                <Chip
                  radius="sm"
                  variant="dot"
                  color="warning"
                  className="mr-1"
                >
                  Signature
                </Chip>
                เป็นส่วนที่ใช้ในการยืนยันความถูกต้องของข้อมูลว่ามิได้ถูกเปลี่ยนแปลง
              </li>
            </ul>
          </div>
          <br />
          <Image src="../Flowchart.jpg" className="my-2 size-5/6 mx-auto" alt="Flowchart"/>
          <br />
          <div id="diagram">
            <p className="text-pretty">{auth.content.diagram}</p>
          </div>
          <br />
          <div id="code-introduction">
            <p className="text-pretty mb-2">{auth.code.introduction}</p>
          </div>
          <div id="struct">
            <CodeComparisonDemo
              code={auth.code.struct_code}
              language="go"
              filename="Struct User"
            />
            <div id="code-struct">
              <p className="text-pretty mt-2">{auth.code.struct_description}</p>
            </div>
          </div>
          <br />
          <div id="generateJWT">
            <CodeComparisonDemo
              code={auth.code.generateJWT_code}
              language="go"
              filename="generateJWT"
            />
            <div id="code-generateJWT">
              <p className="text-pretty mt-2">
                {auth.code.generateJWT_description}
              </p>
            </div>
          </div>
          <br />
          <div id="handler">
            <CodeComparisonDemo
              code={auth.code.handler_code}
              language="go"
              filename="Handler"
            />
            <div id="code-handler">
              <p className="text-pretty mt-2">
                {auth.code.handler_description}
              </p>
            </div>
          </div>
          <br />
          <div id="middleware">
            <CodeComparisonDemo
              code={auth.code.middleware_code}
              language="go"
              filename="Middleware"
            />
            <div id="code-middleware">
              <p className="text-pretty mt-2">
                {auth.code.middleware_description}
              </p>
            </div>
          </div>
          <br />
          <div id="main">
            <div id="code-main">
              <p className="font-bold mb-2">Full Go Fiber Code Example</p>
            </div>
            <CodeComparisonDemo
              code={auth.code.main_go}
              language="go"
              filename="main.go"
            />
          </div>
          <br />
          <div id="summarize">
            <p className="text-pretty indent-10">{auth.summarize}</p>
          </div>
          <p className="text-xs font-bold text-center mt-6">apl ps @2002</p>
        </BlurFade>
      </section>

      <section id="BlogNavbar2" className="hidden xl:flex flex-[1] pt-10">
        {/* <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p>BlogNavbar</p>
        </BlurFade> */}
      </section>
    </>
  );
}
