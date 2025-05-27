"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NotificationSystem from "./components/NotificationSystem"

const affiliatePrograms = [
  {
    id: "comma",
    name: "Comma",
    description: "A minimal personal website builder to share your work and connect with others.",
    logo: "https://ext.same-assets.com/4229050697/2241331572.png",
    href: "/affiliate/comma",
    category: "Website Builder",
    tags: ["design", "portfolio", "website"]
  },
  {
    id: "qr-code-developer",
    name: "QR Code Developer",
    description: "Create and customize dynamic QR codes effortlessly.",
    logo: "https://ext.same-assets.com/4229050697/3540374082.png",
    href: "/affiliate/qr-code-developer-1",
    category: "Developer Tools",
    tags: ["qr", "code", "developer", "tools"]
  },
  {
    id: "ai-svg-generator",
    name: "AI SVG Generator",
    description: "Generate colorful vector graphics with ease.",
    logo: "https://ext.same-assets.com/4229050697/583734825.png",
    href: "/affiliate/ai-svg-generator",
    category: "AI Tools",
    tags: ["ai", "svg", "graphics", "design"]
  },
  {
    id: "supademo",
    name: "Supademo",
    description: "Create AI-powered interactive demos that convert 7x better. The demo creation tool of choice for Marketing, CS, Sales & HR/Ops teams.",
    logo: "https://ext.same-assets.com/4229050697/2587017125.png",
    href: "/affiliate/supademo",
    category: "Marketing Tools",
    tags: ["demo", "marketing", "ai", "sales"]
  },
  {
    id: "friends-of-normie",
    name: "Friends of Normie",
    description: "Cat products prioritizing safety and sustainability. Every order gives back to cat rescue!",
    logo: "https://ext.same-assets.com/4229050697/3011437179.webp",
    href: "/affiliate/friends-of-normie",
    category: "E-commerce",
    tags: ["pets", "cats", "sustainable", "rescue"]
  },
  {
    id: "octoparse",
    name: "Octoparse",
    description: "Data extraction tool for web scraping and automation.",
    logo: "https://ext.same-assets.com/4229050697/3615261970.png",
    href: "/affiliate/octoparse-1",
    category: "Developer Tools",
    tags: ["scraping", "data", "automation", "extraction"]
  },
  {
    id: "mobilo",
    name: "Mobilo",
    description: "Digital business card solution for seamless networking and lead generation.",
    logo: "https://ext.same-assets.com/4229050697/729648649.png",
    href: "/affiliate/mobilo-3",
    category: "Business Tools",
    tags: ["business", "networking", "cards", "digital"]
  },
  {
    id: "livewall",
    name: "LiveWall",
    description: "Share photos and videos instantly at events. Gather photos from guests with a QR code.",
    logo: "https://ext.same-assets.com/4229050697/386139409.png",
    href: "/affiliate/livewall",
    category: "Event Tools",
    tags: ["photos", "events", "sharing", "qr"]
  },
  {
    id: "seojuice",
    name: "SEOJuice",
    description: "Automated internal linking and on-page SEO optimizations.",
    logo: "https://ext.same-assets.com/4229050697/3418979313.png",
    href: "/affiliate/seojuice",
    category: "SEO Tools",
    tags: ["seo", "linking", "optimization", "automated"]
  },
  {
    id: "nutshell",
    name: "Nutshell",
    description: "Powerful, easy-to-use sales, marketing, and engagement software that tells teams what's next at each stage of the sales cycle",
    logo: "https://ext.same-assets.com/4229050697/2010103950.png",
    href: "/affiliate/nutshell-1",
    category: "Sales Tools",
    tags: ["sales", "crm", "marketing", "engagement"]
  },
  {
    id: "ricotta-trivia",
    name: "Ricotta Trivia",
    description: "Fun games and trivia for team building on Slack.",
    logo: "https://ext.same-assets.com/4229050697/1861389099.png",
    href: "/affiliate/ricotta-trivia",
    category: "Team Tools",
    tags: ["slack", "trivia", "team", "games"]
  },
  {
    id: "realmail",
    name: "RealMail",
    description: "Email Validation for SaaS",
    logo: "https://ext.same-assets.com/4229050697/3358436642.png",
    href: "/affiliate/realmail",
    category: "Email Tools",
    tags: ["email", "validation", "saas", "verification"]
  },
  {
    id: "complete-seo-manager",
    name: "Complete SEO Manager For Notion",
    description: "Manage and simplify SEO with an all-in-one system.",
    logo: "https://ext.same-assets.com/4229050697/59311992.png",
    href: "/affiliate/complete-seo-manager-for-notion",
    category: "SEO Tools",
    tags: ["seo", "notion", "management", "optimization"]
  },
  {
    id: "uwear",
    name: "Uwear",
    description: "AI-generated fashion models for clothing and free photos.",
    logo: "https://ext.same-assets.com/4229050697/551503213.png",
    href: "/affiliate/uwear",
    category: "AI Tools",
    tags: ["ai", "fashion", "models", "photos"]
  },
  {
    id: "croct",
    name: "Croct",
    description: "Dynamic CMS for personalized content management and experimentation.",
    logo: "https://ext.same-assets.com/4229050697/1985396051.png",
    href: "/affiliate/croct-1",
    category: "CMS",
    tags: ["cms", "content", "personalization", "dynamic"]
  },
  {
    id: "publishdrive",
    name: "PublishDrive",
    description: "Self-publishing platform for authors and publishers to distribute books globally.",
    logo: "https://ext.same-assets.com/4229050697/982991098.png",
    href: "/affiliate/publishdrive",
    category: "Publishing",
    tags: ["publishing", "books", "authors", "distribution"]
  },
  {
    id: "monday-com",
    name: "monday.com",
    description: "Your go-to work platform for managing projects and teams.",
    logo: "https://ext.same-assets.com/4229050697/1622486623.png",
    href: "/affiliate/monday.com",
    category: "Project Management",
    tags: ["project", "management", "teams", "collaboration"]
  },
  {
    id: "namecheap",
    name: "Namecheap",
    description: "Register cheap domain names starting from $0.99.",
    logo: "https://ext.same-assets.com/4229050697/709977960.png",
    href: "/affiliate/namecheap",
    category: "Domain & Hosting",
    tags: ["domain", "hosting", "cheap", "registration"]
  },
  {
    id: "flippa",
    name: "Flippa",
    description: "Marketplace for buying and selling online businesses, websites, and apps.",
    logo: "https://ext.same-assets.com/4229050697/3393950103.png",
    href: "/affiliate/flippa",
    category: "Marketplace",
    tags: ["marketplace", "business", "websites", "selling"]
  },
  {
    id: "bed-bath-beyond",
    name: "Bed Bath & Beyond",
    description: "One-stop shop for home essentials, furniture, and decor.",
    logo: "https://ext.same-assets.com/4229050697/1992034478.png",
    href: "/affiliate/bed-bath-and-beyond",
    category: "E-commerce",
    tags: ["home", "furniture", "decor", "shopping"]
  }
]

const categories = [...new Set(affiliatePrograms.map(p => p.category))].sort()

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  const filteredPrograms = useMemo(() => {
    return affiliatePrograms.filter(program => {
      const matchesSearch = searchQuery === "" ||
        program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "" || program.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedPrograms = filteredPrograms.slice(startIndex, startIndex + itemsPerPage)

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(selectedCategory === category ? "" : category)
    setCurrentPage(1)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto px-4 py-12 sm:py-24 pb-24">
          <div className="space-y-6">
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
                <div className="flex space-x-2">
                  <Button asChild className="rounded-full bg-black text-white hover:bg-gray-800">
                    <Link href="/submit" className="flex items-center">
                      <span className="mr-1">+</span>
                      Submit
                    </Link>
                  </Button>
                  <NotificationSystem />
                  <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <Link href="/subscribe">
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <p className="text-md text-gray-500">
                The #1 place to find the best affiliate programs.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search programs..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-10 h-12 rounded-2xl border focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="flex w-full items-center space-x-2 overflow-x-auto no-scrollbar mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-md px-3 text-xs h-8 border-dashed whitespace-nowrap"
                  onClick={() => setSelectedCategory("")}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className="rounded-md px-3 text-xs h-8 border-dashed whitespace-nowrap"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Results Count */}
              {(searchQuery || selectedCategory) && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    Found {filteredPrograms.length} programs
                    {searchQuery && ` for "${searchQuery}"`}
                    {selectedCategory && ` in ${selectedCategory}`}
                  </p>
                </div>
              )}

              {/* Affiliate Programs */}
              <div className="space-y-4 mt-4">
                {displayedPrograms.length > 0 ? (
                  displayedPrograms.map((program) => (
                    <Link
                      key={program.id}
                      href={program.href}
                      className="relative flex items-center p-3 bg-gray-50 hover:shadow-lg hover:bg-gray-100 transition duration-300 rounded-lg"
                    >
                      <div className="mr-3 flex-shrink-0">
                        <Image
                          src={program.logo}
                          alt={program.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-ellipsis overflow-hidden">
                              {program.name}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {program.description}
                            </p>
                          </div>
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
                            {program.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No programs found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search terms or category filter
                    </p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-start mt-12">
                  <ul className="flex flex-row items-center gap-1">
                    {currentPage > 1 && (
                      <li>
                        <Button
                          variant="ghost"
                          className="h-9 px-4 py-2"
                          onClick={() => setCurrentPage(currentPage - 1)}
                        >
                          ←
                        </Button>
                      </li>
                    )}
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1
                      return (
                        <li key={pageNum}>
                          <Button
                            variant={currentPage === pageNum ? "outline" : "ghost"}
                            size="icon"
                            className="h-9 w-9"
                            onClick={() => setCurrentPage(pageNum)}
                          >
                            {pageNum}
                          </Button>
                        </li>
                      )
                    })}
                    {currentPage < totalPages && (
                      <li>
                        <Button
                          variant="ghost"
                          className="h-9 px-4 py-2"
                          onClick={() => setCurrentPage(currentPage + 1)}
                        >
                          →
                        </Button>
                      </li>
                    )}
                  </ul>
                </nav>
              )}
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
                    <Link href="/analytics" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      Analytics Dashboard
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
                <h3 className="text-sm font-semibold text-gray-800">Community</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/community" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      Forum
                    </Link>
                  </li>
                  <li>
                    <Link href="/login" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin" className="text-sm text-gray-500 transition-colors hover:text-gray-700">
                      Admin
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
