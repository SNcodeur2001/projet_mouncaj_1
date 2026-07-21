import { Link } from 'react-router-dom'

export default function Accueil() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-stack-lg min-h-[800px] flex items-center hero-gradient">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="space-y-stack-md">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm border border-secondary-container/20">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Depuis 2010, à Dakar, en France et dans l'Union Européenne.
            </div>
            <h1 className="font-h1-desktop text-h1-desktop text-primary max-w-xl">
              MOUNCAJ — Votre partenaire en <span className="text-secondary-container">relation client</span> et en recrutement de talents
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Un groupe, deux expertises complémentaires : l'excellence opérationnelle en gestion de la relation client, et l'accès à un vivier de talents qualifiés pour recruter vite et bien. MOUNCAJ accompagne les entreprises qui veulent grandir sans complexité opérationnelle ni RH.
            </p>
            <div className="flex flex-wrap gap-gutter pt-stack-sm">
              <button className="bg-secondary-container text-on-primary px-stack-md py-4 rounded-xl font-button-text text-button-text hover:bg-secondary transition-all shadow-xl shadow-secondary-container/30">
                Demander un devis
              </button>
              <button className="border-2 border-primary-container text-primary-container px-stack-md py-4 rounded-xl font-button-text text-button-text hover:bg-primary-container hover:text-white transition-all">
                Déposer ma candidature
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-container/5 rounded-[40px] rotate-2 transition-transform group-hover:rotate-1"></div>
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <img
                className="w-full aspect-[4/3] object-cover"
                alt="Équipe professionnelle travaillant dans un bureau moderne"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrpLiqhtDFlyTf2BsFyHYFl-jFUbjs_hW3iTMGkxQtvI3hq1y_hksrYmwo871okLAugcE8CmgDGXf9d5ZoG6Wb0kv4Iu1kKYqMmPgIWj-7FAQ9kSNf2GXthhdIFhWLuYSSkCtR18VNFgfsXEqvPBAZl7Yh2lIsKLCahfdn8RvxMYwAjbPcbhWxAsZRAOeqGs6eh37M7KhFRVPYv6JC4PBHKzYU28qzJJpKs2OeZvVknw_5tNJxkonK"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-outline-variant flex items-center gap-4 animate-bounce hover:animate-none">
              <div className="bg-secondary-container w-12 h-12 rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="font-bold text-primary text-h3-desktop leading-none">100%</p>
                <p className="text-on-surface-variant text-label-sm">Qualité Relation Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-stack-lg">
            <h2 className="font-h2-desktop text-h2-desktop text-primary mb-stack-sm">Nos expertises métiers</h2>
            <div className="w-20 h-1.5 bg-secondary-container mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-md">
            {/* MOUNCAJ CALL CENTER */}
            <div className="group bg-white p-stack-lg rounded-[32px] shadow-[0px_4px_20px_rgba(8,31,77,0.05)] border border-transparent hover:border-secondary-container/20 transition-all hover:shadow-2xl flex flex-col h-full">
              <div className="bg-surface-container w-16 h-16 rounded-2xl flex items-center justify-center mb-stack-md text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>headset_mic</span>
              </div>
              <h3 className="font-h3-desktop text-h3-desktop text-primary mb-4 uppercase">MOUNCAJ CALL CENTER</h3>
              <p className="text-on-surface-variant mb-6 font-body-md flex-grow">Téléconseil, télévente et télémarketing pour développer et fidéliser votre clientèle.</p>
              <div className="pt-4 border-t border-surface-container">
                <Link className="inline-flex items-center gap-2 font-button-text text-primary hover:text-secondary-container transition-colors group/link" to="/services">
                  Découvrir nos services <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* MOUNCAJ PLACEMENT */}
            <div className="group bg-white p-stack-lg rounded-[32px] shadow-[0px_4px_20px_rgba(8,31,77,0.05)] border border-transparent hover:border-secondary-container/20 transition-all hover:shadow-2xl flex flex-col h-full">
              <div className="bg-surface-container w-16 h-16 rounded-2xl flex items-center justify-center mb-stack-md text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              </div>
              <h3 className="font-h3-desktop text-h3-desktop text-primary mb-4 uppercase">MOUNCAJ PLACEMENT</h3>
              <p className="text-on-surface-variant mb-6 font-body-md flex-grow">Recrutement, intérim et gestion RH pour trouver le bon profil au bon poste, dans 15 domaines d'activité.</p>
              <div className="pt-4 border-t border-surface-container">
                <Link className="inline-flex items-center gap-2 font-button-text text-primary hover:text-secondary-container transition-colors group/link" to="/domaines-placement">
                  Découvrir nos services <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logo Slider */}
      <section className="py-stack-md bg-white overflow-hidden border-y border-surface-container">
        <div className="logo-slider">
          <div className="flex items-center justify-center w-[250px] grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-outline/40">SFR France</span>
          </div>
          <div className="flex items-center justify-center w-[250px] grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-outline/40 uppercase">Isoclean</span>
          </div>
          <div className="flex items-center justify-center w-[250px] grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-outline/40 uppercase">Fulldevis</span>
          </div>
          <div className="flex items-center justify-center w-[250px] grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-outline/40">ORANGE</span>
          </div>
          <div className="flex items-center justify-center w-[250px] grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-outline/40">AIR LIQUIDE</span>
          </div>
          {/* Duplicate for seamless scroll */}
          <div className="flex items-center justify-center w-[250px] grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-outline/40">SFR France</span>
          </div>
          <div className="flex items-center justify-center w-[250px] grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-outline/40 uppercase">Isoclean</span>
          </div>
          <div className="flex items-center justify-center w-[250px] grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-outline/40 uppercase">Fulldevis</span>
          </div>
          <div className="flex items-center justify-center w-[250px] grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-outline/40">ORANGE</span>
          </div>
          <div className="flex items-center justify-center w-[250px] grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-outline/40">AIR LIQUIDE</span>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
            <div>
              <h2 className="font-h2-desktop text-h2-desktop text-primary mb-stack-sm leading-tight">L'assurance d'une collaboration performante</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
                Depuis 2010 à Dakar, Sénégal — avec une présence affirmée en France et dans l'Union Européenne, nous bâtissons des relations de confiance durables.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                <div className="flex gap-4 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary-container shrink-0">public</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Portée Globale</h4>
                    <p className="text-on-surface-variant text-sm">Sénégal, France &amp; Union Européenne</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary-container shrink-0">domain_add</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">15 Domaines</h4>
                    <p className="text-on-surface-variant text-sm">Couverts par MOUNCAJ PLACEMENT</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary-container shrink-0">high_quality</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Qualité Premium</h4>
                    <p className="text-on-surface-variant text-sm">Téléconseillers formés et encadrés</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary-container shrink-0">handshake</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Partenaires</h4>
                    <p className="text-on-surface-variant text-sm">SFR France, ISOCLEAN, FULLDEVIS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-container p-12 rounded-[40px] text-white space-y-8">
              <h3 className="font-h3-desktop text-h3-desktop">Notre méthodologie qualité</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-secondary-container w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
                  <p className="font-medium">Audit précis de vos besoins opérationnels et RH.</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-secondary-container w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
                  <p className="font-medium">Sélection rigoureuse des talents ou formation des équipes dédiées.</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-secondary-container w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
                  <p className="font-medium">Encadrement continu et reporting de performance en temps réel.</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-secondary-container w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
                  <p className="font-medium">Optimisation constante de chaque campagne marketing ou placement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="bg-surface-container rounded-[40px] p-12 md:p-stack-lg relative overflow-hidden text-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-h2-desktop text-h2-desktop text-primary mb-6">Prêt à transformer vos défis en succès?</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
                Que vous soyez une entreprise en recherche de performance ou un candidat en quête d'opportunités, MOUNCAJ est votre levier de croissance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-gutter">
                <button className="w-full sm:w-auto bg-primary-container text-white px-10 py-5 rounded-2xl font-button-text text-lg hover:bg-primary transition-all shadow-xl">
                  Entreprises : Demander un devis
                </button>
                <button className="w-full sm:w-auto bg-secondary-container text-white px-10 py-5 rounded-2xl font-button-text text-lg hover:scale-105 transition-transform shadow-2xl shadow-secondary-container/40">
                  Candidats : Déposer ma candidature
                </button>
              </div>
            </div>
            {/* Decorative Background Element */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 border-[40px] border-secondary-container/5 rounded-full"></div>
            <div className="absolute -left-20 -top-20 w-60 h-60 border-[30px] border-primary-container/5 rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  )
}

