import { useState } from "react";
import "./Certificates.css";

// Import your 9 certificate images
import cert1 from "../assets/ilife.jpeg";
import cert2 from "../assets/javacerti.jpeg";
import cert3 from "../assets/openweaver.jpeg";
import cert4 from "../assets/nullclass.png";
import cert5 from "../assets/symposiyum.jpeg";
import cert6 from "../assets/mongodb.png";
import cert7 from "../assets/iotpart.jpeg";
import cert8 from "../assets/react-cert.png";
import cert9 from "../assets/nss1.jpeg";

const certificates = [
  { id: 1, title: "ilife Intership", issuer:"ilife", year: "2022", image: cert1 },
  { id: 2, title: "Core Java Programming Quiz", issuer: "Nehru Memorial College", year: "2022", image: cert2 },
  { id: 3, title: "HTML & CSS", issuer: "Openweaver", year: "2023", image: cert3 },
  { id: 4, title: "Real Time Website Building", issuer: "NULLCLASS", year: "2025", image: cert4 },
  { id: 5, title: "Symposium", issuer: "BharathiDasan University", year: "2025", image: cert5 },
  { id: 6, title: "RAG With Mongodb", issuer: "Mongodb", year: "2025", image: cert6 },
  { id: 7, title: "IOT", issuer: "DHANALAKSHMI SRINIVASAN ENGINEERING COLLEGE Perambalur", year: "2025", image: cert7 },
  { id: 8, title: "NSS", issuer: "Goverment Of India", year: "2022", image: cert8},
  { id: 9, title: "NSS", issuer: "Bishop Heber College", year: "2022", image: cert9 },
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
