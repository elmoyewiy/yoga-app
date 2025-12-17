import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

const team = [
  {
    id: 1,
    name: "Emma Watson",
    role: "Founder & Lead Instructor",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "500-hour certified yoga instructor with 15 years of experience.",
    specialties: ["Hatha", "Vinyasa", "Meditation"],
  },
  {
    id: 2,
    name: "James Turner",
    role: "Senior Instructor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Former athlete specializing in power yoga and strength building.",
    specialties: ["Power Yoga", "Ashtanga", "Fitness"],
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Wellness Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Holistic health coach integrating nutrition and mindfulness.",
    specialties: ["Restorative", "Yin", "Nutrition"],
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Advanced Instructor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Ashtanga specialist trained in Mysore, India.",
    specialties: ["Ashtanga", "Arm Balances", "Philosophy"],
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We create a judgment-free space where everyone feels welcome and supported on their journey.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We maintain the highest standards in teaching and continually evolve our practice.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe in the power of connection and foster meaningful relationships.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "We honor the ancient traditions of yoga while adapting to modern needs.",
  },
];

export default function AboutPage() {
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
              About Serenity
            </h1>
            <p className="text-xl text-gray-600">
              More than a yoga studio — we&apos;re a community dedicated to
              holistic wellness and personal transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80"
                alt="Yoga studio interior"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-bold text-gray-900">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Serenity Yoga & Wellness Center began in 2015 when founder Emma
                Watson transformed a small warehouse space into a sanctuary for
                healing and growth. What started with just three classes a week
                has grown into a thriving wellness hub offering over 50 classes
                weekly.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we serve a diverse community of over 2,500 members, from
                complete beginners taking their first yoga class to advanced
                practitioners deepening their practice. Our commitment remains
                unchanged: to provide authentic, accessible yoga instruction in
                a welcoming environment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We&apos;ve expanded beyond traditional yoga to offer workshops,
                wellness programs, and community events that address the whole
                person — body, mind, and spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do at Serenity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-none shadow-lg text-center p-8"
              >
                <CardContent className="p-0 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Expert instructors passionate about guiding your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card
                key={member.id}
                className="border-none shadow-lg overflow-hidden group"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-purple-600 font-medium">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
