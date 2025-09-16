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
        <meta property="og:site_name" content="https://www.xyzcoaching.be" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="/logo.png" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={twitterImage} />
        <meta name="twitter:site" content="https://www.xyzcoaching.be" />
      </Helmet>

      {/* Structured Data - Bedrijfsinformatie */}
      <JsonLd<LocalBusiness>
        item={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Xyzcoaching - Yeray Luxem",
          description: "Persoonlijke sportcoaching in Ekeren, Berchem, Antwerpen en Merksem door Yeray Luxem. Specialist in triatlon, trailrunning, zwemmen, mountainbike en looptechniek.",
          telephone: "+32 471 33 01 82",
          email: "yeray_luxem@hotmail.com",
          url: "https://www.xyzcoaching.be",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ekeren",
            addressRegion: "Antwerpen",
            addressCountry: "BE",
          },
          areaServed: [
            { "@type": "Place", name: "Ekeren" },
            { "@type": "Place", name: "Berchem" },
            { "@type": "Place", name: "Antwerpen" },
            { "@type": "Place", name: "Merksem" },
          ],
          sameAs: [
            // hier later social links toevoegen
          ],
        }}
      />

      {/* Structured Data - Diensten */}
      <JsonLd<Service>
        item={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sportcoaching en Persoonlijke Trainingsschema’s",
          description: "Coaching en persoonlijke trainingsschema’s voor triatlon, trailrunning, zwemmen, mountainbike en looptechniek. Voor beginners, recreanten en topsporters.",
          provider: {
            "@type": "LocalBusiness",
            name: "Xyzcoaching - Yeray Luxem",
          },
          serviceType: "Personal Sport Coaching & Trainingsschema’s",
          areaServed: [
            { "@type": "Place", name: "Ekeren" },
            { "@type": "Place", name: "Berchem" },
            { "@type": "Place", name: "Antwerpen" },
            { "@type": "Place", name: "Merksem" },
          ],
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "50",
            description: "Coaching vanaf €50/u",
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
          description: "Neem contact op voor sportcoaching, personal training of een intakegesprek in Ekeren, Berchem, Antwerpen of Merksem.",
          telephone: "+32 471 33 01 82",
          email: "yeray_luxem@hotmail.com",
          areaServed: [
            { "@type": "Place", name: "Ekeren" },
            { "@type": "Place", name: "Berchem" },
            { "@type": "Place", name: "Antwerpen" },
            { "@type": "Place", name: "Merksem" },
          ],
          availableLanguage: ["Dutch", "English"],
        }}
      />
    </>
  );
};

export default SEO;
