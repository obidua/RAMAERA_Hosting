import { Link } from 'react-router-dom';
import { Server, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Server className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Ramaera Hosting</span>
            </div>
            <p className="text-sm mb-4">
              Enterprise-grade cloud hosting solutions for businesses of all sizes. Fast, secure, and reliable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/pricing" className="hover:text-cyan-400 transition">
                  Cloud Servers
                </Link>
              </li>
              <li>
                <Link to="/dedicated-servers" className="hover:text-cyan-400 transition">
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-cyan-400 transition">
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-cyan-400 transition">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cyan-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-cyan-400 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>support@biduahosting.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>123 Cloud Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Ramaera Hosting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
