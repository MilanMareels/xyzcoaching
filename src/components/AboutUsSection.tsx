export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 bg-[#C9CDCF]">
      <div className="w-full max-w-[1450px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-left mb-10 text-white">
              <h2 className="text-4xl font-bold mb-6">Over Mij</h2>
              <p className="text-lg max-w-3xl text-justify">
                Ik ben Yeray Luxem (°1986), geboren in Wilrijk en woonachtig in Ekeren. Van jongs af aan werd ik gegrepen door sport: eerst via atletiek, later via triatlon. Wat begon als passie
                groeide uit tot een internationale topsportcarrière met meer dan 60 wedstrijden in triatlon, trailrunning en running. Maar naast atleet ben ik altijd ook coach geweest. Tijdens mijn
                studies Master Lichamelijke Opvoeding en Bewegingswetenschappen aan de KU Leuven ontdekte ik al snel dat ik mijn kennis en ervaring wilde doorgeven. Sindsdien begeleid ik sporters van
                alle niveaus: van de opbouw naar hun eerste 5 km, sporters op nationaal niveau tot kwalificaties voor internationale kampioenschappen.
              </p>
            </div>
            <div className="space-y-6 text-white">
              <h3 className="text-2xl font-semibold">Mijn sportcarrière</h3>
              <p className="text-whiute leading-relaxed">
                <ul className="list-disc ml-4">
                  <li>4x Belgisch kampioen cross triatlon</li>
                  <li>1e plaatsen op XTERRA World Cups in België, Luxemburg, Cyprus en Polen</li>
                  <li>Meerdere top 10-noteringen op wereldkampioenschappen</li>
                </ul>
              </p>

              <h3 className="text-2xl font-semibold">Mijn aanpak</h3>
              <p className="leading-relaxed text-justify">
                Voor mij draait coaching niet alleen om schema’s en trainingen, maar om plezier, vertrouwen en samen beleven. Ik geloof dat je alleen écht kan groeien als je met goesting traint.
              </p>

              <p className="leading-relaxed text-justify">Ik combineer een wetenschappelijke aanpak met veel aandacht voor techniek, tactiek en vooral ook gevoel. </p>

              <p className="leading-relaxed text-justify">
                Je vindt me daarom niet vaak aan de kant van het veld als coach: ik loop, zwem of fiets net zo goed mee. Zo voel ik wat jij voelt, en kan ik je van dichtbij inspireren en uitdagen. Ik
                hou van variatie, van sporten in de natuur, van het spelen met omstandigheden en trainingshulpmiddelen.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-[#DE5438] text-2xl font-bold">60+</div>
                <div className="text-gray-600">Internationale wedstrijdervaringen</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-[#DE5438] text-2xl font-bold">20+</div>
                <div className="text-gray-600">Jaar coaching ervaring</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-[#DE5438] text-2xl font-bold">50+</div>
                <div className="text-gray-600">Atleten begeleid</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-[#DE5438] text-2xl font-bold">Plus</div>
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
      </div>
    </section>
  );
}
