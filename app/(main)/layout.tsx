"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </html>
  );
}
