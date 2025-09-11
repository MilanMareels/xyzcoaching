import { Helmet } from "react-helmet";

export default function PrivacyPage() {
  return (
    <div>
      <Helmet>
        <title>Privacy- en cookiebeleid | Xyzcoaching</title>
        <meta name="description" content="Onze privacyverklaring voor Xyzcoaching diensten in Ekeren. GDPR-compliant en transparant." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.xyzcoaching/privacy" />
      </Helmet>

      <div className="bg-gray-100 flex items-center justify-center py-8 px-4">
        <div className="bg-white w-full max-w-screen-xl p-6 shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Privacy- en Policy</h1>
          <p className="text-sm text-gray-600 text-center mb-4">
            Laatst bijgewerkt: <span className="font-bold">01/01/2025</span>
          </p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800">1. Welke gegevens verzamelen wij?</h2>
              <p>
                Wanneer u ons contactformulier invult, kunnen wij de volgende gegevens van u ontvangen:
                <ul className="list-disc ml-6">
                  <li>Uw naam</li>
                  <li>Uw e-mailadres</li>
                  <li>Uw bericht</li>
                </ul>
                <strong>Belangrijk:</strong> Wij slaan deze gegevens niet op op onze servers of systemen. Uw gegevens worden uitsluitend gebruikt om uw vraag of verzoek te behandelen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">2. Hoe gebruiken wij uw gegevens?</h2>
              <p>
                De door u verstrekte gegevens worden alleen gebruikt om:
                <ul className="list-disc ml-6">
                  <li>Te reageren op uw vraag of verzoek</li>
                  <li>Contact met u op te nemen indien nodig</li>
                </ul>
                Wij delen uw gegevens niet met derden, tenzij dit noodzakelijk is om uw vraag te beantwoorden (bijvoorbeeld indien u ons vraagt om contact op te nemen met een externe partner).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">3. Bewaren van gegevens</h2>
              <p>
                Wij bewaren uw persoonsgegevens niet. Zodra uw gegevens via ons contactformulier worden verzonden, worden deze uitsluitend tijdelijk verwerkt om uw vraag te beantwoorden. Daarna
                verwijderen wij de gegevens uit onze inbox en verwerken we deze niet verder.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">4. Uw rechten</h2>
              <p>
                U hebt het recht om:
                <ul className="list-disc ml-6">
                  <li>Inzage te krijgen in de persoonsgegevens die u hebt verstrekt</li>
                  <li>Rectificatie of verwijdering van uw persoonsgegevens te vragen</li>
                  <li>Bezwaar te maken tegen het gebruik van uw gegevens</li>
                </ul>
                Neem contact met ons op via{" "}
                <a href="mailto:yeray_luxem@hotmail.com" className="text-blue-600 underline">
                  yeray_luxem@hotmail.com
                </a>{" "}
                als u gebruik wilt maken van deze rechten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">5. Beveiliging van uw gegevens</h2>
              <p>
                Hoewel wij geen gegevens opslaan, zorgen wij ervoor dat de verzending van gegevens via ons contactformulier veilig verloopt. Onze website maakt gebruik van een beveiligde
                SSL-verbinding om uw gegevens te versleutelen tijdens de verzending.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">6. Cookies</h2>
              <p>Wij gebruiken cookies om persoonsgegevens tijdelijk te verzamelen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">7. Contact</h2>
              <p>
                Als u vragen heeft over dit privacybeleid of hoe wij omgaan met uw gegevens, neem dan contact op via:
                <ul className="ml-6">
                  <li>
                    E-mail:{" "}
                    <a href="mailto:yeray_luxem@hotmail.com" className="text-blue-600 underline">
                      yeray_luxem@hotmail.com
                    </a>
                  </li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">8. Wijzigingen aan dit beleid</h2>
              <p>Wij kunnen dit privacybeleid van tijd tot tijd aanpassen. Controleer deze pagina regelmatig om op de hoogte te blijven van eventuele wijzigingen.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
