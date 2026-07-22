import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* 1. Qui sommes-nous ? */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-primary py-stack-lg md:p-20">
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="text-white space-y-stack-md">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/20 text-secondary-container font-label-sm uppercase tracking-widest">
              Qui sommes-nous ?
            </span>
            <h1 className="font-h1-desktop text-h1-desktop text-white">
              Le Groupe MOUNCAJ : L'Humain au cœur de la performance.
            </h1>
            <p className="font-body-lg text-on-primary-container max-w-xl">
              MOUNCAJ est un groupe sénégalais bâti autour d'une conviction : la performance des entreprises repose sur
              la qualité des relations humaines, qu'il s'agisse de la relation avec leurs clients ou avec leurs
              collaborateurs. Depuis Dakar, nous accompagnons des entreprises locales et internationales à travers deux
              expertises complémentaires : MOUNCAJ CALL CENTER, spécialiste de la gestion de la relation client à
              distance (téléconseil, télévente, télémarketing), et MOUNCAJ PLACEMENT, agence de recrutement, d'intérim
              et de conseil RH. Ensemble, ces deux entités forment un acteur intégré du BPO et du capital humain en
              Afrique de l'Ouest, présent au Sénégal, en France et dans l'Union Européenne.
            </p>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="glass-card p-8 rounded-2xl shadow-2xl relative z-10 border-white/10 md:p-20">
              <img
                className="rounded-xl w-full object-cover min-h-[600px]"
                alt="Professional boardroom meeting representing corporate leadership"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr0EZ2DX1n8V10ODNnX12ydQWwXviAojZETlSGDX3xNGhQCu4aA0otofC6ITd4MjI5eznJoLYaj2KuV6hmA3I8yw-ItRUyYZsMfKSvtJ-sYSr-8DEXymtTxxf6FjsnoXobNAU2Nj18BBpiRvqFXUUttbsXGnkChgL3CUHMexiSlgREigebeziv6Bk4A_UOUsSvW95E0Rq5TFN6yXXAhENnGrPod6Tb31L7NjaFnaEwKxVeUlRodrPq"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Historique */}
      <section className="py-stack-lg bg-surface relative overflow-hidden md:p-20">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-h2-desktop text-h2-desktop text-primary mb-6">Historique commun aux deux entités</h2>
            <div className="w-24 h-1.5 bg-secondary-container mx-auto rounded-full"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary rounded-full opacity-20 hidden md:block"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 mb-16">
              <div className="flex-1 md:text-right">
                <div className="inline-block px-4 py-2 bg-primary text-white font-bold rounded-lg mb-4 text-xl">
                  Dès 2009
                </div>
                <h4 className="font-h3-desktop text-h3-desktop text-primary mb-3">MOUNCAJ CALL CENTER</h4>
                <p className="text-on-surface-variant font-body-md">
                  Fondée en 2009 à Dakar, au Sénégal, MOUNCAJ CALL CENTER est une entreprise spécialisée dans la
                  gestion de la relation client à distance, offrant des services professionnels de téléconseil,
                  télévente et télémarketing. Grâce à son expertise et à son évolution progressive, l'entreprise a
                  élargi sa présence à l'international, avec une activité en France et dans l'Union Européenne, tout en
                  conservant son siège opérationnel à Dakar.
                </p>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg relative z-20 hidden md:block"></div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-secondary">
                  <div className="md:hidden inline-block px-3 py-1 bg-primary text-white font-bold rounded mb-4 text-sm">
                    Filiale Stratégique
                  </div>
                  <h4 className="font-h3-desktop text-h3-desktop text-primary mb-4">MOUNCAJ PLACEMENT</h4>
                  <p className="text-on-surface-variant font-body-md mb-6">
                    L'Agence d'Intérim MOUNCAJ PLACEMENT est une filiale de MOUNCAJ CALL CENTER, créée pour répondre
                    aux besoins des entreprises partenaires en matière de recrutement, de placement et de gestion des
                    ressources humaines.
                  </p>
                  <img
                    className="rounded-xl w-full h-48 object-cover"
                    alt="Modern office building in Dakar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa0Sdx2U3V_i9xsE6j9cLrr1Juk5_e9a3QqtNnOd0ct_vda9RqXoCSiZAwviHIg6ZLzxpkayvKbVI2BsA-imsh_rCzC6ivbVZIGlxQoawW7MAZGjfPp99KhOHcxEsHA3KUCD3zdape1QYNQBJqA8rSoZhINbgD0JPxtc6yPNVlf-ojdInIWZPDWmLvRIEQfHWU3s1o3KQAKqmR26bjUO3q9Ee_Yi_BcZyL9C-SbZSbPDU0t6OWd5km"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission */}
      <section className="py-stack-lg bg-surface-container-lowest md:p-20">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-secondary-container font-bold uppercase tracking-widest text-sm">
                <span className="w-8 h-px bg-secondary-container"></span> Notre Mission
              </div>
              <h2 className="font-h2-desktop text-h2-desktop text-primary">
                Mission commune au groupe MOUNCAJ
              </h2>
              <p className="font-body-lg text-on-surface-variant">
                Offrir des opportunités professionnelles, favoriser la création d'emplois au Sénégal et fournir des
                services de haute qualité pour optimiser la performance de nos partenaires.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface font-medium">Création d'emplois durables au Sénégal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface font-medium">Optimisation de la performance des partenaires.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface font-medium">Excellence dans la relation client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-on-surface font-medium">Accompagnement stratégique sur mesure.</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <img
                className="rounded-[2rem] shadow-2xl"
                alt="Mission visual representation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr0EZ2DX1n8V10ODNnX12ydQWwXviAojZETlSGDX3xNGhQCu4aA0otofC6ITd4MjI5eznJoLYaj2KuV6hmA3I8yw-ItRUyYZsMfKSvtJ-sYSr-8DEXymtTxxf6FjsnoXobNAU2Nj18BBpiRvqFXUUttbsXGnkChgL3CUHMexiSlgREigebeziv6Bk4A_UOUsSvW95E0Rq5TFN6yXXAhENnGrPod6Tb31L7NjaFnaEwKxVeUlRodrPq"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision */}
      <section className="py-stack-lg bg-surface md:p-20">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="hidden md:block order-last md:order-first">
              <img
                className="rounded-[2rem] shadow-2xl"
                alt="Vision visual representation"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa0Sdx2U3V_i9xsE6j9cLrr1Juk5_e9a3QqtNnOd0ct_vda9RqXoCSiZAwviHIg6ZLzxpkayvKbVI2BsA-imsh_rCzC6ivbVZIGlxQoawW7MAZGjfPp99KhOHcxEsHA3KUCD3zdape1QYNQBJqA8rSoZhINbgD0JPxtc6yPNVlf-ojdInIWZPDWmLvRIEQfHWU3s1o3KQAKqmR26bjUO3q9Ee_Yi_BcZyL9C-SbZSbPDU0t6OWd5km"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
                <span className="w-8 h-px bg-primary"></span> Notre Vision
              </div>
              <h2 className="font-h2-desktop text-h2-desktop text-primary">
                Vision commune au groupe MOUNCAJ
              </h2>
              <p className="font-body-lg text-on-surface-variant">
                Devenir une référence incontournable en Afrique de l'Ouest dans la gestion de la relation client et le
                placement de talents. Le groupe ambitionne de :
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stars
                  </span>
                  <span className="text-on-surface font-medium">
                    Développer sa présence dans les 14 régions du Sénégal, pour favoriser l'emploi local et l'inclusion
                    professionnelle
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stars
                  </span>
                  <span className="text-on-surface font-medium">
                    Mettre en place des infrastructures modernes répondant aux exigences des marchés internationaux
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stars
                  </span>
                  <span className="text-on-surface font-medium">
                    Constituer des équipes multiculturelles, alliant compétences locales et expertise internationale
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stars
                  </span>
                  <span className="text-on-surface font-medium">
                    Contribuer activement au développement de l'économie numérique et des métiers du BPO et du placement
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nos valeurs */}
      <section className="py-stack-lg bg-surface-container-low md:p-20">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-h2-desktop text-h2-desktop text-primary">Nos valeurs</h2>
            <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">
              Trois piliers qui guident chacune de nos actions au service de nos partenaires.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group bg-white p-10 rounded-2xl shadow-[0px_4px_20px_rgba(8,31,77,0.05)] hover:shadow-[0px_12px_32px_rgba(8,31,77,0.10)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border border-outline-variant/30">
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors duration-300">
                <span
                  className="material-symbols-outlined text-white text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  rocket_launch
                </span>
              </div>
              <h3 className="font-h3-desktop text-h3-desktop mb-4">Détermination</h3>
              <p className="text-on-surface-variant font-body-md">
                donner le meilleur pour garantir un service performant
              </p>
            </div>
            {/* Value 2 */}
            <div className="group bg-white p-10 rounded-2xl shadow-[0px_4px_20px_rgba(8,31,77,0.05)] hover:shadow-[0px_12px_32px_rgba(8,31,77,0.10)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border border-outline-variant/30">
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors duration-300">
                <span
                  className="material-symbols-outlined text-white text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  diversity_3
                </span>
              </div>
              <h3 className="font-h3-desktop text-h3-desktop mb-4">Fraternité</h3>
              <p className="text-on-surface-variant font-body-md">
                un esprit d'équipe fondé sur le respect et l'entraide
              </p>
            </div>
            {/* Value 3 */}
            <div className="group bg-white p-10 rounded-2xl shadow-[0px_4px_20px_rgba(8,31,77,0.05)] hover:shadow-[0px_12px_32px_rgba(8,31,77,0.10)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border border-outline-variant/30">
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors duration-300">
                <span
                  className="material-symbols-outlined text-white text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  altitude
                </span>
              </div>
              <h3 className="font-h3-desktop text-h3-desktop mb-4">Persévérance</h3>
              <p className="text-on-surface-variant font-body-md">
                résilience et amélioration continue face aux défis du secteur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-stack-lg bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="bg-surface-container rounded-[40px] p-12 md:p-stack-lg relative overflow-hidden text-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-h2-desktop text-h2-desktop text-primary mb-6">
                Prêt à collaborer avec MOUNCAJ ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
                Que vous recherchiez un partenaire pour votre centre de contacts ou des talents pour votre entreprise,
                notre équipe est à votre écoute.
              </p>
              <a
                href="/contact"
                className="inline-block bg-secondary-container text-white px-10 py-5 rounded-2xl font-button-text text-lg hover:bg-secondary transition-all shadow-xl"
              >
                Contactez-nous
              </a>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 border-[40px] border-secondary-container/5 rounded-full"></div>
            <div className="absolute -left-20 -top-20 w-60 h-60 border-[30px] border-primary-container/5 rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  )
}

