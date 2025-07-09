"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera, Calendar, Users, Award, GraduationCap, Shield } from "lucide-react"
import Image from "next/image"

// Mock gallery data
const galleryItems = [
  {
    id: 1,
    title: "Academy Graduation Ceremony 2024-A",
    category: "Academy",
    date: "March 15, 2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Celebrating the graduation of 25 new officers from Academy Class 2024-A",
  },
  {
    id: 2,
    title: "Firearms Training Exercise",
    category: "Training",
    date: "March 10, 2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Officers participating in quarterly firearms qualification training",
  },
  {
    id: 3,
    title: "Community Outreach Event",
    category: "Community",
    date: "March 5, 2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "LSPD officers engaging with local community at safety awareness event",
  },
  {
    id: 4,
    title: "K-9 Unit Demonstration",
    category: "Training",
    date: "February 28, 2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "K-9 officers demonstrating drug detection and apprehension techniques",
  },
  {
    id: 5,
    title: "SWAT Team Training",
    category: "Training",
    date: "February 25, 2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Elite SWAT team conducting tactical response training exercises",
  },
  {
    id: 6,
    title: "Officer Commendation Ceremony",
    category: "Ceremony",
    date: "February 20, 2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Recognizing outstanding service and bravery of LSPD officers",
  },
  {
    id: 7,
    title: "Academy Physical Training",
    category: "Academy",
    date: "February 15, 2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Cadets participating in physical fitness and endurance training",
  },
  {
    id: 8,
    title: "Traffic Safety Campaign",
    category: "Community",
    date: "February 10, 2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Officers promoting traffic safety awareness in local schools",
  },
  {
    id: 9,
    title: "Defensive Tactics Training",
    category: "Training",
    date: "February 5, 2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Officers practicing defensive tactics and arrest control techniques",
  },
]

const categories = [...new Set(galleryItems.map((item) => item.category))]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems = galleryItems.filter((item) => selectedCategory === "all" || item.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Academy":
        return <GraduationCap className="h-4 w-4" />
      case "Training":
        return <Shield className="h-4 w-4" />
      case "Community":
        return <Users className="h-4 w-4" />
      case "Ceremony":
        return <Award className="h-4 w-4" />
      default:
        return <Camera className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academy":
        return "bg-purple-100 text-purple-800"
      case "Training":
        return "bg-blue-100 text-blue-800"
      case "Community":
        return "bg-green-100 text-green-800"
      case "Ceremony":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Camera className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Gallery</h1>
            <p className="text-xl text-orange-100">Capturing moments of service, training, and community engagement</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter by Category</CardTitle>
            <CardDescription>Browse photos by event type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className="mb-2"
              >
                All Photos ({galleryItems.length})
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  <span className="mr-2">{getCategoryIcon(category)}</span>
                  {category} ({galleryItems.filter((item) => item.category === category).length})
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className={getCategoryColor(item.category)}>
                    <span className="mr-1">{getCategoryIcon(item.category)}</span>
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedImage(item)}>
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      {selectedImage && (
                        <div className="space-y-4">
                          <Image
                            src={selectedImage.image || "/placeholder.svg"}
                            alt={selectedImage.title}
                            width={800}
                            height={600}
                            className="w-full h-auto rounded-lg"
                          />
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h2 className="text-xl font-semibold">{selectedImage.title}</h2>
                              <Badge className={getCategoryColor(selectedImage.category)}>
                                <span className="mr-1">{getCategoryIcon(selectedImage.category)}</span>
                                {selectedImage.category}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-2">{selectedImage.description}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Calendar className="h-4 w-4" />
                              {selectedImage.date}
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No photos found in this category.</p>
            </CardContent>
          </Card>
        )}

        {/* Statistics */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Gallery Statistics</CardTitle>
            <CardDescription>Photo collection overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{galleryItems.length}</div>
                <div className="text-sm text-gray-600">Total Photos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{categories.length}</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {galleryItems.filter((item) => item.category === "Academy").length}
                </div>
                <div className="text-sm text-gray-600">Academy Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {galleryItems.filter((item) => item.category === "Training").length}
                </div>
                <div className="text-sm text-gray-600">Training Sessions</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
