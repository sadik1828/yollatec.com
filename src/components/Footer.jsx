import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="container-xl py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold dark:text-white">Yollatec.com</h4>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Secure. Modern. Reliable. Cybersecurity, Cloud and Software
            solutions for growing businesses.
          </p>
        </div>
        <div>
          <h5 className="font-semibold dark:text-white">Company</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:underline text-gray-600 dark:text-gray-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/solutions"
                className="hover:underline text-gray-600 dark:text-gray-300"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline text-gray-600 dark:text-gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold dark:text-white">Contact</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Phone size={16} /> +252 634745339
            </li>
            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Mail size={16} /> info@yollatec.com
            </li>
            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin size={16} /> Hargeisa, Somaliland
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold dark:text-white">Newsletter</h5>
          <form className="mt-3 flex gap-2">
            <input
              className="flex-1 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Email address"
            />
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t dark:border-gray-800">
        <div className="container-xl py-4 text-xs text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} Yollatec.com. All rights reserved.
          </span>
          <span>Yollatec — Driving Innovation and Secure Digital Growth</span>
        </div>
      </div>
    </footer>
  );
}
