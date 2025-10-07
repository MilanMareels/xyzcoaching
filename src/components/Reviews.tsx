export default function Reviews() {
  return (
    <div className="w-full max-w-[1450px] mx-auto px-6 py-6">
      <div className="mt-8 mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Wat anderen zeggen</h1>
        <p className="text-lg text-gray-600 mb-6 text-center mx-auto max-w-xl">Ontdek hoe mijn cliënten hun sportieve dromen hebben waargemaakt met de juiste begeleiding en toewijding.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1">
            <div className="flex items-start mb-6">
              <div>
                <h3 className="text-[#DE5438] font-semibold text-lg">Maarten</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">"Yeray heeft mij echt leren voelen en analyseren. Waardoor ik heel goed keuzes kan maken voor of tijdens wedstrijden-trainingen."</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg flex-1">
            <div className="flex items-start mb-6">
              <div>
                <h3 className="text-[#DE5438] font-semibold text-lg">Bert</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              "Bij een andere trainer zag ik heel veel herhaling. Ik kon bijna voorspellen wat die ging schrijven. Yeray is altijd al weer aan iets extra aan het denken. Wat peper en zout. Triggers
              the mind 🙂"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
