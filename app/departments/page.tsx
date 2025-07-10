// app/departments/page.tsx - UPD Departments Overview
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCard } from "@/components/animated-card"
import {
  Shield,
  ChevronRight,
  MapPin,
  Car,
  Building,
  Users,
  Phone,
  Clock,
  Award
} from "lucide-react"
import Link from "next/link"

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Law Enforcement Departments</h1>
            <p className="text-xl text-blue-100">
              Comprehensive law enforcement coverage across San Andreas through coordinated department operations
            </p>
          </div>
        </div>
      </section>

      {/* Department Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            
            {/* LSPD - Featured Department */}
            <AnimatedCard delay={0.1} className="hover:shadow-xl transition-shadow border-l-4 border-l-blue-600">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Building className="h-12 w-12 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-blue-600">Los Santos Police Department</CardTitle>
                      <CardDescription className="text-lg">Metropolitan Law Enforcement Agency</CardDescription>
                    </div>
                  </div>
                  <Badge variant="default" className="bg-blue-600">Primary Department</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Department Overview</h4>
                    <p className="text-gray-600 mb-4">
                      The Los Santos Police Department serves as the primary law enforcement agency for the metropolitan 
                      Los Santos area. Established in 1889, the LSPD has evolved into a modern, professional organization 
                      equipped to handle the complex challenges of urban policing.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span><strong>Jurisdiction:</strong> Los Santos Metropolitan Area</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-blue-600" />
                        <span><strong>Personnel:</strong> 150+ Active Officers</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span><strong>Coverage:</strong> 24/7 Operations</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Specialized Units</h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <Badge variant="outline">Patrol Division</Badge>
                      <Badge variant="outline">Detective Bureau</Badge>
                      <Badge variant="outline">SWAT Team</Badge>
                      <Badge variant="outline">Gang Task Force</Badge>
                      <Badge variant="outline">Narcotics Unit</Badge>
                      <Badge variant="outline">Traffic Enforcement</Badge>
                      <Badge variant="outline">Internal Affairs</Badge>
                      <Badge variant="outline">K-9 Unit</Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-blue-600" />
                        <span><strong>Non-Emergency:</strong> (555) LSPD-INFO</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-blue-600" />
                        <span><strong>Headquarters:</strong> Mission Row Police Station</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <Button asChild className="flex-1">
                    <Link href="/lspd">
                      Access LSPD Portal <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/lspd/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* BCSO */}
            <AnimatedCard delay={0.2} className="hover:shadow-xl transition-shadow border-l-4 border-l-green-600">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <MapPin className="h-12 w-12 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-green-600">Blaine County Sheriff's Office</CardTitle>
                      <CardDescription className="text-lg">Rural & County Law Enforcement</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-green-600 text-green-600">County Agency</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Department Overview</h4>
                    <p className="text-gray-600 mb-4">
                      The Blaine County Sheriff's Office provides law enforcement services to the rural areas of 
                      Blaine County, including Sandy Shores, Paleto Bay, and the surrounding wilderness regions. 
                      Specializing in rural policing and emergency response.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span><strong>Jurisdiction:</strong> Blaine County Rural Areas</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-green-600" />
                        <span><strong>Personnel:</strong> 75+ Deputies</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span><strong>Coverage:</strong> 24/7 Rural Patrol</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Specialized Services</h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <Badge variant="outline">Rural Patrol</Badge>
                      <Badge variant="outline">Search & Rescue</Badge>
                      <Badge variant="outline">Wildlife Enforcement</Badge>
                      <Badge variant="outline">Marine Unit</Badge>
                      <Badge variant="outline">Aviation Unit</Badge>
                      <Badge variant="outline">Emergency Response</Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span><strong>Non-Emergency:</strong> (555) BCSO-HELP</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-green-600" />
                        <span><strong>Headquarters:</strong> Paleto Bay Sheriff Station</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <Button asChild variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                    <Link href="/bcso">
                      Access BCSO Portal <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/bcso/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </AnimatedCard>

            {/* SAHP */}
            <AnimatedCard delay={0.3} className="hover:shadow-xl transition-shadow border-l-4 border-l-purple-600">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Car className="h-12 w-12 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-purple-600">San Andreas Highway Patrol</CardTitle>
                      <CardDescription className="text-lg">Statewide Traffic & Highway Enforcement</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-purple-600 text-purple-600">State Agency</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Department Overview</h4>
                    <p className="text-gray-600 mb-4">
                      The San Andreas Highway Patrol ensures road safety across the entire state, focusing on 
                      traffic enforcement, accident investigation, and commercial vehicle regulation on all 
                      major highways and interstate routes.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-purple-600" />
                        <span><strong>Jurisdiction:</strong> Statewide Highways</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-purple-600" />
                        <span><strong>Personnel:</strong> 100+ Troopers</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-purple-600" />
                        <span><strong>Coverage:</strong> 24/7 Highway Patrol</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Specialized Units</h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <Badge variant="outline">Highway Patrol</Badge>
                      <Badge variant="outline">Traffic Safety</Badge>
                      <Badge variant="outline">Commercial Vehicle</Badge>
                      <Badge variant="outline">Accident Investigation</Badge>
                      <Badge variant="outline">Motorcycle Unit</Badge>
                      <Badge variant="outline">Air Support</Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-purple-600" />
                        <span><strong>Non-Emergency:</strong> (555) SAHP-ROAD</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-purple-600" />
                        <span><strong>Headquarters:</strong> State Capitol Complex</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <Button asChild variant="outline" className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                    <Link href="/sahp">
                      Access SAHP Portal <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/sahp/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Coordination Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Unified Command Structure</h2>
            <p className="text-lg text-gray-600 mb-8">
              The UPD coordinates these agencies through shared resources, joint training programs, 
              unified communication systems, and collaborative operations to ensure seamless law enforcement 
              coverage across all jurisdictions in San Andreas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>Joint Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Coordinated multi-agency responses for major incidents</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle>Shared Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Unified academy programs and continuing education</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Phone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <CardTitle>Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Integrated dispatch and communication systems</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}