import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
              <span className="font-heading text-2xl font-bold text-white">
                Serenity
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Transform your mind, body, and soul through yoga and wellness
              practices in a nurturing community.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-purple-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-purple-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-purple-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-purple-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/home"
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4">
              Our Classes
            </h4>
            <ul className="space-y-3">
              <li className="text-sm">Hatha Yoga</li>
              <li className="text-sm">Vinyasa Flow</li>
              <li className="text-sm">Restorative Yoga</li>
              <li className="text-sm">Private Sessions</li>
              <li className="text-sm">Meditation Classes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Wellness Lane, Peaceful City, PC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">(+234) 81-390-60492</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">boyeadisa@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © 2024 Serenity Yoga & Wellness. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
