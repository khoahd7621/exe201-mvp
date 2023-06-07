import { Helmet } from "react-helmet-async";

type SeoData = {
  title: string;
  description: string;
  url: string;
  href: string;
  thumbnailUrl: string;
  noindex?: boolean;
};

type SeoProps = {
  data: SeoData;
};

export default function Seo({ data }: SeoProps) {
  const { title, href, noindex, description, url, thumbnailUrl } = data;
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={href} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailUrl} />

      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  );
}
