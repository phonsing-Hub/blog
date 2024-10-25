import CodeComparison from "@/components/ui/code-comparison";

export function CodeComparisonDemo({
  code,
  language,
  filename,
}: {
  code: string;
  language: string;
  filename: string;
}) {
  return (
    <CodeComparison
      code={code}
      language={language}
      filename={filename}
      lightTheme="github-light"
      darkTheme="github-dark"
    />
  );
}
