export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        padding: "60px 24px 48px",
        borderTop: "1px solid rgba(201,147,58,0.1)",
        textAlign: "center",
      }}
    >
      <div
        className="gold-grad"
        style={{
          fontFamily: "'Cinzel',serif",
          fontSize: "clamp(16px,2vw,22px)",
          fontWeight: 700,
          letterSpacing: "0.12em",
          marginBottom: "12px",
        }}
      >
        Slave for Righteousness
      </div>

      <div
        style={{
          fontFamily: "'Cinzel',serif",
          fontSize: "11px",
          letterSpacing: "0.3em",
          color: "rgba(201,147,58,0.45)",
          textTransform: "uppercase",
          marginBottom: "28px",
        }}
      >
        Romans 6:18
      </div>

      <div
        className="divider"
        style={{
          maxWidth: "300px",
          margin: "0 auto 28px",
        }}
      />

      <p
        style={{
          fontSize: "13px",
          color: "rgba(245,215,142,0.2)",
          fontStyle: "italic",
        }}
      >
        © 2026 · Built for His Glory
      </p>
    </footer>
  );
}