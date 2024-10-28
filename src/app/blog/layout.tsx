import NavbarBlog from "@/components/blog/navbarBlog";
import ListMenu from "@/components/blog/menu";
import AntdProvider from "@/components/blog/ConfigProvider";
export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarBlog />
      <div className="Blog max-w-7xl mx-auto ">
        <main className="flex relative">
          <section
            id="BlogNavbar1"
            className="hidden lg:flex justify-end flex-[1] pt-10 relative"
          >
            <div className=" sticky top-10">
              <ListMenu />
            </div>
          </section>
          <AntdProvider>{children}</AntdProvider>
        </main>
      </div>
    </>
  );
}
