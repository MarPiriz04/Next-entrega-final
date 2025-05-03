import "./globals.css";
import Navbar from "../components/layouts/navbar/Navbar";
import Footer from "../components/layouts/footer/Footer";
import { Providers } from "./Providers";
import { Montserrat } from "next/font/google";
import { AuthProvider } from "./context/AuthContext";
export const metadata = {
  title: "Farmacia Veracierto | Home",
  description: "Cuidá tu salud y bienestar con nuestra selección de productos farmacéuticos, suplementos y artículos de higiene de calidad.",

};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.className}>
      <body>
        <main>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
