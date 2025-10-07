import { Button } from "flowbite-react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [cookie, setCookie] = useCookies(["cookieContent"]);

  const giveCookieConsent = () => {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    setCookie("cookieContent", true, { path: "/", expires: date });
  };

  return (
    <div className="flex justify-between items-center w-full fixed bottom-0 bg-white p-5 z-50">
      {/* z-50 zorgt dat de cookie banner boven alles komt */}
      <p className="w-[70%]">
        Wij gebruiken cookies om uw gebruikerservaring te verbeteren. Als u akkoord gaat met ons gebruik van cookies.{" "}
        <Link to={"/privacy"} className="underline">
          Meer informatie.
        </Link>
      </p>
      <Button onClick={giveCookieConsent} className="w-[150px] rounded bg-[#DE5438] hover:text-white">
        Accepteren
      </Button>
    </div>
  );
}
