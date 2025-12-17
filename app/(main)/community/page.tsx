import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { communityPostsData } from "@/data/content";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

const upcomingEvents = [
  {
    id: 1,
    title: "Yoga & Meditation Retreat",
    date: "Dec 15-17, 2024",
    location: "Mountain Sanctuary",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    spots: 12,
  },
  {
    id: 2,
    title: "New Year Intention Setting Workshop",
    date: "Dec 30, 2024",
    location: "Serenity Studio",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
    spots: 20,
  },
  {
    id: 3,
    title: "Kids Yoga Family Day",
    date: "Jan 7, 2025",
    location: "Serenity Studio",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    spots: 30,
  },
];

export default function CommunityPage() {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session || !session.user) {
    router.push("/sign-up");
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-gray-900">
              Our Community
            </h1>
            <p className="text-xl text-gray-600">
              Stay connected with our yoga family through articles, events, and
              shared experiences
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
                  alt="Featured article"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <Badge className="w-fit bg-purple-100 text-purple-700 hover:bg-purple-100">
                  Featured Article
                </Badge>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
                  The Complete Guide to Starting Your Yoga Journey
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Everything you need to know as a beginner, from choosing the
                  right style to building a consistent practice that fits your
                  lifestyle.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Emma Watson
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Dec 1, 2024
                  </div>
                </div>
                <Button className="w-fit bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Insights, tips, and inspiration for your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {communityPostsData.map((post) => (
              <Card
                key={post.id}
                className="border-none shadow-lg hover:shadow-xl transition-shadow group overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-purple-700 hover:bg-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-gray-500">
                      <p className="font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs">{post.date}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Join us for special workshops, retreats, and community gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-56">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading text-xl font-bold text-gray-900">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-purple-500" />
                      {event.location}
                    </div>
                    <p className="text-purple-600 font-medium">
                      {event.spots} spots remaining
                    </p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
              Stay Connected
            </h2>
            <p className="text-xl text-white/90">
              Subscribe to our newsletter for weekly wellness tips, class
              updates, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
