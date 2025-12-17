import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
              ✨ Transform Your Wellness Journey
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Find Your Inner
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Peace
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
              Experience the transformative power of yoga and wellness. Join our
              community and discover a path to harmony, strength, and inner
              peace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Classes
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl" />
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
              alt="Woman practicing yoga on beach at sunset"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
