import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Contact Us - NovaTech Pro" },
    { name: "description", content: "Get in touch with NovaTech Pro. We're here to help!" },
  ];
};

export async function loader() {
  return json({
    contact: {
      address: "123 Innovation Drive, Tech Valley, CA 94025",
      email: "hello@novatech.pro",
      phone: "+1 (555) 123-4567",
      supportPhone: "+1 (555) 123-4568"
    }
  });
}

export default function Contact() {
  const { contact } = useLoaderData();

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }}>
      {/* Header Section */}
      <div style={{
        textAlign: "center",
        padding: "60px 20px 40px",
        color: "white"
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
        }}>
          Contact Us
        </h1>
        <p style={{
          fontSize: "1.2rem",
          marginBottom: "20px",
          opacity: 0.95
        }}>
          We'd love to hear from you! Get in touch with our team.
        </p>
      </div>

      {/* Main Content */}
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        padding: "60px 20px",
        borderRadius: "30px 30px 0 0",
        minHeight: "calc(100vh - 200px)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {/* Contact Information */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginBottom: "60px"
          }}>
            <div style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "15px"
              }}>
                📍
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                color: "#333",
                marginBottom: "10px",
                fontWeight: "600"
              }}>
                Address
              </h3>
              <p style={{
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.6"
              }}>
                {contact.address}
              </p>
            </div>

            <div style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "15px"
              }}>
                ✉️
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                color: "#333",
                marginBottom: "10px",
                fontWeight: "600"
              }}>
                Email
              </h3>
              <p style={{
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.6"
              }}>
                <a href={`mailto:${contact.email}`} style={{
                  color: "#667eea",
                  textDecoration: "none"
                }}>
                  {contact.email}
                </a>
              </p>
            </div>

            <div style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "15px"
              }}>
                📞
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                color: "#333",
                marginBottom: "10px",
                fontWeight: "600"
              }}>
                Phone
              </h3>
              <p style={{
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.6",
                margin: 0
              }}>
                Sales: <a href={`tel:${contact.phone}`} style={{
                  color: "#667eea",
                  textDecoration: "none"
                }}>{contact.phone}</a>
              </p>
              <p style={{
                fontSize: "1rem",
                color: "#666",
                lineHeight: "1.6",
                marginTop: "5px"
              }}>
                Support: <a href={`tel:${contact.supportPhone}`} style={{
                  color: "#667eea",
                  textDecoration: "none"
                }}>{contact.supportPhone}</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            <h2 style={{
              fontSize: "2rem",
              color: "#333",
              marginBottom: "30px",
              textAlign: "center"
            }}>
              Send Us a Message
            </h2>
            
            <form style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              <div>
                <label htmlFor="name" style={{
                  display: "block",
                  fontSize: "1rem",
                  color: "#333",
                  marginBottom: "8px",
                  fontWeight: "500"
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "1rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#667eea"}
                  onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                />
              </div>

              <div>
                <label htmlFor="email" style={{
                  display: "block",
                  fontSize: "1rem",
                  color: "#333",
                  marginBottom: "8px",
                  fontWeight: "500"
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "1rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#667eea"}
                  onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                />
              </div>

              <div>
                <label htmlFor="subject" style={{
                  display: "block",
                  fontSize: "1rem",
                  color: "#333",
                  marginBottom: "8px",
                  fontWeight: "500"
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "1rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#667eea"}
                  onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                />
              </div>

              <div>
                <label htmlFor="message" style={{
                  display: "block",
                  fontSize: "1rem",
                  color: "#333",
                  marginBottom: "8px",
                  fontWeight: "500"
                }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "1rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "8px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    resize: "vertical",
                    fontFamily: "inherit",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#667eea"}
                  onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#10b981",
                  color: "white",
                  border: "none",
                  padding: "15px 40px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  borderRadius: "50px",
                  cursor: "pointer",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  marginTop: "10px"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 12px 24px rgba(0,0,0,0.3)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Back to Home Link */}
          <div style={{
            textAlign: "center",
            marginTop: "40px"
          }}>
            <Link to="/" style={{
              color: "#667eea",
              fontSize: "1.1rem",
              textDecoration: "none",
              fontWeight: "500",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
