import { Geist, Geist_Mono, Merriweather, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "The Purple Movement",
  description: "Inclusion. Awareness. Action.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
