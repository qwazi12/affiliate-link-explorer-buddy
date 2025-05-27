"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  TrendingUp,
  Mouse,
  DollarSign,
  Users,
  Calendar,
  ExternalLink,
  Copy,
  Eye,
  BarChart3,
  PieChart,
  LineChart
} from "lucide-react"

interface AnalyticsData {
  totalClicks: number
  conversions: number
  earnings: number
  conversionRate: number
  topPrograms: Array<{
    id: string
    name: string
    clicks: number
    conversions: number
    earnings: number
    logo: string
  }>
  recentActivity: Array<{
    id: string
    type: 'click' | 'conversion' | 'earning'
    program: string
    amount?: number
    timestamp: Date
    country?: string
  }>
  clicksByDate: Array<{
    date: string
    clicks: number
    conversions: number
  }>
  trafficSources: Array<{
    source: string
    clicks: number
    percentage: number
  }>
}

const mockAnalytics: AnalyticsData = {
  totalClicks: 1247,
  conversions: 89,
  earnings: 2845.67,
  conversionRate: 7.14,
  topPrograms: [
    {
      id: "1",
      name: "Supademo",
      clicks: 342,
      conversions: 28,
      earnings: 1256.80,
      logo: "https://ext.same-assets.com/4229050697/2587017125.png"
    },
    {
      id: "2",
      name: "AI SVG Generator",
      clicks: 298,
      conversions: 24,
      earnings: 847.20,
      logo: "https://ext.same-assets.com/4229050697/583734825.png"
    },
    {
      id: "3",
      name: "Comma",
      clicks: 231,
      conversions: 18,
      earnings: 523.40,
      logo: "https://ext.same-assets.com/4229050697/2241331572.png"
    },
    {
      id: "4",
      name: "QR Code Developer",
      clicks: 187,
      conversions: 12,
      earnings: 218.27,
      logo: "https://ext.same-assets.com/4229050697/3540374082.png"
    }
  ],
  recentActivity: [
    {
      id: "1",
      type: "earning",
      program: "Supademo",
      amount: 45.60,
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      country: "US"
    },
    {
      id: "2",
      type: "conversion",
      program: "AI SVG Generator",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      country: "CA"
    },
    {
      id: "3",
      type: "click",
      program: "Comma",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      country: "UK"
    },
    {
      id: "4",
      type: "earning",
      program: "QR Code Developer",
      amount: 12.50,
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      country: "AU"
    }
  ],
  clicksByDate: [
    { date: "Jan 20", clicks: 45, conversions: 3 },
    { date: "Jan 21", clicks: 52, conversions: 4 },
    { date: "Jan 22", clicks: 38, conversions: 2 },
    { date: "Jan 23", clicks: 67, conversions: 5 },
    { date: "Jan 24", clicks: 59, conversions: 4 },
    { date: "Jan 25", clicks: 73, conversions: 6 },
    { date: "Jan 26", clicks: 81, conversions: 7 }
  ],
  trafficSources: [
    { source: "Twitter", clicks: 456, percentage: 36.6 },
    { source: "YouTube", clicks: 312, percentage: 25.0 },
    { source: "Blog", clicks: 267, percentage: 21.4 },
    { source: "Email", clicks: 134, percentage: 10.7 },
    { source: "Other", clicks: 78, percentage: 6.3 }
  ]
}

export default function AnalyticsPage() {
  const [analytics] = useState<AnalyticsData>(mockAnalytics)
  const [dateRange, setDateRange] = useState("7d")
  const [copiedLink, setCopiedLink] = useState<string | null>(null)

  const copyAffiliateLink = (programName: string) => {
    const link = `https://affililist.com/ref/user123/${programName.toLowerCase().replace(/\s+/g, '-')}`
    navigator.clipboard.writeText(link)
    setCopiedLink(programName)
    setTimeout(() => setCopiedLink(null), 2000)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const getTimeAgo = (timestamp: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h ago`

    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'click': return <Mouse className="h-4 w-4 text-blue-600" />
      case 'conversion': return <TrendingUp className="h-4 w-4 text-green-600" />
      case 'earning': return <DollarSign className="h-4 w-4 text-purple-600" />
      default: return <Users className="h-4 w-4 text-gray-600" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'click': return 'bg-blue-100 text-blue-800'
      case 'conversion': return 'bg-green-100 text-green-800'
      case 'earning': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
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
                  <span className="text-xl font-bold">AffiliList Analytics</span>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
                <Button variant="outline" asChild>
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Programs
                  </Link>
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Mouse className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{analytics.totalClicks.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Clicks</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{analytics.conversions}</div>
                    <div className="text-sm text-gray-600">Conversions</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{formatCurrency(analytics.earnings)}</div>
                    <div className="text-sm text-gray-600">Total Earnings</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{analytics.conversionRate}%</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="programs">Top Programs</TabsTrigger>
              <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
              <TabsTrigger value="links">Affiliate Links</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Performance Chart */}
                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trend</h3>
                  <div className="h-64 flex items-end justify-between space-x-2">
                    {analytics.clicksByDate.map((day, index) => (
                      <div key={index} className="flex flex-col items-center space-y-2">
                        <div className="flex flex-col items-center space-y-1">
                          <div
                            className="bg-blue-500 rounded-t"
                            style={{
                              height: `${(day.clicks / Math.max(...analytics.clicksByDate.map(d => d.clicks))) * 150}px`,
                              width: '20px'
                            }}
                          ></div>
                          <div
                            className="bg-green-500 rounded-t"
                            style={{
                              height: `${(day.conversions / Math.max(...analytics.clicksByDate.map(d => d.conversions))) * 50}px`,
                              width: '20px'
                            }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-600 transform -rotate-45">
                          {day.date}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span className="text-sm text-gray-600">Clicks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span className="text-sm text-gray-600">Conversions</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {analytics.recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-gray-900">
                              {activity.program}
                            </div>
                            <div className="text-sm text-gray-500">
                              {getTimeAgo(activity.timestamp)}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getActivityColor(activity.type)}>
                              {activity.type}
                            </Badge>
                            {activity.amount && (
                              <span className="text-sm font-medium text-green-600">
                                +{formatCurrency(activity.amount)}
                              </span>
                            )}
                            {activity.country && (
                              <span className="text-xs text-gray-500">{activity.country}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="programs" className="space-y-6">
              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Programs</h3>
                <div className="space-y-4">
                  {analytics.topPrograms.map((program, index) => (
                    <div key={program.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-lg font-bold text-gray-500">#{index + 1}</div>
                        <Image
                          src={program.logo}
                          alt={program.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{program.name}</div>
                          <div className="text-sm text-gray-600">
                            {program.conversions} conversions from {program.clicks} clicks
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">{formatCurrency(program.earnings)}</div>
                        <div className="text-sm text-gray-600">
                          {((program.conversions / program.clicks) * 100).toFixed(1)}% CVR
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="traffic" className="space-y-6">
              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Traffic Sources</h3>
                <div className="space-y-4">
                  {analytics.trafficSources.map((source, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{source.source}</span>
                        <div className="text-right">
                          <span className="font-semibold">{source.clicks}</span>
                          <span className="text-gray-600 ml-2">({source.percentage}%)</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${source.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="links" className="space-y-6">
              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Affiliate Links</h3>
                <div className="space-y-4">
                  {analytics.topPrograms.map((program) => (
                    <div key={program.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Image
                            src={program.logo}
                            alt={program.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-lg object-cover"
                          />
                          <span className="font-medium text-gray-900">{program.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyAffiliateLink(program.name)}
                          >
                            {copiedLink === program.name ? (
                              "Copied!"
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-2" />
                                Copy Link
                              </>
                            )}
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                        </div>
                      </div>
                      <div className="bg-white border rounded p-3 text-sm text-gray-600 font-mono">
                        https://affililist.com/ref/user123/{program.name.toLowerCase().replace(/\s+/g, '-')}
                      </div>
                      <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
                        <span>{program.clicks} clicks</span>
                        <span>{program.conversions} conversions</span>
                        <span className="font-medium text-green-600">{formatCurrency(program.earnings)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
