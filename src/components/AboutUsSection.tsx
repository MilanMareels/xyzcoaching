export default function AboutUsSection() {
  return (
    <section id="about" className="py-20">
      <div className="w-full max-w-[1450px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-left mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Over Mij</h2>
              <p className="text-lg text-gray-600 max-w-3xl text-justify">
                Ik ben Yeray Luxem (°1986), geboren in Wilrijk en woonachtig in Ekeren. Van jongs af aan werd ik gegrepen door sport: eerst via
                atletiek, later via triatlon. Wat begon als passie groeide uit tot een internationale topsportcarrière met meer dan 60 wedstrijden in
                triatlon, trailrunning en running. Maar naast atleet ben ik altijd ook coach geweest. Tijdens mijn studies Master Lichamelijke
                Opvoeding en Bewegingswetenschappen aan de KU Leuven ontdekte ik al snel dat ik mijn kennis en ervaring wilde doorgeven. Sindsdien
                begeleid ik sporters van alle niveaus: van de opbouw naar hun eerste 5 km, sporters op nationaal niveau tot kwalificaties voor
                internationale kampioenschappen.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Mijn sportcarrière</h3>
              <p className="text-gray-600 leading-relaxed">
                <ul className="list-disc ml-4">
                  <li>4x Belgisch kampioen cross triatlon</li>
                  <li>1e plaatsen op XTERRA World Cups in België, Luxemburg, Cyprus en Polen</li>
                  <li>Meerdere top 10-noteringen op wereldkampioenschappen</li>
                </ul>
              </p>

              <h3 className="text-2xl font-semibold text-gray-800">Mijn aanpak</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Voor mij draait coaching niet alleen om schema’s en trainingen, maar om plezier, vertrouwen en samen beleven. Ik geloof dat je alleen
                écht kan groeien als je met goesting traint.
              </p>

              <p className="text-gray-600 leading-relaxed text-justify">
                Ik combineer een wetenschappelijke aanpak met veel aandacht voor techniek, tactiek en vooral ook gevoel.{" "}
              </p>

              <p className="text-gray-600 leading-relaxed text-justify">
                Je vindt me daarom niet vaak aan de kant van het veld als coach: ik loop, zwem of fiets net zo goed mee. Zo voel ik wat jij voelt, en
                kan ik je van dichtbij inspireren en uitdagen. Ik hou van variatie, van sporten in de natuur, van het spelen met omstandigheden en
                trainingshulpmiddelen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-blue-500 text-2xl font-bold">60+</div>
                <div className="text-gray-600">Internationale wedstrijdervaringen</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-blue-500 text-2xl font-bold">20+</div>
                <div className="text-gray-600">Jaar coaching ervaring</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-blue-500 text-2xl font-bold">50+</div>
                <div className="text-gray-600">Atleten begeleidt</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-blue-500 text-2xl font-bold">Plus</div>
                <div className="text-gray-600">Ervaring van jeugd tot master en van start2 tot internationale selecties</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img src="/about-4.jpg" alt="Coach zwemtraining" loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
              <div className="h-46 bg-gray-200 rounded-lg overflow-hidden">
                <img src="/about-3.jpg" alt="Coach Yeray Luxem" loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-46 bg-gray-200 rounded-lg overflow-hidden">
                <img src="/about-2.JPG" alt="Hardloopwedstrijd Yeray Luxem" loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
              <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img src="/about-1.jpg" alt="Hardlooptraining Yeray Luxem" loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Wat anderen zeggen</h1>
          <p className="text-lg text-gray-600 max-w-3xl text-justify mb-6">Ontdek de ervaringen van andere sporters</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-8 rounded-xl shadow-lg flex-1">
              <div className="flex items-start mb-6">
                <div>
                  <h3 className="text-blue-500 font-semibold text-lg">Maarten</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Yeray heeft mij echt leren voelen en analyseren. Waardoor ik heel goed keuzes kan maken voor of tijdens wedstrijden-trainingen."
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg flex-1">
              <div className="flex items-start mb-6">
                <div>
                  <h3 className="text-blue-500 font-semibold text-lg">Bert</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Bij een andere trainer zag ik heel veel herhaling. Ik kon bijna voorspellen wat die ging schrijven. Yeray is altijd al weer aan iets
                extra aan het denken. Wat peper en zout. Triggers the mind 🙂"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
