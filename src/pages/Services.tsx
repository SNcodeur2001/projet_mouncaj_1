import { Link } from 'react-router-dom'

const servicesList = [
  {
    icon: 'headset_mic',
    title: 'Téléconseil',
    description: 'Service client externalisé, hotline, assistance technique et SAV pour offrir une expérience client irréprochable.',
  },
  {
    icon: 'trending_up',
    title: 'Télévente',
    description: 'Prospection commerciale, vente à distance et développement de portefeuille clients pour booster votre chiffre d\'affaires.',
  },
  {
    icon: 'campaign',
    title: 'Télémarketing',
    description: 'Campagnes marketing ciblées, enquêtes de satisfaction et études de marché pour affiner votre stratégie.',
  },
  {
    icon: 'people',
    title: 'Recrutement Direct',
    description: 'CDI, CDD et contrats en alternance. Sélection rigoureuse de profils qualifiés adaptés à vos besoins.',
  },
  {
    icon: 'swap_horiz',
    title: 'Intérim',
    description: 'Mise à disposition rapide de personnel temporaire qualifié pour faire face à vos pics d\'activité.',
  },
  {
    icon: 'school',
    title: 'Coaching RH',
    description: 'Accompagnement personnalisé en gestion des ressources humaines et optimisation des processus de recrutement.',
  },
]

export default function Services() {
  return (
    <section className="py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-stack-lg">
          <h1 className="font-h1-desktop text-h1-desktop text-primary mb-stack-sm">Nos Services</h1>
          <div className="w-20 h-1.5 bg-secondary-container mx-auto rounded-full mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            MOUNCAJ vous propose une gamme complète de services en relation client et recrutement pour répondre à tous vos besoins opérationnels et RH.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-stack-lg rounded-[32px] shadow-[0px_4px_20px_rgba(8,31,77,0.05)] border border-transparent hover:border-secondary-container/20 transition-all hover:shadow-2xl flex flex-col"
            >
              <div className="bg-surface-container w-14 h-14 rounded-2xl flex items-center justify-center mb-stack-md text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{service.icon}</span>
              </div>
              <h3 className="font-h3-desktop text-h3-desktop text-primary mb-3">{service.title}</h3>
              <p className="text-on-surface-variant font-body-md flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-stack-lg">
          <Link to="/contact" className="inline-block bg-secondary-container text-white px-10 py-4 rounded-xl font-button-text text-button-text hover:bg-secondary transition-all shadow-xl">
            Demander un service
          </Link>
        </div>
      </div>
    </section>
  )
}

