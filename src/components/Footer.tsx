import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary py-stack-lg text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="md:col-span-1">
          <Link to="/" className="font-h3-desktop text-h3-desktop font-extrabold text-on-primary block mb-stack-sm">
            MOUNCAJ
          </Link>
          <p className="text-on-primary-container text-body-md mb-stack-sm">
            Excellence en relation client et recrutement stratégique depuis 2010. Votre réussite est notre priorité.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-on-primary-container/20 flex items-center justify-center hover:bg-secondary-container transition-colors" href="#">
              <span className="material-symbols-outlined text-white">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-on-primary-container/20 flex items-center justify-center hover:bg-secondary-container transition-colors" href="#">
              <span className="material-symbols-outlined text-white">public</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Expertises</h4>
          <ul className="space-y-3">
            <li><Link className="text-on-primary-container hover:text-white transition-colors" to="/services">Call Center</Link></li>
            <li><Link className="text-on-primary-container hover:text-white transition-colors" to="/services">Recrutement Direct</Link></li>
            <li><Link className="text-on-primary-container hover:text-white transition-colors" to="/services">Intérim</Link></li>
            <li><Link className="text-on-primary-container hover:text-white transition-colors" to="/services">Coaching RH</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Société</h4>
          <ul className="space-y-3">
            <li><Link className="text-on-primary-container hover:text-white transition-colors" to="/a-propos">À propos</Link></li>
            <li><Link className="text-on-primary-container hover:text-white transition-colors" to="/contact">Contact</Link></li>
            <li><Link className="text-on-primary-container hover:text-white transition-colors" to="/contact">Nos bureaux</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Newsletter</h4>
          <p className="text-on-primary-container text-sm mb-4">Restez informé des opportunités et des tendances du marché.</p>
          <div className="flex gap-2">
            <input
              className="bg-on-primary-container/10 border border-on-primary-container/20 rounded-lg px-4 py-2 w-full text-white placeholder:text-on-primary-container/60 focus:ring-secondary-container focus:border-secondary-container"
              placeholder="Email"
              type="email"
            />
            <button className="bg-secondary-container px-3 rounded-lg hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop border-t border-on-primary-container/10 mt-stack-lg pt-stack-md flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-primary-container text-body-md text-center md:text-left">© 2024 MOUNCAJ Group. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-gutter text-on-primary-container text-body-md">
          <a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
          <a className="hover:text-white transition-colors" href="#">Mentions légales</a>
          <a className="hover:text-white transition-colors" href="#">Cookies</a>
          <a className="hover:text-white transition-colors" href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

