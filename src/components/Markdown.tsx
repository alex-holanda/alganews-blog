import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface MarkdownProps {
  children: string;
}

export default function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown plugins={[gfm]} className="MarkdownRenderer">
      {props.children}
    </ReactMarkdown>
  );
}
