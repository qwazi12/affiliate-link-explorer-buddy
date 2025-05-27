import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Star, Clock, DollarSign, Users } from "lucide-react"

export default function AiSvgGeneratorAffiliatePage() {
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
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src="https://ext.same-assets.com/4229050697/583734825.png"
                    alt="AI SVG Generator"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">AI SVG Generator</h1>
                      <p className="text-lg text-gray-600 mt-2">
                        Generate colorful vector graphics with ease using AI technology. Create professional SVG illustrations in seconds.
                      </p>
                    </div>
                    <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
                      <Link href="https://aisvggenerator.com/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
                <div className="text-2xl font-bold text-gray-900">40%</div>
                <div className="text-sm text-gray-600">Commission Rate</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">45 days</div>
                <div className="text-sm text-gray-600">Cookie Duration</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">300+</div>
                <div className="text-sm text-gray-600">Active Affiliates</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.7/5</div>
                <div className="text-sm text-gray-600">Affiliate Rating</div>
              </div>
            </div>

            {/* Program Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About AI SVG Generator</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>
                      AI SVG Generator is a cutting-edge tool that leverages artificial intelligence to create stunning
                      vector graphics instantly. Whether you're a designer, developer, or content creator, our platform
                      makes it easy to generate professional-quality SVG illustrations without any design experience.
                    </p>
                    <p>
                      The platform offers thousands of customizable templates, smart color palettes, and AI-powered
                      suggestions that help users create exactly what they envision. From logos and icons to complex
                      illustrations, AI SVG Generator is the go-to solution for scalable vector graphics.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Commission Structure</h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-6 w-6 text-orange-600 mr-2" />
                      <h3 className="text-lg font-semibold text-orange-800">40% One-Time Commission</h3>
                    </div>
                    <ul className="space-y-2 text-orange-700">
                      <li>• Earn 40% on all one-time purchases and credits</li>
                      <li>• 25% on subscription renewals</li>
                      <li>• Minimum payout: $25</li>
                      <li>• Payment via PayPal or Stripe</li>
                      <li>• Bi-weekly payouts on the 1st and 15th</li>
                      <li>• Detailed analytics dashboard</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Target Audience</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🎨 Designers</h4>
                      <p className="text-sm text-gray-600">Graphic designers looking for quick SVG creation and inspiration</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">💻 Developers</h4>
                      <p className="text-sm text-gray-600">Web developers needing scalable graphics for applications</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📱 App Creators</h4>
                      <p className="text-sm text-gray-600">Mobile app developers requiring lightweight vector assets</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🏢 Businesses</h4>
                      <p className="text-sm text-gray-600">Companies needing logos, icons, and marketing graphics</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Materials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Banner Collection</h4>
                      <p className="text-sm text-gray-600">High-converting banners in multiple sizes and formats</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Sample Graphics</h4>
                      <p className="text-sm text-gray-600">AI-generated SVG samples to showcase capabilities</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Video Tutorials</h4>
                      <p className="text-sm text-gray-600">Engaging demo videos showing the tool in action</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Case Studies</h4>
                      <p className="text-sm text-gray-600">Success stories from designers and businesses</p>
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
                      <span className="text-sm font-medium">AI Tools</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tracking:</span>
                      <span className="text-sm font-medium">First-party</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Attribution:</span>
                      <span className="text-sm font-medium">Last-click</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Minimum Payout:</span>
                      <span className="text-sm font-medium">$25</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-4">Quick Start</h3>
                  <ol className="space-y-2 text-sm text-yellow-800">
                    <li>1. Sign up for affiliate account</li>
                    <li>2. Get instant approval</li>
                    <li>3. Access marketing materials</li>
                    <li>4. Share your referral links</li>
                    <li>5. Track earnings in real-time</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">High Converting</h3>
                  <p className="text-sm text-blue-800">
                    AI SVG Generator has a proven conversion rate of 12% due to its
                    immediate value proposition and free trial offering.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Start Earning with AI SVG Generator</h2>
              <p className="text-orange-100 mb-6">
                Join our affiliate program and earn 40% commission on a product that sells itself
              </p>
              <Button asChild className="bg-white text-orange-600 hover:bg-gray-100">
                <Link href="https://aisvggenerator.com/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Join AI SVG Generator Affiliate Program
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
