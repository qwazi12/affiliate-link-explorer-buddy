"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Check,
  X,
  Eye,
  Edit,
  Trash2,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  AlertCircle
} from "lucide-react"

interface Submission {
  id: string
  name: string
  url: string
  description: string
  commissionRate: string
  category: string
  logoUrl: string
  contactEmail: string
  status: 'pending' | 'approved' | 'rejected'
  submittedAt: string
  submittedBy: string
}

const mockSubmissions: Submission[] = [
  {
    id: "1",
    name: "CloudSync Pro",
    url: "https://cloudsyncpro.com/affiliates",
    description: "Enterprise cloud storage and sync solution with military-grade encryption",
    commissionRate: "35% recurring",
    category: "Cloud Storage",
    logoUrl: "https://ext.same-assets.com/4229050697/583734825.png",
    contactEmail: "partnerships@cloudsyncpro.com",
    status: "pending",
    submittedAt: "2025-01-25T10:30:00Z",
    submittedBy: "john@cloudsyncpro.com"
  },
  {
    id: "2",
    name: "MarketingBot AI",
    url: "https://marketingbot.ai/affiliate",
    description: "AI-powered marketing automation platform for social media and email campaigns",
    commissionRate: "50% first month, 20% recurring",
    category: "Marketing Automation",
    logoUrl: "https://ext.same-assets.com/4229050697/2587017125.png",
    contactEmail: "affiliate@marketingbot.ai",
    status: "pending",
    submittedAt: "2025-01-24T14:20:00Z",
    submittedBy: "sarah@marketingbot.ai"
  },
  {
    id: "3",
    name: "SecureVPN Max",
    url: "https://securevpnmax.com/partners",
    description: "Premium VPN service with 90+ countries and zero-log policy",
    commissionRate: "$25 per sale",
    category: "Security",
    logoUrl: "https://ext.same-assets.com/4229050697/2241331572.png",
    contactEmail: "partnerships@securevpnmax.com",
    status: "approved",
    submittedAt: "2025-01-23T09:15:00Z",
    submittedBy: "alex@securevpnmax.com"
  },
  {
    id: "4",
    name: "CryptoTracker Pro",
    url: "https://cryptotrackerpro.com/affiliate",
    description: "Advanced cryptocurrency portfolio tracking and tax reporting",
    commissionRate: "40% lifetime",
    category: "Cryptocurrency",
    logoUrl: "https://ext.same-assets.com/4229050697/3540374082.png",
    contactEmail: "affiliate@cryptotrackerpro.com",
    status: "rejected",
    submittedAt: "2025-01-22T16:45:00Z",
    submittedBy: "mike@cryptotrackerpro.com"
  }
]

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>(mockSubmissions)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = searchQuery === "" ||
      submission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || submission.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleApprove = (id: string) => {
    setSubmissions(prev => prev.map(sub =>
      sub.id === id ? { ...sub, status: 'approved' as const } : sub
    ))
  }

  const handleReject = (id: string) => {
    setSubmissions(prev => prev.map(sub =>
      sub.id === id ? { ...sub, status: 'rejected' as const } : sub
    ))
  }

  const handleDelete = (id: string) => {
    setSubmissions(prev => prev.filter(sub => sub.id !== id))
  }

  const stats = {
    total: submissions.length,
    pending: submissions.filter(s => s.status === 'pending').length,
    approved: submissions.filter(s => s.status === 'approved').length,
    rejected: submissions.filter(s => s.status === 'rejected').length
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'approved': return 'bg-green-100 text-green-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="https://ext.same-assets.com/4229050697/1583010581.svg"
                    alt="AffiliList"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="text-xl font-bold">AffiliList Admin</span>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" asChild>
                  <Link href="/">
                    View Site
                  </Link>
                </Button>
                <Button variant="outline">
                  Settings
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
                    <div className="text-sm text-gray-600">Total Submissions</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stats.pending}</div>
                    <div className="text-sm text-gray-600">Pending Review</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stats.approved}</div>
                    <div className="text-sm text-gray-600">Approved</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-red-100 rounded-full p-3 mr-4">
                    <X className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stats.rejected}</div>
                    <div className="text-sm text-gray-600">Rejected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg border">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Affiliate Program Submissions</h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search submissions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border rounded-md text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Program
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Commission
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Image
                            src={submission.logoUrl}
                            alt={submission.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-lg object-cover mr-3"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{submission.name}</div>
                            <div className="text-sm text-gray-600 max-w-xs truncate">
                              {submission.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {submission.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {submission.commissionRate}
                      </td>
                      <td className="px-6 py-4">
                        <Badge className={getStatusColor(submission.status)}>
                          {submission.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDate(submission.submittedAt)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {submission.status === 'pending' && (
                            <>
                              <Button
                                size="sm"
                                className="bg-green-600 text-white hover:bg-green-700"
                                onClick={() => handleApprove(submission.id)}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleReject(submission.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(submission.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredSubmissions.length === 0 && (
              <div className="text-center py-12">
                <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No submissions found</h3>
                <p className="text-gray-600">
                  {searchQuery || statusFilter !== "all"
                    ? "Try adjusting your search terms or filters"
                    : "No affiliate program submissions yet"}
                </p>
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white rounded-lg border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      SecureVPN Max approved
                    </div>
                    <div className="text-xs text-gray-600">2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 rounded-full p-2">
                    <Clock className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      New submission: CloudSync Pro
                    </div>
                    <div className="text-xs text-gray-600">4 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 rounded-full p-2">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      CryptoTracker Pro rejected
                    </div>
                    <div className="text-xs text-gray-600">1 day ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
