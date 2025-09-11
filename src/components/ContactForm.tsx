import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [accept, setAccept] = useState<boolean>(false);

  const subject: string = "New message from customer";
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;
  const contactFormKey: string = import.meta.env.VITE_CONTACT_FORM_KEY!;

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    console.log(result);

    const formData = new FormData(event.target);

    formData.append("access_key", contactFormKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success && accept) {
      setResult("Mail succesvol verzonden!");
      Swal.fire({
        title: "Succes!",
        text: "Mail succesvol verzonden!",
        icon: "success",
        confirmButtonColor: "#3f83f8",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center p-5 bg-gray-100" id="contact">
      <form onSubmit={onSubmit} className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Contact</h2>
        <input type="hidden" name="subject" value={subject} />
        <input type="hidden" name="from_name" value={companyName} />
        <div>
          <label htmlFor="user_name" className="block text-gray-700 font-semibold mb-2">
            Naam
          </label>
          <input type="text" name="name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Uw naam" required />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input type="email" name="email" id="user_email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Uw email" required />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Bericht
          </label>
          <textarea
            name="message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
            placeholder="Vertel me over je doelen en ervaringen..."
            required
          ></textarea>
        </div>

        <div className="flex items-center mt-4">
          <input type="checkbox" id="acceptTerms" name="acceptTerms" required className="mr-2 rounded" onClick={() => setAccept((prev) => !prev)} />
          <label htmlFor="acceptTerms" className="text-gray-700">
            Ik ga akkoord met de{" "}
            <a href="/privacy" className="text-blue-500">
              voorwaarden
            </a>{" "}
            en begrijp dat ik het bericht niet kan verzenden zonder mijn toestemming.
          </label>
        </div>

        <div className="text-center">
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-600 transition flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.75 4.5C20.75 5.88071 19.6307 7 18.25 7C16.8693 7 15.75 5.88071 15.75 4.5C15.75 3.11929 16.8693 2 18.25 2C19.6307 2 20.75 3.11929 20.75 4.5Z" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.80218 5.93063C10.0117 5.9017 10.2599 5.87536 10.523 5.88702C10.603 5.89057 10.6938 5.89706 10.7962 5.90769C13.1789 6.155 14.9468 7.94323 16.1242 9.70933L16.1866 9.80281C16.7893 10.7069 17.8041 11.25 18.8907 11.25H20.75C21.1642 11.25 21.5 11.5858 21.5 12C21.5 12.4142 21.1642 12.75 20.75 12.75H18.8907C17.3025 12.75 15.8195 11.9563 14.9385 10.6349L14.8762 10.5414C14.6037 10.1327 14.311 9.74468 13.9989 9.38944L12.1149 11.7441C11.6875 12.2783 11.4008 12.6379 11.2076 12.9334C11.0204 13.2196 10.967 13.3792 10.9528 13.5003C10.9293 13.7003 10.9546 13.903 11.0263 14.0911C11.0698 14.2051 11.1607 14.3467 11.4123 14.5783C11.6721 14.8173 12.0382 15.0957 12.5835 15.5088C12.6157 15.5332 12.6475 15.5573 12.6789 15.5811C13.3998 16.1267 13.8989 16.5046 14.2444 17.0094C14.4408 17.2964 14.5963 17.6093 14.7065 17.9392C14.9002 18.5194 14.9 19.1454 14.8996 20.0495C14.8996 20.0888 14.8996 20.1287 14.8996 20.1692V21.9998C14.8996 22.414 14.5638 22.7498 14.1496 22.7498C13.7354 22.7498 13.3996 22.414 13.3996 21.9998V20.1692C13.3996 19.0986 13.3905 18.7342 13.2837 18.4143C13.2176 18.2164 13.1243 18.0287 13.0065 17.8565C12.8161 17.5782 12.531 17.3509 11.6777 16.7045L11.6488 16.6826C11.1398 16.2969 10.7155 15.9755 10.3965 15.682C10.0635 15.3754 9.7855 15.0471 9.62475 14.6256C9.46691 14.2116 9.4114 13.7657 9.46296 13.3257C9.51547 12.8776 9.70447 12.4912 9.95221 12.1124C10.1895 11.7496 10.522 11.3339 10.9211 10.8353L12.9047 8.35598C12.2175 7.83323 11.4608 7.48473 10.6414 7.39967C10.5672 7.39198 10.5059 7.38774 10.4565 7.38555C10.3286 7.37988 10.1855 7.39194 10.0074 7.41653C8.94204 7.56364 7.87451 8.15548 5.55619 9.47271L4.12051 10.2884C3.76037 10.4931 3.30253 10.367 3.09791 10.0069C2.89328 9.64671 3.01935 9.18888 3.37949 8.98426L4.81517 8.16853C4.86639 8.13943 4.91715 8.11058 4.96746 8.08199C7.08653 6.87764 8.416 6.12205 9.80218 5.93063ZM9.23014 16.4238C9.54835 16.689 9.59134 17.1619 9.32617 17.4801L8.3254 18.6811C8.2928 18.7202 8.26067 18.7588 8.22895 18.7969C7.58688 19.5685 7.11555 20.135 6.45757 20.4432C5.79959 20.7513 5.0627 20.7508 4.05888 20.7501C4.00928 20.75 3.95904 20.75 3.90813 20.75H2.75C2.33579 20.75 2 20.4142 2 20C2 19.5858 2.33579 19.25 2.75 19.25H3.90813C5.12975 19.25 5.50396 19.2334 5.82133 19.0848C6.1387 18.9361 6.391 18.6593 7.17306 17.7208L8.17383 16.5199C8.43901 16.2017 8.91193 16.1587 9.23014 16.4238Z"
                fill="white"
              />
            </svg>
            Verstuur Bericht
          </button>
        </div>
      </form>
    </div>
  );
}
