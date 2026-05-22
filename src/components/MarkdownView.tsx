import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Mermaid } from "./Mermaid";

type CodeProps = {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const components = {
  code({ inline, className, children, ...props }: CodeProps) {
    const text = String(children ?? "").replace(/\n$/, "");
    const lang = /language-(\w+)/.exec(className || "")?.[1];
    if (!inline && lang === "mermaid") {
      return <Mermaid chart={text} />;
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export function MarkdownView({ source }: { source: string }) {
  return (
    <div
      className="
        text-foreground/90 leading-relaxed
        [&_h1]:text-4xl [&_h1]:font-black [&_h1]:tracking-tight [&_h1]:mt-2 [&_h1]:mb-6
        [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:border-b [&_h2]:border-border/60 [&_h2]:pb-2
        [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-primary
        [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2
        [&_p]:my-4
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4 [&_ol]:space-y-2
        [&_li]:marker:text-primary
        [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary/80
        [&_strong]:text-foreground [&_strong]:font-semibold
        [&_code]:bg-card [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:text-primary
        [&_pre]:bg-card [&_pre]:border [&_pre]:border-border/60 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:text-sm
        [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-foreground/90
        [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-6
        [&_hr]:border-border/60 [&_hr]:my-10
        [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:text-sm
        [&_th]:border [&_th]:border-border [&_th]:bg-card [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold
        [&_td]:border [&_td]:border-border/60 [&_td]:px-3 [&_td]:py-2 [&_td]:align-top
        [&_input[type=checkbox]]:accent-primary [&_input[type=checkbox]]:mr-2
      "
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {source}
      </ReactMarkdown>
    </div>
  );
}
