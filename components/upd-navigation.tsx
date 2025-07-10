// components/upd-navigation.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UPDNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">UPD Portal</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About UPD
            </Link>

            {/* Department Sections Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                  Departments <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/lspd" className="w-full">
                    <Shield className="mr-2 h-4 w-4" />
                    Los Santos Police Department
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/bcso" className="w-full">
                    <Shield className="mr-2 h-4 w-4" />
                    Blaine County Sheriff's Office
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sahp" className="w-full">
                    <Shield className="mr-2 h-4 w-4" />
                    San Andreas Highway Patrol
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/departments" className="w-full">
                    View All Departments
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/roster" className="text-gray-700 hover:text-blue-600 transition-colors">
              Unified Roster
            </Link>

            <Link href="/academy" className="text-gray-700 hover:text-blue-600 transition-colors">
              Training Academy
            </Link>

            <Link href="/forms" className="text-gray-700 hover:text-blue-600 transition-colors">
              Forms & Services
            </Link>

            <Link href="/penal-code" className="text-gray-700 hover:text-blue-600 transition-colors">
              Penal Code
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About UPD
              </Link>
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Departments</p>
                <div className="mt-2 space-y-1">
                  <Link
                    href="/lspd"
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Los Santos Police Department
                  </Link>
                  <Link
                    href="/bcso"
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Blaine County Sheriff's Office
                  </Link>
                  <Link
                    href="/sahp"
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    San Andreas Highway Patrol
                  </Link>
                </div>
              </div>
              <Link
                href="/roster"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Unified Roster
              </Link>
              <Link
                href="/academy"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Training Academy
              </Link>
              <Link
                href="/forms"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Forms & Services
              </Link>
              <Link
                href="/penal-code"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Penal Code
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}