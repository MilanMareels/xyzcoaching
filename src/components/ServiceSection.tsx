import { serviceItems } from "../data/serviceItems";
import { Link } from "react-router-dom";
import Card from "./ui/Card";

export default function ServiceSection() {
  return (
    <section className="flex justify-center items-center flex-col bg-gray-100 p-4" id="coaching">
      <div className="pt-10 flex justify-center items-center flex-col gap-5">
        <h1 className="font-semibold text-3xl">Coaching</h1>
        <div className="max-w-[700px] m-auto text-center p-5">
          <p>Persoonlijke coaching en trainingen die passen bij jouw doelen, niveau en leefstijl</p>
        </div>
      </div>
      <section className="grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-10 pt-10 pb-10 m-auto cursor-pointer auto-rows-fr">
        {serviceItems.map((i) => (
          <Link to={`/coaching/${i.name}`} key={i.id} className="flex">
            <Card title={i.title} description={i.description} sports={i.sports} banner={i.banner} />
          </Link>
        ))}
      </section>
    </section>
  );
}
