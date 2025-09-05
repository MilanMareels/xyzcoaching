import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export default function FooterSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-center sm:flex sm:justify-between md:grid-cols-1">
          <div className="text-center">
            <Footer.Brand href="https://flowbite.com" src="https://flowbite.com/docs/images/logo.svg" alt="Logo" name={companyName} />
          </div>
          <div className="grid grid-cols-3 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/#about">{companyName}</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between text-center sm:text-left">
          <Footer.Copyright href="#" by="Lannie" year={new Date().getFullYear()} />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsYoutube} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
