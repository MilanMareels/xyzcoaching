import { useCookies } from "react-cookie";
import AboutUsSection from "../components/AboutUsSection";
import ContactForm from "../components/ContactForm";
import CookieConsent from "../components/cookie/CookieConsent";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ServiceSection from "../components/ServiceSection";
import SEO from "../components/SEO/SEO";
import { SEOContent } from "../data/SEO/SEO";
import Reviews from "../components/Reviews";

export default function Page() {
  const [cookies] = useCookies(["cookieContent"]);
  return (
    <main>
      <SEO {...SEOContent.home} />
      <Header />
      <ServiceSection />
      <AboutUsSection />
      <Reviews />
      <ContactForm />
      <ScrollToTopButton />
      {!cookies.cookieContent && <CookieConsent />}
    </main>
  );
}
