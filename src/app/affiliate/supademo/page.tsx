import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Star, Clock, DollarSign, Users } from "lucide-react"

export default function SupademoAffiliatePage() {
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
            <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src="https://ext.same-assets.com/4229050697/2587017125.png"
                    alt="Supademo"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Supademo</h1>
                      <p className="text-lg text-gray-600 mt-2">
                        Create AI-powered interactive demos that convert 7x better. The demo creation tool of choice for Marketing, CS, Sales & HR/Ops teams.
                      </p>
                    </div>
                    <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                      <Link href="https://supademo.com/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
                <div className="text-2xl font-bold text-gray-900">25%</div>
                <div className="text-sm text-gray-600">Commission Rate</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">60 days</div>
                <div className="text-sm text-gray-600">Cookie Duration</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Active Affiliates</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Affiliate Rating</div>
              </div>
            </div>

            {/* Program Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Supademo</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>
                      Supademo is an AI-powered interactive demo creation platform that helps businesses showcase their products
                      in engaging, clickable demos. With Supademo, teams can create professional product demos in minutes,
                      driving 7x better conversion rates compared to traditional screenshots or videos.
                    </p>
                    <p>
                      The platform is trusted by Marketing, Customer Success, Sales, and HR/Ops teams at companies of all sizes.
                      Supademo's intuitive interface and AI capabilities make it easy to create stunning demos that capture
                      attention and drive action.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Commission Structure</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-blue-800">25% Recurring Commission</h3>
                    </div>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Earn 25% on all paid subscription plans</li>
                      <li>• Recurring monthly payments for active customers</li>
                      <li>• Minimum payout: $50</li>
                      <li>• Payment via Stripe or PayPal</li>
                      <li>• Monthly payouts on the 1st</li>
                      <li>• Real-time tracking dashboard</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Supademo Converts</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🚀 High Demand</h4>
                      <p className="text-sm text-gray-600">Growing market for interactive demos as businesses move digital-first</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">💡 Easy to Use</h4>
                      <p className="text-sm text-gray-600">AI-powered creation makes complex demos simple in minutes</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📊 Proven ROI</h4>
                      <p className="text-sm text-gray-600">7x better conversion rates make the value proposition clear</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🎯 Multiple Use Cases</h4>
                      <p className="text-sm text-gray-600">Appeals to Marketing, Sales, CS, and HR teams</p>
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
                      <span className="text-sm font-medium">Marketing Tools</span>
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
                      <span className="text-sm font-medium">$50</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Getting Started</h3>
                  <ol className="space-y-2 text-sm text-green-800">
                    <li>1. Apply to the affiliate program</li>
                    <li>2. Get approved (usually within 24 hours)</li>
                    <li>3. Access your affiliate dashboard</li>
                    <li>4. Get your unique referral links</li>
                    <li>5. Start promoting and earning!</li>
                  </ol>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Best Practices</h3>
                  <p className="text-sm text-purple-800">
                    Supademo works best when promoted to B2B SaaS companies, marketing teams,
                    and businesses looking to improve their product demos and conversion rates.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Promote Supademo?</h2>
              <p className="text-blue-100 mb-6">
                Join hundreds of affiliates earning recurring commissions by promoting the #1 interactive demo platform
              </p>
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="https://supademo.com/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Join Supademo Affiliate Program
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
