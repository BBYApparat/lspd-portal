"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import { DialogHeader } from "@/components/ui/dialog"

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

// Update rank order to match LSPD hierarchy
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
  if (!officer) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {officer.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="relative group">
              <img
                src={officer.image || "/placeholder.svg"}
                alt={officer.name}
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {/* Fallback display when image fails to load */}
              <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center text-4xl font-bold text-gray-500">
                {officer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
          </div>
          <div className="text-center space-y-2">
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
            >
              {officer.rank}
            </Badge>
            <div className="text-sm text-gray-600">
              <div>Badge #{officer.badge}</div>
              <div>{officer.division} Division</div>
            </div>
            <Badge variant={officer.status === "Active" ? "default" : "secondary"}>
              {officer.status}
            </Badge>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department Roster</h1>
            <p className="text-xl text-blue-100">
              Meet the dedicated officers serving the Los Santos Police Department
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Officers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by name or badge number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={rankFilter} onValueChange={setRankFilter}>
                <SelectTrigger className="w-full md:w-48">
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
                <SelectTrigger className="w-full md:w-48">
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
            <Card key={officer.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div 
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => handleImageClick(officer)}
                >
                  <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-transparent hover:ring-blue-500">
                    <AvatarImage src={officer.image || "/placeholder.svg"} alt={officer.name} />
                    <AvatarFallback className="text-lg">
                      {officer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
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
                  <Badge variant={officer.status === "Active" ? "default" : "secondary"}>
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
