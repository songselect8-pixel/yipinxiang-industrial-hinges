import Link from "next/link";
import Image from "next/image";
import { getResourceCategory, getResourceReadingTime, type ResourceArticle } from "@/content/resources";
import { Arrow } from "@/components/ui/Arrow";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export function ResourceCard({ article, compact = false, priority = false }: { article: ResourceArticle; compact?: boolean; priority?: boolean }) {
  const category = getResourceCategory(article.category);
  const displayDate = article.updatedAt ?? article.publishedAt;
  return <article className={`resource-card${compact ? " resource-card-compact" : ""}`}>
    <Link className="resource-card-image" href={`/resources/${article.slug}`} aria-label={`Read ${article.title}`}>
      <Image src={article.featuredImage} alt={article.featuredImageAlt} width={article.featuredImageWidth} height={article.featuredImageHeight} priority={priority} sizes={compact ? "(max-width: 599px) 100vw, 30vw" : "(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 33vw"} />
      <span className="resource-card-category micro-label">{category?.name}</span>
    </Link>
    <div className="resource-card-copy">
      <p className="resource-card-meta"><time dateTime={displayDate}>{article.updatedAt ? "Updated" : "Published"} {formatDate(displayDate)}</time><span aria-hidden="true">·</span><span>{getResourceReadingTime(article)} min read</span></p>
      <h3><Link href={`/resources/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.description}</p>
      <Link href={`/resources/${article.slug}`} className="text-link">Read Guide <Arrow /></Link>
    </div>
  </article>;
}
