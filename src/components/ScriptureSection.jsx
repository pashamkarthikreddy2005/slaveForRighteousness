export default function ScriptureSection() {
  return (
    <section
      id="scripture"
      style={{
        position: "relative",
        padding: "0px 24px 140px",
        zIndex: 2,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,147,58,0.055) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          className="divider"
          style={{ marginBottom: "80px" }}
        />

        <div
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "10px",
            letterSpacing: "0.4em",
            color: "#E8B94F",
            textTransform: "uppercase",
            marginBottom: "52px",
          }}
        >
          The Foundation
        </div>

        <svg
          className="cross-glow"
          width="24"
          height="36"
          viewBox="0 0 24 36"
          style={{
            marginBottom: "40px",
            opacity: 0.6,
          }}
        >
          <rect
            x="8"
            y="0"
            width="8"
            height="36"
            fill="#E8B94F"
            rx="1"
          />

          <rect
            x="0"
            y="8"
            width="24"
            height="8"
            fill="#E8B94F"
            rx="1"
          />
        </svg>

        <blockquote
          style={{
            fontSize: "clamp(20px,2.8vw,34px)",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(255,248,231,0.85)",
            fontStyle: "italic",
            bottom: "18px",
          }}
        >
          "But thanks be to God, that you who were once{" "}
          <span
            style={{
              fontStyle: "normal",
              fontWeight: 500,
            }}
            className="gold-grad"
          >
            slaves of sin
          </span>{" "}
          have become obedient from the heart to the
          standard of teaching to which you were
          committed, and, having been set free from
          sin, have become{" "}
          <span
            style={{
              fontStyle: "normal",
              fontWeight: 500,
            }}
            className="gold-grad"
          >
            slaves of righteousness.
          </span>
          "
        </blockquote>

        <div
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "14px",
            letterSpacing: "0.22em",
            color: "rgba(201,147,58,0.65)",
          }}
        >
          Romans 6:17–18 · ESV
        </div>

        <div
          className="divider"
          style={{ marginTop: "80px" }}
        />
      </div>
    </section>
  );
}