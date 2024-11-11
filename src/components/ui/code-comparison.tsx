"use client";
import { ScrollShadow } from "@nextui-org/react";
import { FileIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface CodeComparisonProps {
  code: string;
  language: string;
  filename: string;
  lightTheme: string;
  darkTheme: string;
}

export default function CodeComparison({
  code,
  language,
  filename,
  lightTheme,
  darkTheme,
}: CodeComparisonProps) {
  const { theme, systemTheme } = useTheme();
  const [highlightedBefore, setHighlightedBefore] = useState("");

  useEffect(() => {
    // Ensure this code runs only in the client-side environment
    if (typeof window !== "undefined") {
      const currentTheme = theme === "system" ? systemTheme : theme;
      const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

      // Dynamically import `shiki` to ensure it only runs in the browser
      import("shiki").then(({ codeToHtml }) => {
        async function highlightCode() {
          const before = await codeToHtml(code, {
            lang: language,
            theme: selectedTheme,
          });
          setHighlightedBefore(before);
        }

        highlightCode();
      });
    }
  }, [theme, systemTheme, code, language, lightTheme, darkTheme]);

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className="w-[344px] sm:w-full overflow-auto bg-background font-mono [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <pre className="w-[344px] sm:w-full overflow-auto break-all bg-background p-4 font-mono text-xs text-foreground">
          {code}
        </pre>
      );
    }
  };

  return (
    <>
      <div className="flex items-center bg-accent p-2 text-sm text-foreground rounded-t-lg">
        <FileIcon className="mr-2 h-4 w-4" />
        {filename}
        <span className="ml-auto">{language}</span>
      </div>
      <ScrollShadow  className="max-h-[500px] border-x border-b rounded-b-lg " hideScrollBar size={0}>
      <div> {renderCode(code, highlightedBefore)}</div>
      </ScrollShadow>
    </>
  );
}
