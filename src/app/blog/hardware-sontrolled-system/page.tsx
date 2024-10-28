import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Chip, Divider, Image, Link } from "@nextui-org/react";
import { HardwareControlledSystem as hcs } from "@/data/blog";
import TruthTable from "./TruthTable";
import { ML, MR } from "./Kmap";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "hardware-controlled-system",
  description: "hardware-controlled-system",
};
const BLUR_FADE_DELAY = 0.01;

export default function page() {
  const textclassdefult =
    "rose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert";
  return (
    <>
      <section
        id="HcsPageContent"
        className="BlogPage flex-[4] px-4 py-12 overflow-auto"
      >
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-4xl">{hcs.name}</h1>
          <Divider className="my-2" />
          <div id="introduction">
            <p className=" indent-10 text-pretty">{hcs.introduction}</p>
          </div>
          <br />
          <div id="working">
            <p className="text-pretty">{hcs.content.working}</p>
          </div>
          <div id="limitations" className="text-pretty ml-10">
            <p>ข้อดี:</p>
            <ul className="grid gap-1">
              <li>
                <Chip
                  radius="sm"
                  variant="dot"
                  color="success"
                  className="mr-1"
                >
                  ความเสถียรสูง
                </Chip>
                ระบบฮาร์ดแวร์มีความคงทนและเชื่อถือได้ในการทำงาน
              </li>
              <li>
                <Chip
                  radius="sm"
                  variant="dot"
                  color="success"
                  className="mr-1"
                >
                  ประหยัดพลังงาน
                </Chip>
                เนื่องจากไม่มีการประมวลผลที่ซับซ้อน ระบบจึงใช้พลังงานต่ำ
              </li>
              <li>
                <Chip
                  radius="sm"
                  variant="dot"
                  color="success"
                  className="mr-1"
                >
                  ความเร็วในการตอบสนองสูง
                </Chip>
                เนื่องจากไม่ต้องรอคำสั่งโปรแกรม
                ระบบสามารถทำงานได้ทันทีที่ได้รับสัญญาณ
              </li>
            </ul>
            <p className="mt-2">ข้อจำกัด:</p>
            <ul className="grid gap-1">
              <li>
                <Chip radius="sm" variant="dot" color="danger" className="mr-1">
                  การปรับเปลี่ยนหรือเพิ่มฟังก์ชันทำได้ยาก
                </Chip>
                เนื่องจากการทำงานทุกอย่างถูกออกแบบมาในระดับฮาร์ดแวร์
              </li>
              <li>
                <Chip radius="sm" variant="dot" color="danger" className="mr-1">
                  รองรับการทำงานที่ซับซ้อนไม่ได้
                </Chip>
                ระบบฮาร์ดแวร์ไม่เหมาะกับการทำงานที่ต้องการการคำนวณซับซ้อน
              </li>
            </ul>
          </div>
          <br />
          <div id="example" className="mt-2">
            <p className="text-pretty indent-10">{hcs.content.example}</p>
          </div>
          <br />
          <h2 className="font-bold">
            เรามาสร้างตารางค่าความจริง (Truth Table) กันก่อน
          </h2>
          <TruthTable />
          <br />
          <h2 className="font-bold">
            ต่อมาเราก็มาสร้างตาราง K-map เพื่อหาสมการ
          </h2>
          <ML />
          <br />
          <MR />
          <br />
          <h2 className="font-bold">จากตาราง K-Map เราก็จะได้สมการดังนี้ </h2>
          <div className=" grid gap-2">
            <Chip variant="dot" color="success" radius="sm">
              ML = C+R (OR gate)
            </Chip>
            <Chip variant="dot" color="success" radius="sm">
              MR = L+C+R (OR gate)
            </Chip>
          </div>
          <br />
          <h2 className="font-bold">คราวนี้เรามาลองต่อวงจรกัน</h2>
          <Image src="../hardware-sontrolled-system.png" alt="hardware-sontrolled-system"/>
          <br />
          <p className="text-pretty">{hcs.content.opamp}</p>
          <span>
            สามารถดู Schematic Component List หรือทดลอง Simulation ได้ที่
            <Link
              href="https://www.tinkercad.com/things/a9ByuVDriVn-phonsing-taleman"
              isExternal
              showAnchorIcon
              className="ml-2 font-bold"
            >
              MyTinkercad
            </Link>
          </span>
          
          <div id="example" className="mt-6">
            <p className="text-pretty indent-10">{hcs.summarize}</p>
          </div>
        </BlurFade>
        <p className="text-xs font-bold text-center my-4">apl ps @2002</p>
      </section>
      <section
        id="BlogNavbar2"
        className="hidden xl:flex flex-[1] pt-10"
      ></section>
    </>
  );
}
