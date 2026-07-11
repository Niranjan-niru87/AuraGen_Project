import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Footer from "../components/layout/Footer";
import TelemetryPanel from "../components/telemetry/TelemetryPanel";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TelemetryPanel />
      <Footer />
    </>
    
  );
}

export default Home;