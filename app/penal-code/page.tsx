"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, Scale, Search, BookOpen } from "lucide-react"

// Mock penal code data
const penalCodes = [
  {
    id: 1,
    section: "1.01",
    title: "Assault",
    category: "Crimes Against Persons",
    severity: "Misdemeanor",
    description: "Intentionally causing physical harm or threatening imminent physical harm to another person.",
    penalty: "Fine up to $1,000 and/or imprisonment up to 6 months",
    details:
      "This includes any unwanted physical contact or credible threat of physical violence. Self-defense exceptions apply when force is reasonable and necessary.",
  },
  {
    id: 2,
    section: "1.02",
    title: "Battery",
    category: "Crimes Against Persons",
    severity: "Misdemeanor",
    description: "Unlawful physical contact with another person without consent.",
    penalty: "Fine up to $2,000 and/or imprisonment up to 1 year",
    details:
      "Distinguished from assault by requiring actual physical contact. Severity may be enhanced based on injury caused or vulnerable victim status.",
  },
  {
    id: 3,
    section: "1.03",
    title: "Aggravated Assault",
    category: "Crimes Against Persons",
    severity: "Felony",
    description: "Assault with a deadly weapon or assault resulting in serious bodily injury.",
    penalty: "Imprisonment 2-10 years and fine up to $10,000",
    details:
      "Enhanced penalty for use of weapons, serious injury, or assault on protected persons (police officers, elderly, children).",
  },
  {
    id: 4,
    section: "2.01",
    title: "Theft",
    category: "Property Crimes",
    severity: "Misdemeanor",
    description: "Unlawfully taking property belonging to another with intent to permanently deprive.",
    penalty: "Fine up to $1,500 and/or imprisonment up to 1 year",
    details:
      "Value threshold determines classification. Property value under $1,000 typically classified as petty theft.",
  },
  {
    id: 5,
    section: "2.02",
    title: "Grand Theft",
    category: "Property Crimes",
    severity: "Felony",
    description: "Theft of property valued over $1,000 or theft of specific items regardless of value.",
    penalty: "Imprisonment 1-5 years and fine up to $5,000",
    details:
      "Includes theft of vehicles, firearms, or property directly from a person. Enhanced penalties for repeat offenders.",
  },
  {
    id: 6,
    section: "2.03",
    title: "Burglary",
    category: "Property Crimes",
    severity: "Felony",
    description: "Unlawful entry into a structure with intent to commit theft or felony.",
    penalty: "Imprisonment 2-8 years and fine up to $8,000",
    details:
      "First-degree burglary involves occupied dwellings. Second-degree involves unoccupied structures or commercial buildings.",
  },
  {
    id: 7,
    section: "3.01",
    title: "Possession of Controlled Substance",
    category: "Drug Offenses",
    severity: "Misdemeanor",
    description: "Unlawful possession of controlled substances for personal use.",
    penalty: "Fine up to $1,000 and/or imprisonment up to 6 months",
    details:
      "Penalties vary by substance type and quantity. Treatment programs may be available as alternative to incarceration.",
  },
  {
    id: 8,
    section: "3.02",
    title: "Possession with Intent to Distribute",
    category: "Drug Offenses",
    severity: "Felony",
    description: "Possession of controlled substances in quantities indicating intent to sell or distribute.",
    penalty: "Imprisonment 2-15 years and fine up to $25,000",
    details:
      "Determined by quantity, packaging, presence of scales, large amounts of cash, or other distribution indicators.",
  },
  {
    id: 9,
    section: "4.01",
    title: "Reckless Driving",
    category: "Traffic Violations",
    severity: "Misdemeanor",
    description: "Operating a vehicle with willful disregard for safety of persons or property.",
    penalty: "Fine up to $500 and/or license suspension up to 90 days",
    details: "Includes excessive speeding, racing, or dangerous maneuvers. May be enhanced to felony if injury occurs.",
  },
  {
    id: 10,
    section: "4.02",
    title: "Driving Under the Influence",
    category: "Traffic Violations",
    severity: "Misdemeanor",
    description: "Operating a vehicle while impaired by alcohol or drugs.",
    penalty: "Fine up to $2,000, license suspension, and/or imprisonment up to 1 year",
    details:
      "BAC of 0.08% or higher constitutes impairment. Enhanced penalties for repeat offenses or high BAC levels.",
  },
]

const categories = [...new Set(penalCodes.map((code) => code.category))]

export default function PenalCodePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [openSections, setOpenSections] = useState<number[]>([])

  const filteredCodes = penalCodes.filter((code) => {
    const matchesSearch =
      code.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || code.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const toggleSection = (id: number) => {
    setOpenSections((prev) => (prev.includes(id) ? prev.filter((sectionId) => sectionId !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Penal Code Reference</h1>
            <p className="text-xl text-red-100">Comprehensive guide to laws and regulations enforced by the LSPD</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Penal Code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by section, title, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Penal Code Sections */}
        <div className="space-y-4">
          {filteredCodes.map((code) => (
            <Card key={code.id} className="overflow-hidden">
              <Collapsible open={openSections.includes(code.id)} onOpenChange={() => toggleSection(code.id)}>
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-left">
                        <Badge variant="outline" className="font-mono">
                          {code.section}
                        </Badge>
                        <div>
                          <CardTitle className="text-lg">{code.title}</CardTitle>
                          <CardDescription>{code.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={code.severity === "Felony" ? "destructive" : "secondary"}>
                          {code.severity}
                        </Badge>
                        {openSections.includes(code.id) ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Category</h4>
                        <Badge variant="outline" className="mb-4">
                          {code.category}
                        </Badge>

                        <h4 className="font-semibold mb-2">Penalty</h4>
                        <p className="text-sm text-gray-600 mb-4">{code.penalty}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Additional Details</h4>
                        <p className="text-sm text-gray-600">{code.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {filteredCodes.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No penal code sections found matching your search criteria.</p>
            </CardContent>
          </Card>
        )}

        {/* Legal Disclaimer */}
        <Card className="mt-12 bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800">Legal Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-700 text-sm">
              This penal code reference is provided for educational and training purposes only. It is a simplified
              version for academy instruction and should not be considered a complete legal reference. Always consult
              current legal statutes and department policies for official guidance. Laws and penalties may vary and are
              subject to change.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
