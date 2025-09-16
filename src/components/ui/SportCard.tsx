interface SportCardProps {
  title: string;
  sportSrc: string;
}

export default function SportCard({ title, sportSrc }: SportCardProps) {
  return (
    <div className="transform transition duration-300 hover:scale-105 rounded-lg shadow-lg h-64 w-60 hover:shadow-xl bg-white overflow-hidden">
      <div
        className="relative m-2 h-3/5 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${sportSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="px-5 pt-3 flex flex-col">
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>
    </div>
  );
}
