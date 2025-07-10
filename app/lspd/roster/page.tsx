"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Real LSPD roster data
const officers = [
  // High Command
  {
    id: 1,
    name: "Jimmy Riss",
    rank: "Chief of LSPD",
    badge: "409",
    division: "Highest of Command",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Vadim Fyodor",
    rank: "Ass. Chief of LSPD",
    badge: "400",
    division: "High Command",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "James Conor",
    rank: "Captain",
    badge: "469",
    division: "High Command",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  // Command
  {
    id: 4,
    name: "George John Jarrott",
    rank: "Lieutenant",
    badge: "457",
    division: "Command",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Pedro Sanchez",
    rank: "Sergeant",
    badge: "490",
    division: "Command",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "John Smith",
    rank: "Sergeant",
    badge: "470",
    division: "Command",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  // Leading Officers
  {
    id: 7,
    name: "Wolfgang Weber",
    rank: "Corporal",
    badge: "422",
    division: "Leading Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 8,
    name: "Constantine Catcher",
    rank: "Corporal",
    badge: "488",
    division: "Leading Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 9,
    name: "Jerry Banana",
    rank: "Corporal",
    badge: "405",
    division: "Leading Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 10,
    name: "James Browne",
    rank: "Corporal",
    badge: "456",
    division: "Leading Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 11,
    name: "Kevin Voight",
    rank: "Corporal",
    badge: "417",
    division: "Leading Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  // Scene Supervisors
  {
    id: 12,
    name: "Alex JJ Martinez",
    rank: "Senior Officer",
    badge: "429",
    division: "Scene Supervisor",
    status: "Active",
    image: "https://i.imgur.com/zBkChiP.png",
  },
  {
    id: 13,
    name: "Colt Cassidy",
    rank: "Senior Officer",
    badge: "425",
    division: "Scene Supervisor",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 14,
    name: "Ryan Folsom",
    rank: "Senior Officer",
    badge: "427",
    division: "Scene Supervisor",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 15,
    name: "John Jones",
    rank: "Senior Officer",
    badge: "478",
    division: "Scene Supervisor",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 16,
    name: "John Mason",
    rank: "Senior Officer",
    badge: "454",
    division: "Scene Supervisor",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 17,
    name: "Steven Seagal",
    rank: "Senior Officer",
    badge: "403",
    division: "Scene Supervisor",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  // Officer II
  {
    id: 18,
    name: "Max Lush",
    rank: "Officer II",
    badge: "499",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 19,
    name: "John Conor",
    rank: "Officer II",
    badge: "430",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 20,
    name: "James Carter",
    rank: "Officer II",
    badge: "440",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 21,
    name: "Malik Jackson",
    rank: "Officer II",
    badge: "445",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 22,
    name: "Wayne Kerr",
    rank: "Officer II",
    badge: "477",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 23,
    name: "Marcus Cole",
    rank: "Officer II",
    badge: "407",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 24,
    name: "Ophelia Vael",
    rank: "Officer II",
    badge: "404",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 25,
    name: "John Gat",
    rank: "Officer II",
    badge: "481",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 26,
    name: "Anthony Edwards",
    rank: "Officer II",
    badge: "437",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 27,
    name: "Dimitris Kowalski",
    rank: "Officer II",
    badge: "402",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  // Officer I
  {
    id: 28,
    name: "Peter Sanchez",
    rank: "Officer I",
    badge: "421",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 29,
    name: "Evelyn Lane",
    rank: "Officer I",
    badge: "460",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 30,
    name: "Aisha Parker",
    rank: "Officer I",
    badge: "415",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 31,
    name: "Beeca Mesha",
    rank: "Officer I",
    badge: "468",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 32,
    name: "Henry Ford",
    rank: "Officer I",
    badge: "491",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 33,
    name: "Jimy Iwannidhs",
    rank: "Officer I",
    badge: "474",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 34,
    name: "Ethan Callahan",
    rank: "Officer I",
    badge: "426",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 35,
    name: "Morty Spade",
    rank: "Officer I",
    badge: "420",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 36,
    name: "Connor Kalantas",
    rank: "Officer I",
    badge: "452",
    division: "Officer",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const rankOrder = {
  "Chief of LSPD": 1,
  "Ass. Chief of LSPD": 2,
  Captain: 3,
  Lieutenant: 4,
  Sergeant: 5,
  Corporal: 6,
  "Senior Officer": 7,
  "Officer II": 8,
  "Officer I": 9,
  "Probationary Officer": 10,
  Cadet: 11,
}

interface Officer {
  id: number
  name: string
  rank: string
  badge: string
  division: string
  status: string
  image: string
}

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  officer: Officer | null
}

function ImageModal({ isOpen, onClose, officer }: ImageModalProps) {
  const [imageError, setImageError] = useState(false)

  if (!officer) return null

  const handleImageError = () => {
    setImageError(true)
  }

  const handleImageLoad = () => {
    setImageError(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">
            {officer.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Image Container */}
          <div className="flex justify-center">
            <div className="relative">
              {!imageError ? (
                <img
                  src={officer.image || "/placeholder.svg"}
                  alt={officer.name}
                  className="w-80 h-80 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              ) : (
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-blue-600 mb-2">
                      {officer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="text-blue-500 text-sm">No Image Available</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Officer Details */}
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge
                variant={
                  officer.rank === "Chief of Police" || officer.rank === "Chief of LSPD"
                    ? "default"
                    : officer.rank === "Deputy Chief" || officer.rank === "Ass. Chief of LSPD"
                      ? "secondary"
                      : officer.rank === "Commander" || officer.rank === "Captain"
                        ? "outline"
                        : "secondary"
                }
                className="text-lg px-4 py-2"
              >
                {officer.rank}
              </Badge>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-center items-center gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-500">Badge Number</div>
                  <div className="text-lg font-semibold">#{officer.badge}</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Division</div>
                  <div className="text-lg font-semibold">{officer.division}</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Badge 
                  variant={officer.status === "Active" ? "default" : "secondary"}
                  className={`text-sm px-3 py-1 ${officer.status === "Active" ? "bg-green-500 hover:bg-green-600" : ""}`}
                >
                  {officer.status}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function RosterPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [rankFilter, setRankFilter] = useState("all")
  const [divisionFilter, setDivisionFilter] = useState("all")
  const [selectedOfficer, setSelectedOfficer] = useState<Officer | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = (officer: Officer) => {
    setSelectedOfficer(officer)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedOfficer(null)
  }

  const filteredOfficers = officers
    .filter((officer) => {
      const matchesSearch =
        officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        officer.badge.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRank = rankFilter === "all" || officer.rank === rankFilter
      const matchesDivision = divisionFilter === "all" || officer.division === divisionFilter

      return matchesSearch && matchesRank && matchesDivision
    })
    .sort((a, b) => rankOrder[a.rank as keyof typeof rankOrder] - rankOrder[b.rank as keyof typeof rankOrder])

  const ranks = [...new Set(officers.map((officer) => officer.rank))]
  const divisions = [...new Set(officers.map((officer) => officer.division))]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              LSPD Department Roster
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Meet the brave men and women who serve and protect Los Santos
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>{officers.filter(o => o.status === "Active").length} Active Officers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span>{divisions.length} Divisions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search & Filter Officers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search by name or badge number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={rankFilter} onValueChange={setRankFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by rank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ranks</SelectItem>
                  {ranks.map((rank) => (
                    <SelectItem key={rank} value={rank}>
                      {rank}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={divisionFilter} onValueChange={setDivisionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by division" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Divisions</SelectItem>
                  {divisions.map((division) => (
                    <SelectItem key={division} value={division}>
                      {division}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Roster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredOfficers.map((officer) => (
            <Card key={officer.id} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6 text-center">
                <div 
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => handleImageClick(officer)}
                >
                  <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-transparent group-hover:ring-blue-500 transition-all">
                    <AvatarImage src={officer.image || "/placeholder.svg"} alt={officer.name} />
                    <AvatarFallback className="text-lg bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600">
                      {officer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity mb-2">
                    Click to view details
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{officer.name}</h3>
                <div className="space-y-2">
                  <Badge
                    variant={
                      officer.rank === "Chief of Police" || officer.rank === "Chief of LSPD"
                        ? "default"
                        : officer.rank === "Deputy Chief" || officer.rank === "Ass. Chief of LSPD"
                          ? "secondary"
                          : officer.rank === "Commander" || officer.rank === "Captain"
                            ? "outline"
                            : "secondary"
                    }
                    className="mb-2"
                  >
                    {officer.rank}
                  </Badge>
                  <div className="text-sm text-gray-600">
                    <div>Badge #{officer.badge}</div>
                    <div>{officer.division} Division</div>
                  </div>
                  <Badge 
                    variant={officer.status === "Active" ? "default" : "secondary"}
                    className={officer.status === "Active" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
                  >
                    {officer.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOfficers.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-500 text-lg">No officers found matching your search criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        officer={selectedOfficer}
      />
    </div>
  )
}