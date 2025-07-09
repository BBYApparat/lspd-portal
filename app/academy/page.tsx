"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GraduationCap, Search, Users, Award } from "lucide-react"

// Academy personnel only (Probationary Officers and Cadets)
const academyPersonnel = [
  // Probationary Officers
  {
    id: 37,
    name: "John Morgan",
    rank: "Probationary Officer",
    badge: "535",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 38,
    name: "Oakley Neil Caesar",
    rank: "Probationary Officer",
    badge: "579",
    division: "Academy",
    status: "Training",
    image: "https://i.imgur.com/RGeKvCJ.png",
  },
  {
    id: 39,
    name: "Tasos Nemak",
    rank: "Probationary Officer",
    badge: "508",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 40,
    name: "Carmine Kingston",
    rank: "Probationary Officer",
    badge: "523",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 41,
    name: "Eddie Garcia",
    rank: "Probationary Officer",
    badge: "511",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 42,
    name: "Zedd McGlunk's",
    rank: "Probationary Officer",
    badge: "598",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  // Cadets
  {
    id: 43,
    name: "Atzoun Tsampikos",
    rank: "Cadet",
    badge: "606",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 44,
    name: "George Brown",
    rank: "Cadet",
    badge: "650",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 45,
    name: "Sitsa Brown",
    rank: "Cadet",
    badge: "689",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 46,
    name: "John Nolan",
    rank: "Cadet",
    badge: "655",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 47,
    name: "Lee Chan",
    rank: "Cadet",
    badge: "696",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 48,
    name: "John Pappas",
    rank: "Cadet",
    badge: "628",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 49,
    name: "Arhs Aggeloudhs",
    rank: "Cadet",
    badge: "614",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 50,
    name: "Mila Blake",
    rank: "Cadet",
    badge: "642",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 51,
    name: "Jason Derek",
    rank: "Cadet",
    badge: "673",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 52,
    name: "Kim Nilsson",
    rank: "Cadet",
    badge: "644",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 53,
    name: "Popaye Vinkey",
    rank: "Cadet",
    badge: "634",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 54,
    name: "Simon Riley",
    rank: "Cadet",
    badge: "620",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 55,
    name: "Irina Stonekova",
    rank: "Cadet",
    badge: "633",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 56,
    name: "Mpampis Vovos",
    rank: "Cadet",
    badge: "662",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 57,
    name: "Nick Brown",
    rank: "Cadet",
    badge: "618",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 58,
    name: "Rafael Duck",
    rank: "Cadet",
    badge: "632",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 59,
    name: "Nick Banortas",
    rank: "Cadet",
    badge: "667",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 60,
    name: "Paul Triggers",
    rank: "Cadet",
    badge: "651",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 61,
    name: "Cecilia Black",
    rank: "Cadet",
    badge: "666",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 62,
    name: "Martin Riggs",
    rank: "Cadet",
    badge: "624",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 63,
    name: "Åke Olsson",
    rank: "Cadet",
    badge: "601",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 64,
    name: "James Williams",
    rank: "Cadet",
    badge: "680",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 65,
    name: "Steven Blacksmith",
    rank: "Cadet",
    badge: "613",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 66,
    name: "Kaza Yura",
    rank: "Cadet",
    badge: "612",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 67,
    name: "Erika-Liselotte Ghoebbels",
    rank: "Cadet",
    badge: "616",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 68,
    name: "Jorge Garcia",
    rank: "Cadet",
    badge: "619",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 69,
    name: "Elisavet Wick",
    rank: "Cadet",
    badge: "610",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 70,
    name: "Valery Lorens",
    rank: "Cadet",
    badge: "661",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 71,
    name: "Faouzia Ouihya",
    rank: "Cadet",
    badge: "625",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
    {
    id: 72,
    name: "Hugo Andersson",
    rank: "Cadet",
    badge: "601",
    division: "Academy",
    status: "Training",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function AcademyPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [rankFilter, setRankFilter] = useState("all")

  const filteredPersonnel = academyPersonnel.filter((person) => {
    const matchesSearch =
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.badge.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRank = rankFilter === "all" || person.rank === rankFilter

    return matchesSearch && matchesRank
  })

  const probationaryOfficers = academyPersonnel.filter((p) => p.rank === "Probationary Officer")
  const cadets = academyPersonnel.filter((p) => p.rank === "Cadet")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">LSPD Police Academy</h1>
            <p className="text-xl text-blue-100 mb-8">
              Meet our current academy personnel - the future of Los Santos law enforcement.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Academy Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{academyPersonnel.length}</div>
              <div className="text-gray-600">Total Academy Personnel</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-600 mb-2">{probationaryOfficers.length}</div>
              <div className="text-gray-600">Probationary Officers</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-600 mb-2">{cadets.length}</div>
              <div className="text-gray-600">Academy Cadets</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Academy Personnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name or badge..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={rankFilter}
                onChange={(e) => setRankFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Ranks</option>
                <option value="Probationary Officer">Probationary Officers</option>
                <option value="Cadet">Cadets</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Academy Personnel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPersonnel.map((person) => (
            <Card key={person.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={person.image || "/placeholder.svg"} alt={person.name} />
                  <AvatarFallback className="text-lg">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-2">{person.name}</h3>
                <div className="space-y-2">
                  <Badge variant={person.rank === "Probationary Officer" ? "default" : "secondary"} className="mb-2">
                    {person.rank}
                  </Badge>
                  <div className="text-sm text-gray-600">
                    <div>Badge #{person.badge}</div>
                    <div>Academy Division</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    In Training
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPersonnel.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-500 text-lg">No academy personnel found matching your search criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
