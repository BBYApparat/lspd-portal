// app/page.tsx - UPD Main Homepage
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCard } from "@/components/animated-card"
import {
  Shield,
  Users,
  FileText,
  ChevronRight,
  MapPin,
  Star,
  Award,
  Radio,
  Car,
  Building,
  Phone,
  Camera
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-20 w-20 text-yellow-400 mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Unified Police Department
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Coordinating Law Enforcement Across San Andreas
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-3xl mx-auto">
              The UPD serves as the unified command structure coordinating multiple law enforcement agencies 
              across San Andreas, ensuring seamless cooperation and comprehensive public safety coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/departments">
                  View Departments <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Law Enforcement Agencies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The UPD coordinates three major law enforcement agencies to provide comprehensive coverage 
              across all jurisdictions in San Andreas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LSPD */}
            <AnimatedCard delay={0.1} className="hover:shadow-xl transition-shadow border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-10 w-10 text-blue-600" />
                  <div>
                    <CardTitle className="text-xl">Los Santos Police Department</CardTitle>
                    <CardDescription>Metropolitan Law Enforcement</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Primary law enforcement agency serving the metropolitan Los Santos area, handling urban crime, 
                  investigations, and community policing initiatives.
                </p>
                <div className="mb-4">
                  <Badge variant="outline" className="mr-2">Urban Patrol</Badge>
                  <Badge variant="outline" className="mr-2">Investigations</Badge>
                  <Badge variant="outline">SWAT</Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="/lspd">
                    Access LSPD Portal <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            {/* BCSO */}
            <AnimatedCard delay={0.2} className="hover:shadow-xl transition-shadow border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-10 w-10 text-green-600" />
                  <div>
                    <CardTitle className="text-xl">Blaine County Sheriff's Office</CardTitle>
                    <CardDescription>Rural & County Operations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sheriff's department covering Blaine County's rural areas, including Sandy Shores, Paleto Bay, 
                  and remote wilderness regions with specialized rural law enforcement.
                </p>
                <div className="mb-4">
                  <Badge variant="outline" className="mr-2">Rural Patrol</Badge>
                  <Badge variant="outline" className="mr-2">Search & Rescue</Badge>
                  <Badge variant="outline">Wildlife</Badge>
                </div>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/bcso">
                    Access BCSO Portal <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            {/* SAHP */}
            <AnimatedCard delay={0.3} className="hover:shadow-xl transition-shadow border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Car className="h-10 w-10 text-purple-600" />
                  <div>
                    <CardTitle className="text-xl">San Andreas Highway Patrol</CardTitle>
                    <CardDescription>Statewide Traffic Enforcement</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Statewide highway patrol responsible for traffic enforcement, highway safety, accident investigation, 
                  and commercial vehicle regulation across all major roadways.
                </p>
                <div className="mb-4">
                  <Badge variant="outline" className="mr-2">Highway Patrol</Badge>
                  <Badge variant="outline" className="mr-2">Traffic Safety</Badge>
                  <Badge variant="outline">Commercial</Badge>
                </div>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/sahp">
                    Access SAHP Portal <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Quick Access Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unified Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access shared resources and services across all departments through our unified portal system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCard delay={0.1} className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Unified Roster</CardTitle>
                <CardDescription>All department personnel</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/roster">
                    View Roster <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <FileText className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Forms & Services</CardTitle>
                <CardDescription>Reports and applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/forms">
                    Access Forms <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle>Training Academy</CardTitle>
                <CardDescription>Officer training programs</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/academy">
                    View Programs <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <Camera className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle>Media Gallery</CardTitle>
                <CardDescription>Department photos & events</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/gallery">
                    View Gallery <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Phone className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Emergency Services</h3>
          <p className="text-lg mb-4">For all emergencies, call 911 immediately</p>
          <p className="text-red-100">
            Non-emergency services: Contact your local department directly through their portal
          </p>
        </div>
      </section>
    </div>
  )
}