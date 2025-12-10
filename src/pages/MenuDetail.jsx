import { useParams, Link } from "react-router-dom";
import boxes from "../data/boxes.json";

export default function MenuDetail() {
  const { id } = useParams();
  const menu = boxes.find((m) => m.id === parseInt(id));

  if (!menu) {
    return <p className="text-center mt-4">Menu introuvable.</p>;
  }

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-outline-primary mb-4">
        ← Retour
      </Link>

      <div className="text-center mb-4">
        <h1>{menu.nom}</h1>
        <img
          src={`../images/${menu.image}.jpg`}
          alt={menu.nom}
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          className="my-3"
        />
        <p className="fw-bold">{menu.pieces} pièces – {menu.prix}€</p>
      </div>

      {/* Saveurs */}
      <div className="card shadow-sm p-3 mb-4">
        <h3>Saveurs</h3>
        <ul className="list-group list-group-flush">
          {menu.saveurs.map((s, i) => (
            <li key={i} className="list-group-item">
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Aliments */}
      <div className="card shadow-sm p-3 mb-4">
        <h3>Aliments</h3>
        <ul className="list-group list-group-flush">
          {menu.aliments.map((a, i) => (
            <li key={i} className="list-group-item">
              {a.nom} – {a.quantite}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
