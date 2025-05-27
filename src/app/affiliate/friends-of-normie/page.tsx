import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Star, Clock, DollarSign, Users, Heart } from "lucide-react"

export default function FriendsOfNormieAffiliatePage() {
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
            <div className="bg-gradient-to-br from-pink-50 to-orange-100 rounded-xl p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Image
                    src="https://ext.same-assets.com/4229050697/3011437179.webp"
                    alt="Friends of Normie"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Friends of Normie</h1>
                      <p className="text-lg text-gray-600 mt-2">
                        Cat products prioritizing safety and sustainability. Every order gives back to cat rescue!
                      </p>
                    </div>
                    <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
                      <Link href="https://friendsofnormie.com/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
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
                <div className="text-2xl font-bold text-gray-900">20%</div>
                <div className="text-sm text-gray-600">Commission Rate</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">60 days</div>
                <div className="text-sm text-gray-600">Cookie Duration</div>
              </div>
              <div className="bg-white border rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">420+</div>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Friends of Normie</h2>
                  <div className="prose prose-gray max-w-none">
                    <p>
                      Friends of Normie is a mission-driven pet company dedicated to creating safe, sustainable, and innovative products for cats.
                      Founded by cat lovers for cat lovers, every product is carefully designed with feline safety and environmental responsibility in mind.
                    </p>
                    <p>
                      What makes Friends of Normie special is their commitment to giving back - a portion of every sale goes directly to cat rescue organizations.
                      Their product line includes eco-friendly toys, premium cat furniture, organic treats, and innovative feeding solutions.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Commission Structure</h2>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <DollarSign className="h-6 w-6 text-orange-600 mr-2" />
                      <h3 className="text-lg font-semibold text-orange-800">20% Commission + Charity Bonus</h3>
                    </div>
                    <ul className="space-y-2 text-orange-700">
                      <li>• Earn 20% on all product sales</li>
                      <li>• Extra 5% bonus during rescue awareness campaigns</li>
                      <li>• Minimum payout: $50</li>
                      <li>• Payment via PayPal or check</li>
                      <li>• Monthly payouts on the 1st</li>
                      <li>• Special seasonal promotions with higher rates</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Categories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🧸 Safe Toys</h4>
                      <p className="text-sm text-gray-600">Non-toxic, durable toys tested for feline safety</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🏠 Premium Furniture</h4>
                      <p className="text-sm text-gray-600">Stylish cat trees and furniture made from sustainable materials</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🥗 Organic Treats</h4>
                      <p className="text-sm text-gray-600">Healthy, organic treats with transparent ingredients</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🍽️ Feeding Solutions</h4>
                      <p className="text-sm text-gray-600">Innovative bowls and feeding accessories</p>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-pink-600 mr-2" />
                    <h3 className="text-lg font-semibold text-pink-800">Giving Back Mission</h3>
                  </div>
                  <p className="text-pink-700 mb-3">
                    Every purchase helps rescue cats find loving homes. Friends of Normie has donated over $50,000 to cat rescue organizations nationwide.
                  </p>
                  <ul className="space-y-1 text-pink-700 text-sm">
                    <li>• 10% of profits donated to cat rescues</li>
                    <li>• Partnership with 25+ rescue organizations</li>
                    <li>• Over 500 cats helped find homes</li>
                  </ul>
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
                      <span className="text-sm font-medium">E-commerce</span>
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
                      <span className="text-sm text-gray-600">Average Order:</span>
                      <span className="text-sm font-medium">$65</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Perfect For</h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Pet bloggers and influencers</li>
                    <li>• Cat rescue advocates</li>
                    <li>• Sustainable living content creators</li>
                    <li>• Animal welfare communities</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">High Loyalty</h3>
                  <p className="text-sm text-yellow-800">
                    95% customer satisfaction rate with strong repeat purchases.
                    Cat parents love the quality and mission-driven approach.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Help Cats While Earning Commissions</h2>
              <p className="text-orange-100 mb-6">
                Join a mission-driven affiliate program where every sale helps rescue cats find loving homes
              </p>
              <Button asChild className="bg-white text-orange-600 hover:bg-gray-100">
                <Link href="https://friendsofnormie.com/affiliate" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Join Friends of Normie Affiliate Program
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
