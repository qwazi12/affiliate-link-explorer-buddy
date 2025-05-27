"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Mail, Check, Star, Users, TrendingUp } from "lucide-react"

export default function SubscribePage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubscribed(true)
    setIsLoading(false)
  }

  if (isSubscribed) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="max-w-2xl mx-auto px-4 py-12 sm:py-24 pb-24">
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

              {/* Success Message */}
              <div className="text-center space-y-6">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">You're All Set!</h1>
                  <p className="text-lg text-gray-600">
                    Welcome to the AffiliList community! We've sent a confirmation email to <strong>{email}</strong>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What to expect:</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      Weekly newsletter with the best new affiliate programs
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      Exclusive affiliate tips and strategies
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      Early access to high-converting programs
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      Commission rate updates and bonuses
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                    <Link href="/">
                      Explore Affiliate Programs
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/tools/affiliate-commission-calculator">
                      Try Our Commission Calculator
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto px-4 py-12 sm:py-24 pb-24">
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

            {/* Main Content */}
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <Mail className="h-10 w-10 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Stay Updated with the Best Affiliate Programs
                </h1>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                  Get weekly insights, new program alerts, and exclusive affiliate marketing tips delivered to your inbox.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border rounded-lg p-6 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5,000+</div>
                  <div className="text-sm text-gray-600">Subscribers</div>
                </div>
                <div className="bg-white border rounded-lg p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">New Programs Weekly</div>
                </div>
                <div className="bg-white border rounded-lg p-6 text-center">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                  <div className="text-sm text-gray-600">Newsletter Rating</div>
                </div>
              </div>

              {/* Subscription Form */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Join Our Newsletter</h2>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 text-center"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={!email || isLoading}
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 h-12"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Subscribe for Free
                      </>
                    )}
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>

              {/* What You'll Get */}
              <div className="bg-white border rounded-xl p-8 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">What You'll Receive</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mr-4">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">New Program Alerts</h4>
                        <p className="text-sm text-gray-600">Be the first to know about high-converting affiliate programs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-2 mr-4">
                        <Star className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Exclusive Tips</h4>
                        <p className="text-sm text-gray-600">Proven strategies from successful affiliate marketers</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-2 mr-4">
                        <Users className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Community Access</h4>
                        <p className="text-sm text-gray-600">Connect with other affiliate marketers and share insights</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-yellow-100 rounded-full p-2 mr-4">
                        <Mail className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Weekly Updates</h4>
                        <p className="text-sm text-gray-600">Curated list of the best opportunities every Tuesday</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What Subscribers Say</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        S
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-gray-900">Sarah Chen</div>
                        <div className="text-sm text-gray-600">Affiliate Marketer</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      "AffiliList's newsletter has been game-changing for my business. I've discovered programs
                      that increased my monthly earnings by 40%!"
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                        M
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                        <div className="text-sm text-gray-600">Content Creator</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      "The tips and program recommendations are spot-on. I love how they filter out the low-quality
                      programs and focus on what actually converts."
                    </p>
                  </div>
                </div>
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
