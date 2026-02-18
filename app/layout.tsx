import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ganesh Ghode | Full Stack Engineer",
  description: "Futuristic AI-driven portfolio of Ganesh Ghode",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-gray-200 antialiased scroll-smooth selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">


        {/* Subtle Engineering Grid Background */}
        <div className="fixed inset-0 -z-30 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Soft Radial Glow */}
        <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]" />

        <main className="min-h-screen w-full relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
