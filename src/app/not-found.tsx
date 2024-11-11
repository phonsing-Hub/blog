"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <section className="BlogPage flex-[4] py-12 sm:py-24 px-4">
        <h1>404 - Page Not Found</h1>
        <p>กำลังเปลี่ยนเส้นทางไปยังหน้าแรก...</p>
      </section>
      <section id="BlogNavbar2" className="hidden xl:flex flex-[1] pt-10">
        {/* <p>BlogNavbar</p> */}
      </section>
    </>
  );
}
