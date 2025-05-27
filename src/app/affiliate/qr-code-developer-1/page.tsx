import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Star, Clock, DollarSign, Users } from "lucide-react"

export default function QrCodeDeveloperAffiliatePage() {
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
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src="https://ext.same-assets.com/4229050697/3540374082.png"
                    alt="QR Code Developer"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">QR Code Developer</h1>
                      <p className="text-lg text-gray-600 mt-2">
                        Create and customize dynamic QR codes effortlessly with advanced tracking and analytics.
                      </p>
                    </div>
                    <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
                      <Link href="https://qrcodedeveloper.com/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
                <div className="text-2xl font-bold text-gray-900">45%</div>
                <div className="text-sm text-gray-600">Commission Rate</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">30 days</div>
                <div className="text-sm text-gray-600">Cookie Duration</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">750+</div>
                <div className="text-sm text-gray-600">Active Affiliates</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.6/5</div>
                <div className="text-sm text-gray-600">Affiliate Rating</div>
              </div>
            </div>

            {/* Program Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About QR Code Developer</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>
                      QR Code Developer is a comprehensive platform for creating, customizing, and tracking QR codes for businesses and developers.
                      Our advanced QR code generator offers dynamic codes with real-time editing capabilities, detailed analytics, and enterprise-grade security.
                    </p>
                    <p>
                      With features like bulk generation, custom branding, password protection, and expiration dates, QR Code Developer
                      serves businesses of all sizes looking to integrate QR technology into their marketing and operational workflows.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Commission Structure</h2>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
                      <h3 className="text-lg font-semibold text-purple-800">45% One-Time Commission</h3>
                    </div>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Earn 45% on all subscription plans</li>
                      <li>• Additional 20% on renewals</li>
                      <li>• Minimum payout: $100</li>
                      <li>• Payment via PayPal or direct deposit</li>
                      <li>• Monthly payouts on the 15th</li>
                      <li>• Real-time dashboard tracking</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📊 Advanced Analytics</h4>
                      <p className="text-sm text-gray-600">Detailed scan tracking with location, device, and time data</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🎨 Custom Branding</h4>
                      <p className="text-sm text-gray-600">Add logos, colors, and custom designs to QR codes</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🔄 Dynamic Codes</h4>
                      <p className="text-sm text-gray-600">Update destinations without reprinting codes</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🔒 Security Features</h4>
                      <p className="text-sm text-gray-600">Password protection and expiration dates</p>
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
                      <span className="text-sm font-medium">Developer Tools</span>
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
                      <span className="text-sm font-medium">$100</span>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-4">Target Audience</h3>
                  <ul className="space-y-2 text-sm text-indigo-800">
                    <li>• Digital marketers</li>
                    <li>• Web developers</li>
                    <li>• E-commerce businesses</li>
                    <li>• Event organizers</li>
                    <li>• Restaurant owners</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">High Converting</h3>
                  <p className="text-sm text-green-800">
                    QR Code Developer has a proven 15% conversion rate with a
                    14-day free trial that hooks users effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Start Earning with QR Code Developer</h2>
              <p className="text-purple-100 mb-6">
                Join our affiliate program and earn 45% commission on a tool businesses actually need
              </p>
              <Button asChild className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="https://qrcodedeveloper.com/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Join QR Code Developer Affiliate Program
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
