"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calculator, DollarSign } from "lucide-react"

export default function AffiliateCommissionCalculator() {
  const [saleAmount, setSaleAmount] = useState("")
  const [commissionRate, setCommissionRate] = useState("")
  const [numberOfSales, setNumberOfSales] = useState("")
  const [results, setResults] = useState<{
    commissionPerSale: number
    totalCommission: number
    totalSales: number
  } | null>(null)

  const calculateCommission = () => {
    const sale = parseFloat(saleAmount) || 0
    const rate = parseFloat(commissionRate) || 0
    const sales = parseInt(numberOfSales) || 0

    if (sale > 0 && rate > 0 && sales > 0) {
      const commissionPerSale = (sale * rate) / 100
      const totalCommission = commissionPerSale * sales
      const totalSales = sale * sales

      setResults({
        commissionPerSale,
        totalCommission,
        totalSales
      })
    } else {
      setResults(null)
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

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

            {/* Page Header */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Calculator className="h-8 w-8 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-900">Affiliate Commission Calculator</h1>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Calculate your potential earnings from affiliate programs. Enter your sale amount, commission rate, and number of sales to see your projected income.
              </p>
            </div>

            {/* Calculator */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="bg-white border rounded-xl p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Calculator Inputs</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="sale-amount" className="block text-sm font-medium text-gray-700 mb-2">
                      Sale Amount ($)
                    </label>
                    <Input
                      id="sale-amount"
                      type="number"
                      placeholder="100"
                      value={saleAmount}
                      onChange={(e) => setSaleAmount(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="commission-rate" className="block text-sm font-medium text-gray-700 mb-2">
                      Commission Rate (%)
                    </label>
                    <Input
                      id="commission-rate"
                      type="number"
                      placeholder="30"
                      value={commissionRate}
                      onChange={(e) => setCommissionRate(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="number-of-sales" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Sales
                    </label>
                    <Input
                      id="number-of-sales"
                      type="number"
                      placeholder="10"
                      value={numberOfSales}
                      onChange={(e) => setNumberOfSales(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <Button
                    onClick={calculateCommission}
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Calculate Commission
                  </Button>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Results</h2>
                {results ? (
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 border border-blue-200">
                      <div className="flex items-center mb-2">
                        <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900">Commission Per Sale</h3>
                      </div>
                      <p className="text-3xl font-bold text-green-600">
                        {formatCurrency(results.commissionPerSale)}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-blue-200">
                      <div className="flex items-center mb-2">
                        <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900">Total Commission</h3>
                      </div>
                      <p className="text-3xl font-bold text-blue-600">
                        {formatCurrency(results.totalCommission)}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-blue-200">
                      <div className="flex items-center mb-2">
                        <DollarSign className="h-5 w-5 text-gray-600 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900">Total Sales Volume</h3>
                      </div>
                      <p className="text-3xl font-bold text-gray-600">
                        {formatCurrency(results.totalSales)}
                      </p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Monthly Projection</h4>
                      <p className="text-sm text-yellow-700">
                        If you maintain this performance monthly, you could earn{" "}
                        <span className="font-bold">{formatCurrency(results.totalCommission * 12)}</span> per year
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Enter your values above and click "Calculate Commission" to see your projected earnings
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Maximizing Affiliate Earnings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Choose High-Converting Programs</h3>
                    <p className="text-sm text-gray-600">
                      Look for affiliate programs with proven conversion rates and strong brand recognition
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Focus on Higher Commission Rates</h3>
                    <p className="text-sm text-gray-600">
                      Prioritize programs offering 20%+ commissions, especially recurring revenue models
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Track Your Performance</h3>
                    <p className="text-sm text-gray-600">
                      Monitor which programs and strategies generate the most revenue for optimization
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Scale What Works</h3>
                    <p className="text-sm text-gray-600">
                      Double down on successful campaigns and programs that consistently convert
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
