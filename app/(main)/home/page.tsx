"use client";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import UpcomingClasses from "@/components/upcoming-classes";
import Testimonials from "@/components/testimonials";
import Story from "@/components/story";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/sign-up");
    }
  }, [session, isPending, router]);
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <UpcomingClasses />
      <Testimonials />
      <Story />
    </>
  );
}
