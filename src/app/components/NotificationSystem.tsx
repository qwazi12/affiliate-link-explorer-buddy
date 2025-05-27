"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Check, X, Clock, Star, TrendingUp, Users } from "lucide-react"

interface Notification {
  id: string
  type: 'approval' | 'rejection' | 'new_program' | 'commission_update' | 'system'
  title: string
  message: string
  timestamp: Date
  read: boolean
  actionUrl?: string
  programName?: string
  commissionRate?: string
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "approval",
    title: "Program Approved!",
    message: "CloudSync Pro has been approved and is now live on AffiliList",
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    read: false,
    actionUrl: "/affiliate/cloudsync-pro",
    programName: "CloudSync Pro",
    commissionRate: "35%"
  },
  {
    id: "2",
    type: "new_program",
    title: "New High-Converting Program",
    message: "MarketingBot AI just launched with 50% first month commission",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    read: false,
    actionUrl: "/affiliate/marketingbot-ai",
    programName: "MarketingBot AI",
    commissionRate: "50%"
  },
  {
    id: "3",
    type: "commission_update",
    title: "Commission Rate Increased",
    message: "Supademo increased their commission rate from 20% to 25%",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    read: true,
    actionUrl: "/affiliate/supademo",
    programName: "Supademo",
    commissionRate: "25%"
  },
  {
    id: "4",
    type: "system",
    title: "Welcome to AffiliList!",
    message: "Start exploring top affiliate programs and maximize your earnings",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    read: true
  }
]

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [isOpen, setIsOpen] = useState(false)

  // Simulate real-time notifications
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly add new notifications (simulate real-time updates)
      if (Math.random() < 0.3) { // 30% chance every 10 seconds
        const newNotification: Notification = {
          id: Date.now().toString(),
          type: Math.random() < 0.5 ? "approval" : "new_program",
          title: Math.random() < 0.5 ? "New Program Approved!" : "Featured Program Alert",
          message: Math.random() < 0.5
            ? "SecureVPN Max has been approved and is now available"
            : "CryptoTracker Pro is now featured with bonus commissions",
          timestamp: new Date(),
          read: false,
          programName: Math.random() < 0.5 ? "SecureVPN Max" : "CryptoTracker Pro",
          commissionRate: Math.random() < 0.5 ? "$25" : "40%"
        }

        setNotifications(prev => [newNotification, ...prev.slice(0, 9)]) // Keep only 10 notifications
      }
    }, 10000) // Check every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    )
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'approval': return <Check className="h-4 w-4 text-green-600" />
      case 'rejection': return <X className="h-4 w-4 text-red-600" />
      case 'new_program': return <Star className="h-4 w-4 text-blue-600" />
      case 'commission_update': return <TrendingUp className="h-4 w-4 text-orange-600" />
      case 'system': return <Users className="h-4 w-4 text-purple-600" />
      default: return <Bell className="h-4 w-4 text-gray-600" />
    }
  }

  const getTimeAgo = (timestamp: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h ago`

    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 text-white"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-80 max-h-96 overflow-y-auto"
        sideOffset={5}
      >
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="text-xs h-6"
            >
              Mark all read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className={`flex flex-col items-start p-3 cursor-pointer ${
                !notification.read ? 'bg-blue-50' : ''
              }`}
              onClick={() => {
                markAsRead(notification.id)
                if (notification.actionUrl) {
                  window.location.href = notification.actionUrl
                }
              }}
            >
              <div className="flex items-start space-x-3 w-full">
                <div className="flex-shrink-0 mt-0.5">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {notification.title}
                    </p>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 flex-shrink-0"></div>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">
                      {getTimeAgo(notification.timestamp)}
                    </span>
                    {notification.commissionRate && (
                      <Badge variant="secondary" className="text-xs">
                        {notification.commissionRate}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            <Bell className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm">No notifications yet</p>
          </div>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-center text-sm text-blue-600 cursor-pointer">
          <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700">
            View all notifications
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
