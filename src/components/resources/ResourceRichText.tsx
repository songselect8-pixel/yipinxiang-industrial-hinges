import Link from "next/link";
import type { ResourceRichText as ResourceRichTextValue } from "@/content/resources/types";

export function ResourceRichText({ content }: { content: ResourceRichTextValue }) {
  return <>{content.map((part, index) => typeof part === "string"
    ? <span key={`${index}-${part.slice(0, 18)}`}>{part}</span>
    : <Link key={`${index}-${part.href}`} href={part.href}>{part.text}</Link>)}</>;
}
