import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Users } from "lucide-react";
import { upcomingClassesData } from "@/data/content";

export default function UpcomingClasses() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Classes
          </h2>
          <p className="text-lg text-gray-600">
            Reserve your spot in our most popular classes this week
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingClassesData.map((classItem) => (
            <Card
              key={classItem.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                      {classItem.title}
                    </h3>
                    <Badge variant="secondary">{classItem.level}</Badge>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      {classItem.spots} spots left
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <User className="h-4 w-4 mr-3 text-purple-500" />
                    <span className="text-sm">
                      Instructor: {classItem.instructor}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-3 text-purple-500" />
                    <span className="text-sm">{classItem.day}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-3 text-purple-500" />
                    <span className="text-sm">{classItem.time}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Reserve Spot
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
