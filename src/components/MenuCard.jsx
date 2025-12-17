import { Link } from "react-router-dom";
import { useState } from "react";

export default function MenuCard({ menu }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={`/menu/${menu.id}`}
      style={{
        textDecoration: "none",
        display: "inline-block",
        transform: hover ? "translateY(-8px) scale(1.05)" : "translateY(0)",
        boxShadow: hover
          ? "0 15px 30px rgba(255, 105, 135, 0.3)"
          : "0 4px 15px rgba(0,0,0,0.1)",
        borderRadius: "15px",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        width: "200px",
        padding: "15px",
        textAlign: "center",
        border: "2px solid #ff6b6b",
        background: "linear-gradient(145deg, #fff5f0, #ffeaea)",
        fontFamily: '"Noto Sans JP", sans-serif',
        color: "#2c2c2c",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={`/images/${menu.image}.jpg`} // public/images pour que ça marche partout
        alt={menu.nom}
        style={{
          width: "60%",
          borderRadius: "50%",
          marginBottom: "10px",
          border: "2px solid #ff6b6b",
        }}
      />
      <h2 style={{ margin: "10px 0", fontSize: "1.2rem" }}>{menu.nom}</h2>
      <p style={{ margin: "5px 0" }}>{menu.pieces} pièces</p>
      <p style={{ margin: "5px 0", fontWeight: "bold" }}>{menu.prix} €</p>
    </Link>
  );
}
