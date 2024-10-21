import BlurFade from "@/components/magicui/blur-fade";
import Meteors from "@/components/ui/meteors";
import WordAnimation from "@/components/WordAnimation";
import TechStack from "@/components/tech/techstack";
import Link from "next/link";
import { Divider } from "@nextui-org/react";
export const metadata = {
  title: "blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.01;

export default async function BlogPage() {
  return (
    <>
      <section id="BlogPageContent" className="flex-[3] pt-10">
        <div className="relative flex h-48 w-full flex-col items-center justify-center overflow-hidden  bg-background">
          <Meteors number={30} />
          <WordAnimation />
        </div>
        <br />
        <BlurFade delay={BLUR_FADE_DELAY}>
          <span className="indent-10 text-lg">
            Hi..👋🏻 ผม พลสิงห์ ตาเละมัน หรือเรียกผมว่า โนอาร์ ก็ได้น้า
            ผมเป็นนักศึกษามหาวิทยาลัยศรีปทุมสาขาวิศวกรรมคอมพิวเตอร์
            มาดูกันว่าในนี้มีอะไรให้เพื่อนๆได้รับชมกันบ้าง{" "}
            <Link href={"/blog/authentication"} className=" font-bold">
              Let's go
            </Link>
          </span>
          <Divider className="my-4" />x
        </BlurFade>
        <div className="md:w-[700px] w-[340px] mt-2 mx-auto">
          <TechStack />
        </div>
      </section>
      <section id="BlogNavbar2" className="hidden lg:flex flex-[1] pt-10">
        {/* <p>BlogNavbar</p> */}
      </section>
    </>
  );
}
