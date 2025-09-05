import { Carousel, HR } from "flowbite-react";
import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { serviceItems } from "../data/serviceItems";
import { useEffect } from "react";
import SEO from "./SEO/SEO";
import { SEOContent } from "../data/SEO/SEO";

export default function ServiceDetails() {
  const { name } = useParams();
  const service = serviceItems.find((item) => item.name == name)!;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <SEO
        {...SEOContent.serviceDetails}
        title={`${service.title} - Webdesign Merksem - Lannie`}
        canonicalUrl={`https://www.lannie.be/oplossingen/${service.name}`}
        description={service.SEODescription}
        keywords={service.keywords}
      />
      <div className="flex flex-col w-full md:w-[60%] m-auto">
        <HR />
        <div className="w-full pb-4 sm:pb-0 pl-4">
          <h1 className="text-2xl font-bold">{service.title}</h1>
          <p className="mt-2 mr-4">{service.description}</p>
        </div>
        <HR />
        <section className="h-64 sm:h-64 xl:h-80 2xl:h-[600px]">
          <Carousel slideInterval={3000}>
            {service.src.map((src, index) => (
              <img key={index} src={src} alt={`Service image ${index + 1}`} loading="lazy" />
            ))}
          </Carousel>
        </section>
        <HR />
        <section className="flex flex-col sm:flex-row w-full pl-4">
          <div className="w-full pt-4 sm:pt-0">
            <h1 className="text-xl font-bold">Prijs</h1>
            <p className="mt-2 mr-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, incidunt? Dolor ipsum eveniet atque, inventore impedit alias explicabo est labore. Incidunt quia earum nihil
              consequatur quaerat quae quas dolore sequi.
            </p>
          </div>
        </section>
        <HR />
        <ContactForm />
      </div>
    </>
  );
}
