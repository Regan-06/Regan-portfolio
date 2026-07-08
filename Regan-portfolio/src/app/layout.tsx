import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Regan Mant | Websites, Content & Automation",
  description:
    "I help service businesses attract more customers, automate repetitive tasks, and build better online experiences through websites, content creation, and custom software.",
  keywords: [
    "web development",
    "automation",
    "content creation",
    "custom software",
    "landing pages",
    "service business websites",
  ],
  openGraph: {
    title: "Regan Mant | Websites, Content & Automation",
    description:
      "I help service businesses attract more customers, automate repetitive tasks, and build better online experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080808] text-white antialiased overflow-x-hidden cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
