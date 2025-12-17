import { useParams, Link } from "react-router-dom";
import boxes from "../data/boxes.json";

export default function MenuDetail() {
  const { id } = useParams();
  const menu = boxes.find((m) => m.id === parseInt(id));

  if (!menu) {
    return <p className="text-center mt-4">Menu introuvable.</p>;
  }

  return (
    <div className="container my-5" style={{ fontFamily: '"Noto Sans JP", sans-serif' }}>
      <Link
        to="/"
        className="btn"
        style={{
          border: "2px solid #ff6b6b",
          color: "#ff6b6b",
          background: "transparent",
          borderRadius: "8px",
          padding: "5px 15px",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#ff6b6b") && (e.currentTarget.style.color = "#fff")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent") && (e.currentTarget.style.color = "#ff6b6b")}
      >
        ← Retour
      </Link>

      <div className="text-center my-4">
        <h1 style={{ fontWeight: "700", fontSize: "2rem" }}>{menu.nom}</h1>
        <img
          src={`/images/${menu.image}.jpg`} // public/images pour être sûr que ça marche partout
          alt={menu.nom}
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "15px",
            objectFit: "cover",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
          className="my-3"
        />
        <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#ff6b6b" }}>
          {menu.pieces} pièces – {menu.prix}€
        </p>
      </div>

      {/* Saveurs */}
      <div
        className="card mb-4"
        style={{
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          border: "2px solid #ffdede",
          padding: "20px",
          background: "linear-gradient(145deg, #ffffffff, #ffffffff)",
        }}
      >
        <h3 style={{ color: "#ff6b6b", marginBottom: "15px" }}>Saveurs</h3>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {menu.saveurs.map((s, i) => (
            <li
              key={i}
              style={{
                background: "#ff6b6b",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "20px",
                fontSize: "0.9rem",
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Aliments */}
      <div
        className="card mb-4"
        style={{
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          border: "2px solid #ffdede",
          padding: "20px",
          background: "linear-gradient(145deg, #ffffffff, #ffffffff)",
        }}
      >
        <h3 style={{ color: "#ff6b6b", marginBottom: "15px" }}>Aliments</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {menu.aliments.map((a, i) => (
            <li
              key={i}
              style={{
                background: "#ffffffff",
                padding: "8px 12px",
                borderRadius: "10px",
                marginBottom: "8px",
                border: "1px solid #ffdad5",
              }}
            >
              {a.nom} – {a.quantite}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
