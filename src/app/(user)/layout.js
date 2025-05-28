import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { _GET } from "@/request/request";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "EJCP-2385-409X",
//   description: "European Journal of Clinical Pharamacy",
// };

// export const metadata = {
//   title: "International Medicine Journal",
//   description: "An International Peer reviewed Journal",
// };

export const metadata = {
  title: process.env.NEXT_PUBLIC_META_TITLE,
  description: process.env.NEXT_PUBLIC_META_DESCRIPTION,
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  const response = await _GET("policy/readAll");
  const header = await _GET("header/readOne?mj_id=1&settings_id=1", 'core');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar policy={response} JournalHeaderData={header ? header : ""} />
          {children}
          <Footer FooterData={header ? header : {}} />
        </AuthProvider>
      </body>
    </html>
  );
}
