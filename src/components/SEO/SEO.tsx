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
          name: "Xyzcoaching - Yeray Luxem",
          description: "Persoonlijke sportcoaching in Ekeren door Yeray Luxem. Specialist in triatlon, trailrunning, zwemmen, mountainbike en looptechniek.",
          telephone: "+32 471 33 01 82", //
          email: "yeray_luxem@hotmail.com",
          url: "https://www.xyzcoaching.be",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ekeren",
            addressRegion: "Antwerpen",
            addressCountry: "BE",
          },
          areaServed: {
            "@type": "Place",
            name: "Ekeren, Antwerpen",
          },
          sameAs: [
            "", // <-- social links als ik ze hebt
          ],
        }}
      />

      {/* Structured Data - Diensten */}
      <JsonLd<Service>
        item={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sportcoaching & Personal Training",
          description: "Coaching en trainingsschema’s voor triatlon, trailrunning, zwemmen, mountainbike en looptechniek. Voor beginners, recreanten en topsporters.",
          provider: {
            "@type": "LocalBusiness",
            name: "Xyzcoaching - Yeray Luxem",
          },
          serviceType: "Personal Sport Coaching",
          areaServed: "Ekeren, Antwerpen",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "125",
            description: "Trainingsschema’s + coaching vanaf €125/maand",
          },
        }}
      />

      {/* Structured Data - Contactgegevens */}
      <JsonLd<ContactPoint>
        item={{
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          name: "Xyzcoaching - Yeray Luxem",
          contactType: "customer support",
          description: "Neem contact op voor sportcoaching, personal training of een intakegesprek in Ekeren.",
          telephone: "+32 471 33 01 82",
          email: "yeray_luxem@hotmail.com",
          areaServed: "Ekeren, Antwerpen",
          availableLanguage: ["Dutch", "English"],
        }}
      />
    </>
  );
};

export default SEO;
