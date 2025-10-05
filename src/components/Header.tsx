import HeaderCalendyButton from "./ui/HeaderCalendyButton";

export default function Header() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(/c-2.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-600/80 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-center">Jou Persoonlijke</h1>
          <h1 className="text-5xl md:text-6xl font-bold text-[#DE5438] mb-6 leading-tight text-center">Sport Coach</h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed text-center">Zwemmen • Fietsen • Lopen - Professionele begeleiding voor alle niveaus</p>
          <HeaderCalendyButton />
        </div>
      </div>
    </section>
  );
}
