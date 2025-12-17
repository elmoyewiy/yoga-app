"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Star,
  Users,
  Calendar,
  Award,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const stats = [
    { icon: Users, value: "2,500+", label: "Happy Members" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Calendar, value: "50+", label: "Weekly Classes" },
    { icon: Award, value: "15", label: "Expert Instructors" },
  ];

  const features = [
    {
      icon: Award,
      title: "Expert Instructors",
      description:
        "Learn from certified yoga teachers with years of experience and deep knowledge.",
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description:
        "Classes available 7 days a week at times that fit your busy lifestyle.",
    },
    {
      icon: Users,
      title: "Supportive Community",
      description:
        "Join a welcoming community of like-minded individuals on their wellness journey.",
    },
    {
      icon: Sparkles,
      title: "Holistic Approach",
      description:
        "Mind, body, and spirit integration for complete wellness transformation.",
    },
  ];

  const classes = [
    {
      name: "Hatha Yoga",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      level: "Beginner",
      duration: "60 min",
    },
    {
      name: "Vinyasa Flow",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      level: "Intermediate",
      duration: "75 min",
    },
    {
      name: "Restorative",
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
      level: "All Levels",
      duration: "90 min",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Regular Member",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      content:
        "Serenity Yoga has transformed my life. The instructors are incredibly knowledgeable and the community is so welcoming.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Yoga Enthusiast",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      content:
        "The variety of classes and peaceful atmosphere make this the perfect place to practice. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Wellness Seeker",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      content:
        "The holistic approach to wellness has helped me achieve balance in all areas of my life. Life-changing!",
      rating: 5,
    },
  ];

  const handleGetStarted = () => {
    router.push("/sign-up");
  };

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
              <span
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Serenity
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#classes"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Classes
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Testimonials
              </a>
              <button
                onClick={handleSignIn}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={handleGetStarted}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a
                href="#features"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                Features
              </a>
              <a
                href="#classes"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                Classes
              </a>
              <a
                href="#testimonials"
                className="block text-gray-700 hover:text-purple-600 font-medium"
              >
                Testimonials
              </a>
              <button
                onClick={handleSignIn}
                className="block w-full text-left text-gray-700 hover:text-purple-600 font-medium"
              >
                Sign In
              </button>
              <button
                onClick={handleGetStarted}
                className="block w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">
                  Transform Your Wellness Journey
                </span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Find Your Inner
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  Peace
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the transformative power of yoga and wellness. Join
                our community and discover a path to harmony, strength, and
                inner peace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetStarted}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => alert("Play intro video")}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-purple-500 text-gray-700 hover:text-purple-600 font-semibold rounded-lg transition-all"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Video
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 mb-2">
                      <stat.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="font-bold text-2xl text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
                alt="Woman practicing yoga"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Why Choose Serenity
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;re committed to providing an exceptional yoga experience
              that nurtures your whole being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Preview Section */}
      <section
        id="classes"
        className="py-20 bg-gradient-to-b from-white to-purple-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Yoga Classes
            </h2>
            <p className="text-xl text-gray-600">
              Choose from a variety of yoga styles designed for all experience
              levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {classes.map((cls, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-purple-700 text-sm font-semibold rounded-full">
                      {cls.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {cls.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{cls.duration}</p>
                  <button
                    onClick={handleGetStarted}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all"
                  >
                    Join Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Hear from members who have transformed their lives through yoga
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of members who have discovered the path to wellness,
            balance, and inner peace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Create Free Account
            </button>
            <button
              onClick={() => alert("Contact us clicked")}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                <span
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Serenity
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Transform your mind, body, and soul through yoga and wellness
                practices in a nurturing community.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Classes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Instructors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Serenity Yoga & Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
