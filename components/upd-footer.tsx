import Link from "next/link"
import { Phone, Mail, MapPin, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">UPD Portal</span>
                <span className="text-sm text-gray-300">United Police Department</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Serving and protecting the citizens of San Andreas through unified law enforcement across all departments.
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
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About UPD
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
            <h3 className="text-lg font-semibold mb-4">Departments</h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-300">
                <div className="font-medium text-white">Los Santos Police Department</div>
                <div>Mission Row Police Station</div>
              </div>
              <div className="text-sm text-gray-300">
                <div className="font-medium text-white">Blaine County Sheriff's Office</div>
                <div>Paleto Bay Sheriff Station</div>
              </div>
              <div className="text-sm text-gray-300">
                <div className="font-medium text-white">San Andreas State Police</div>
                <div>State Patrol Headquarters</div>
              </div>
              <div className="text-sm text-gray-300">
                <div className="font-medium text-white">SA State Park Rangers</div>
                <div>Ranger Station Headquarters</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} United Police Department. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}