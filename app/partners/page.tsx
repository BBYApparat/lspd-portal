import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Phone, Mail, MapPin, Users, Handshake } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Handshake className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Law Enforcement Partners</h1>
            <p className="text-xl text-blue-100">
              Collaborating with allied agencies to ensure public safety across San Andreas
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Partnership Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Unified Law Enforcement</CardTitle>
            <CardDescription>Strengthening public safety through interagency cooperation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              The LSPD works closely with our partner agencies to provide comprehensive law enforcement coverage across San Andreas.
              Through coordinated efforts, shared resources, and mutual assistance agreements, we ensure seamless protection for all
              citizens regardless of jurisdiction.
            </p>
            <p className="text-gray-600">
              Our partnerships enable rapid response to cross-jurisdictional crimes, joint task force operations, and enhanced 
              communication during major incidents. Together, we are stronger.
            </p>
          </CardContent>
        </Card>

        {/* Partner Agencies */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          
          {/* Blaine County Sheriff's Office */}
          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    <img src="/images/BCSO_Logo.png" alt="BCSO Badge" className="h-16 w-16 object-contain" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-green-700">Blaine County Sheriff's Office</CardTitle>
                    <CardDescription>Rural and County Law Enforcement</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  County Agency
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Mission & Jurisdiction</h3>
                  <p className="text-gray-600 mb-4">
                    The Blaine County Sheriff's Office serves the rural areas of San Andreas, including Paleto Bay, 
                    Sandy Shores, and the vast wilderness areas. They provide comprehensive law enforcement services 
                    to communities outside the Los Santos metropolitan area.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Rural Patrol</Badge>
                    <Badge variant="secondary">Search & Rescue</Badge>
                    <Badge variant="secondary">Wildlife Protection</Badge>
                    <Badge variant="secondary">Border Security</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Specialized Units</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-green-400 pl-3">
                      <p className="font-medium">Marine Unit</p>
                      <p className="text-sm text-gray-600">Coastal and lake patrol operations</p>
                    </div>
                    <div className="border-l-4 border-l-green-400 pl-3">
                      <p className="font-medium">Desert Patrol</p>
                      <p className="text-sm text-gray-600">Off-road and wilderness enforcement</p>
                    </div>
                    <div className="border-l-4 border-l-green-400 pl-3">
                      <p className="font-medium">K-9 Unit</p>
                      <p className="text-sm text-gray-600">Drug detection and tracking</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>Emergency: 911</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>info@bcso.gov</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Paleto Bay Station</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* San Andreas State Police */}
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    <img src="/images/sasp_logo.png" alt="SASP Badge" className="h-16 w-16 object-contain" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-blue-700">San Andreas State Police</CardTitle>
                    <CardDescription>Statewide Law Enforcement & Highway Patrol</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  State Agency
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Mission & Jurisdiction</h3>
                  <p className="text-gray-600 mb-4">
                    SASP provides statewide law enforcement services with primary focus on highway patrol, 
                    traffic enforcement, and major crime investigation. They coordinate multi-jurisdictional 
                    operations and provide specialized support to local agencies.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Highway Patrol</Badge>
                    <Badge variant="secondary">Traffic Enforcement</Badge>
                    <Badge variant="secondary">Criminal Investigation</Badge>
                    <Badge variant="secondary">Emergency Response</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Specialized Units</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-blue-400 pl-3">
                      <p className="font-medium">Highway Division</p>
                      <p className="text-sm text-gray-600">Freeway and major roadway patrol</p>
                    </div>
                    <div className="border-l-4 border-l-blue-400 pl-3">
                      <p className="font-medium">Air Support Unit</p>
                      <p className="text-sm text-gray-600">Helicopter and aerial operations</p>
                    </div>
                    <div className="border-l-4 border-l-blue-400 pl-3">
                      <p className="font-medium">Major Crimes Task Force</p>
                      <p className="text-sm text-gray-600">Multi-jurisdictional investigations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>Emergency: 911</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>dispatch@sasp.gov</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>State Headquarters</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* San Andreas Park Rangers */}
          <Card className="border-l-4 border-l-emerald-600">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    <img src="/images/SASP-GTAV-RangerDetail.png" alt="Rangers Badge" className="h-16 w-16 object-contain" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-emerald-700">San Andreas Park Rangers</CardTitle>
                    <CardDescription>Conservation & Environmental Protection</CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  Federal Agency
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Mission & Jurisdiction</h3>
                  <p className="text-gray-600 mb-4">
                    The San Andreas Park Rangers protect and preserve the natural beauty and wildlife of 
                    San Andreas' national and state parks. They enforce environmental laws, conduct search 
                    and rescue operations, and educate the public about conservation.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Environmental Law</Badge>
                    <Badge variant="secondary">Wildlife Protection</Badge>
                    <Badge variant="secondary">Search & Rescue</Badge>
                    <Badge variant="secondary">Fire Prevention</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Protected Areas</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-emerald-400 pl-3">
                      <p className="font-medium">Mount Chiliad State Park</p>
                      <p className="text-sm text-gray-600">Mountain recreation and hiking trails</p>
                    </div>
                    <div className="border-l-4 border-l-emerald-400 pl-3">
                      <p className="font-medium">Alamo Sea National Recreation Area</p>
                      <p className="text-sm text-gray-600">Desert conservation and wildlife preserve</p>
                    </div>
                    <div className="border-l-4 border-l-emerald-400 pl-3">
                      <p className="font-medium">Tongva Hills Preserve</p>
                      <p className="text-sm text-gray-600">Coastal ecosystem protection</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>Emergency: 911</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>rangers@sanparks.gov</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Ranger Station Network</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Joint Operations */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Joint Operations & Mutual Aid</CardTitle>
            <CardDescription>Coordinated response for major incidents and cross-jurisdictional crimes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Multi-Agency Task Forces</h3>
                <p className="text-gray-600 text-sm">Specialized teams for organized crime, narcotics, and terrorism</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Emergency Response</h3>
                <p className="text-gray-600 text-sm">Coordinated response to natural disasters and major incidents</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Handshake className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Resource Sharing</h3>
                <p className="text-gray-600 text-sm">Shared training, equipment, and specialized personnel</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Emergency Contacts</CardTitle>
            <CardDescription>24/7 dispatch and emergency response coordination</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Emergency Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <Phone className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium text-red-800">Emergency Line</p>
                      <p className="text-red-700">911</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-800">Inter-Agency Coordination</p>
                      <p className="text-blue-700">(555) 123-COORD</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Non-Emergency</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium">Joint Operations Center</p>
                      <p className="text-gray-700">joc@lawenforcement.gov</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium">Command Center</p>
                      <p className="text-gray-700">Mission Row Police Station</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}