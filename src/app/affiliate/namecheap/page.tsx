import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Star, Clock, DollarSign, Users } from "lucide-react"

export default function NamecheapAffiliatePage() {
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
            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src="https://ext.same-assets.com/4229050697/709977960.png"
                    alt="Namecheap"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Namecheap</h1>
                      <p className="text-lg text-gray-600 mt-2">
                        Register cheap domain names starting from $0.99. Trusted by millions of customers worldwide.
                      </p>
                    </div>
                    <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
                      <Link href="https://namecheap.com/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
                <div className="text-2xl font-bold text-gray-900">$50+</div>
                <div className="text-sm text-gray-600">Per Hosting Sale</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">60 days</div>
                <div className="text-sm text-gray-600">Cookie Duration</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">15,000+</div>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Namecheap</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>
                      Namecheap is one of the world's leading domain registrars and web hosting companies, serving over 18 million customers globally.
                      Since 2000, they've been committed to providing affordable, reliable domain registration and hosting services.
                    </p>
                    <p>
                      With over 13 million domains under management and a full suite of hosting solutions, Namecheap makes it easy for individuals
                      and businesses to establish their online presence. Their services include shared hosting, VPS, dedicated servers, and SSL certificates.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Commission Structure</h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-6 w-6 text-orange-600 mr-2" />
                      <h3 className="text-lg font-semibold text-orange-800">Tiered Commission System</h3>
                    </div>
                    <div className="space-y-3 text-orange-700">
                      <div className="bg-white rounded p-3">
                        <div className="font-semibold">Domain Registrations</div>
                        <div className="text-sm">Up to $1.50 per domain (.com, .net, .org, etc.)</div>
                      </div>
                      <div className="bg-white rounded p-3">
                        <div className="font-semibold">Hosting Services</div>
                        <div className="text-sm">$50-125 per hosting package sold</div>
                      </div>
                      <div className="bg-white rounded p-3">
                        <div className="font-semibold">SSL Certificates</div>
                        <div className="text-sm">$5-50 per SSL certificate</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🌐 Domain Registration</h4>
                      <p className="text-sm text-gray-600">Over 400 TLDs available starting from $0.99</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🏠 Web Hosting</h4>
                      <p className="text-sm text-gray-600">Shared, VPS, and dedicated hosting solutions</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🔒 SSL Certificates</h4>
                      <p className="text-sm text-gray-600">Various SSL types for website security</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📧 Email Hosting</h4>
                      <p className="text-sm text-gray-600">Professional email solutions for businesses</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Namecheap Converts</h2>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Competitive Pricing</div>
                        <div className="text-sm text-gray-600">Often beats competitors on price for domains and hosting</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Trusted Brand</div>
                        <div className="text-sm text-gray-600">20+ years in business with excellent reputation</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">24/7 Support</div>
                        <div className="text-sm text-gray-600">Award-winning customer support team</div>
                      </div>
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
                      <span className="text-sm font-medium">Domain & Hosting</span>
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

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Perfect Audience</h3>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• Web developers and designers</li>
                    <li>• Bloggers and content creators</li>
                    <li>• Small business consultants</li>
                    <li>• Tech reviewers and YouTubers</li>
                    <li>• Startup communities</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">High Volume</h3>
                  <p className="text-sm text-yellow-800">
                    Namecheap processes millions of domain registrations annually,
                    providing consistent earning opportunities for affiliates.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Marketing Tools</h3>
                  <ul className="space-y-1 text-sm text-red-800">
                    <li>• Banner ads and text links</li>
                    <li>• Domain search widgets</li>
                    <li>• Coupon codes for promotions</li>
                    <li>• API for custom integrations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Start Earning with Namecheap</h2>
              <p className="text-orange-100 mb-6">
                Join 15,000+ affiliates earning commissions from the world's most trusted domain registrar
              </p>
              <Button asChild className="bg-white text-orange-600 hover:bg-gray-100">
                <Link href="https://namecheap.com/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Join Namecheap Affiliate Program
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
