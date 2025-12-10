import { Link } from "react-router-dom";

export default function MenuCard({ menu }) {
  return (
    <Link to={`/menu/${menu.id}`} style={{ textDecoration: "none", color: "black" }}>
      <div style={{
        border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      textAlign: "center",
      width: "200px"
      }}>
        <img
          src={`../images/${menu.image}.jpg`}
          alt={menu.nom}
          style={{ width: "50%", borderRadius: "2px" }}
        />

        <h2>{menu.nom}</h2>
        <p>{menu.pieces} pièces</p>
        <p><strong>{menu.prix} €</strong></p>
      </div>
    </Link>
  );
}
