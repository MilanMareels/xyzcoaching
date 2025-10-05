import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [accept, setAccept] = useState<boolean>(false);

  const subject: string = "New message from customer";
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;
  const contactFormKey: string = import.meta.env.VITE_CONTACT_FORM_KEY!;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!accept) {
      Swal.fire({
        title: "Accepteer voorwaarden",
        text: "U moet akkoord gaan met de voorwaarden om het formulier te verzenden.",
        icon: "warning",
        confirmButtonColor: "#DE5438",
      });
      return;
    }

    const sendData = new FormData();
    sendData.append("access_key", contactFormKey);
    sendData.append("subject", subject);
    sendData.append("from_name", companyName);
    sendData.append("name", formData.name);
    sendData.append("email", formData.email);
    sendData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: sendData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Succes!",
          text: "Mail succesvol verzonden!",
          icon: "success",
          confirmButtonColor: "#DE5438",
        });

        // Reset form en state
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setAccept(false);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Er is iets misgegaan bij het verzenden. Probeer het later opnieuw.",
          icon: "error",
          confirmButtonColor: "#DE5438",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Netwerkfout!",
        text: "Kan het bericht nu niet verzenden. Probeer later opnieuw.",
        icon: "error",
        confirmButtonColor: "#DE5438",
      });
    }
  };

  return (
    <div className="bg-[#C9CDCF]">
      <h2 className="text-4xl font-bold text-white text-center p-6">Contact</h2>
      <p className="text-center text-lg mb-6 text-white">Klaar om te starten? Neem contact op voor vragen.</p>
      <div className="flex justify-center gap-12 flex-wrap p-10" id="contact">
        <form onSubmit={onSubmit} className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg space-y-6">
          <input type="hidden" name="subject" value={subject} />
          <input type="hidden" name="from_name" value={companyName} />

          <div>
            <label htmlFor="user_name" className="block text-gray-700 font-semibold mb-2">
              Naam
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DE5438]"
              placeholder="Uw naam"
              required
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DE5438]"
              placeholder="Uw email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Bericht
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DE5438]"
              rows={4}
              placeholder="Vertel me over je doelen en ervaringen..."
              required
            ></textarea>
          </div>

          <div className="flex items-center mt-4">
            <input type="checkbox" id="acceptTerms" name="acceptTerms" checked={accept} onChange={() => setAccept((prev) => !prev)} className="mr-2 rounded" />
            <label htmlFor="acceptTerms" className="text-gray-700">
              Ik ga akkoord met de{" "}
              <a href="/privacy" className="text-[#DE5438]">
                voorwaarden
              </a>{" "}
              en begrijp dat ik het bericht niet kan verzenden zonder mijn toestemming.
            </label>
          </div>

          <div className="text-center">
            <button type="submit" className="w-full bg-[#DE5438] text-white p-3 rounded-lg cursor-pointer transition flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.75 4.5C20.75 5.88071 19.6307 7 18.25 7C16.8693 7 15.75 5.88071 15.75 4.5C15.75 3.11929 16.8693 2 18.25 2C19.6307 2 20.75 3.11929 20.75 4.5Z" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.80218 5.93063C10.0117 5.9017 10.2599 5.87536 10.523 5.88702C10.603 5.89057 10.6938 5.89706 10.7962 5.90769C13.1789 6.155 14.9468 7.94323 16.1242 9.70933L16.1866 9.80281C16.7893 10.7069 17.8041 11.25 18.8907 11.25H20.75C21.1642 11.25 21.5 11.5858 21.5 12C21.5 12.4142 21.1642 12.75 20.75 12.75H18.8907C17.3025 12.75 15.8195 11.9563 14.9385 10.6349L14.8762 10.5414C14.6037 10.1327 14.311 9.74468 13.9989 9.38944L12.1149 11.7441C11.6875 12.2783 11.4008 12.6379 11.2076 12.9334C11.0204 13.2196 10.967 13.3792 10.9528 13.5003C10.9293 13.7003 10.9546 13.903 11.0263 14.0911C11.0698 14.2051 11.1607 14.3467 11.4123 14.5783C11.6721 14.8173 12.0382 15.0957 12.5835 15.5088C12.6157 15.5332 12.6475 15.5573 12.6789 15.5811C13.3998 16.1267 13.8989 16.5046 14.2444 17.0094C14.4408 17.2964 14.5963 17.6093 14.7065 17.9392C14.9002 18.5194 14.9 19.1454 14.8996 20.0495C14.8996 20.0888 14.8996 20.1287 14.8996 20.1692V21.9998C14.8996 22.414 14.5638 22.7498 14.1496 22.7498C13.7354 22.7498 13.3996 22.414 13.3996 21.9998V20.1692C13.3996 19.0986 13.3905 18.7342 13.2837 18.4143C13.2176 18.2164 13.1243 18.0287 13.0065 17.8565C12.8161 17.5782 12.531 17.3509 11.6777 16.7045L11.6488 16.6826C11.1398 16.2969 10.7155 15.9755 10.3965 15.682C10.0635 15.3754 9.7855 15.0471 9.62475 14.6256C9.46691 14.2116 9.4114 13.7657 9.46296 13.3257C9.51547 12.8776 9.70447 12.4912 9.95221 12.1124C10.1895 11.7496 10.522 11.3339 10.9211 10.8353L12.9047 8.35598C12.2175 7.83323 11.4608 7.48473 10.6414 7.39967C10.5672 7.39198 10.5059 7.38774 10.4565 7.38555C10.3286 7.37988 10.1855 7.39194 10.0074 7.41653C8.94204 7.56364 7.87451 8.15548 5.55619 9.47271L4.12051 10.2884C3.76037 10.4931 3.30253 10.367 3.09791 10.0069C2.89328 9.64671 3.01935 9.18888 3.37949 8.98426L4.81517 8.16853C4.86639 8.13943 4.91715 8.11058 4.96746 8.08199C7.08653 6.87764 8.416 6.12205 9.80218 5.93063ZM9.23014 16.4238C9.54835 16.689 9.59134 17.1619 9.32617 17.4801L8.3254 18.6811C8.2928 18.7202 8.26067 18.7588 8.22895 18.7969C7.58688 19.5685 7.11555 20.135 6.45757 20.4432C5.79959 20.7513 5.0627 20.7508 4.05888 20.7501C4.00928 20.75 3.95904 20.75 3.90813 20.75H2.75C2.33579 20.75 2 20.4142 2 20C2 19.5858 2.33579 19.25 2.75 19.25H3.90813C5.12975 19.25 5.50396 19.2334 5.82133 19.0848C6.1387 18.9361 6.391 18.6593 7.17306 17.7208L8.17383 16.5199C8.43901 16.2017 8.91193 16.1587 9.23014 16.4238Z"
                  fill="white"
                />
              </svg>
              Verstuur Bericht
            </button>
          </div>
        </form>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contactgegevens</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#DE5438]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Telefoon</div>
                  <div className="text-white">
                    <a href="tel:+32 471 33 01 82">+32 471 33 01 82</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#DE5438]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">E-mail</div>
                  <div className="text-white">
                    <a href="mailto:yeray_luxem@hotmail.com">yeray_luxem@hotmail.com</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#DE5438]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Locatie</div>
                  <div className="text-white">Ekeren, België</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Volg Mij</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/yeray.luxem/"
                target="blank"
                className="w-12 h-12 bg-orange-100 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6 text-[#DE5438] hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/yerayluxem/"
                target="blank"
                className="w-12 h-12 bg-orange-100 text-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6 text-[#DE5438] hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
