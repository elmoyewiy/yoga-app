import { Award, Heart, Clock, Users } from "lucide-react";
import { whyChooseUsData } from "@/data/content";

const iconMap = {
  Award,
  Heart,
  Clock,
  Users,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Serenity
          </h2>
          <p className="text-lg text-gray-600">
            We&apos;re committed to providing an exceptional yoga experience
            that nurtures your whole being
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsData.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={item.id} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
