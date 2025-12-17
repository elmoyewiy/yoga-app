/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  TrendingUp,
  Award,
  Clock,
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronRight,
  Star,
  Activity,
} from "lucide-react";

// Import your auth client
import { useSession } from "@/lib/auth-client";

const Dashboard = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/sign-in");
    }
  }, [session, isPending, router]);

  // Show loading state while checking authentication
  if (isPending) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Don't render dashboard if no session
  if (!session || !session.user) {
    return null;
  }

  // Extract user info from session
  const user = session.user;
  const userName = user.name || "Yoga Enthusiast";
  const userEmail = user.email || "";
  const userAvatar = user.image || null;
  const memberSince = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Recently";
  const membershipType = "Premium"; // You can add this field to your user model

  // Get user initials for avatar fallback
  const getInitials = (name: string) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const userInitials = getInitials(userName);
  const firstName = userName.split(" ")[0];

  // Handle sign out
  const handleSignOut = async () => {
    // Add your sign out logic here
    // For example: await signOut();
    router.push("/sign-in");
  };

  const stats = [
    {
      icon: Calendar,
      label: "Classes This Month",
      value: "12",
      change: "+3 from last month",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      label: "Total Hours",
      value: "24.5",
      change: "Keep it up!",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      label: "Achievements",
      value: "8",
      change: "2 new this week",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      label: "Streak Days",
      value: "15",
      change: "Personal best!",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      name: "Morning Hatha Flow",
      instructor: "Emma Watson",
      date: "Today",
      time: "7:00 AM - 8:00 AM",
      status: "Confirmed",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
    },
    {
      id: 2,
      name: "Power Vinyasa",
      instructor: "James Turner",
      date: "Tomorrow",
      time: "6:00 PM - 7:15 PM",
      status: "Confirmed",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
    },
    {
      id: 3,
      name: "Restorative Evening",
      instructor: "Sophia Lee",
      date: "Dec 16",
      time: "8:00 PM - 9:30 PM",
      status: "Waitlist",
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "class",
      title: "Completed Vinyasa Flow",
      time: "2 hours ago",
      icon: Activity,
    },
    {
      id: 2,
      type: "achievement",
      title: 'Earned "15-Day Streak" Badge',
      time: "1 day ago",
      icon: Award,
    },
    {
      id: 3,
      type: "booking",
      title: "Booked Morning Hatha Flow",
      time: "2 days ago",
      icon: Calendar,
    },
  ];

  const achievements = [
    { id: 1, name: "First Class", icon: "🎯", earned: true },
    { id: 2, name: "7-Day Streak", icon: "🔥", earned: true },
    { id: 3, name: "15-Day Streak", icon: "⚡", earned: true },
    { id: 4, name: "Early Bird", icon: "🌅", earned: true },
    { id: 5, name: "10 Classes", icon: "💪", earned: true },
    { id: 6, name: "30-Day Streak", icon: "🏆", earned: false },
    { id: 7, name: "50 Classes", icon: "🎖️", earned: false },
    { id: 8, name: "Yoga Master", icon: "🧘", earned: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Home Link */}
            <div className="flex items-center space-x-6">
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => router.push("/home")}
              >
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                <span
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Serenity
                </span>
              </div>
              <button
                onClick={() => router.push("/home")}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
              >
                Go to Home ←
              </button>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search classes, instructors..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => router.push("/settings")}
              >
                <Settings className="h-6 w-6 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                {userAvatar ? (
                  <img
                    src={userAvatar}
                    alt={userName}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                    {userInitials}
                  </div>
                )}
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-900">
                    {userName}
                  </p>
                  <p className="text-xs text-gray-600">{membershipType}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h1
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Welcome back, {firstName}! 🧘‍♀️
              </h1>
              <p className="text-purple-100 mb-6">
                You&apos;ve practiced for 24.5 hours this month. Keep up the
                amazing work!
              </p>
              <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all">
                Book a Class
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Upcoming Classes */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Upcoming Classes
                </h2>
                <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>

              <div className="space-y-4">
                {upcomingClasses.map((cls) => (
                  <div
                    key={cls.id}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:border-purple-300 transition-colors"
                  >
                    <img
                      src={cls.image}
                      alt={cls.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {cls.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        with {cls.instructor}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {cls.date} • {cls.time}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          cls.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {cls.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2
                className="text-2xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Achievements
              </h2>
              <div className="grid grid-cols-4 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`text-center p-4 rounded-xl border-2 transition-all ${
                      achievement.earned
                        ? "border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50"
                        : "border-gray-200 bg-gray-50 opacity-50"
                    }`}
                  >
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <p className="text-xs font-medium text-gray-700">
                      {achievement.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-center">
                {userAvatar ? (
                  <img
                    src={userAvatar}
                    alt={userName}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                ) : (
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold mb-4">
                    {userInitials}
                  </div>
                )}
                <h3 className="font-bold text-gray-900 text-lg">{userName}</h3>
                <p className="text-sm text-gray-600 mb-1">{userEmail}</p>
                <p className="text-xs text-gray-500 mb-4">
                  Member since {memberSince}
                </p>

                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full">
                  <Star className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-sm font-semibold text-purple-700">
                    {membershipType} Member
                  </span>
                </div>

                <div className="mt-6 space-y-2">
                  <button className="w-full py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-sm flex items-center justify-center">
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile
                  </button>
                  <button className="w-full py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-sm flex items-center justify-center">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="w-full py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium text-sm flex items-center justify-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <activity.icon className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Need Help?</h3>
              <p className="text-sm text-purple-100 mb-4">
                Our support team is here for you 24/7
              </p>
              <button className="w-full py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
