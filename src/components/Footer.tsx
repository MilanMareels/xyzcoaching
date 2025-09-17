import { Footer } from "flowbite-react";

export default function FooterSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-center sm:flex sm:justify-between md:grid-cols-1">
          <div className="text-center">
            <Footer.Brand href="#" src="/Logo_XYZ.jpg" name={companyName} />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/#about">{companyName}</Footer.Link>
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
          <Footer.Copyright href="https://www.lannie.be" by="XYZCoaching. Ontworpen en ontwikkeld door Lannie" year={new Date().getFullYear()} />
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0"></div>
        </div>
      </div>
    </Footer>
  );
}
