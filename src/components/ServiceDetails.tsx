import { Carousel, HR } from "flowbite-react";
import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { serviceItems } from "../data/serviceItems";
import { useEffect } from "react";
import SEO from "./SEO/SEO";
import { SEOContent } from "../data/SEO/SEO";
import CalandyButton from "./ui/CalandyButton";
import SportCard from "./ui/SportCard";

export default function ServiceDetails() {
  const { name } = useParams();
  const service = serviceItems.find((item) => item.name === name)!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEO
        {...SEOContent.serviceDetails}
        title={`${service.titleSEO}`}
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
        {service.src && (
          <section className="h-64 sm:h-64 xl:h-80 2xl:h-[600px]">
            <Carousel slideInterval={3000}>
              {service.src.map((src, index) => (
                <img key={index} src={src} alt={`${service.title} afbeelding ${index + 1}`} loading="lazy" />
              ))}
            </Carousel>
          </section>
        )}

        <HR />

        {/* Algemene uitleg */}
        {service.longDescription && (
          <section className="w-full pl-4">
            <h2 className="text-xl font-bold">Wat is {service.title}?</h2>
            <p className="mt-2 mr-4 whitespace-pre-line mb-4">{service.longDescription}</p>
            <CalandyButton />
          </section>
        )}

        <HR />

        {/* Voor wie algemeen */}
        {service.forWhoGeneral && (
          <section className="w-full pl-4">
            <h2 className="text-xl font-bold">Voor wie?</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {service.forWhoGeneral.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <HR />

        {/* Hoe werkt het */}
        {service.howItWorks && (
          <section className="w-full pl-4">
            <h2 className="text-xl font-bold">Hoe werkt het?</h2>
            <p className="mt-2 mr-4 whitespace-pre-line">{service.howItWorks}</p>
          </section>
        )}

        <HR />

        {/* Sporten */}
        {service.sports && (
          <section className="px-4">
            <h2 className="text-xl font-bold mb-4">In welke sporten kan je coaching krijgen?</h2>
            <section className="w-full">
              <section className="flex flex-wrap justify-center sm:justify-start gap-4">
                {service.sports.map((sport, inx) => (
                  <SportCard key={inx} sportSrc={service.sportSrc[inx]} title={sport} />
                ))}
              </section>
            </section>
          </section>
        )}
        <HR />

        {/* Pakketten / Prijzen */}
        <section className="w-full pl-4 pr-4">
          <h2 className="text-xl font-bold">Tarieven & Pakketten</h2>
          <ul className="mt-2 space-y-2">
            {service.packages.map((pack, idx) => (
              <li key={idx} className="flex justify-between border-b pb-1">
                <span>{pack.name}</span>
                <span className="font-semibold">{pack.price}</span>
              </li>
            ))}
          </ul>
        </section>

        <HR />
      </div>
    </>
  );
}
