import { Carousel, HR } from "flowbite-react";
import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { serviceItems } from "../data/serviceItems";
import { useEffect } from "react";
import SEO from "./SEO/SEO";
import { SEOContent } from "../data/SEO/SEO";
import CalandyButton from "./ui/CalandyButton";
import SportCard from "./ui/SportCard";
import HeaderCalendyButton from "./ui/HeaderCalendyButton";

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

      <section
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url("${service.headerImage}")`,
        }}
      >
        <div className="flex flex-col gap-6">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-900/80 to-transparent"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{service.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
          </div>
          <HeaderCalendyButton />
        </div>
      </section>

      <section className="py-20 bg-white">
        {service.sports && (
          <section>
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-center mb-4">{service.typeTitle}</h2>
              <p className="text-center text-xl text-gray-600 p-4">{service.typeDescription}</p>
            </div>
            <section className="w-full">
              <section className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
                {service.sports.map((sport, inx) => (
                  <SportCard key={inx} sportSrc={service.sportSrc[inx]} title={sport} />
                ))}
              </section>
            </section>
          </section>
        )}
      </section>

      <section className="py-20 bg-[#C9CDCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Hoe werkt het?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">{service.howItWorksDescription}</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {service.howItWorks.map((item, index) => (
              <div className="text-center">
                <div className="w-20 h-20 bg-[#DE5438] rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                  <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-[#DE5438]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white text-sm">{item.disc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarieven & Pakketten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{service.packageDisc}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {service.packages.map((item) => (
              <div
                className={
                  item.mid ? `bg-[#DE5438]/15 rounded-2xl p-8 shadow-lg transition-shadow w-full max-w-[370px]` : `w-full max-w-[370px] bg-grey-50 rounded-2xl p-8 shadow-lg transition-shadow`
                }
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="text-4xl font-bold text-[#DE5438] mb-2">{item.price}</div>
                  <div className="text-gray-600">{item.term}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {item.features.map((item) => (
                    <li className="flex items-center gap-4">
                      <svg className="text-[#DE5438]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/#contact">
                  <button
                    className={
                      item.mid
                        ? "w-full bg-[#DE5438] text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                        : "w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    }
                  >
                    Neem contact op
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
