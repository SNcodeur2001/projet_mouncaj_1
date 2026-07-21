export default function Contact() {
  return (
    <section className="py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="text-center mb-stack-lg">
          <h1 className="font-h1-desktop text-h1-desktop text-primary mb-stack-sm">Contactez-nous</h1>
          <div className="w-20 h-1.5 bg-secondary-container mx-auto rounded-full mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous accompagner.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
          <div className="bg-white p-stack-lg rounded-[32px] shadow-[0px_4px_20px_rgba(8,31,77,0.05)]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Prénom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface focus:ring-2 focus:ring-secondary-container focus:border-secondary-container transition-all"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface focus:ring-2 focus:ring-secondary-container focus:border-secondary-container transition-all"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface focus:ring-2 focus:ring-secondary-container focus:border-secondary-container transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Téléphone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface focus:ring-2 focus:ring-secondary-container focus:border-secondary-container transition-all"
                  placeholder="+221 XX XXX XX XX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Sujet</label>
                <select className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface focus:ring-2 focus:ring-secondary-container focus:border-secondary-container transition-all">
                  <option value="">Sélectionnez un sujet</option>
                  <option value="call-center">Service Call Center</option>
                  <option value="placement">Recrutement &amp; Placement</option>
                  <option value="candidature">Déposer une candidature</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface focus:ring-2 focus:ring-secondary-container focus:border-secondary-container transition-all resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary-container text-white py-4 rounded-xl font-button-text text-button-text hover:bg-secondary transition-all shadow-xl shadow-secondary-container/30"
              >
                Envoyer le message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-stack-lg rounded-[32px] shadow-[0px_4px_20px_rgba(8,31,77,0.05)]">
              <h3 className="font-h3-desktop text-h3-desktop text-primary mb-6">Nos bureaux</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-container">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Dakar, Sénégal</h4>
                    <p className="text-on-surface-variant text-sm">Siège social</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-container">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">France</h4>
                    <p className="text-on-surface-variant text-sm">Bureau de représentation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-container">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Union Européenne</h4>
                    <p className="text-on-surface-variant text-sm">Présence opérationnelle</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-container p-stack-lg rounded-[32px] text-white">
              <h3 className="font-h3-desktop text-h3-desktop mb-4">Suivez-nous</h3>
              <p className="mb-6 opacity-90">Restez connecté avec MOUNCAJ sur les réseaux sociaux.</p>
              <div className="flex gap-4">
                <a className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary-container transition-colors" href="#">
                  <span className="material-symbols-outlined text-white">share</span>
                </a>
                <a className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary-container transition-colors" href="#">
                  <span className="material-symbols-outlined text-white">public</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

