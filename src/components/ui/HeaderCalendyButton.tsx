import { PopupButton } from "react-calendly";

export default function HeaderCalendyButton() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <PopupButton
          url="https://calendly.com/yeray_luxem/30min"
          rootElement={document.getElementById("root")}
          text="Gratis Intake Gesprek Boeken"
          className="bg-[#DE5438] rounded-md p-5 w-full text-white font-bold text-lg opacity-0 absolute inset-0 cursor-pointer"
        />
        <div className="bg-[#DE5438] rounded-md p-5 w-full text-white font-bold text-lg flex justify-center items-center gap-4 pointer-events-none">
          <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
            />
          </svg>
          <p>Gratis Intake Gesprek Boeken</p>
        </div>
      </div>
    </div>
  );
}
