import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string,
  description: string,
}

export default function SEO ({ title, description }: SEOProps){
  return(
    <Helmet>
      <title>{title}</title>

      {/* meta principais */}
      <meta name="description" content={description} />

      {/* redes sociais */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* opcional: canonical / robots */}
      {/* <link rel="canonical" href={window.location.href} /> */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};