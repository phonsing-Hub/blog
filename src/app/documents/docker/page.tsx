import React from "react";
import ShineBorder from "@/components/ui/shine-border";
import BlurFade from "@/components/magicui/blur-fade";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import {
  Chip,
  Divider,
  Link,
  User,
  ScrollShadow,
  Image,
} from "@nextui-org/react";
import {
  FaSquareFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import DifferencesTable from "./DifferencesTable";

const BLUR_FADE_DELAY = 0.01;
function page() {
  return (
    <>
      <ScrollShadow
        id="docker"
        className="BlogPage flex-[4] px-4 py-12"
        hideScrollBar
      >
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <OrbitingCirclesDemo />
          <h2 className="text-4xl">What Is Docker?</h2>
          <Divider className="my-2" />
          <div id="tittle">
            <p className="indent-10 text-pretty">
              Docker
              เป็นแพลตฟอร์มที่พัฒนาขึ้นเพื่อช่วยจัดการและปรับปรุงการทำงานของแอปพลิเคชันด้วยการใช้งาน
              คอนเทนเนอร์ (Containers)
              ซึ่งช่วยให้การพัฒนาและทดสอบแอปพลิเคชันเป็นไปอย่างมีประสิทธิภาพมากขึ้น
              ทั้งนี้ Docker ได้รับความนิยมอย่างมากตั้งแต่ถูกพัฒนาและเปิดตัวในปี
              2013 โดยบริษัท Docker Inc. ซึ่งเป็นที่ยอมรับอย่างกว้างขวางในวงการ
              DevOps และการพัฒนาซอฟต์แวร์
            </p>
          </div>
          <br />
          <div id="Background">
            <p className="text-pretty">
              ในอดีต การพัฒนาและใช้งานแอปพลิเคชันมักใช้วิธีการ Virtual Machines
              (VMs) ซึ่งต้องสร้างระบบปฏิบัติการแยกกันสำหรับแต่ละ VM
              เพื่อให้แอปพลิเคชันสามารถรันได้บนสภาพแวดล้อมเฉพาะตัว แต่ VM
              มีปัญหาหลายประการ เช่น ใช้ทรัพยากรมาก มีความซับซ้อน
              และจัดการได้ยาก
              ทำให้มีการคิดค้นเทคโนโลยีคอนเทนเนอร์เพื่อแก้ปัญหาเหล่านี้
            </p>
          </div>
          <br />
          <div id="DifferencesTable">
            <h2>Differences Summarized</h2>
            <DifferencesTable />
          </div>
          <br />
          <div id="Background">
            <p className="text-pretty">
              Docker
              ได้ถือกำเนิดขึ้นเพื่อสร้างคอนเทนเนอร์ที่สามารถแบ่งปันระบบปฏิบัติการเดียวกัน
              และใช้ทรัพยากรน้อยกว่า VM
              จึงช่วยให้ผู้พัฒนาและผู้ดูแลระบบสามารถสร้างและรันแอปพลิเคชันได้รวดเร็วและมีประสิทธิภาพยิ่งขึ้น
            </p>
          </div>
          <br />
          <div id="diagram" className="flex flex-col items-center">
            <Image
              src="https://www.researchgate.net/publication/369061128/figure/fig2/AS:11431281125201275@1678232029210/Docker-Container-vs-Virtual-Machine.png"
              alt="diagram"
            />
            <Link
              isExternal
              href="https://www.researchgate.net/figure/Docker-Container-vs-Virtual-Machine_fig2_369061128"
            >
              อ้างอิงภาพจาก ResearchGate
            </Link>
          </div>
          <br />
          <div id="Docker-vs-vm">
            <h2 className=" text-2xl">Docker vs Virtual Machines</h2>
            <div id="docker">
              <h2 className="font-bold">Docker (Containers)</h2>
              <ul className="ml-4">
                <li className="flex">
                  <div className="font-bold min-w-32">Infrastructure</div>
                  ส่วนของฮาร์ดแวร์จริง เช่น เซิร์ฟเวอร์หรือเครื่องคอมพิวเตอร์
                </li>
                <li className="flex">
                  <div className="font-bold min-w-32">Host OS</div>
                  ระบบปฏิบัติการหลักของเครื่อง (เช่น Linux)
                </li>
                <li className="flex">
                  <div className="font-bold min-w-32">Docker Engine</div>
                  ระบบที่รัน Docker ซึ่งจัดการการสร้างและการทำงานของคอนเทนเนอร์
                </li>
                <li className="flex">
                  <div className="font-bold min-w-32">Containers</div>
                  แต่ละคอนเทนเนอร์จะมีแอปพลิเคชันและไลบรารีที่จำเป็น
                  โดยใช้ทรัพยากรร่วมกับ Docker Engine และ Host OS
                </li>
              </ul>
            </div>
            <br />
            <div id="vm">
              <h2 className="font-bold">Virtual Machines (VMs)</h2>
              <ul className="ml-4">
                <li className="flex gap-1">
                  <p className="font-bold min-w-32">Infrastructure</p>{" "}
                  ส่วนของฮาร์ดแวร์จริง
                </li>
                <li className="flex gap-1">
                  <p className="font-bold min-w-32">Host OS</p>
                  ระบบปฏิบัติการหลักของเครื่อง
                </li>
                <li className="flex gap-1">
                  <p className="font-bold min-w-32">Hypervisor</p> ตัวจัดการ VM
                  ที่ช่วยรัน VM หลายๆ ตัวบนเครื่องเดียวกัน (เช่น VMware,
                  Hyper-V, หรือ VirtualBox)
                </li>
                <li className="flex gap-1">
                  <p className="font-bold min-w-32">Guest OS</p>
                  ระบบปฏิบัติการของแต่ละ VM ซึ่งเป็นอิสระจากกันและจาก Host OS
                  (เช่น VM อาจมีระบบปฏิบัติการที่แตกต่างจาก Host OS)
                </li>
                <li className="flex gap-1">
                  <p className="font-bold w-32 min-w-32">
                    Application and Libraries
                  </p>
                  แอปพลิเคชันและไลบรารีที่จำเป็นรันบนแต่ละ VM โดยไม่แชร์กับ VM
                  อื่น
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div id="objective-list" className="flex flex-col gap-2">
            <div className="text-pretty flex flex-col">
              <Chip variant="flat" radius="sm" size="lg" className="">
                <p className="font-bold text-pretty">
                  การพัฒนาแอปพลิเคชัน
                 
                </p>
              </Chip>
              Docker
              ช่วยให้ผู้พัฒนาสร้างสภาพแวดล้อมที่สามารถพกพาและทำงานได้เหมือนกันในทุกที่
              ไม่ว่าจะเป็นเครื่องของนักพัฒนา, เซิร์ฟเวอร์ทดสอบ
              หรือระบบในโปรดักชัน
              ช่วยลดปัญหาที่เกิดจากการที่โค้ดทำงานแตกต่างกันในแต่ละสภาพแวดล้อม
            </div>
            <div className="text-pretty flex flex-col">
              <Chip variant="flat" radius="sm" size="lg">
                <p className="font-bold text-pretty">
                  การสร้างและรันคอนเทนเนอร์หลายตัว
                </p>
              </Chip>
              Docker ทำให้สามารถสร้างคอนเทนเนอร์ที่มีขนาดเล็กและเบา
              ซึ่งสามารถรันได้อย่างรวดเร็วและง่ายดายบนเครื่องเดียวกัน
              หรือกระจายไปในหลายเครื่อง
              ทำให้การใช้งานทรัพยากรมีประสิทธิภาพและยืดหยุ่น
            </div>
            <div className="text-pretty flex flex-col">
              <Chip variant="flat" radius="sm" size="lg">
                <p className="font-bold text-pretty">
                  การปรับใช้แอปพลิเคชัน (Deployment)
                </p>
              </Chip>
              Docker
              ช่วยให้การปรับใช้แอปพลิเคชันบนเซิร์ฟเวอร์หรือคลาวด์สามารถทำได้อย่างง่ายดาย
              โดยใช้ไฟล์ Docker Compose หรือ Dockerfile
              ที่ช่วยกำหนดขั้นตอนการติดตั้งและการทำงาน
              ทำให้การปรับใช้ระบบมีความรวดเร็วและอัตโนมัติ
            </div>
            <div className="text-pretty flex flex-col">
              <Chip variant="flat" radius="sm" size="lg">
                <p className="font-bold text-pretty">
                  การจัดการเวอร์ชัน
                </p>
              </Chip>
              Docker รองรับการจัดการเวอร์ชันของคอนเทนเนอร์ได้
              ทำให้นักพัฒนาสามารถย้อนกลับไปยังเวอร์ชันก่อนหน้า
              หรือลองรันหลายเวอร์ชันพร้อมกันเพื่อเปรียบเทียบประสิทธิภาพได้
            </div>
            <div className="text-pretty flex flex-col">
              <Chip variant="flat" radius="sm" size="lg">
                <p className="font-bold text-pretty">
                  การทดสอบแอปพลิเคชัน
                </p>
              </Chip>
              Docker
              ทำให้การทดสอบแอปพลิเคชันเป็นไปได้ง่ายขึ้นด้วยการสร้างคอนเทนเนอร์ใหม่เพียงคลิกเดียว
              ลดเวลาและความซับซ้อนในการตั้งค่าสภาพแวดล้อมการทดสอบใหม่สำหรับแต่ละกรณี
            </div>
            <div className="text-pretty flex flex-col">
              <Chip variant="flat" radius="sm" size="lg">
                <p className="font-bold text-pretty">
                  การทำงานร่วมกับ CI/CD
                </p>
              </Chip>
              Docker เป็นเครื่องมือสำคัญในการทำงานร่วมกับระบบ CI/CD
              เนื่องจากสามารถตั้งค่าให้การทดสอบและการปรับใช้งานแอปพลิเคชันเป็นไปแบบอัตโนมัติในทุกการอัปเดต
              ช่วยให้การพัฒนาและปล่อยโปรแกรมใหม่ๆ รวดเร็วขึ้น
            </div>
            <div className="text-pretty flex flex-col">
              <Chip variant="flat" radius="sm" size="lg">
                <p className="font-bold text-pretty">
                  การขยายระบบ
                </p>
              </Chip>
              Docker ช่วยให้การขยายระบบทำได้ง่ายดาย
              โดยสามารถเพิ่มจำนวนคอนเทนเนอร์สำหรับแอปพลิเคชันหนึ่งๆ
              เพื่อรองรับการใช้งานที่เพิ่มขึ้นโดยไม่ต้องปรับแต่งสภาพแวดล้อมมากนัก
            </div>
            <div className="text-pretty flex flex-col">
              <Chip variant="flat" radius="sm" size="lg">
                <p className="font-bold text-pretty">
                  การจัดการทรัพยากรที่มีประสิทธิภาพ
                </p>
              </Chip>
              Docker ใช้ทรัพยากรน้อยกว่า Virtual Machines (VMs)
              เนื่องจากไม่ต้องใช้ Guest OS แต่ละคอนเทนเนอร์สามารถแชร์ทรัพยากรกับ
              Host OS ได้โดยตรง ทำให้การใช้ทรัพยากรมีประสิทธิภาพสูงขึ้น
            </div>
            <div className="text-pretty flex flex-col">
              <Chip variant="flat" radius="sm" size="lg">
                <p className="font-bold text-pretty">
                  การสนับสนุนระบบหลายแพลตฟอร์ม
                </p>
              </Chip>
              Docker รองรับการรันบนระบบปฏิบัติการหลายระบบ เช่น Windows, macOS,
              และ Linux รวมถึงสามารถสร้างคอนเทนเนอร์ที่ทำงานข้ามแพลตฟอร์มได้
              ทำให้ผู้พัฒนาสามารถทำงานได้อย่างอิสระมากขึ้น
            </div>
            <br />
            <div id="objective">
            <h2 className="text-2xl">Docker เกิดมาเพื่ออะไร</h2>
            <p className="indent-10 text-pretty">
              Docker
              เกิดมาเพื่อตอบสนองความต้องการในวงการพัฒนาแอปพลิเคชันที่ต้องการ
              สภาพแวดล้อมการทำงานที่สม่ำเสมอและพกพาได้ โดย Docker
              สามารถช่วยให้แอปพลิเคชันทำงานได้อย่างสม่ำเสมอไม่ว่าจะอยู่ในสภาพแวดล้อมไหน
              เช่น การรันบนเครื่องของนักพัฒนา การทดสอบบนเซิร์ฟเวอร์
              หรือการใช้งานจริงบนคลาวด์
            </p>
          </div>
          </div>

          <p className="text-xs font-bold text-center my-4">apl ps @2002</p>
        </BlurFade>
      </ScrollShadow>

      <section className="hidden xl:flex flex-col flex-[1] pt-10 items-start">
        <h2>Written by:</h2>
        <ShineBorder
          className="p-2 relative rounded-lg border"
          color={["#FAFAFA", "#A1A1AA", "#18181B"]}
        >
          <User
            name="Phonsing Taleman"
            description={
              <div className="flex gap-2">
                <Link href="https://www.facebook.com/noar.ps.3/" isExternal>
                  <FaSquareFacebook />
                </Link>
                <Link href="https://www.instagram.com/p.phonsing_" isExternal>
                  <FaInstagram />
                </Link>
              </div>
            }
            avatarProps={{
              src: "/Cat.jpeg",
              isBordered: true,
            }}
          />
        </ShineBorder>
      </section>
    </>
  );
}

export default page;
