import { CustomFlowbiteTheme, Navbar } from "flowbite-react";
import CalandyButton from "./ui/CalandyButton";

export default function NavBarSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;

  const customTheme: CustomFlowbiteTheme["navbar"] = {
    root: { base: "bg-white px-2 py-2.5 sm:px-4" },
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "border-b border-gray-100 text-gray-700 hover:bg-black hover:text-white dark:border-gray-700 dark:text-gray-400 md:border-0 md:hover:bg-transparent md:hover:text-black md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
  };

  return (
    <Navbar fluid rounded theme={customTheme}>
      <Navbar.Brand>
        <img src="/Logo_XYZ.jpg" className="mr-3 h-14 sm:h-14" alt="YYZ Coaching Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{companyName}</span>*/}
      </Navbar.Brand>
      <div className="flex md:order-2 gap-1">
        <CalandyButton />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="/#coaching" className="text-lg">
          Coaching
        </Navbar.Link>
        <Navbar.Link href="/#about" className="text-lg">
          Over mij
        </Navbar.Link>
        <Navbar.Link href="/#contact" className="text-lg">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
