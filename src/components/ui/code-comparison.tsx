"use client";

import { FileIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface CodeComparisonProps {
  beforeCode: string;
  language: string;
  filename: string;
  lightTheme: string;
  darkTheme: string;
}

export default function CodeComparison({
  beforeCode,
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
          const before = await codeToHtml(beforeCode, {
            lang: language,
            theme: selectedTheme,
          });
          setHighlightedBefore(before);
        }

        highlightCode();
      });
    }
  }, [theme, systemTheme, beforeCode, language, lightTheme, darkTheme]);

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className="max-h-[500px] overflow-auto bg-background text-sm font-mono [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-1 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <pre className="max-h-[500px] overflow-auto bg-background text-sm font-mono text-foreground">
          {code}
        </pre>
      );
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl ">
      <div className="relative w-full overflow-hidden rounded-xl border border-border">
        <div className="flex items-center bg-accent p-2 text-sm text-foreground">
          <FileIcon className="mr-2 h-4 w-4" />
          {filename}
          <span className="ml-auto">{language}</span>
        </div>
        <div className="pl-2"> {renderCode(beforeCode, highlightedBefore)}</div>
      </div>
    </div>
  );
}
