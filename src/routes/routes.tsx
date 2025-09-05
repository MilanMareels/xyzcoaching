import { createBrowserRouter } from "react-router-dom";
import { routerEnum } from "./routesEnum";
import ServiceDetails from "../components/ServiceDetails";
import Page from "../pages/Page";
import NavBarSection from "../components/NavBar";
import FooterSection from "../components/Footer";
import PrivacyPage from "../components/Privacy";

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: routerEnum.PAGE,
      element: (
        <>
          <NavBarSection />
          <Page />
          <FooterSection />
        </>
      ),
    },
    {
      path: routerEnum.SERVICE_DETAILS,
      element: (
        <>
          <NavBarSection />
          <ServiceDetails />
          <FooterSection />
        </>
      ),
    },
    {
      path: routerEnum.PRIVACY,
      element: (
        <>
          <NavBarSection />
          <PrivacyPage />
          <FooterSection />
        </>
      ),
    },
  ]);
};
