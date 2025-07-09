"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, GraduationCap, Scale, Camera, ChevronRight, FileText } from "lucide-react"
import Link from "next/link"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedBadge } from "@/components/animated-badge"
import { FloatingElements } from "@/components/floating-elements"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                <img src="/images/lspd-logo.webp" alt="LSPD Logo" className="h-16 w-16 object-contain" />
              </div>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Los Santos Police Department
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A long-standing institution tasked with protecting the people of Los Santos in a city where crime,
              corruption, and chaos often rule the streets.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transform hover:scale-105 transition-transform"
              >
                <Link href="/roster">View Our Team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent transform hover:scale-105 transition-transform"
              >
                <Link href="/academy">Join the Academy</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">71</div>
              <div className="text-gray-600">Total Personnel</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">37</div>
              <div className="text-gray-600">Academy Personnel</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Vigilance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Reality */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To safeguard the lives and property of the people we serve, to reduce the incidence and fear of crime,
                and to enhance public safety while working with our community to improve their quality of life.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">The Reality of Policing</h3>
              <p className="text-gray-700">
                The Los Santos Police Department operates in a world far removed from the idyllic image some may hold.
                We are the thin blue line against a tide of criminal activity, facing dangers and moral dilemmas daily.
                Our officers are not just law enforcers; they are guardians of a fragile peace, often forced to make
                split-second decisions that carry life-altering consequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Department Portal</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access comprehensive information about our department, personnel, training programs, and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle>About LSPD</CardTitle>
                    <CardDescription>Our mission, vision, and history</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn about our department's commitment to serving Los Santos with integrity and professionalism.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/about">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-green-600" />
                  <div>
                    <CardTitle>Department Roster</CardTitle>
                    <CardDescription>Meet our officers and cadets</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Browse our comprehensive roster of active officers and academy cadets with detailed profiles.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/roster">
                    View Roster <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                  <div>
                    <CardTitle>Police Academy</CardTitle>
                    <CardDescription>Training and education programs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Discover our comprehensive training programs and academy curriculum for future officers.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/academy">
                    Academy Info <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Scale className="h-8 w-8 text-red-600" />
                  <div>
                    <CardTitle>Penal Code</CardTitle>
                    <CardDescription>Laws and regulations reference</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Access the complete penal code sections and legal references used in our training.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/penal-code">
                    View Codes <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.5} className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Camera className="h-8 w-8 text-orange-600" />
                  <div>
                    <CardTitle>Media Gallery</CardTitle>
                    <CardDescription>Photos and department events</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  View photos from academy training, ceremonies, and department activities.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/gallery">
                    View Gallery <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.6} className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-teal-600" />
                  <div>
                    <CardTitle>Forms & Permits</CardTitle>
                    <CardDescription>Complaints and permit applications</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  File complaints, apply for permits, and access official LSPD forms and services.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/forms">
                    Access Forms <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard
              delay={0.7}
              className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-600 md:col-span-2 lg:col-span-1"
            >
              <CardHeader>
                <CardTitle>Latest Updates</CardTitle>
                <CardDescription>Recent department news</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <AnimatedBadge variant="secondary" delay={0.8}>
                      New
                    </AnimatedBadge>
                    <span className="text-sm">Academy Class 2024-A Graduation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimatedBadge variant="outline" delay={0.9}>
                      Update
                    </AnimatedBadge>
                    <span className="text-sm">Roster Updated - New Officers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AnimatedBadge variant="outline" delay={1.0}>
                      Info
                    </AnimatedBadge>
                    <span className="text-sm">Forms Portal Now Available</span>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Serve Los Santos?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the Los Santos Police Department and make a difference in your community. Start your journey at our
            academy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link href="/academy">Apply to Academy</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
