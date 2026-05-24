export default function Pillars() {
  const cards = [
    {
      num: "I",
      title: "Liberation",
      sub: "From Darkness",
      body:
        "True freedom isn't found in self-rule but in consecrated surrender. Discover the breathtaking paradox — that becoming a slave to righteousness is the only path to genuine liberty from sin's dominion.",
    },
    {
      num: "II",
      title: "Transformation",
      sub: "Of the Soul",
      body:
        "When you yield entirely to God's righteousness, renewal isn't incremental — it is total. Experience the metamorphosis that Scripture promises.",
    },
    {
      num: "III",
      title: "Commission",
      sub: "Eternal Purpose",
      body:
        "Surrendered lives don't diminish — they expand into sacred purpose. Every moment carries kingdom significance.",
    },
  ];

  return (
    <section
      id="pillars"
      style={{
        position: "relative",
        padding: "60px 24px 140px",
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "72px",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "10px",
              letterSpacing: "0.4em",
              color: "#E8B94F",
              textTransform: "uppercase",
              marginBottom: "22px",
            }}
          >
            Three Pillars
          </div>

          <h2
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(26px,4vw,50px)",
              fontWeight: 700,
              color: "#FFF8E7",
              letterSpacing: "0.03em",
            }}
          >
            What Awaits You
          </h2>
        </div>

        <div
          className="cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "24px",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: "52px 40px",
                borderRadius: "3px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "32px",
                }}
              >
                <div
                  className="gold-grad"
                  style={{
                    fontFamily: "'Cinzel',serif",
                    fontSize: "30px",
                    fontWeight: 700,
                  }}
                >
                  {card.num}
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: "28px",
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h3>

              <div
                style={{
                  color: "#E8B94F",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontSize: "11px",
                  marginBottom: "24px",
                  fontFamily: "'Cinzel',serif",
                }}
              >
                {card.sub}
              </div>

              <div
                className="divider"
                style={{
                  marginBottom: "24px",
                }}
              />

              <p
                style={{
                  lineHeight: 1.9,
                  color: "rgba(245,215,142,0.55)",
                  fontSize: "17px",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}