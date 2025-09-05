import { Helmet } from "react-helmet";
import { JsonLd } from "react-schemaorg";
import { ContactPoint, LocalBusiness, Service } from "schema-dts";

export interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

const SEO = ({ description, keywords, title, canonicalUrl, ogTitle, ogDescription, ogImage, ogType, twitterTitle, twitterDescription, twitterImage }: SEOProps) => {
  return (
    <>
      {/* SEO - Meta Tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-Robots-Tag" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={ogType} />
        <meta property="og:locale" content="nl_BE" />
        <meta property="og:site_name" content="Lannie Webdesign" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:site" content="LannieWebdesign" />
      </Helmet>

      {/* Structured Data - Bedrijfsinformatie */}

      <JsonLd<LocalBusiness>
        item={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Lannie",
          description: "Professioneel webdesign en websiteontwikkeling in Merksem.",
          telephone: "+32 489 50 36 61",
          email: "lanniewebdesign@gmail.com",
          url: "https://www.lannie.be",
          areaServed: {
            "@type": "Place",
            name: "Merksem, Antwerpen",
          },
        }}
      />

      {/* Structured Data - Diensten */}
      <JsonLd<Service>
        item={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Webdesign & Websiteontwikkeling",
          description: "Wij bouwen snelle, gebruiksvriendelijke en professionele websites.",
          provider: {
            "@type": "LocalBusiness",
            name: "Lannie",
          },
          serviceType: "Website Development",
          areaServed: "Merksem, Antwerpen",
        }}
      />

      {/* Structured Data - Contactgegevens */}
      <JsonLd<ContactPoint>
        item={{
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          name: "Lannie",
          contactType: "sales",
          description: "Neem contact op voor een gratis offerte of een vrijblijvend informatief gesprek over webdesign en websiteontwikkeling.",
          telephone: "+32 489 50 36 61",
          email: "lanniewebdesign@gmail.com",
          areaServed: "Merksem, Antwerpen",
          availableLanguage: ["Dutch", "English"],
        }}
      />
    </>
  );
};

export default SEO;
