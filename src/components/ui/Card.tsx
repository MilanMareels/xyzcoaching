interface CardProps {
  title: string;
  description: string;
  sports: string[];
  banner: string;
}

export default function Card({ title, description, sports, banner }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow max-w-md flex flex-col overflow-hidden">
      {/* Banner over volledige breedte */}
      <div className="w-full h-48">
        <img src={banner} alt={title} loading="lazy" className="w-full h-full object-cover" />
      </div>

      {/* Content met padding */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {sports && (
          <ul className="text-gray-600 mb-8 space-y-2">
            {sports.map((i) => (
              <li className="flex items-center" key={i}>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
                {i}
              </li>
            ))}
          </ul>
        )}

        <button className="bg-blue-500 hover:bg-blue-500 text-white px-6 py-3 rounded font-semibold transition-colors cursor-pointer whitespace-nowrap mt-auto self-start">
          Lees Meer
        </button>
      </div>
    </div>
  );
}
