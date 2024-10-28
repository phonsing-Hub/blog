"use client";
import { useState, useEffect } from "react";
import { ConfigProvider, theme as themeAntd } from "antd";
import { useTheme } from "next-themes";

const AntdProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "light"
            ? themeAntd.defaultAlgorithm
            : themeAntd.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default AntdProvider;
