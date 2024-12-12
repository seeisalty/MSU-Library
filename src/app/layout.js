// src/app/layout.js
import './globals.css';
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar"; 

export const metadata = {
  title: "Home - Mississippi State University Libraries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Navbar />
        <main style={{ flex: 1, padding: '20px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
