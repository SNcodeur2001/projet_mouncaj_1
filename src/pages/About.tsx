import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-stack-lg">
          <h1 className="font-h1-desktop text-h1-desktop text-primary mb-stack-sm">À propos de MOUNCAJ</h1>
          <div className="w-20 h-1.5 bg-secondary-container mx-auto rounded-full mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Depuis 2010, MOUNCAJ est un groupe panafricain et européen spécialisé dans la gestion de la relation client et le recrutement de talents. Nous accompagnons les entreprises dans leur croissance en offrant des solutions sur mesure, alliant excellence opérationnelle et expertise RH.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-stack-lg">
          <div className="bg-white p-stack-lg rounded-[32px] shadow-[0px_4px_20px_rgba(8,31,77,0.05)] text-center">
            <div className="text-5xl font-bold text-secondary-container mb-4">2010</div>
            <h3 className="font-h3-desktop text-h3-desktop text-primary mb-2">Année de création</h3>
            <p className="text-on-surface-variant">Présence à Dakar, en France et dans l'Union Européenne</p>
          </div>
          <div className="bg-white p-stack-lg rounded-[32px] shadow-[0px_4px_20px_rgba(8,31,77,0.05)] text-center">
            <div className="text-5xl font-bold text-secondary-container mb-4">15+</div>
            <h3 className="font-h3-desktop text-h3-desktop text-primary mb-2">Domaines d'activité</h3>
            <p className="text-on-surface-variant">Couverts par notre pôle recrutement et placement</p>
          </div>
          <div className="bg-white p-stack-lg rounded-[32px] shadow-[0px_4px_20px_rgba(8,31,77,0.05)] text-center">
            <div className="text-5xl font-bold text-secondary-container mb-4">2</div>
            <h3 className="font-h3-desktop text-h3-desktop text-primary mb-2">Expertises</h3>
            <p className="text-on-surface-variant">Call Center &amp; Placement — deux pôles complémentaires</p>
          </div>
        </div>
        <div className="text-center mt-stack-lg">
          <Link to="/contact" className="inline-block bg-secondary-container text-white px-10 py-4 rounded-xl font-button-text text-button-text hover:bg-secondary transition-all shadow-xl">
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  )
}

