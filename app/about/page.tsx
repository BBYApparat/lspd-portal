import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, TreePine, Users, Award, Clock, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About UPD</h1>
            <p className="text-xl text-blue-100">
              United Police Department - Unified law enforcement serving all of San Andreas
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Mission Statement */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Shield className="h-8 w-8 text-blue-600" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 leading-relaxed">
              The United Police Department (UPD) represents the unified law enforcement structure across San Andreas, 
              bringing together the Los Santos Police Department, Blaine County Sheriff's Office, San Andreas State Police, 
              and State Park Rangers under one coordinated command structure. We are committed to serving and protecting 
              all citizens through professional, ethical, and community-focused policing.
            </p>
          </CardContent>
        </Card>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Department Structure</CardTitle>
            <CardDescription>Four unified departments serving San Andreas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="border-l-4 border-l-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-lg">Los Santos Police Department (LSPD)</h3>
                  </div>
                  <p className="text-gray-600">Primary law enforcement for Los Santos metropolitan area</p>
                  <div className="mt-2">
                    <Badge variant="secondary">Chief: Jimmy Riss</Badge>
                  </div>
                </div>
                
                <div className="border-l-4 border-l-amber-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-amber-600" />
                    <h3 className="font-semibold text-lg">Blaine County Sheriff's Office (BCSO)</h3>
                  </div>
                  <p className="text-gray-600">Law enforcement for rural Blaine County and unincorporated areas</p>
                  <div className="mt-2">
                    <Badge variant="secondary">Sheriff: Sherlock Holmes</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-l-green-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TreePine className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold text-lg">SA State Park Rangers (SASPR)</h3>
                  </div>
                  <p className="text-gray-600">Environmental protection and park law enforcement</p>
                  <div className="mt-2">
                    <Badge variant="secondary">Game Warden: Main Puts</Badge>
                  </div>
                </div>
                
                <div className="border-l-4 border-l-purple-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-lg">San Andreas State Police (SASP)</h3>
                  </div>
                  <p className="text-gray-600">State-level law enforcement and highway patrol</p>
                  <div className="mt-2">
                    <Badge variant="secondary">Commissioner: Merddyn C. Madison</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Command Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Unified Command Structure</CardTitle>
            <CardDescription>Coordinated leadership across all departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">LSPD Chief</h3>
                <p className="text-gray-600">Jimmy Riss</p>
                <Badge variant="secondary">Badge #409</Badge>
              </div>
              
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">BCSO Sheriff</h3>
                <p className="text-gray-600">Sherlock Holmes</p>
                <Badge variant="secondary">Badge #331</Badge>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Game Warden</h3>
                <p className="text-gray-600">Main Puts</p>
                <Badge variant="secondary">Badge #205</Badge>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">SASP Commissioner</h3>
                <p className="text-gray-600">Merddyn C. Madison</p>
                <Badge variant="secondary">Badge #100</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values and Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Integrity</h3>
                    <p className="text-gray-600 text-sm">Upholding the highest ethical standards in all actions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Community</h3>
                    <p className="text-gray-600 text-sm">Building trust and partnerships with citizens</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Service</h3>
                    <p className="text-gray-600 text-sm">Dedicated protection and service to all residents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Excellence</h3>
                    <p className="text-gray-600 text-sm">Continuous improvement and professional development</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Department Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">Active Officers</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">4</div>
                  <div className="text-sm text-gray-600">Departments</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Coverage</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">100%</div>
                  <div className="text-sm text-gray-600">Commitment</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">LSPD Headquarters</h3>
                <div className="text-sm text-gray-600">
                  <div>Mission Row Police Station</div>
                  <div>1 Police Plaza</div>
                  <div>Los Santos, SA 90028</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-amber-600 mb-2">BCSO Headquarters</h3>
                <div className="text-sm text-gray-600">
                  <div>Paleto Bay Sheriff Station</div>
                  <div>Paleto Boulevard</div>
                  <div>Paleto Bay, SA 90210</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-green-600 mb-2">Rangers Station</h3>
                <div className="text-sm text-gray-600">
                  <div>State Park Ranger HQ</div>
                  <div>Mount Chiliad</div>
                  <div>Blaine County, SA</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-purple-600 mb-2">SASP Headquarters</h3>
                <div className="text-sm text-gray-600">
                  <div>State Patrol Building</div>
                  <div>Government District</div>
                  <div>Los Santos, SA 90001</div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="text-center">
                <h3 className="font-semibold text-red-800 mb-2">Emergency Contact</h3>
                <div className="text-2xl font-bold text-red-600">911</div>
                <div className="text-sm text-red-700">For immediate assistance</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}