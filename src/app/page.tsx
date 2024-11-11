import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Markdown from "react-markdown";
import ShineBorder from "@/components/ui/shine-border";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
import { Image, Link, User, ScrollShadow } from "@nextui-org/react";
import { FaSquareFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export const metadata = {
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.01;

export default async function BlogPage() {
  return (
    <>
      <ScrollShadow className="BlogPage flex-[4] py-12 px-4" hideScrollBar>
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Image
                  className="md:w-32 md:h-32 w-24 h-24 m-1"
                  src={DATA.avatarUrl}
                  isBlurred
                  alt="logo"
                />
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
            <div className="border-t mt-2" />
          </BlurFade>
        </section>
        <br />
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <br />
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <br />
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <br />
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div>
              <h2 className="text-xl font-bold">Contact</h2>
              <div className="pl-3 font-sans text-sm text-muted-foreground ">
                <span className="flex items-center gap-1">
                  <HiOutlineMail size={18} />
                  {DATA.contact.email}
                </span>
                <span className="flex items-center gap-1">
                  <FiPhone size={18} />
                  {DATA.contact.tel}
                </span>
                <span className="flex items-center gap-1">
                  <LiaMapMarkedAltSolid size={18} />
                  {DATA.contact.location}
                </span>
                <span className="flex items-center gap-1">
                  <IoMdTime size={18} />
                  {DATA.contact.time}
                </span>
              </div>
            </div>
            <div className="border-t my-2" />
            <div className="flex items-end gap-1">
              <Avatar className="size-8 rounded-none">
                <AvatarImage alt="favicon.ico" src="./favicon.ico" />
              </Avatar>
              <h1 className="text-2xl font-bold">p.phonsing_</h1>
            </div>
          </BlurFade>
        </section>
      </ScrollShadow>
      <section className="hidden xl:flex flex-[1] pt-10 items-start">
        <ShineBorder
          className="p-2 relative rounded-lg border"
          color={["#006FEE", "#7828C8", "#F31260"]}
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
