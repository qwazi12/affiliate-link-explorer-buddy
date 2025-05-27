"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Filter, X } from "lucide-react"

interface AdvancedFiltersProps {
  onFiltersChange: (filters: FilterState) => void
  currentFilters: FilterState
}

export interface FilterState {
  commissionMin: number
  commissionMax: number
  cookieDuration: string[]
  networks: string[]
  paymentMethods: string[]
  minPayout: number
  maxPayout: number
}

const defaultFilters: FilterState = {
  commissionMin: 0,
  commissionMax: 100,
  cookieDuration: [],
  networks: [],
  paymentMethods: [],
  minPayout: 0,
  maxPayout: 1000
}

const cookieDurationOptions = [
  { value: "30", label: "30 days" },
  { value: "60", label: "60 days" },
  { value: "90", label: "90 days" },
  { value: "120", label: "120+ days" },
  { value: "lifetime", label: "Lifetime" }
]

const networkOptions = [
  { value: "direct", label: "Direct" },
  { value: "shareasale", label: "ShareASale" },
  { value: "cj", label: "Commission Junction" },
  { value: "impact", label: "Impact" },
  { value: "partnerstack", label: "PartnerStack" }
]

const paymentMethodOptions = [
  { value: "paypal", label: "PayPal" },
  { value: "stripe", label: "Stripe" },
  { value: "bank", label: "Bank Transfer" },
  { value: "check", label: "Check" },
  { value: "crypto", label: "Cryptocurrency" }
]

export default function AdvancedFilters({ onFiltersChange, currentFilters }: AdvancedFiltersProps) {
  const [filters, setFilters] = useState<FilterState>(currentFilters)
  const [isOpen, setIsOpen] = useState(false)

  const handleCommissionChange = (values: number[]) => {
    const newFilters = { ...filters, commissionMin: values[0], commissionMax: values[1] }
    setFilters(newFilters)
  }

  const handlePayoutChange = (values: number[]) => {
    const newFilters = { ...filters, minPayout: values[0], maxPayout: values[1] }
    setFilters(newFilters)
  }

  const handleArrayToggle = (key: keyof FilterState, value: string) => {
    const currentArray = filters[key] as string[]
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value]

    const newFilters = { ...filters, [key]: newArray }
    setFilters(newFilters)
  }

  const applyFilters = () => {
    onFiltersChange(filters)
    setIsOpen(false)
  }

  const resetFilters = () => {
    setFilters(defaultFilters)
    onFiltersChange(defaultFilters)
  }

  const hasActiveFilters = () => {
    return (
      filters.commissionMin > 0 ||
      filters.commissionMax < 100 ||
      filters.cookieDuration.length > 0 ||
      filters.networks.length > 0 ||
      filters.paymentMethods.length > 0 ||
      filters.minPayout > 0 ||
      filters.maxPayout < 1000
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="rounded-md px-3 text-xs h-8 border-dashed whitespace-nowrap relative"
        >
          <Filter className="h-3 w-3 mr-1" />
          Advanced Filters
          {hasActiveFilters() && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full"></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Advanced Filters</SheetTitle>
          <SheetDescription>
            Fine-tune your search to find the perfect affiliate programs
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Commission Rate */}
          <div>
            <Label className="text-sm font-medium">Commission Rate (%)</Label>
            <div className="mt-2">
              <Slider
                value={[filters.commissionMin, filters.commissionMax]}
                onValueChange={handleCommissionChange}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{filters.commissionMin}%</span>
                <span>{filters.commissionMax}%</span>
              </div>
            </div>
          </div>

          {/* Cookie Duration */}
          <div>
            <Label className="text-sm font-medium">Cookie Duration</Label>
            <div className="mt-2 space-y-2">
              {cookieDurationOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`cookie-${option.value}`}
                    checked={filters.cookieDuration.includes(option.value)}
                    onCheckedChange={() => handleArrayToggle('cookieDuration', option.value)}
                  />
                  <Label htmlFor={`cookie-${option.value}`} className="text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Minimum Payout */}
          <div>
            <Label className="text-sm font-medium">Minimum Payout ($)</Label>
            <div className="mt-2">
              <Slider
                value={[filters.minPayout, filters.maxPayout]}
                onValueChange={handlePayoutChange}
                max={1000}
                step={25}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>${filters.minPayout}</span>
                <span>${filters.maxPayout}+</span>
              </div>
            </div>
          </div>

          {/* Affiliate Networks */}
          <div>
            <Label className="text-sm font-medium">Affiliate Networks</Label>
            <div className="mt-2 space-y-2">
              {networkOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`network-${option.value}`}
                    checked={filters.networks.includes(option.value)}
                    onCheckedChange={() => handleArrayToggle('networks', option.value)}
                  />
                  <Label htmlFor={`network-${option.value}`} className="text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <Label className="text-sm font-medium">Payment Methods</Label>
            <div className="mt-2 space-y-2">
              {paymentMethodOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`payment-${option.value}`}
                    checked={filters.paymentMethods.includes(option.value)}
                    onCheckedChange={() => handleArrayToggle('paymentMethods', option.value)}
                  />
                  <Label htmlFor={`payment-${option.value}`} className="text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Active Filters Summary */}
          {hasActiveFilters() && (
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-blue-900">Active Filters</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Clear All
                </Button>
              </div>
              <div className="space-y-1 text-sm text-blue-800">
                {(filters.commissionMin > 0 || filters.commissionMax < 100) && (
                  <div>Commission: {filters.commissionMin}% - {filters.commissionMax}%</div>
                )}
                {filters.cookieDuration.length > 0 && (
                  <div>Cookie Duration: {filters.cookieDuration.length} selected</div>
                )}
                {filters.networks.length > 0 && (
                  <div>Networks: {filters.networks.length} selected</div>
                )}
                {filters.paymentMethods.length > 0 && (
                  <div>Payment Methods: {filters.paymentMethods.length} selected</div>
                )}
                {(filters.minPayout > 0 || filters.maxPayout < 1000) && (
                  <div>Minimum Payout: ${filters.minPayout} - ${filters.maxPayout}</div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button onClick={applyFilters} className="flex-1">
              Apply Filters
            </Button>
            <Button variant="outline" onClick={resetFilters} className="flex-1">
              Reset
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
