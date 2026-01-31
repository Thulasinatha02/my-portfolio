import { useState } from "react";
import "./Certificates.css";

// Import your 9 certificate images
import cert1 from "../assets/ilife.jpeg";
import cert2 from "../assets/javacerti.jpeg";
import cert3 from "../assets/nullclass.png";
import cert4 from "../assets/openweaver.jpeg";
import cert5 from "../assets/react-cert.png";
import cert6 from "../assets/nss1.jpeg";


const certificates = [
  { id: 1, title: "React JS", issuer: "Coursera", year: "2024", image: cert1 },
  { id: 2, title: "JavaScript", issuer: "Udemy", year: "2023", image: cert2 },
  { id: 3, title: "HTML & CSS", issuer: "freeCodeCamp", year: "2023", image: cert3 },
  { id: 4, title: "Node JS", issuer: "Coursera", year: "2024", image: cert4 },
  { id: 5, title: "Python", issuer: "Udemy", year: "2023", image: cert5 },
  { id: 6, title: "Django", issuer: "Coursera", year: "2023", image: cert6 },
 
];

export default function Certificates() {
  const [showInfo, setShowInfo] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [openCert, setOpenCert] = useState(null);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left + 15,
      y: e.clientY - rect.top + 15,
    });
  }

  return (
    <section id="certificates" className="certificates">
      <section className="Certificates">

      <h2 className="section-title">Certificates</h2>
<p className="section-subtitle">
  My professional learning & achievements
</p>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card"
              onMouseEnter={() => setShowInfo(cert.id)}
              onMouseLeave={() => setShowInfo(null)}
              onMouseMove={handleMouseMove}
              onClick={() => setOpenCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setOpenCert(cert)}
            >
              <img src={cert.image} alt={cert.title} />

              {showInfo === cert.id && (
                <div
                  className="cert-tooltip"
                  style={{ left: cursor.x, top: cursor.y }}
                >
                  <h4>{cert.title}</h4>
                  <p>Issued by {cert.issuer}</p>
                  <span>{cert.year}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {openCert && (
          <div className="cert-modal" onClick={() => setOpenCert(null)}>
            <img src={openCert.image} alt={openCert.title} />
          </div>
        )}

      </section>
    </section>
  );
}
