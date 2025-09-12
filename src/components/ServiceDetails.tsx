import { Carousel, HR } from "flowbite-react";
import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { serviceItems } from "../data/serviceItems";
import { useEffect } from "react";
import SEO from "./SEO/SEO";
import { SEOContent } from "../data/SEO/SEO";

export default function ServiceDetails() {
  const { name } = useParams();
  const service = serviceItems.find((item) => item.name === name)!;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <SEO
        {...SEOContent.serviceDetails}
        title={`${service.title} - Coaching - Lannie`}
        canonicalUrl={`https://www.xyzcoaching.be/coaching/${service.name}`}
        description={service.SEODescription}
        keywords={service.keywords}
      />
      <div className="flex flex-col w-full md:w-[60%] m-auto">
        <HR />

        {/* Titel + korte omschrijving */}
        <div className="w-full pb-4 sm:pb-0 pl-4">
          <h1 className="text-2xl font-bold">{service.title}</h1>
          <p className="mt-2 mr-4">{service.description}</p>
        </div>

        <HR />

        {/* Carousel */}
        <section className="h-64 sm:h-64 xl:h-80 2xl:h-[600px]">
          <Carousel slideInterval={3000}>
            {service.src.map((src, index) => (
              <img key={index} src={src} alt={`${service.title} afbeelding ${index + 1}`} loading="lazy" />
            ))}
          </Carousel>
        </section>

        <HR />

        {/* Lange omschrijving */}
        {service.longDescription && (
          <section className="w-full pl-4">
            <h2 className="text-xl font-bold">Over deze dienst</h2>
            <p className="mt-2 mr-4">{service.longDescription}</p>
          </section>
        )}

        <HR />

        {/* Voor wie */}
        {service.forWho && (
          <section className="w-full pl-4">
            <h2 className="text-xl font-bold">Voor wie?</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {service.forWho.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <HR />

        {/* Thema’s */}
        {service.themes && (
          <section className="w-full pl-4">
            <h2 className="text-xl font-bold">Wat leer je?</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {service.themes.map((theme, index) => (
                <li key={index}>{theme}</li>
              ))}
            </ul>
          </section>
        )}

        <HR />

        {/* Locaties */}
        {service.locations && (
          <section className="w-full pl-4">
            <h2 className="text-xl font-bold">Locaties</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {service.locations.map((loc, index) => (
                <li key={index}>{loc}</li>
              ))}
            </ul>
          </section>
        )}

        <HR />

        {/* Pakketten / Prijzen */}
        <section className="w-full pl-4">
          <h2 className="text-xl font-bold">Tarieven & Pakketten</h2>
          <ul className="mt-2 space-y-2">
            {service.packages.map((pack, index) => (
              <li key={index} className="flex justify-between border-b pb-1">
                <span>{pack.name}</span>
                <span className="font-semibold">{pack.price}</span>
              </li>
            ))}
          </ul>
        </section>

        <HR />

        {/* Contactformulier */}
        <ContactForm />
      </div>
    </>
  );
}
