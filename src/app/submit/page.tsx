import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"

export default function SubmitPage() {
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
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-md text-gray-500">
                Submit your affiliate program to AffiliList
              </p>
            </div>

            {/* Submit Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="program-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Program Name *
                  </label>
                  <Input
                    id="program-name"
                    type="text"
                    placeholder="Enter the name of your affiliate program"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="program-url" className="block text-sm font-medium text-gray-700 mb-2">
                    Program URL *
                  </label>
                  <Input
                    id="program-url"
                    type="url"
                    placeholder="https://yoursite.com/affiliates"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="program-description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <Textarea
                    id="program-description"
                    placeholder="Describe what your affiliate program offers and what makes it special"
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="commission-rate" className="block text-sm font-medium text-gray-700 mb-2">
                    Commission Rate
                  </label>
                  <Input
                    id="commission-rate"
                    type="text"
                    placeholder="e.g., 30% recurring, $50 per sale, etc."
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="program-category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <Input
                    id="program-category"
                    type="text"
                    placeholder="e.g., SaaS, E-commerce, Marketing Tools, etc."
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="logo-url" className="block text-sm font-medium text-gray-700 mb-2">
                    Logo URL
                  </label>
                  <Input
                    id="logo-url"
                    type="url"
                    placeholder="https://yoursite.com/logo.png"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Provide a direct link to your logo (preferably square, 200x200px or higher)
                  </p>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    id="additional-info"
                    placeholder="Any additional details about your affiliate program (cookie duration, minimum payout, payment methods, etc.)"
                    className="w-full min-h-[100px]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Submit Affiliate Program
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  We'll review your submission and get back to you within 2-3 business days.
                </p>
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
