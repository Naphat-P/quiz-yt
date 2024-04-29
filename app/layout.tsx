import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"]
 });

export const metadata: Metadata = {
  title: "CodeQuiz",
  description: "Weekly Quiz Question for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={raleway.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
