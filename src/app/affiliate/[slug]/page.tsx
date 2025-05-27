import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Star, Clock, DollarSign, Users } from "lucide-react"

// This would typically come from a database or API
const affiliatePrograms: Record<string, any> = {
  "octoparse-1": {
    name: "Octoparse",
    description: "Data extraction tool for web scraping and automation.",
    logo: "https://ext.same-assets.com/4229050697/3615261970.png",
    category: "Developer Tools",
    commissionRate: "30%",
    cookieDuration: "45 days",
    affiliates: "350+",
    rating: "4.5",
    color: "blue"
  },
  "mobilo-3": {
    name: "Mobilo",
    description: "Digital business card solution for seamless networking and lead generation.",
    logo: "https://ext.same-assets.com/4229050697/729648649.png",
    category: "Business Tools",
    commissionRate: "$15",
    cookieDuration: "30 days",
    affiliates: "200+",
    rating: "4.6",
    color: "green"
  },
  "livewall": {
    name: "LiveWall",
    description: "Share photos and videos instantly at events. Gather photos from guests with a QR code.",
    logo: "https://ext.same-assets.com/4229050697/386139409.png",
    category: "Event Tools",
    commissionRate: "25%",
    cookieDuration: "60 days",
    affiliates: "150+",
    rating: "4.4",
    color: "purple"
  },
  "seojuice": {
    name: "SEOJuice",
    description: "Automated internal linking and on-page SEO optimizations.",
    logo: "https://ext.same-assets.com/4229050697/3418979313.png",
    category: "SEO Tools",
    commissionRate: "40%",
    cookieDuration: "90 days",
    affiliates: "280+",
    rating: "4.7",
    color: "indigo"
  },
  "nutshell-1": {
    name: "Nutshell",
    description: "Powerful, easy-to-use sales, marketing, and engagement software that tells teams what's next at each stage of the sales cycle",
    logo: "https://ext.same-assets.com/4229050697/2010103950.png",
    category: "Sales Tools",
    commissionRate: "35%",
    cookieDuration: "120 days",
    affiliates: "450+",
    rating: "4.8",
    color: "orange"
  },
  "ricotta-trivia": {
    name: "Ricotta Trivia",
    description: "Fun games and trivia for team building on Slack.",
    logo: "https://ext.same-assets.com/4229050697/1861389099.png",
    category: "Team Tools",
    commissionRate: "$20",
    cookieDuration: "30 days",
    affiliates: "80+",
    rating: "4.3",
    color: "pink"
  },
  "realmail": {
    name: "RealMail",
    description: "Email Validation for SaaS",
    logo: "https://ext.same-assets.com/4229050697/3358436642.png",
    category: "Email Tools",
    commissionRate: "50%",
    cookieDuration: "60 days",
    affiliates: "120+",
    rating: "4.5",
    color: "blue"
  },
  "complete-seo-manager-for-notion": {
    name: "Complete SEO Manager For Notion",
    description: "Manage and simplify SEO with an all-in-one system.",
    logo: "https://ext.same-assets.com/4229050697/59311992.png",
    category: "SEO Tools",
    commissionRate: "45%",
    cookieDuration: "90 days",
    affiliates: "90+",
    rating: "4.6",
    color: "green"
  },
  "uwear": {
    name: "Uwear",
    description: "AI-generated fashion models for clothing and free photos.",
    logo: "https://ext.same-assets.com/4229050697/551503213.png",
    category: "AI Tools",
    commissionRate: "30%",
    cookieDuration: "45 days",
    affiliates: "160+",
    rating: "4.4",
    color: "purple"
  },
  "croct-1": {
    name: "Croct",
    description: "Dynamic CMS for personalized content management and experimentation.",
    logo: "https://ext.same-assets.com/4229050697/1985396051.png",
    category: "CMS",
    commissionRate: "35%",
    cookieDuration: "60 days",
    affiliates: "110+",
    rating: "4.7",
    color: "indigo"
  },
  "publishdrive": {
    name: "PublishDrive",
    description: "Self-publishing platform for authors and publishers to distribute books globally.",
    logo: "https://ext.same-assets.com/4229050697/982991098.png",
    category: "Publishing",
    commissionRate: "25%",
    cookieDuration: "90 days",
    affiliates: "200+",
    rating: "4.5",
    color: "blue"
  },
  "flippa": {
    name: "Flippa",
    description: "Marketplace for buying and selling online businesses, websites, and apps.",
    logo: "https://ext.same-assets.com/4229050697/3393950103.png",
    category: "Marketplace",
    commissionRate: "15%",
    cookieDuration: "30 days",
    affiliates: "800+",
    rating: "4.3",
    color: "orange"
  },
  "bed-bath-and-beyond": {
    name: "Bed Bath & Beyond",
    description: "One-stop shop for home essentials, furniture, and decor.",
    logo: "https://ext.same-assets.com/4229050697/1992034478.png",
    category: "E-commerce",
    commissionRate: "8%",
    cookieDuration: "24 hours",
    affiliates: "1500+",
    rating: "4.1",
    color: "red"
  }
}

const colorSchemes = {
  blue: {
    gradient: "from-blue-50 to-cyan-100",
    button: "bg-blue-600 hover:bg-blue-700",
    cta: "from-blue-600 to-cyan-600"
  },
  green: {
    gradient: "from-green-50 to-emerald-100",
    button: "bg-green-600 hover:bg-green-700",
    cta: "from-green-600 to-emerald-600"
  },
  purple: {
    gradient: "from-purple-50 to-violet-100",
    button: "bg-purple-600 hover:bg-purple-700",
    cta: "from-purple-600 to-violet-600"
  },
  indigo: {
    gradient: "from-indigo-50 to-blue-100",
    button: "bg-indigo-600 hover:bg-indigo-700",
    cta: "from-indigo-600 to-blue-600"
  },
  orange: {
    gradient: "from-orange-50 to-amber-100",
    button: "bg-orange-600 hover:bg-orange-700",
    cta: "from-orange-600 to-amber-600"
  },
  pink: {
    gradient: "from-pink-50 to-rose-100",
    button: "bg-pink-600 hover:bg-pink-700",
    cta: "from-pink-600 to-rose-600"
  },
  red: {
    gradient: "from-red-50 to-orange-100",
    button: "bg-red-600 hover:bg-red-700",
    cta: "from-red-600 to-orange-600"
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function AffiliateDetailPage({ params }: PageProps) {
  const { slug } = await params
  const program = affiliatePrograms[slug]

  if (!program) {
    notFound()
  }

  const colors = colorSchemes[program.color as keyof typeof colorSchemes] || colorSchemes.blue

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

            {/* Program Header */}
            <div className={`bg-gradient-to-br ${colors.gradient} rounded-xl p-8`}>
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src={program.logo}
                    alt={program.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">{program.name}</h1>
                      <p className="text-lg text-gray-600 mt-2">
                        {program.description}
                      </p>
                    </div>
                    <Button asChild className={`${colors.button} text-white`}>
                      <Link href={`https://${program.name.toLowerCase().replace(/\s+/g, '')}.com/affiliate`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Join Program
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white border rounded-lg p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{program.commissionRate}</div>
                <div className="text-sm text-gray-600">Commission Rate</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{program.cookieDuration}</div>
                <div className="text-sm text-gray-600">Cookie Duration</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{program.affiliates}</div>
                <div className="text-sm text-gray-600">Active Affiliates</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{program.rating}/5</div>
                <div className="text-sm text-gray-600">Affiliate Rating</div>
              </div>
            </div>

            {/* Program Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {program.name}</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>
                      {program.name} is a leading platform in the {program.category.toLowerCase()} space, offering innovative solutions
                      for businesses and individuals. With a focus on user experience and cutting-edge technology,
                      {program.name} has established itself as a trusted choice in the industry.
                    </p>
                    <p>
                      The platform serves thousands of customers worldwide, providing reliable and scalable solutions
                      that help users achieve their goals. Their affiliate program offers attractive commissions
                      and comprehensive support for partners.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose {program.name}?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🚀 Proven Platform</h4>
                      <p className="text-sm text-gray-600">Trusted by thousands of customers worldwide</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">💰 Competitive Rates</h4>
                      <p className="text-sm text-gray-600">Attractive commission structure for affiliates</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📈 Growing Market</h4>
                      <p className="text-sm text-gray-600">Expanding presence in {program.category.toLowerCase()}</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🤝 Great Support</h4>
                      <p className="text-sm text-gray-600">Dedicated affiliate support team</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Network:</span>
                      <span className="text-sm font-medium">Direct</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Category:</span>
                      <span className="text-sm font-medium">{program.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tracking:</span>
                      <span className="text-sm font-medium">First-party</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Attribution:</span>
                      <span className="text-sm font-medium">Last-click</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Getting Started</h3>
                  <ol className="space-y-2 text-sm text-blue-800">
                    <li>1. Click "Join Program" above</li>
                    <li>2. Complete the application</li>
                    <li>3. Get approved within 24-48 hours</li>
                    <li>4. Access your affiliate dashboard</li>
                    <li>5. Start promoting and earning!</li>
                  </ol>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">High Converting</h3>
                  <p className="text-sm text-green-800">
                    {program.name} has strong conversion rates due to its excellent
                    product quality and trusted brand reputation.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className={`bg-gradient-to-r ${colors.cta} rounded-xl p-8 text-center`}>
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Earning?</h2>
              <p className="text-white/90 mb-6">
                Join the {program.name} affiliate program and start earning commissions today
              </p>
              <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href={`https://${program.name.toLowerCase().replace(/\s+/g, '')}.com/affiliate`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Join {program.name} Affiliate Program
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
