"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertTriangle, Car, Users, Building, Calendar, CheckCircle } from "lucide-react"

export default function FormsPage() {
  // Complaint form state
  const [complaintForm, setComplaintForm] = useState({
    complainantName: "",
    complainantEmail: "",
    complainantPhone: "",
    officerName: "",
    officerBadge: "",
    incidentDate: "",
    incidentLocation: "",
    complaintType: "",
    description: "",
  })

  // Permit form state
  const [permitForm, setPermitForm] = useState({
    applicantName: "",
    applicantEmail: "",
    applicantPhone: "",
    permitType: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: "",
    expectedAttendees: "",
    duration: "",
  })

  // UI state
  const [complaintSubmitted, setComplaintSubmitted] = useState(false)
  const [permitSubmitted, setPermitSubmitted] = useState(false)
  const [complaintLoading, setComplaintLoading] = useState(false)
  const [permitLoading, setPermitLoading] = useState(false)
  const [complaintError, setComplaintError] = useState("")
  const [permitError, setPermitError] = useState("")
  const [caseNumber, setCaseNumber] = useState("")
  const [applicationNumber, setApplicationNumber] = useState("")

  // Handle complaint submission
  const handleComplaintSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setComplaintLoading(true)
    setComplaintError("")
    
    try {
      // Use your actual deployment URL here
      const response = await fetch('https://script.google.com/macros/s/AKfycbwmgaRv1YiyvN7I34wPBwmnGLyAOJPGbyWQy7ufSybXtsVJ2ob15PFMXsT_GCS36AQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          type: 'complaint',
          complainantName: complaintForm.complainantName,
          complainantEmail: complaintForm.complainantEmail,
          complainantPhone: complaintForm.complainantPhone,
          officerName: complaintForm.officerName,
          officerBadge: complaintForm.officerBadge,
          incidentDate: complaintForm.incidentDate,
          incidentLocation: complaintForm.incidentLocation,
          complaintType: complaintForm.complaintType,
          description: complaintForm.description,
        })
      })
      
      // Since we're using no-cors, we can't read the response
      // But we can assume it worked if no error was thrown
      const timestamp = Date.now()
      setCaseNumber(`LSPD-${timestamp}`)
      setComplaintSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setComplaintSubmitted(false)
        setCaseNumber("")
        setComplaintForm({
          complainantName: "",
          complainantEmail: "",
          complainantPhone: "",
          officerName: "",
          officerBadge: "",
          incidentDate: "",
          incidentLocation: "",
          complaintType: "",
          description: "",
        })
      }, 5000)
      
    } catch (error) {
      setComplaintError('Failed to submit complaint. Please try again.')
    } finally {
      setComplaintLoading(false)
    }
  }

  // Handle permit submission
  const handlePermitSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPermitLoading(true)
    setPermitError("")
    
    try {
      // Use your actual deployment URL here
      const response = await fetch('https://script.google.com/macros/s/AKfycbwH1E0-LlCfytvxezLxO5LUf9wqlwvMN8laKtA8x6vKr2n2AyyzlWBZW5QngMsJ2dL1/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          type: 'permit',
          applicantName: permitForm.applicantName,
          applicantEmail: permitForm.applicantEmail,
          applicantPhone: permitForm.applicantPhone,
          permitType: permitForm.permitType,
          eventDate: permitForm.eventDate,
          eventLocation: permitForm.eventLocation,
          expectedAttendees: permitForm.expectedAttendees,
          duration: permitForm.duration,
          eventDescription: permitForm.eventDescription,
        })
      })
      
      // Since we're using no-cors, we can't read the response
      // But we can assume it worked if no error was thrown
      const timestamp = Date.now()
      setApplicationNumber(`PERMIT-${timestamp}`)
      setPermitSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setPermitSubmitted(false)
        setApplicationNumber("")
        setPermitForm({
          applicantName: "",
          applicantEmail: "",
          applicantPhone: "",
          permitType: "",
          eventDate: "",
          eventLocation: "",
          eventDescription: "",
          expectedAttendees: "",
          duration: "",
        })
      }, 5000)
      
    } catch (error) {
      setPermitError('Failed to submit permit application. Please try again.')
    } finally {
      setPermitLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">UPD Forms Portal</h1>
            <p className="text-xl text-blue-100">
              Submit complaints, apply for permits, and access official UPD forms and services
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Forms Tabs */}
        <Tabs defaultValue="complaints" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="complaints" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Complaints
            </TabsTrigger>
            <TabsTrigger value="permits" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Permits & Requests
            </TabsTrigger>
          </TabsList>

          {/* Complaints Tab */}
          <TabsContent value="complaints">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Complaint Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      File a Complaint
                    </CardTitle>
                    <CardDescription>
                      Report misconduct or file a complaint against a UPD officer. All complaints are taken seriously
                      and investigated thoroughly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {complaintSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Complaint Submitted Successfully</h3>
                        <p className="text-gray-600 mb-4">
                          Your complaint has been received and assigned a case number. You will be contacted within 48
                          hours.
                        </p>
                        <Badge variant="outline" className="mt-4">
                          Case #{caseNumber}
                        </Badge>
                      </div>
                    ) : (
                      <form onSubmit={handleComplaintSubmit} className="space-y-6">
                        {complaintError && (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-700 text-sm">{complaintError}</p>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="complainantName">Your Full Name *</Label>
                            <Input
                              id="complainantName"
                              value={complaintForm.complainantName}
                              onChange={(e) => setComplaintForm({ ...complaintForm, complainantName: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="complainantEmail">Email Address *</Label>
                            <Input
                              id="complainantEmail"
                              type="email"
                              value={complaintForm.complainantEmail}
                              onChange={(e) => setComplaintForm({ ...complaintForm, complainantEmail: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="complainantPhone">Phone Number *</Label>
                          <Input
                            id="complainantPhone"
                            type="tel"
                            value={complaintForm.complainantPhone}
                            onChange={(e) => setComplaintForm({ ...complaintForm, complainantPhone: e.target.value })}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="officerName">Officer Name (if known)</Label>
                            <Input
                              id="officerName"
                              value={complaintForm.officerName}
                              onChange={(e) => setComplaintForm({ ...complaintForm, officerName: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="officerBadge">Officer Badge Number (if known)</Label>
                            <Input
                              id="officerBadge"
                              value={complaintForm.officerBadge}
                              onChange={(e) => setComplaintForm({ ...complaintForm, officerBadge: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="incidentDate">Incident Date *</Label>
                            <Input
                              id="incidentDate"
                              type="date"
                              value={complaintForm.incidentDate}
                              onChange={(e) => setComplaintForm({ ...complaintForm, incidentDate: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="complaintType">Complaint Type *</Label>
                            <Select
                              value={complaintForm.complaintType}
                              onValueChange={(value) => setComplaintForm({ ...complaintForm, complaintType: value })}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select complaint type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="excessive-force">Excessive Force</SelectItem>
                                <SelectItem value="misconduct">Professional Misconduct</SelectItem>
                                <SelectItem value="discrimination">Discrimination</SelectItem>
                                <SelectItem value="harassment">Harassment</SelectItem>
                                <SelectItem value="corruption">Corruption</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="incidentLocation">Incident Location *</Label>
                          <Input
                            id="incidentLocation"
                            value={complaintForm.incidentLocation}
                            onChange={(e) => setComplaintForm({ ...complaintForm, incidentLocation: e.target.value })}
                            placeholder="Street address, intersection, or general area"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="description">Detailed Description *</Label>
                          <Textarea
                            id="description"
                            value={complaintForm.description}
                            onChange={(e) => setComplaintForm({ ...complaintForm, description: e.target.value })}
                            placeholder="Please provide a detailed description of the incident, including what happened, when it occurred, and any witnesses present."
                            rows={6}
                            required
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-red-600 hover:bg-red-700"
                          disabled={complaintLoading}
                        >
                          {complaintLoading ? "Submitting..." : "Submit Complaint"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Complaint Information */}
              <div>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Important Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Anonymous Complaints</h4>
                      <p className="text-sm text-yellow-700">
                        While you can file anonymous complaints, providing contact information helps us investigate more
                        effectively.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Investigation Process</h4>
                      <p className="text-sm text-blue-700">
                        All complaints are reviewed by Internal Affairs and investigated according to department policy.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Response Time</h4>
                      <p className="text-sm text-green-700">
                        You will receive acknowledgment within 48 hours and updates throughout the investigation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Permits Tab */}
          <TabsContent value="permits">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Permit Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      Apply for Permits & Requests
                    </CardTitle>
                    <CardDescription>
                      Apply for various permits including parking permits, road closures, event permits, and other
                      official requests.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {permitSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-green-600 mb-2">
                          Application Submitted Successfully
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Your permit application has been received and is under review. You will be contacted within
                          5-7 business days.
                        </p>
                        <Badge variant="outline" className="mt-4">
                          Application #{applicationNumber}
                        </Badge>
                      </div>
                    ) : (
                      <form onSubmit={handlePermitSubmit} className="space-y-6">
                        {permitError && (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-700 text-sm">{permitError}</p>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="applicantName">Full Name *</Label>
                            <Input
                              id="applicantName"
                              value={permitForm.applicantName}
                              onChange={(e) => setPermitForm({ ...permitForm, applicantName: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="applicantEmail">Email Address *</Label>
                            <Input
                              id="applicantEmail"
                              type="email"
                              value={permitForm.applicantEmail}
                              onChange={(e) => setPermitForm({ ...permitForm, applicantEmail: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="applicantPhone">Phone Number *</Label>
                          <Input
                            id="applicantPhone"
                            type="tel"
                            value={permitForm.applicantPhone}
                            onChange={(e) => setPermitForm({ ...permitForm, applicantPhone: e.target.value })}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="permitType">Permit Type *</Label>
                          <Select
                            value={permitForm.permitType}
                            onValueChange={(value) => setPermitForm({ ...permitForm, permitType: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select permit type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="parking">Parking Permit</SelectItem>
                              <SelectItem value="road-closure">Road Closure</SelectItem>
                              <SelectItem value="event">Event Permit</SelectItem>
                              <SelectItem value="parade">Parade Permit</SelectItem>
                              <SelectItem value="filming">Filming Permit</SelectItem>
                              <SelectItem value="construction">Construction Permit</SelectItem>
                              <SelectItem value="other">Other Request</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="eventDate">Event/Request Date *</Label>
                            <Input
                              id="eventDate"
                              type="date"
                              value={permitForm.eventDate}
                              onChange={(e) => setPermitForm({ ...permitForm, eventDate: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="duration">Duration</Label>
                            <Input
                              id="duration"
                              value={permitForm.duration}
                              onChange={(e) => setPermitForm({ ...permitForm, duration: e.target.value })}
                              placeholder="e.g., 2 hours, 1 day, 1 week"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="eventLocation">Location *</Label>
                          <Input
                            id="eventLocation"
                            value={permitForm.eventLocation}
                            onChange={(e) => setPermitForm({ ...permitForm, eventLocation: e.target.value })}
                            placeholder="Street address, intersection, or area description"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="expectedAttendees">Expected Attendees/Impact</Label>
                          <Input
                            id="expectedAttendees"
                            value={permitForm.expectedAttendees}
                            onChange={(e) => setPermitForm({ ...permitForm, expectedAttendees: e.target.value })}
                            placeholder="Number of people, vehicles, or scope of impact"
                          />
                        </div>

                        <div>
                          <Label htmlFor="eventDescription">Detailed Description *</Label>
                          <Textarea
                            id="eventDescription"
                            value={permitForm.eventDescription}
                            onChange={(e) => setPermitForm({ ...permitForm, eventDescription: e.target.value })}
                            placeholder="Please provide detailed information about your request, including purpose, activities involved, and any special requirements."
                            rows={6}
                            required
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          disabled={permitLoading}
                        >
                          {permitLoading ? "Submitting..." : "Submit Application"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Permit Information */}
              <div>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Permit Types</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Car className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Parking Permits</h4>
                        <p className="text-sm text-gray-600">Reserved parking spaces for events or construction</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Road Closures</h4>
                        <p className="text-sm text-gray-600">Temporary street closures for events or construction</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Event Permits</h4>
                        <p className="text-sm text-gray-600">Public gatherings, festivals, and community events</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-orange-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Special Requests</h4>
                        <p className="text-sm text-gray-600">Filming permits, parades, and other special activities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Processing Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Processing Time</h4>
                      <p className="text-sm text-blue-700">Most permits are processed within 5-7 business days.</p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Fees</h4>
                      <p className="text-sm text-green-700">
                        Permit fees vary by type and will be communicated during the review process.
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Requirements</h4>
                      <p className="text-sm text-green-700">
                        Additional documentation may be required based on permit type.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}