import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LSPD</h1>
            <p className="text-xl text-blue-100">
              Dedicated to serving and protecting the citizens of Los Santos with honor, integrity, and professionalism.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-blue-600" />
                <CardTitle>Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                The LSPD exists to serve, protect, and preserve the rule of law across the diverse and volatile
                neighborhoods of Los Santos. From the high-rises of Rockford Hills to the gang-infested corners of
                Davis, our officers are trained to respond to all threats with professionalism and resolve.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Eye className="h-8 w-8 text-green-600" />
                <CardTitle>Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To be the premier law enforcement agency, recognized for excellence in policing, community trust, and
                innovative approaches to public safety challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-purple-600" />
                <CardTitle>Our Values</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Integrity</Badge>
                <Badge variant="outline">Professionalism</Badge>
                <Badge variant="outline">Accountability</Badge>
                <Badge variant="outline">Respect</Badge>
                <Badge variant="outline">Excellence</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department History */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Department History & Evolution</CardTitle>
            <CardDescription>A legacy of service and protection</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Origins</h3>
                <p className="text-gray-600 mb-4">
                  The Los Santos Police Department was forged from the necessity to maintain order amidst the burgeoning
                  chaos of a city in perpetual flux. Established in the late 19th century, the LSPD began as a small
                  constabulary tasked with patrolling the dusty streets and settling disputes in a town fueled by dreams
                  and ambition.
                </p>
                <p className="text-gray-600 mb-4">
                  As Los Santos grew, so did the challenges facing its law enforcement. The influx of diverse cultures,
                  the rise of organized crime, and the ever-widening gap between the haves and have-nots demanded a more
                  sophisticated and robust police force.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Modernization</h3>
                <p className="text-gray-600 mb-4">
                  The 20th and 21st centuries saw the LSPD evolve into a modern, professional organization. Specialized
                  units were formed to combat specific threats, from narcotics and gang violence to terrorism and
                  cybercrime. Training programs were enhanced to equip officers with the skills and knowledge necessary
                  to navigate the complexities of modern policing.
                </p>
                <p className="text-gray-600 mb-4">
                  Today, the LSPD stands as a symbol of law and order in a city that never sleeps. But beneath the
                  surface of gleaming badges and advanced technology lies a more complex reality.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Reality of Policing in Los Santos */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">The Reality of Policing in Los Santos</CardTitle>
            <CardDescription>Challenges and complexities</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Policing in Los Santos is not for the faint of heart. Our officers face a daily gauntlet of
                  challenges, from violent crime and civil unrest to corruption and political interference. They must
                  navigate a complex web of social issues, economic disparities, and cultural tensions.
                </p>
                <p className="text-gray-600 mb-4">
                  The LSPD is committed to upholding the law while respecting the rights and dignity of all citizens.
                  But in a city where trust is a precious commodity, building and maintaining community relationships is
                  an ongoing struggle.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Department Leadership</CardTitle>
            <CardDescription>Meet our command staff</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src="/images/lspd-logo.webp" alt="LSPD Logo" className="h-12 w-12 object-contain" />
                </div>
                <h3 className="font-semibold text-lg">Chief of LSPD</h3>
                <p className="text-gray-600">Jimmy Riss</p>
                <Badge variant="secondary">Badge #409</Badge>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src="/images/lspd-logo.webp" alt="LSPD Logo" className="h-12 w-12 object-contain" />
                </div>
                <h3 className="font-semibold text-lg">Assistant Chief</h3>
                <p className="text-gray-600">Vadim Fyodor</p>
                <Badge variant="secondary">Badge #400</Badge>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img src="/images/lspd-logo.webp" alt="LSPD Logo" className="h-12 w-12 object-contain" />
                </div>
                <h3 className="font-semibold text-lg">Captain</h3>
                <p className="text-gray-600">James Conor</p>
                <Badge variant="secondary">Badge #469</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Departments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Department Divisions</CardTitle>
            <CardDescription>Specialized units serving Los Santos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-l-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">Patrol Division</h3>
                  <p className="text-gray-600">First responders and peacekeepers</p>
                </div>
                <div className="border-l-4 border-l-green-500 pl-4">
                  <h3 className="font-semibold text-lg">Detective Bureau</h3>
                  <p className="text-gray-600">Investigators solving serious crimes</p>
                </div>
                <div className="border-l-4 border-l-purple-500 pl-4">
                  <h3 className="font-semibold text-lg">SWAT Unit</h3>
                  <p className="text-gray-600">Tactical responses to high-threat situations</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-l-red-500 pl-4">
                  <h3 className="font-semibold text-lg">Internal Affairs</h3>
                  <p className="text-gray-600">Investigating corruption within</p>
                </div>
                <div className="border-l-4 border-l-yellow-500 pl-4">
                  <h3 className="font-semibold text-lg">Traffic Enforcement</h3>
                  <p className="text-gray-600">Ensuring road safety and traffic law enforcement</p>
                </div>
                <div className="border-l-4 border-l-orange-500 pl-4">
                  <h3 className="font-semibold text-lg">Narcotics</h3>
                  <p className="text-gray-600">Combating the illegal drug trade</p>
                </div>
                <div className="border-l-4 border-l-pink-500 pl-4">
                  <h3 className="font-semibold text-lg">Gang Task Force</h3>
                  <p className="text-gray-600">Targeting gang-related crime</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Role in the Story */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Your Role in the Story</CardTitle>
            <CardDescription>Become part of the LSPD</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  The Los Santos Police Department is more than just an organization; it's a community of dedicated
                  individuals working together to make a difference. Whether you're a seasoned officer or a fresh
                  recruit, there's a place for you in our ranks.
                </p>
                <p className="text-gray-600 mb-4">
                  Join us and become part of the LSPD story. Help us write the next chapter in our legacy of service,
                  protection, and justice.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
