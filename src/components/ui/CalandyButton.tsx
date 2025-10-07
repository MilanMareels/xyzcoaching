import { PopupButton } from "react-calendly";

export default function CalandyButton() {
  return <PopupButton url="https://calendly.com/yeray_luxem/30min" rootElement={document.getElementById("root")} text="Gratis Intake Gesprek" className="bg-[#DE5438] rounded-md p-2 text-white" />;
}
