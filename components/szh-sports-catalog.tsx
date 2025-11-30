export function SzhSportsCatalog() {
  const sports = [
    {
      name: "Nogomet",
      description: "Najpopularniji sport u Hrvatskoj",
      tournaments: [
        "HNL - Hrvatska nogometna liga",
        "UEFA Champions League",
        "UEFA Europa League",
        "Premier League",
        "La Liga",
        "Serie A",
        "Bundesliga",
        "Svjetsko prvenstvo",
        "Europsko prvenstvo",
      ],
    },
    {
      name: "Košarka",
      description: "Drugi najpopularniji sport u Hrvatskoj",
      tournaments: [
        "ABA Liga",
        "Hrvatska košarkaška liga",
        "EuroLeague",
        "EuroCup",
        "NBA",
        "FIBA Svjetsko prvenstvo",
        "EuroBasket",
      ],
    },
    {
      name: "Rukomet",
      description: "Hrvatska rukometna tradicija",
      tournaments: [
        "Hrvatska rukometna liga",
        "EHF Champions League",
        "EHF European League",
        "Svjetsko prvenstvo",
        "Europsko prvenstvo",
        "Olimpijske igre",
      ],
    },
    {
      name: "Vaterpolo",
      description: "Olimpijski sport s bogatom tradicijom",
      tournaments: [
        "Hrvatska vaterpolska liga",
        "LEN Champions League",
        "LEN Euro Cup",
        "Svjetsko prvenstvo",
        "Europsko prvenstvo",
        "Olimpijske igre",
      ],
    },
    {
      name: "Tenis",
      description: "Individualni sport s globalnim turnirima",
      tournaments: [
        "ATP Tour",
        "WTA Tour",
        "Grand Slam turniri",
        "Davis Cup",
        "Billie Jean King Cup",
        "ATP Finals",
        "Olimpijske igre",
      ],
    },
    {
      name: "Hokej na ledu",
      description: "Zimski sport s rastućom popularnošću",
      tournaments: [
        "ICEHL - International Central European Hockey League",
        "KHL - Kontinentalna hokejska liga",
        "NHL",
        "Svjetsko prvenstvo",
        "Olimpijske igre",
      ],
    },
    {
      name: "Odbojka",
      description: "Momčadski sport s jakom ligom",
      tournaments: [
        "Hrvatska odbojkaška liga",
        "CEV Champions League",
        "CEV Cup",
        "Svjetsko prvenstvo",
        "Europsko prvenstvo",
        "Olimpijske igre",
      ],
    },
    {
      name: "Atletika",
      description: "Olimpijski sport s raznim disciplinama",
      tournaments: [
        "Svjetsko atletsko prvenstvo",
        "Europsko atletsko prvenstvo",
        "Diamond League",
        "Svjetsko dvoransko prvenstvo",
        "Olimpijske igre",
        "Maratoni",
      ],
    },
    {
      name: "Skijanje",
      description: "Zimski sport s jakom hrvatskom tradicijom",
      tournaments: [
        "FIS Svjetski kup - alpsko skijanje",
        "FIS Svjetski kup - skijaško trčanje",
        "Svjetsko prvenstvo",
        "Olimpijske igre",
        "Slalom Snježna kraljica Zagreb",
      ],
    },
    {
      name: "Formula 1",
      description: "Automobilističke utrke na najvišoj razini",
      tournaments: ["Formula 1 Svjetsko prvenstvo", "Formula 2", "Formula 3", "24 sata Le Mansa", "IndyCar Series"],
    },
    {
      name: "MMA i boks",
      description: "Borilački sportovi s globalnom popularnošću",
      tournaments: ["UFC", "Bellator MMA", "ONE Championship", "Profesionalni boks", "Olimpijski boks"],
    },
    {
      name: "Jedrenje",
      description: "Nautički sport s dugom tradicijom",
      tournaments: ["America's Cup", "Svjetsko prvenstvo", "Europsko prvenstvo", "Olimpijske igre", "Jadranska regata"],
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight uppercase tracking-tight">
            Raznolikost sportskih disciplina
          </h2>
          <div className="w-24 h-1 bg-red-600 mb-8"></div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Moderne kladioničarske platforme nude širok izbor sportskih događaja za klađenje. Od tradicionalnih
              momčadskih sportova do individualnih natjecanja - svatko može pronaći nešto zanimljivo za sebe.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Profesionalni igrači cijene mogućnost klađenja na različite discipline, što omogućava diverzifikaciju
              rizika i pronalaženje najboljih kvota na tržištu. U nastavku je predstavljen pregled glavnih sportskih
              kategorija dostupnih na vodećim kladioničarskim platformama u Hrvatskoj.
            </p>
          </div>
        </div>

        <div className="space-y-8 mb-16">
          {sports.map((sport, index) => (
            <article
              key={sport.name}
              className="border-l-4 border-red-600 pl-6 py-2 hover:border-red-700 transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-sm font-bold text-gray-400 min-w-[3ch]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                    {sport.name}
                  </h3>
                  <p className="text-base text-gray-600 mb-4">{sport.description}</p>
                </div>
              </div>

              <div className="ml-14">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Glavna natjecanja:</p>
                <div className="flex flex-wrap gap-3">
                  {sport.tournaments.map((tournament) => (
                    <span
                      key={tournament}
                      className="text-sm text-gray-700 bg-gray-50 px-4 py-2 border border-gray-200 hover:border-red-600 hover:bg-red-50 transition-colors"
                    >
                      {tournament}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="border-t-2 border-gray-200 pt-12">
          <div className="prose prose-lg max-w-none">
            <h3 className="font-display text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
              Prošireni izbor sportskih događaja
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Osim gore navedenih disciplina, kladioničarske platforme pružaju mogućnost klađenja na desetke drugih
              sportova. To uključuje stolni tenis, badminton, futsal, ragbi sedmerac, plivanje, gimnastiku, biciklizam,
              golf i mnoga druga manje popularna, ali ne manje zanimljiva natjecanja.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Profesionalne kladionice nude tisuće tržišta dnevno, pokrivajući kako vrhunska međunarodna natjecanja,
              tako i regionalna prvenstva. Takva raznolikost omogućava iskusnim igračima pronalaženje povoljnih prilika
              za klađenje u različitim vremenskim zonama i sportskim kategorijama.
            </p>
            <div className="bg-gray-50 border-l-4 border-red-600 p-6 mt-8">
              <p className="text-base text-gray-900 font-bold mb-2 uppercase tracking-wide">Važna informacija</p>
              <p className="text-base text-gray-700 leading-relaxed">
                Izbor sportske discipline za klađenje treba se temeljiti na vašem razumijevanju pravila igre, poznavanju
                momčadi i sportaša, te analizi statističkih podataka. Uspješni igrači specijaliziraju se za ograničen
                broj sportova, što im omogućava donošenje obrazloženijih odluka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
