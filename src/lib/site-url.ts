export function joinSiteUrl(baseUrl: string, pathname: string) {
  const normalizedBase = baseUrl.replace(/\/$/, "");
  if (!pathname || pathname === "/") return `${normalizedBase}/`;
  return `${normalizedBase}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
