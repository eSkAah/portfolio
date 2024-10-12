import "./globals.css";
import { Bebas_Neue, Inter } from "next/font/google";
import MasterLayout from "../components/MasterLayout";
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bebas_Neue-font",
});

export const metadata = {
  title: "TECHEASE | Allan BREUIL - Développeur Web Fullstack",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas_Neue.variable}`}>
        <MasterLayout children={children} />
      </body>
    </html>
  );
}
