import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Story() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px] order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl" />
            <Image
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&q=80"
              alt="Peaceful yoga session"
              fill
              className="object-cover rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2015, Serenity Yoga & Wellness Center was born from a
                simple vision: to create a sanctuary where people could escape
                the chaos of modern life and reconnect with their true selves.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a small studio with just three instructors has
                blossomed into a thriving community of over 2,500 members, all
                united by their commitment to holistic wellness and personal
                growth.
              </p>
              <Separator />

              <div>
                <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower individuals to achieve balance, strength, and inner
                  peace through the transformative practice of yoga and mindful
                  living. We believe that everyone deserves access to tools that
                  promote physical health, mental clarity, and spiritual growth.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading wellness center that inspires positive
                  change in our community, fostering a world where mindfulness,
                  compassion, and well-being are accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
