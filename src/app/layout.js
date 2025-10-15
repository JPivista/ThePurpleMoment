import { Geist, Geist_Mono, Merriweather, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header/Header";
import Footer from "@/shared/Footer";
import config from "@/config";

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
  robots: config.getRobotsMeta(),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VEVLLJY7DG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VEVLLJY7DG');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}