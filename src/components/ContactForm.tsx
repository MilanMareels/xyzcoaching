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
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Success!",
        text: "Email sent succsessfully!",
        icon: "success",
        confirmButtonColor: "black",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center p-10 bg-gray-100" id="contact">
      <form onSubmit={onSubmit} className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>
        <input type="hidden" name="subject" value={subject} />
        <input type="hidden" name="from_name" value={companyName} />
        <div>
          <label htmlFor="user_name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input type="text" name="name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your name" required />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input type="email" name="email" id="user_email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your email" required />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea name="message" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} placeholder="Your message" required></textarea>
        </div>

        <div className="flex items-center mt-4">
          <input type="checkbox" id="acceptTerms" name="acceptTerms" required className="mr-2" onClick={() => setAccept((prev) => !prev)} />
          <label htmlFor="acceptTerms" className="text-gray-700">
            Ik ga akkoord met de{" "}
            <a href="/privacy" className="text-blue-500">
              voorwaarden
            </a>{" "}
            en begrijp dat ik het bericht niet kan verzenden zonder mijn toestemming.
          </label>
        </div>

        <div className="text-center">
          <input type="submit" value="Send Message" className="w-full bg-blue-500 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-600 transition" />
        </div>
      </form>
    </div>
  );
}
