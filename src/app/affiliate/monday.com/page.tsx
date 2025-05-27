import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Star, Clock, DollarSign, Users } from "lucide-react"

export default function MondayComAffiliatePage() {
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
                    src="https://ext.same-assets.com/4229050697/1622486623.png"
                    alt="monday.com"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">monday.com</h1>
                      <p className="text-lg text-gray-600 mt-2">
                        Your go-to work platform for managing projects and teams. Trusted by 180,000+ customers worldwide.
                      </p>
                    </div>
                    <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                      <Link href="https://monday.com/p/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
                <div className="text-2xl font-bold text-gray-900">30%</div>
                <div className="text-sm text-gray-600">Commission Rate</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">120 days</div>
                <div className="text-sm text-gray-600">Cookie Duration</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">1,200+</div>
                <div className="text-sm text-gray-600">Active Affiliates</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                <div className="text-sm text-gray-600">Affiliate Rating</div>
              </div>
            </div>

            {/* Program Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About monday.com</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>
                      monday.com is a leading work operating system that powers teams to run projects and workflows with confidence.
                      It's a simple, but intuitive platform that enables people to manage work, meet deadlines, and build the culture they want.
                    </p>
                    <p>
                      With over 180,000 customers and millions of users globally, monday.com serves teams of all sizes across industries.
                      From marketing campaigns to product development, IT requests to HR onboarding, monday.com helps teams manage any workflow.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Commission Structure</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-blue-800">30% Recurring Commission</h3>
                    </div>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Earn 30% recurring commission for the first 12 months</li>
                      <li>• Up to $2,400 per customer annually</li>
                      <li>• Minimum payout: $100</li>
                      <li>• Payment via PayPal or bank transfer</li>
                      <li>• Monthly payouts</li>
                      <li>• Dedicated affiliate support team</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why monday.com Converts</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🚀 Market Leader</h4>
                      <p className="text-sm text-gray-600">Trusted by 180,000+ customers including Canva, Coca-Cola, and Universal</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">💎 Free Trial</h4>
                      <p className="text-sm text-gray-600">14-day free trial with no credit card required</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📈 High AOV</h4>
                      <p className="text-sm text-gray-600">Average annual contract value of $800+ per customer</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🔄 Low Churn</h4>
                      <p className="text-sm text-gray-600">Industry-leading retention rates with sticky product</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Creative Assets</h4>
                      <p className="text-sm text-gray-600">Banners, logos, product screenshots, and videos</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Case Studies</h4>
                      <p className="text-sm text-gray-600">Success stories from top brands and enterprises</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Product Demos</h4>
                      <p className="text-sm text-gray-600">Interactive demos and webinar recordings</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Email Templates</h4>
                      <p className="text-sm text-gray-600">Proven email sequences and newsletters</p>
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
                      <span className="text-sm font-medium">Impact</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Category:</span>
                      <span className="text-sm font-medium">Project Management</span>
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
                      <span className="text-sm text-gray-600">Min Payout:</span>
                      <span className="text-sm font-medium">$100</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">Best for Promoting</h3>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li>• B2B software reviewers</li>
                    <li>• Productivity content creators</li>
                    <li>• Business consultants</li>
                    <li>• Project management communities</li>
                    <li>• Remote work advocates</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Top Performer</h3>
                  <p className="text-sm text-green-800">
                    monday.com consistently ranks as one of the highest-earning
                    SaaS affiliate programs with excellent conversion rates.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Start Earning Big with monday.com</h2>
              <p className="text-blue-100 mb-6">
                Join thousands of affiliates earning up to $2,400 per customer with monday.com
              </p>
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="https://monday.com/p/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Join monday.com Affiliate Program
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
