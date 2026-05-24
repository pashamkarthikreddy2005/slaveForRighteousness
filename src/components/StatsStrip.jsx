export default function StatsStrip() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 2,
        padding: "0 24px 100px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "1px",
          background: "rgba(201,147,58,0.15)",
          border: "1px solid rgba(201,147,58,0.15)",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        {[
          ["One Message", "Radical Surrender"],
          ["One Truth", "Total Liberation"],
          ["One Call", "Eternal Purpose"],
        ].map(([n, l], i) => (
          <div
            key={i}
            style={{
              padding: "48px 24px",
              textAlign: "center",
              background: "rgba(7,4,3,0.9)",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "rgba(201,147,58,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "rgba(7,4,3,0.9)";
            }}
          >
            <div
              className="gold-grad"
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(18px,2vw,26px)",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              {n}
            </div>

            <div
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "rgba(245,215,142,0.45)",
                textTransform: "uppercase",
              }}
            >
              {l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}