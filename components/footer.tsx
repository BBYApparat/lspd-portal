import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/lspd-logo.webp" alt="LSPD Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold">LSPD Portal</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The Los Santos Police Department is committed to serving and protecting the citizens of Los Santos with
              integrity, professionalism, and dedication.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>Emergency: 911</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@lspd.gov</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About LSPD
                </Link>
              </li>
              <li>
                <Link href="/roster" className="text-gray-300 hover:text-white transition-colors">
                  Department Roster
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-gray-300 hover:text-white transition-colors">
                  Police Academy
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-white transition-colors">
                  Partner Agencies
                </Link>
              </li>
              <li>
                <Link href="/penal-code" className="text-gray-300 hover:text-white transition-colors">
                  Penal Code
                </Link>
              </li>
              <li>
                <Link href="/forms" className="text-gray-300 hover:text-white transition-colors">
                  Forms & Permits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-yellow-400" />
                <div className="text-sm text-gray-300">
                  <div>Mission Row Police Station</div>
                  <div>1 Police Plaza</div>
                  <div>Los Santos, SA 90028</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Los Santos Police Department. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}