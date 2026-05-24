import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        zIndex: 2,
      }}
    >
      {/* Ambient Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(201,147,58,0.18) 0%, rgba(7,4,3,0) 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 50% at 50% 110%, rgba(30,15,5,0.9) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Light Rays */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: 0.7,
        }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {[...Array(11)].map((_, i) => {
          const angle = (i - 5) * 9;

          const rad = (angle * Math.PI) / 180;

          const x2 = 720 + Math.sin(rad) * 1600;

          const y2 = Math.cos(rad) * 1600;

          return (
            <line
              key={i}
              x1="720"
              y1="0"
              x2={x2}
              y2={y2}
              stroke={`rgba(245,215,142,${
                0.09 - Math.abs(i - 5) * 0.008
              })`}
              strokeWidth={80 - Math.abs(i - 5) * 7}
              style={{
                animation: `rayDrift ${
                  3 + i * 0.3
                }s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          );
        })}
      </svg>

      {/* Cross */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      >
        <svg
          className="cross-glow"
          width="60"
          height="90"
          viewBox="0 0 60 90"
        >
          <rect
            x="22"
            y="0"
            width="16"
            height="90"
            fill="rgba(245,215,142,0.9)"
            rx="2"
          />

          <rect
            x="0"
            y="22"
            width="60"
            height="16"
            fill="rgba(245,215,142,0.9)"
            rx="2"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div
        style={{
          textAlign: "center",
          padding: "0 20px",
          position: "relative",
          zIndex: 3,
          maxWidth: "1100px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div className="a0" style={{ marginBottom: "28px" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "'Cinzel',serif",
              fontSize: "11px",
              letterSpacing: "0.38em",
              color: "#E8B94F",
              textTransform: "uppercase",
              padding: "9px 28px",
              border: "1px solid rgba(201,147,58,0.32)",
              borderRadius: "1px",
              background: "rgba(201,147,58,0.05)",
            }}
          >
            A Call to Sacred Surrender
          </span>
        </div>

        {/* Main Title */}
        <div
          className="a1 hero-big"
          style={{
            fontFamily: "'Cinzel',serif",
            fontWeight: 900,
            fontSize: "clamp(72px,14vw,160px)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
          }}
        >
          <span className="gold-grad">Slave</span>
        </div>

        <div
          className="a1 hero-small"
          style={{
            fontFamily: "'Cinzel',serif",
            fontWeight: 400,
            fontSize: "min(5vw,48px)",
            letterSpacing: "0.35em",
            color: "rgba(245,215,142,0.5)",
            textTransform: "uppercase",
            marginTop: "4px",
            marginBottom: "4px",
          }}
        >
          for
        </div>

        <div
          className="a1 hero-mid"
          style={{
            fontFamily: "'Cinzel',serif",
            fontWeight: 700,
            fontSize: "clamp(52px,9vw,108px)",
            lineHeight: 0.92,
            color: "#FFF8E7",
            letterSpacing: "0.04em",
          }}
        >
          Righteousness
        </div>

        {/* Verse */}
        <div
          className="a2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            margin: "28px 0",
          }}
        >
          <div
            style={{
              flex: "0 0 100px",
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,rgba(201,147,58,0.6))",
            }}
          />

          <div
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(15px,2vw,20px)",
              letterSpacing: "0.3em",
              color: "#E8B94F",
              fontWeight: 600,
            }}
          >
            Romans 6:18
          </div>

          <div
            style={{
              flex: "0 0 100px",
              height: "1px",
              background:
                "linear-gradient(90deg,rgba(201,147,58,0.6),transparent)",
            }}
          />
        </div>

        {/* Quote */}
        <div
          className="a3"
          style={{
            maxWidth: "600px",
            margin: "0 auto 48px",
            fontStyle: "italic",
            fontSize: "clamp(16px,2vw,21px)",
            color: "rgba(245,215,142,0.5)",
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          "Having been set free from sin, you became&nbsp;
          <em
            style={{
              color: "rgba(245,215,142,0.8)",
              fontStyle: "normal",
            }}
          >
            slaves of righteousness.
          </em>
          "
        </div>

        {/* Buttons */}
        <div
        className="a4"
        style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "55px",
            marginBottom: "90px",
        }}
        >
          <a
            href="#register"
            className="cta-btn"
            style={{
              display: "inline-block",
              padding: "17px 56px",
              background:
                "linear-gradient(135deg,#C9933A 0%,#9A6E1A 100%)",
              color: "#FFF8E7",
              fontFamily: "'Cinzel',serif",
              fontSize: "12px",
              letterSpacing: "0.25em",
              textDecoration: "none",
              textTransform: "uppercase",
              border: "1px solid rgba(201,147,58,0.55)",
              borderRadius: "1px",
            }}
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="a5"
        style={{
          position: "absolute",
          bottom: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "9px",
            letterSpacing: "0.35em",
            color: "rgba(201,147,58,0.18)",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Scroll
        </div>

        <div
          style={{
            position: "relative",
            width: "1px",
            height: "28px",
            background:
              "linear-gradient(to bottom,rgba(201,147,58,0.6),transparent)",
            margin: "0 auto",
            animation: "bounce 2.2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}