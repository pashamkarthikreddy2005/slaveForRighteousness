import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="register"
      style={{
        position: "relative",
        padding: "140px 24px",
        zIndex: 2,
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(201,147,58,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "620px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              letterSpacing: "0.4em",
              color: "#E8B94F",
              textTransform: "uppercase",
              marginBottom: "22px",
            }}
          >
            Sacred Registration
          </div>

          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(34px,5vw,58px)",
              color: "#FFF8E7",
              marginBottom: "18px",
              lineHeight: 1.1,
            }}
          >
            Join the Mission
          </h2>

          <p
            style={{
              color: "rgba(245,215,142,0.55)",
              fontSize: "18px",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            Step out of darkness and walk into righteousness.
          </p>
        </div>

        {/* Glass Card */}
        <div
          style={{
            position: "relative",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(201,147,58,0.18)",
            borderRadius: "28px",
            padding: "60px 42px",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            overflow: "hidden",
            boxShadow:
              "0 0 80px rgba(0,0,0,0.55), 0 0 40px rgba(201,147,58,0.08)",
          }}
        >
          {/* Top glow */}
          <div
            style={{
              position: "absolute",
              top: "-120px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(245,215,142,0.14), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {submitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "30px 0",
              }}
            >
              <div
                className="gold-grad"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "42px",
                  marginBottom: "20px",
                  fontWeight: 700,
                }}
              >
                Registered
              </div>

              <p
                style={{
                  color: "rgba(245,215,142,0.6)",
                  fontSize: "18px",
                  lineHeight: 1.8,
                }}
              >
                Welcome, {formData.name}.  
                Your journey toward righteousness begins now.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "26px",
              }}
            >
              {/* Input */}
              {[
                {
                  key: "name",
                  type: "text",
                  placeholder: "Full Name",
                },
                {
                  key: "email",
                  type: "email",
                  placeholder: "Email Address",
                },
                {
                  key: "phone",
                  type: "text",
                  placeholder: "Phone Number",
                },
              ].map((field) => (
                <div key={field.key}>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.key]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.key]: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "20px 22px",
                      borderRadius: "16px",
                      border:
                        "1px solid rgba(201,147,58,0.15)",
                      background:
                        "linear-gradient(to bottom right, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                      color: "#FFF8E7",
                      fontSize: "17px",
                      outline: "none",
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      transition: "all 0.35s ease",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.target.style.border =
                        "1px solid rgba(245,215,142,0.5)";
                      e.target.style.boxShadow =
                        "0 0 24px rgba(201,147,58,0.18)";
                      e.target.style.background =
                        "rgba(255,255,255,0.06)";
                    }}
                    onBlur={(e) => {
                      e.target.style.border =
                        "1px solid rgba(201,147,58,0.15)";
                      e.target.style.boxShadow = "none";
                      e.target.style.background =
                        "linear-gradient(to bottom right, rgba(255,255,255,0.04), rgba(255,255,255,0.015))";
                    }}
                  />
                </div>
              ))}

              {/* Button */}
              <button
                type="submit"
                className="cta-btn"
                style={{
                  marginTop: "14px",
                  padding: "22px",
                  border: "none",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg, #D6A03D 0%, #9A6E1A 100%)",
                  color: "#FFF8E7",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontWeight: 700,
                  boxShadow:
                    "0 0 40px rgba(201,147,58,0.28)",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform =
                    "translateY(-4px) scale(1.02)";
                  e.target.style.boxShadow =
                    "0 0 60px rgba(201,147,58,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform =
                    "translateY(0) scale(1)";
                  e.target.style.boxShadow =
                    "0 0 40px rgba(201,147,58,0.28)";
                }}
              >
                Register Now
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}