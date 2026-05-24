import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScriptureSection from "./components/ScriptureSection";
import StatsStrip from "./components/StatsStrip";
import Pillars from "./components/Pillars";
import Register from "./components/Register";
import Footer from "./components/Footer";
import ParticleCanvas from "./components/ParticleCanvas";

function App() {
  return (
    <div
      style={{
        background: "#070403",
        color: "#FFF8E7",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <ParticleCanvas />

      <Navbar />

      <Hero />

      <ScriptureSection />

      <StatsStrip />

      <Pillars />

      <Register />

      <Footer />
    </div>
  );
}

export default App;