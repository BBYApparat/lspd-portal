// components/upd-footer.tsx
import Link from "next/link"
import { Mail, Phone, MapPin, Shield } from "lucide-react"

export function UPDFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-10 w-10 text-blue-400" />
              <span className="text-xl font-bold">UPD Portal</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The Unified Police Department coordinates law enforcement agencies across San Andreas, 
              ensuring comprehensive public safety coverage and seamless inter-agency cooperation.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>Emergency: 911</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@upd.gov</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Departments</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lspd" className="text-gray-300 hover:text-white transition-colors">
                  Los Santos Police Department
                </Link>
              </li>
              <li>
                <Link href="/bcso" className="text-gray-300 hover:text-white transition-colors">
                  Blaine County Sheriff's Office
                </Link>
              </li>
              <li>
                <Link href="/sahp" className="text-gray-300 hover:text-white transition-colors">
                  San Andreas Highway Patrol
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-300 hover:text-white transition-colors">
                  View All Departments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About UPD
                </Link>
              </li>
              <li>
                <Link href="/roster" className="text-gray-300 hover:text-white transition-colors">
                  Unified Roster
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-gray-300 hover:text-white transition-colors">
                  Training Academy
                </Link>
              </li>
              <li>
                <Link href="/penal-code" className="text-gray-300 hover:text-white transition-colors">
                  Penal Code
                </Link>
              </li>
              <li>
                <Link href="/forms" className="text-gray-300 hover:text-white transition-colors">
                  Forms & Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Media Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Unified Police Department, San Andreas. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}