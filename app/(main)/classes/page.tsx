import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

interface ClassItem {
  id: string | number;
  image: string;
  title: string;
  level: string;
  description: string;
  instructor: string;
  duration: string;
  days: string;
  time: string;
  capacity: number;
}

const allClasses = [
  {
    id: 1,
    title: "Morning Hatha Flow",
    instructor: "Emma Watson",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    duration: "60 min",
    level: "Beginner",
    time: "7:00 AM - 8:00 AM",
    days: "Mon, Wed, Fri",
    capacity: 15,
    description: "Start your day with gentle stretches and foundational poses.",
    category: "beginner",
  },
  {
    id: 2,
    title: "Power Vinyasa",
    instructor: "James Turner",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    duration: "75 min",
    level: "Intermediate",
    time: "6:00 PM - 7:15 PM",
    days: "Tue, Thu",
    capacity: 12,
    description: "Dynamic flow linking breath with challenging sequences.",
    category: "intermediate",
  },
  {
    id: 3,
    title: "Restorative Evening",
    instructor: "Sophia Lee",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
    duration: "90 min",
    level: "All Levels",
    time: "8:00 PM - 9:30 PM",
    days: "Wed, Sun",
    capacity: 20,
    description: "Deeply relaxing practice to restore body and mind.",
    category: "all",
  },
  {
    id: 4,
    title: "Ashtanga Primary Series",
    instructor: "Michael Brown",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    duration: "90 min",
    level: "Advanced",
    time: "6:00 AM - 7:30 AM",
    days: "Mon, Wed, Fri",
    capacity: 10,
    description: "Traditional Ashtanga sequence for experienced practitioners.",
    category: "advanced",
  },
  {
    id: 5,
    title: "Gentle Yoga for Seniors",
    instructor: "Patricia Davis",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    duration: "45 min",
    level: "Beginner",
    time: "10:00 AM - 10:45 AM",
    days: "Mon, Wed, Fri",
    capacity: 12,
    description: "Modified poses focusing on flexibility and balance.",
    category: "beginner",
  },
  {
    id: 6,
    title: "Hot Yoga",
    instructor: "Ryan Martinez",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    duration: "60 min",
    level: "Intermediate",
    time: "12:00 PM - 1:00 PM",
    days: "Daily",
    capacity: 18,
    description: "Practice in a heated room for deeper flexibility.",
    category: "intermediate",
  },
  {
    id: 7,
    title: "Yin Yoga",
    instructor: "Laura Chen",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
    duration: "75 min",
    level: "All Levels",
    time: "7:00 PM - 8:15 PM",
    days: "Mon, Thu",
    capacity: 15,
    description: "Slow-paced practice holding poses for extended periods.",
    category: "all",
  },
  {
    id: 8,
    title: "Arm Balance Workshop",
    instructor: "David Kim",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    duration: "90 min",
    level: "Advanced",
    time: "2:00 PM - 3:30 PM",
    days: "Saturday",
    capacity: 8,
    description: "Master crow, side crow, and flying pigeon poses.",
    category: "advanced",
  },
];

export default function ClassesPage() {
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
              Our Yoga Classes
            </h1>
            <p className="text-xl text-gray-600">
              Discover the perfect class for your practice level and schedule.
              From beginners to advanced yogis, we have something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Grid with Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allClasses.map((classItem) => (
                  <ClassCard key={classItem.id} classItem={classItem} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beginner" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allClasses
                  .filter((c) => c.category === "beginner")
                  .map((classItem) => (
                    <ClassCard key={classItem.id} classItem={classItem} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allClasses
                  .filter((c) => c.category === "intermediate")
                  .map((classItem) => (
                    <ClassCard key={classItem.id} classItem={classItem} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allClasses
                  .filter((c) => c.category === "advanced")
                  .map((classItem) => (
                    <ClassCard key={classItem.id} classItem={classItem} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

function ClassCard({ classItem }: { classItem: ClassItem }) {
  return (
    <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={classItem.image}
          alt={classItem.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-purple-700 hover:bg-white">
            {classItem.level}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
            {classItem.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{classItem.description}</p>
          <p className="text-sm text-purple-600 font-medium">
            Instructor: {classItem.instructor}
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-purple-500" />
            {classItem.duration}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-purple-500" />
            {classItem.days} • {classItem.time}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-purple-500" />
            Max {classItem.capacity} students
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          Book This Class
        </Button>
      </CardContent>
    </Card>
  );
}
