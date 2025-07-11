"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Shield, Star, TreePine } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog"

// LSPD Officers
const lspdOfficers = [
  {
    id: 1,
    name: "Jimmy Riss",
    rank: "Chief of LSPD",
    badge: "409",
    division: "Highest of Command",
    department: "LSPD",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Vadim Fyodor",
    rank: "Ass. Chief of LSPD",
    badge: "400",
    division: "High Command",
    department: "LSPD",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "James Conor",
    rank: "Captain",
    badge: "469",
    division: "High Command",
    department: "LSPD",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "George John Jarrott",
    rank: "Lieutenant",
    badge: "457",
    division: "Command",
    department: "LSPD",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Pedro Sanchez",
    rank: "Sergeant",
    badge: "490",
    division: "Command",
    department: "LSPD",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "John Smith",
    rank: "Sergeant",
    badge: "470",
    division: "Command",
    department: "LSPD",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 7,
    name: "Wolfgang Weber",
    rank: "Corporal",
    badge: "422",
    division: "Leading Officer",
    department: "LSPD",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 8,
    name: "Constantine Catcher",
    rank: "Corporal",
    badge: "488",
    division: "Leading Officer",
    department: "LSPD",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 9,
    name: "Jerry Banana",
    rank: "Corporal",
    badge: "405",
    division: "Leading Officer",
    department: "LSPD",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 10,
    name: "James Browne",
    rank: "Corporal",
    badge: "456",
    division: "Leading Officer",
    department: "LSPD",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  // Add more LSPD officers as needed...
]

// BCSO Officers
const bcsoOfficers = [
  {
    id: 100,
    name: "Sherlock Holmes",
    rank: "Sheriff",
    badge: "331",
    division: "Highest of Command",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 101,
    name: "Mason Carver",
    rank: "Lieutenant",
    badge: "360",
    division: "Command",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 102,
    name: "Noah Holmes",
    rank: "Corporal",
    badge: "311",
    division: "Leading Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 103,
    name: "Mike Vouliotos",
    rank: "Senior Deputy",
    badge: "345",
    division: "Scene Supervisor",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 104,
    name: "Stanley Portis",
    rank: "Senior Deputy",
    badge: "370",
    division: "Scene Supervisor",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 105,
    name: "Trevort Richards",
    rank: "Senior Deputy",
    badge: "390",
    division: "Scene Supervisor",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 106,
    name: "David Brown",
    rank: "Senior Deputy",
    badge: "324",
    division: "Scene Supervisor",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 107,
    name: "Ronald Wilson",
    rank: "Deputy I",
    badge: "307",
    division: "Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 108,
    name: "Lilith Gray",
    rank: "Deputy I",
    badge: "338",
    division: "Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 109,
    name: "Nora Blanco",
    rank: "Deputy I",
    badge: "333",
    division: "Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 110,
    name: "Edi Spehai",
    rank: "Deputy I",
    badge: "396",
    division: "Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 111,
    name: "Oakley Neil Caesar",
    rank: "Deputy I",
    badge: "379",
    division: "Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 112,
    name: "Jay Jackson",
    rank: "Deputy I",
    badge: "382",
    division: "Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 113,
    name: "Buckley Radley",
    rank: "Deputy I",
    badge: "397",
    division: "Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 114,
    name: "Jack Turner",
    rank: "Deputy I",
    badge: "385",
    division: "Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 115,
    name: "Daniel Brown",
    rank: "Deputy I",
    badge: "360",
    division: "Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 116,
    name: "Tim Bradford",
    rank: "Deputy I",
    badge: "315",
    division: "Officer",
    department: "BCSO",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
]

// SASP Rangers
const rangersOfficers = [
  {
    id: 200,
    name: "Main Puts",
    rank: "Game Warden",
    badge: "205",
    division: "Highest of Command",
    department: "SASPR",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 201,
    name: "Maverick McGraw",
    rank: "Captain",
    badge: "250",
    division: "High Command",
    department: "SASPR",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 202,
    name: "James McBeaverton",
    rank: "Sergeant",
    badge: "298",
    division: "Command",
    department: "SASPR",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 203,
    name: "Kevin Henderson",
    rank: "Sergeant",
    badge: "246",
    division: "Command",
    department: "SASPR",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 204,
    name: "Harlan Reed",
    rank: "Senior Ranger",
    badge: "271",
    division: "Scene Supervisor",
    department: "SASPR",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 205,
    name: "Trevon Freeman",
    rank: "Senior Ranger",
    badge: "262",
    division: "Scene Supervisor",
    department: "SASPR",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 206,
    name: "Ethan Callahan",
    rank: "Ranger I",
    badge: "226",
    division: "Officer",
    department: "SASPR",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 207,
    name: "Coddy Blue",
    rank: "Ranger I",
    badge: "215",
    division: "Officer",
    department: "SASPR",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 208,
    name: "Bellatrix Blossom",
    rank: "Ranger I",
    badge: "212",
    division: "Officer",
    department: "SASPR",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
]

// SASP Officers
const saspOfficers = [
  {
    id: 300,
    name: "Merddyn C. Madison",
    rank: "Commissioner",
    badge: "100",
    division: "Highest of Command",
    department: "SASP",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 301,
    name: "James Conor",
    rank: "Captain",
    badge: "169",
    division: "High Command",
    department: "SASP",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 302,
    name: "George T. Smith",
    rank: "Captain",
    badge: "186",
    division: "High Command",
    department: "SASP",
    status: "Active",
    image: "/placeholder.svg?height=100&width=100",
  },
]

// Combine all officers
const allOfficers = [...lspdOfficers, ...bcsoOfficers, ...rangersOfficers, ...saspOfficers]

// Department configurations
const departmentConfig = {
  LSPD: {
    name: "Los Santos Police Department",
    color: "blue",
    icon: Shield,
    officers: lspdOfficers,
  },
  BCSO: {
    name: "Blaine County Sheriff's Office",
    color: "amber",
    icon: Star,
    officers: bcsoOfficers,
  },
  SASPR: {
    name: "SA State Park Rangers",
    color: "green",
    icon: TreePine,
    officers: rangersOfficers,
  },
  SASP: {
    name: "San Andreas State Police",
    color: "purple",
    icon: Shield,
    officers: saspOfficers,
  },
}

// Rank hierarchies for each department
const rankOrders: Record<string, Record<string, number>> = {
  LSPD: {
    "Chief of LSPD": 1,
    "Ass. Chief of LSPD": 2,
    "Captain": 3,
    "Lieutenant": 4,
    "Sergeant": 5,
    "Corporal": 6,
    "Senior Officer": 7,
    "Officer III": 8,
    "Officer II": 9,
    "Officer I": 10,
  },
  BCSO: {
    "Sheriff": 1,
    "Under Sheriff": 2,
    "Captain": 3,
    "Lieutenant": 4,
    "Sergeant": 5,
    "Corporal": 6,
    "Senior Deputy": 7,
    "Deputy II": 8,
    "Deputy I": 9,
  },
  SASPR: {
    "Game Warden": 1,
    "Deputy Warden": 2,
    "Captain": 3,
    "Lieutenant": 4,
    "Sergeant": 5,
    "Corporal": 6,
    "Senior Ranger": 7,
    "Ranger II": 8,
    "Ranger I": 9,
  },
  SASP: {
    "Commissioner": 1,
    "Ass. Commissioner": 2,
    "Captain": 3,
    "Lieutenant": 4,
    "Sergeant": 5,
    "Corporal": 6,
    "Senior Trooper": 7,
    "Trooper II": 8,
    "Trooper I": 9,
  },
}

export default function RosterPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [rankFilter, setRankFilter] = useState("all")
  const [divisionFilter, setDivisionFilter] = useState("all")
  const [selectedOfficer, setSelectedOfficer] = useState<any>(null)
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const handleImageClick = (officer: any) => {
    setSelectedOfficer(officer)
  }

  const getOfficersForDepartment = (dept: string) => {
    if (dept === "all") return allOfficers
    return departmentConfig[dept as keyof typeof departmentConfig]?.officers || []
  }

  const filteredOfficers = getOfficersForDepartment(selectedDepartment).filter((officer) => {
    const matchesSearch =
      officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.badge.includes(searchTerm)
    const matchesRank = rankFilter === "all" || officer.rank === rankFilter
    const matchesDivision = divisionFilter === "all" || officer.division === divisionFilter

    return matchesSearch && matchesRank && matchesDivision
  })

  // Get unique values for filters
  const currentOfficers = getOfficersForDepartment(selectedDepartment)
  const ranks = [...new Set(currentOfficers.map((officer) => officer.rank))]
  const divisions = [...new Set(currentOfficers.map((officer) => officer.division))]

  const sortedOfficers = filteredOfficers.sort((a, b) => {
    const deptA = a.department
    const deptB = b.department
    
    if (deptA !== deptB) {
      // Sort by department first
      const deptOrder = ["LSPD", "BCSO", "SASPR", "SASP"]
      return deptOrder.indexOf(deptA) - deptOrder.indexOf(deptB)
    }
    
    // Then sort by rank within department
    const rankOrderA = rankOrders[deptA]?.[a.rank] || 999
    const rankOrderB = rankOrders[deptB]?.[b.rank] || 999
    return rankOrderA - rankOrderB
  })

  const getDepartmentStats = () => {
    const stats = Object.entries(departmentConfig).map(([key, config]) => ({
      department: key,
      name: config.name,
      color: config.color,
      count: config.officers.length,
      Icon: config.icon,
    }))
    return stats
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">UPD Unified Roster</h1>
            <p className="text-xl text-blue-100">
              United Police Department - All divisions serving San Andreas
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Department Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {getDepartmentStats().map(({ department, name, color, count, Icon }) => (
            <Card key={department} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon className={`h-12 w-12 mx-auto mb-4 text-${color}-600`} />
                <h3 className="font-semibold text-lg mb-2">{name}</h3>
                <div className="text-2xl font-bold text-gray-900 mb-2">{count}</div>
                <Badge variant="secondary">Active Officers</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

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
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {Object.entries(departmentConfig).map(([key, config]) => (
                    <SelectItem key={key} value={key}>
                      {config.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
            <div className="text-sm text-gray-600">
              Showing {filteredOfficers.length} of {currentOfficers.length} officers
            </div>
          </CardContent>
        </Card>

        {/* Roster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedOfficers.map((officer) => {
            const dept = departmentConfig[officer.department as keyof typeof departmentConfig]
            const Icon = dept?.icon || Shield
            
            return (
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
                        officer.division === "Highest of Command"
                          ? "default"
                          : officer.division === "High Command"
                            ? "secondary"
                            : "outline"
                      }
                      className="mb-2"
                    >
                      {officer.rank}
                    </Badge>
                    <div className="text-sm text-gray-600">
                      <div>Badge #{officer.badge}</div>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <Icon className={`h-4 w-4 text-${dept?.color}-600`} />
                        <span>{officer.department}</span>
                      </div>
                      <div>{officer.division}</div>
                    </div>
                    <Badge variant={officer.status === "Active" ? "default" : "secondary"}>
                      {officer.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredOfficers.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No officers found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Officer Detail Dialog */}
      <Dialog open={!!selectedOfficer} onOpenChange={(open) => !open && setSelectedOfficer(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Officer Details</DialogTitle>
          </DialogHeader>
          {selectedOfficer && (
            <div className="space-y-4">
              <div className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={selectedOfficer.image} alt={selectedOfficer.name} />
                  <AvatarFallback className="text-xl">
                    {selectedOfficer.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{selectedOfficer.name}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Rank:</span>
                  <span>{selectedOfficer.rank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Badge:</span>
                  <span>#{selectedOfficer.badge}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Department:</span>
                  <span>{selectedOfficer.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Division:</span>
                  <span>{selectedOfficer.division}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <Badge variant={selectedOfficer.status === "Active" ? "default" : "secondary"}>
                    {selectedOfficer.status}
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}