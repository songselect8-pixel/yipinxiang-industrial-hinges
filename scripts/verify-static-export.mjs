import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const outputDirectory = resolve("out");
const basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");
const siteUrl = (process.env.SITE_URL ?? "").replace(/\/$/, "");

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const pathname = join(directory, entry.name);
    return entry.isDirectory() ? walk(pathname) : [pathname];
  });
}

function localPathname(value) {
  const decoded = value.replaceAll("&amp;", "&");
  if (/^(?:mailto:|tel:|data:|javascript:|#)/i.test(decoded)) return null;

  if (/^https?:\/\//i.test(decoded)) {
    if (!siteUrl || !decoded.startsWith(siteUrl)) return null;
    return new URL(decoded).pathname;
  }

  return decoded.startsWith("/") ? decoded.split(/[?#]/, 1)[0] : null;
}

function outputTargetExists(pathname) {
  if (basePath) {
    if (pathname !== basePath && !pathname.startsWith(`${basePath}/`)) return false;
    pathname = pathname.slice(basePath.length) || "/";
  }

  const relative = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!relative) return existsSync(join(outputDirectory, "index.html"));

  const direct = join(outputDirectory, relative);
  return existsSync(direct) || existsSync(`${direct}.html`) || existsSync(join(direct, "index.html"));
}

if (!existsSync(outputDirectory)) {
  throw new Error("Static export directory not found. Run the Pages build first.");
}

const failures = [];
const htmlFiles = walk(outputDirectory).filter((file) => extname(file) === ".html");

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  if (/https?:\/\/(?:127\.0\.0\.1|localhost)/i.test(html)) {
    failures.push(`${file}: contains a local development URL`);
  }

  const values = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const match of html.matchAll(/\bsrcset="([^"]+)"/g)) {
    values.push(...match[1].split(",").map((candidate) => candidate.trim().split(/\s+/, 1)[0]));
  }

  for (const value of values) {
    const pathname = localPathname(value);
    if (pathname && !outputTargetExists(pathname)) failures.push(`${file}: unresolved ${value}`);
  }
}

for (const filename of ["sitemap.xml", "feed.xml", "robots.txt"]) {
  const file = join(outputDirectory, filename);
  if (!existsSync(file)) failures.push(`${file}: missing generated file`);
  else if (/https?:\/\/(?:127\.0\.0\.1|localhost)/i.test(readFileSync(file, "utf8"))) failures.push(`${file}: contains a local development URL`);
}

if (failures.length) {
  console.error(failures.slice(0, 100).join("\n"));
  throw new Error(`Static export verification failed with ${failures.length} issue(s).`);
}

console.log(`Verified ${htmlFiles.length} static HTML pages with no broken local links, assets, or development URLs.`);
