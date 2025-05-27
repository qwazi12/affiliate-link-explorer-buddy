"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Youtube, Search, ExternalLink, Star } from "lucide-react"

interface AffiliateResult {
  id: string
  name: string
  description: string
  commissionRate: string
  category: string
  youtubeChannel: string
  logo: string
  affiliateUrl: string
}

const sampleResults: AffiliateResult[] = [
  {
    id: "1",
    name: "ConvertKit",
    description: "Email marketing platform for creators and businesses",
    commissionRate: "30% recurring",
    category: "Email Marketing",
    youtubeChannel: "Pat Flynn",
    logo: "https://ext.same-assets.com/4229050697/2241331572.png",
    affiliateUrl: "#"
  },
  {
    id: "2",
    name: "Canva Pro",
    description: "Professional design tools and templates",
    commissionRate: "$36 per sale",
    category: "Design Tools",
    youtubeChannel: "Peter McKinnon",
    logo: "https://ext.same-assets.com/4229050697/3540374082.png",
    affiliateUrl: "#"
  },
  {
    id: "3",
    name: "Skillshare",
    description: "Online learning platform for creative skills",
    commissionRate: "$10 per referral",
    category: "Education",
    youtubeChannel: "Ali Abdaal",
    logo: "https://ext.same-assets.com/4229050697/583734825.png",
    affiliateUrl: "#"
  }
]

export default function YouTubeAffiliateFinder() {
  const [channelUrl, setChannelUrl] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<AffiliateResult[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const searchAffiliates = async () => {
    if (!channelUrl.trim()) return

    setIsSearching(true)
    setHasSearched(true)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Set sample results
    setResults(sampleResults)
    setIsSearching(false)
  }

  const extractChannelName = (url: string) => {
    try {
      const urlObj = new URL(url)
      const pathParts = urlObj.pathname.split('/')
      if (pathParts.includes('c') || pathParts.includes('channel')) {
        return pathParts[pathParts.length - 1].replace(/[_-]/g, ' ')
      }
      return 'this channel'
    } catch {
      return 'this channel'
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-24 pb-24">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="https://ext.same-assets.com/4229050697/1583010581.svg"
                    alt="AffiliList"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="text-xl font-bold">AffiliList</span>
                </Link>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Page Header */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Youtube className="h-8 w-8 text-red-600" />
                <h1 className="text-3xl font-bold text-gray-900">YouTube Affiliate Finder</h1>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover affiliate programs mentioned by your favorite YouTube creators. Enter a channel URL to find potential affiliate opportunities.
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white border rounded-xl p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Find Affiliate Programs</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="channel-url" className="block text-sm font-medium text-gray-700 mb-2">
                    YouTube Channel URL
                  </label>
                  <Input
                    id="channel-url"
                    type="url"
                    placeholder="https://youtube.com/@channelname or https://youtube.com/c/channelname"
                    value={channelUrl}
                    onChange={(e) => setChannelUrl(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button
                  onClick={searchAffiliates}
                  disabled={!channelUrl.trim() || isSearching}
                  className="w-full bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
                >
                  {isSearching ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Analyzing Channel...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Find Affiliate Programs
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Results */}
            {hasSearched && (
              <div className="space-y-6">
                {isSearching ? (
                  <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <div className="animate-pulse space-y-4">
                      <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-20 bg-gray-200 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : results.length > 0 ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Found {results.length} Affiliate Programs
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Affiliate programs mentioned by {extractChannelName(channelUrl)}
                      </p>
                    </div>

                    <div className="grid gap-6">
                      {results.map((result) => (
                        <div key={result.id} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <Image
                                src={result.logo}
                                alt={result.name}
                                width={60}
                                height={60}
                                className="w-15 h-15 rounded-lg object-cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="text-xl font-semibold text-gray-900">{result.name}</h4>
                                  <p className="text-gray-600 mt-1">{result.description}</p>
                                  <div className="flex items-center space-x-4 mt-3">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      {result.commissionRate}
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                      {result.category}
                                    </span>
                                  </div>
                                  <div className="flex items-center mt-3 text-sm text-gray-500">
                                    <Youtube className="h-4 w-4 mr-1 text-red-600" />
                                    Featured by {result.youtubeChannel}
                                  </div>
                                </div>
                                <Button asChild className="bg-black text-white hover:bg-gray-800">
                                  <Link href={result.affiliateUrl} className="flex items-center">
                                    Join Program
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
                    <Youtube className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">No Affiliate Programs Found</h3>
                    <p className="text-yellow-700">
                      We couldn't find any affiliate programs for this channel. Try searching for a different channel or check back later as we continuously update our database.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* How it Works */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Enter Channel URL</h3>
                  <p className="text-sm text-gray-600">
                    Paste the YouTube channel URL you want to analyze for affiliate opportunities
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Youtube className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. AI Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Our AI scans video descriptions and mentions to identify affiliate programs
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Get Results</h3>
                  <p className="text-sm text-gray-600">
                    Discover affiliate programs with commission rates and direct application links
                  </p>
                </div>
              </div>
            </div>

            {/* Popular Channels */}
            <div className="bg-white border rounded-xl p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Popular Channels to Explore</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Pat Flynn - Online Business",
                  "Ali Abdaal - Productivity",
                  "Peter McKinnon - Photography",
                  "Graham Stephan - Finance",
                  "Matt D'Avella - Minimalism",
                  "Thomas Frank - Study Tips"
                ].map((channel) => (
                  <button
                    key={channel}
                    onClick={() => setChannelUrl(`https://youtube.com/c/${channel.split(' - ')[0].replace(' ', '')}`)}
                    className="text-left p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{channel.split(' - ')[0]}</div>
                    <div className="text-sm text-gray-500">{channel.split(' - ')[1]}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="relative mx-auto max-w-7xl px-8 py-24">
          <div className="flex flex-col gap-16 md:flex-row md:justify-between">
            <div className="space-y-6 text-center md:text-left">
              <Link href="/" className="flex items-center justify-center md:justify-start space-x-2">
                <Image
                  src="https://ext.same-assets.com/4229050697/1583010581.svg"
                  alt="AffiliList"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-xl font-bold">AffiliList</span>
              </Link>
              <p className="mx-auto max-w-xs text-sm text-gray-600 md:mx-0">
                The #1 place to find the best affiliate programs.
              </p>
              <p className="text-sm leading-5 text-gray-500">
                © 2025 AffiliList. All Rights Reserved.
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-between gap-12 text-center md:mt-0 md:flex-row md:gap-24 md:text-left">
              <div>
                <h3 className="text-sm font-semibold text-gray-800">Product</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/submit" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      Submit
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:evan@affililist.com" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">Tools</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="https://illustration.app" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      illustration.app
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/youtube-affiliates" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      YouTube Affiliate Finder
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/affiliate-commission-calculator" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      Calculator
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
