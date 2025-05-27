"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  Heart,
  Reply,
  Search,
  Plus,
  Star,
  Award,
  ThumbsUp,
  Eye,
  Filter
} from "lucide-react"

interface ForumPost {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
    rank: string
    reputation: number
  }
  category: string
  tags: string[]
  replies: number
  views: number
  likes: number
  createdAt: Date
  lastActivity: Date
  isPinned?: boolean
  isSolved?: boolean
}

interface Comment {
  id: string
  content: string
  author: {
    name: string
    avatar: string
    rank: string
  }
  createdAt: Date
  likes: number
  isAccepted?: boolean
}

const mockPosts: ForumPost[] = [
  {
    id: "1",
    title: "How I increased my affiliate earnings by 300% in 6 months",
    content: "I wanted to share my journey and the strategies that worked for me. Started with $500/month and now consistently earning $1500+. Here are the key tactics...",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612e1ae?w=32&h=32&fit=crop&crop=face",
      rank: "Pro Affiliate",
      reputation: 2450
    },
    category: "Success Stories",
    tags: ["strategy", "earnings", "growth"],
    replies: 24,
    views: 456,
    likes: 89,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 30 * 60 * 1000),
    isPinned: true
  },
  {
    id: "2",
    title: "Best tools for tracking affiliate performance in 2025?",
    content: "Looking for recommendations on analytics tools. Currently using Google Analytics but need something more specific for affiliate tracking. What do you all use?",
    author: {
      name: "Mike Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      rank: "Rising Star",
      reputation: 890
    },
    category: "Tools & Resources",
    tags: ["analytics", "tools", "tracking"],
    replies: 12,
    views: 234,
    likes: 34,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000)
  },
  {
    id: "3",
    title: "Commission rates dropping - anyone else noticing this trend?",
    content: "Several programs I'm part of have reduced their commission rates recently. Is this a market-wide trend? How are you adapting your strategy?",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      rank: "Veteran",
      reputation: 3120
    },
    category: "Industry Discussion",
    tags: ["commissions", "trends", "strategy"],
    replies: 18,
    views: 567,
    likes: 42,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 4 * 60 * 60 * 1000)
  },
  {
    id: "4",
    title: "New to affiliate marketing - where should I start?",
    content: "Complete beginner here! Just discovered affiliate marketing and it seems like a great opportunity. Any advice on which programs to start with?",
    author: {
      name: "Jessica Park",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      rank: "Newbie",
      reputation: 45
    },
    category: "Getting Started",
    tags: ["beginner", "advice", "programs"],
    replies: 31,
    views: 789,
    likes: 67,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - 6 * 60 * 60 * 1000),
    isSolved: true
  }
]

const categories = [
  { name: "All Categories", count: 156, color: "bg-gray-100 text-gray-800" },
  { name: "Getting Started", count: 42, color: "bg-green-100 text-green-800" },
  { name: "Success Stories", count: 28, color: "bg-purple-100 text-purple-800" },
  { name: "Tools & Resources", count: 35, color: "bg-blue-100 text-blue-800" },
  { name: "Industry Discussion", count: 51, color: "bg-orange-100 text-orange-800" }
]

export default function CommunityPage() {
  const [posts, setPosts] = useState<ForumPost[]>(mockPosts)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "Getting Started",
    tags: ""
  })

  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

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

  const handleSubmitPost = () => {
    const post: ForumPost = {
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      author: {
        name: "You",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
        rank: "Member",
        reputation: 150
      },
      category: newPost.category,
      tags: newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      replies: 0,
      views: 0,
      likes: 0,
      createdAt: new Date(),
      lastActivity: new Date()
    }

    setPosts(prev => [post, ...prev])
    setNewPost({ title: "", content: "", category: "Getting Started", tags: "" })
    setShowNewPostForm(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="https://ext.same-assets.com/4229050697/1583010581.svg"
                    alt="AffiliList"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="text-xl font-bold">AffiliList Community</span>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => setShowNewPostForm(true)}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Programs
                  </Link>
                </Button>
              </div>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2,847</div>
                    <div className="text-sm text-gray-600">Active Members</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">1,456</div>
                    <div className="text-sm text-gray-600">Total Posts</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">89</div>
                    <div className="text-sm text-gray-600">Posts This Week</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border">
                <div className="flex items-center">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">12</div>
                    <div className="text-sm text-gray-600">Active Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Post Form */}
          {showNewPostForm && (
            <div className="bg-white border rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Post</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <Input
                    placeholder="What's your question or topic?"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="Getting Started">Getting Started</option>
                    <option value="Success Stories">Success Stories</option>
                    <option value="Tools & Resources">Tools & Resources</option>
                    <option value="Industry Discussion">Industry Discussion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                  <Textarea
                    placeholder="Share your thoughts, questions, or insights..."
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    className="min-h-[120px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                  <Input
                    placeholder="affiliate, marketing, tips, strategy"
                    value={newPost.tags}
                    onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Button onClick={handleSubmitPost} className="bg-blue-600 text-white hover:bg-blue-700">
                    Post to Community
                  </Button>
                  <Button variant="outline" onClick={() => setShowNewPostForm(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search */}
              <div className="bg-white border rounded-xl p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left p-2 rounded-lg transition-colors ${
                        selectedCategory === category.name
                          ? 'bg-blue-50 text-blue-700'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{category.name}</span>
                        <Badge className={category.color}>{category.count}</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Top Contributors</h3>
                <div className="space-y-3">
                  {[
                    { name: "Sarah Chen", reputation: 2450, posts: 89 },
                    { name: "Alex Johnson", reputation: 3120, posts: 124 },
                    { name: "Mike Rodriguez", reputation: 890, posts: 56 }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-sm font-bold text-gray-500">#{index + 1}</div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-600">{user.reputation} reputation</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="lg:col-span-3">
              <div className="bg-white border rounded-xl">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Community Posts</h2>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="divide-y">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-start justify-between">
                            <div className="flex-grow">
                              <div className="flex items-center space-x-2 mb-2">
                                {post.isPinned && (
                                  <Badge className="bg-yellow-100 text-yellow-800">
                                    📌 Pinned
                                  </Badge>
                                )}
                                {post.isSolved && (
                                  <Badge className="bg-green-100 text-green-800">
                                    ✅ Solved
                                  </Badge>
                                )}
                                <Badge className="bg-blue-100 text-blue-800">
                                  {post.category}
                                </Badge>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 mb-3 line-clamp-2">
                                {post.content}
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <span className="font-medium text-gray-900">{post.author.name}</span>
                                  <Badge variant="secondary" className="text-xs">
                                    {post.author.rank}
                                  </Badge>
                                </div>
                                <span>•</span>
                                <span>{getTimeAgo(post.createdAt)}</span>
                                <span>•</span>
                                <div className="flex items-center space-x-1">
                                  <Eye className="h-3 w-3" />
                                  <span>{post.views}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageSquare className="h-3 w-3" />
                                  <span>{post.replies}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <ThumbsUp className="h-3 w-3" />
                                  <span>{post.likes}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2 mt-3">
                                {post.tags.map((tag, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
                    <p className="text-gray-600">
                      {searchQuery || selectedCategory !== "All Categories"
                        ? "Try adjusting your search terms or category filter"
                        : "Be the first to start a discussion!"}
                    </p>
                  </div>
                )}
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
          </div>
        </div>
      </footer>
    </div>
  )
}
