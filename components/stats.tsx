import { Users, Star, Calendar, Award } from "lucide-react";
import { statsData } from "@/data/content";

const iconMap = {
  Users,
  Star,
  Calendar,
  Award,
};

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div key={stat.id} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100">
                  <Icon className="h-7 w-7 text-purple-600" />
                </div>
                <div>
                  <div className="font-heading text-4xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
