export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "22px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background:
          "linear-gradient(to bottom,rgba(7,4,3,0.85) 0%,transparent 100%)",
      }}
    >
      <div
        style={{
          fontFamily: "'Cinzel',serif",
          fontSize: "13px",
          letterSpacing: "0.2em",
          color: "#E8B94F",
          fontWeight: 700,
        }}
      >
        SFR · MMXXV
      </div>

      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "40px",
        }}
      >
        <a href="#scripture" className="nav-link">
          Scripture
        </a>

        <a href="#pillars" className="nav-link">
          Pillars
        </a>

        <a href="#register" className="nav-link">
          Register
        </a>
      </div>
    </nav>
  );
}