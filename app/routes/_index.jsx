import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Product Launch - Revolutionary New Product" },
    { name: "description", content: "Discover our revolutionary new product that will change your life!" },
  ];
};

export async function loader() {
  return json({
    product: {
      name: "NovaTech Pro",
      tagline: "Innovation Meets Excellence",
      description: "Experience the future today with our groundbreaking product designed to revolutionize the way you work and live.",
      features: [
        "Cutting-edge AI technology",
        "Seamless integration with your workflow",
        "24/7 premium customer support",
        "Industry-leading performance"
      ],
      launchDate: "Coming Soon",
      pricingTiers: [
        {
          name: "Starter",
          price: "$199",
          description: "Perfect for individuals",
          features: ["Basic AI features", "Email support", "5 projects"]
        },
        {
          name: "Pro",
          price: "$299",
          description: "Most popular choice",
          features: ["Advanced AI features", "Priority support", "Unlimited projects", "Team collaboration"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "$599",
          description: "For large organizations",
          features: ["Full AI suite", "24/7 dedicated support", "Unlimited everything", "Custom integrations", "SLA guarantee"]
        }
      ]
    }
  });
}

export default function Index() {
  const { product } = useLoaderData();

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: "center",
        padding: "80px 20px",
        color: "white"
      }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
        }}>
          {product.name}
        </h1>
        <p style={{
          fontSize: "1.5rem",
          marginBottom: "40px",
          opacity: 0.95
        }}>
          {product.tagline}
        </p>
        <p style={{
          fontSize: "1.1rem",
          maxWidth: "700px",
          margin: "0 auto 40px",
          lineHeight: "1.6",
          opacity: 0.9
        }}>
          {product.description}
        </p>
        <button style={{
          backgroundColor: "#ff6b6b",
          color: "white",
          border: "none",
          padding: "18px 45px",
          fontSize: "1.1rem",
          fontWeight: "600",
          borderRadius: "50px",
          cursor: "pointer",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          transition: "transform 0.2s, box-shadow 0.2s"
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 12px 24px rgba(0,0,0,0.3)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
        }}>
          Get Early Access
        </button>
      </div>

      {/* Features Section */}
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        padding: "60px 20px",
        borderRadius: "30px 30px 0 0"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#333",
          marginBottom: "50px"
        }}>
          Key Features
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {product.features.map((feature, index) => (
            <div key={index} style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.2s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}>
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "15px"
              }}>
                ✨
              </div>
              <p style={{
                fontSize: "1.1rem",
                color: "#555",
                margin: 0
              }}>
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div style={{
          textAlign: "center",
          marginTop: "80px",
          padding: "40px 20px"
        }}>
          <h2 style={{
            fontSize: "2rem",
            color: "#333",
            marginBottom: "50px"
          }}>
            Special Launch Pricing
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {product.pricingTiers.map((tier, index) => (
              <div key={index} style={{
                backgroundColor: tier.popular ? "#667eea" : "white",
                color: tier.popular ? "white" : "#333",
                padding: "40px 30px",
                borderRadius: "15px",
                boxShadow: tier.popular ? "0 8px 24px rgba(102, 126, 234, 0.4)" : "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "transform 0.2s",
                position: "relative",
                transform: tier.popular ? "scale(1.05)" : "scale(1)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = tier.popular ? "scale(1.08)" : "translateY(-5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = tier.popular ? "scale(1.05)" : "translateY(0)";
              }}>
                {tier.popular && (
                  <div style={{
                    position: "absolute",
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#ff6b6b",
                    color: "white",
                    padding: "5px 20px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "600"
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "10px",
                  fontWeight: "bold"
                }}>
                  {tier.name}
                </h3>
                <p style={{
                  fontSize: "0.95rem",
                  opacity: 0.8,
                  marginBottom: "20px"
                }}>
                  {tier.description}
                </p>
                <div style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "10px"
                }}>
                  {tier.price}
                </div>
                <p style={{
                  fontSize: "0.9rem",
                  opacity: 0.7,
                  marginBottom: "30px"
                }}>
                  {product.launchDate}
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 30px 0",
                  textAlign: "left"
                }}>
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{
                      padding: "10px 0",
                      fontSize: "0.95rem",
                      opacity: 0.9,
                      borderBottom: fIndex < tier.features.length - 1 ? `1px solid ${tier.popular ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` : "none"
                    }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <button style={{
                  backgroundColor: tier.popular ? "white" : "#667eea",
                  color: tier.popular ? "#667eea" : "white",
                  border: "none",
                  padding: "15px 40px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  borderRadius: "50px",
                  cursor: "pointer",
                  width: "100%",
                  boxShadow: tier.popular ? "0 4px 12px rgba(0,0,0,0.2)" : "0 4px 12px rgba(102, 126, 234, 0.3)"
                }}
                onMouseOver={(e) => {
                  e.target.style.opacity = "0.9";
                }}
                onMouseOut={(e) => {
                  e.target.style.opacity = "1";
                }}>
                  Notify Me
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
