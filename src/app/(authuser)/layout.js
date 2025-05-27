import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ChevronDown, Menu, X } from "lucide-react";
import UserHeader from "@/components/UserHeader";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EJCP-2385-409X",
  description: "European Journal of Clinical Pharamacy",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <main className="bg-gray-50 min-h-screen">
            {/* <div className="flex h-screen overflow-auto"> */}
            {/* <!--- Side navbar ---> */}
            {/* <div className="flex-1"> */}
            {/* <!--- Header with search bar  ---> */}
            <UserHeader />
            {/* <!--- Main content  ---> */}
            {children}
            {/* </div> */}
            {/* </div> */}
          </main>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
