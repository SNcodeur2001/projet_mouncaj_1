import { Link } from 'react-router-dom'

const domaines = [
  'Administration & Ressources Humaines',
  'Banque & Assurance',
  'Bâtiment & Travaux Publics',
  'Commerce & Distribution',
  'Communication & Marketing',
  'Comptabilité & Finance',
  'Éducation & Formation',
  'Hôtellerie & Restauration',
  'Industrie & Logistique',
  'Informatique & Télécommunications',
  'Médical & Paramédical',
  'Services à la personne',
  'Transport & Mobilité',
  'Énergie & Environnement',
  'Agriculture & Agroalimentaire',
]

export default function DomainesPlacement() {
  return (
    <section className="py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-stack-lg">
          <h1 className="font-h1-desktop text-h1-desktop text-primary mb-stack-sm">Domaines de Placement</h1>
          <div className="w-20 h-1.5 bg-secondary-container mx-auto rounded-full mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            MOUNCAJ PLACEMENT couvre 15 domaines d'activité pour vous offrir les meilleurs talents, quel que soit votre secteur.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {domaines.map((domaine, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(8,31,77,0.05)] border border-outline-variant/30 hover:border-secondary-container/30 transition-all hover:shadow-xl flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary-container shrink-0 group-hover:bg-secondary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-xl">work</span>
              </div>
              <span className="font-medium text-primary">{domaine}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-stack-lg">
          <Link to="/contact" className="inline-block bg-secondary-container text-white px-10 py-4 rounded-xl font-button-text text-button-text hover:bg-secondary transition-all shadow-xl">
            Soumettre une offre de poste
          </Link>
        </div>
      </div>
    </section>
  )
}

