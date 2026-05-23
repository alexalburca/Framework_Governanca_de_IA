import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Link } from "@tanstack/react-router";
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
  a({ href, children, ...props }: any) {
    if (!href) return <a {...props}>{children}</a>;

    const isExternal = href.startsWith("http") || href.startsWith("//");
    const isAnchor = href.startsWith("#");

    if (isAnchor) {
      return (
        <a
          href={href}
          onClick={(e) => {
            e.preventDefault();
            const id = decodeURIComponent(href.substring(1));
            // Try to find by ID or name (for older markdown styles)
            const element = document.getElementById(id) || document.getElementsByName(id)[0];
            if (element) {
              const yOffset = -100; // Leave space for sticky header
              const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
          {...props}
        >
          {children}
        </a>
      );
    }

    if (!isExternal) {
      const decodedHref = decodeURIComponent(href);
      // Normalize path: remove extension, handle relative paths, lower case
      let pathname = decodedHref
        .split("#")[0] // Remove hash for routing
        .replace(/^\.\//, "")
        .replace(/\.md$/, "")
        .toLowerCase();

      const hash = decodedHref.split("#")[1] ? `#${decodedHref.split("#")[1]}` : "";

      // Special mappings for filenames with spaces or encoded characters
      if (pathname === "guia de implementação" || pathname === "guia") pathname = "/guia";
      else if (pathname === "framework de governança" || pathname === "framework") pathname = "/framework";
      else if (pathname === "glossário" || pathname === "glossario") pathname = "/glossario";
      else if (pathname === "checklist") pathname = "/checklist";
      else if (pathname === "cronograma") pathname = "/cronograma";
      else if (pathname === "readme" || pathname === "") pathname = "/";
      else if (!pathname.startsWith("/")) pathname = "/" + pathname;

      return (
        <Link to={pathname as any} hash={hash} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  },
};

export function MarkdownView({ source }: { source: string }) {
  return (
    <div
      className="
        text-foreground/90 leading-relaxed overflow-hidden
        [&_h1]:text-3xl sm:[&_h1]:text-4xl [&_h1]:font-black [&_h1]:tracking-tight [&_h1]:mt-2 [&_h1]:mb-6 [&_h1]:scroll-mt-24
        [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:border-b [&_h2]:border-border/60 [&_h2]:pb-2 [&_h2]:scroll-mt-24
        [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-primary [&_h3]:scroll-mt-24
        [&_h4]:text-base sm:[&_h4]:text-lg [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:scroll-mt-24
        [&_p]:my-4 [&_p]:text-sm sm:[&_p]:text-base
        [&_ul]:list-disc [&_ul]:pl-5 sm:[&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2
        [&_ol]:list-decimal [&_ol]:pl-5 sm:[&_ol]:pl-6 [&_ol]:my-4 [&_ol]:space-y-2
        [&_li]:marker:text-primary [&_li]:text-sm sm:[&_li]:text-base
        [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary/80
        [&_strong]:text-foreground [&_strong]:font-semibold
        [&_code]:bg-card [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-xs sm:[&_code]:text-sm [&_code]:text-primary
        [&_pre]:bg-card [&_pre]:border [&_pre]:border-border/60 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:text-[11px] sm:[&_pre]:text-sm
        [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-foreground/90
        [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-6
        [&_hr]:border-border/60 [&_hr]:my-10
        [&_table]:block sm:[&_table]:table [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:text-[11px] sm:[&_table]:text-sm [&_table]:overflow-x-auto
        [&_th]:border [&_th]:border-border [&_th]:bg-card [&_th]:px-2 sm:[&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold
        [&_td]:border [&_td]:border-border/60 [&_td]:px-2 sm:[&_td]:px-3 [&_td]:py-2 [&_td]:align-top
        [&_input[type=checkbox]]:accent-primary [&_input[type=checkbox]]:mr-2
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={components}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
