import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 dark:bg-black border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-7xl mx-auto font-body-md font-light text-emerald-50">
        <div className="md:col-span-1">
          <div className="text-xl font-bold text-white mb-6">GASP</div>
          <p className="text-emerald-200/60 leading-relaxed mb-6">
            Driving systemic change through collaborative environmental stewardship and industrial innovation.
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="https://wa.me/256753444777" target="_blank" rel="noreferrer" className="text-emerald-200/60 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/green-action-for-sustainable-production-gasp/" target="_blank" rel="noreferrer" className="text-emerald-200/60 hover:text-white transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/GASP_Uganda" target="_blank" rel="noreferrer" className="text-emerald-200/60 hover:text-white transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/GASP_Uganda" target="_blank" rel="noreferrer" className="text-emerald-200/60 hover:text-white transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61564996892668" target="_blank" rel="noreferrer" className="text-emerald-200/60 hover:text-white transition-colors">
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
          <div className="space-y-2 text-emerald-200/60">
            <a href="mailto:info@gasp.co.ug" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> info@gasp.co.ug
            </a>
            <a href="tel:+256753444777" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" /> +256 753 444777
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Models</h4>
          <ul className="space-y-4">
            <li><Link to="/epr-models" className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block">EPR Models</Link></li>
            <li><Link to="/mass-flows" className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block">Mass Flows</Link></li>
            <li><Link to="/value-chain" className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block">Value Chain</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/team" className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block">Team</Link></li>
            <li><Link to="/portfolio" className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block">Portfolio</Link></li>
            <li><Link to="/mission" className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block">Mission & Vision</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Connect</h4>
          <ul className="space-y-4">
            <li><Link to="/contact" className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact Us</Link></li>
            <li><Link to="/partnerships" className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block">Partnerships</Link></li>
            <li><Link to="/gallery" className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block">Gallery & Events</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-emerald-200/40 text-sm">
        <div>© 2026 GASP (Green Action for Sustainable Production). All rights reserved.</div>
        <div className="mt-4 md:mt-0">
          Developed By <a href="https://www.linkedin.com/in/japhal-kibirige-402459245/" target="_blank" rel="noreferrer" className="hover:text-emerald-200 transition-colors">Jpher</a>
        </div>
      </div>
    </footer>
  );
}
