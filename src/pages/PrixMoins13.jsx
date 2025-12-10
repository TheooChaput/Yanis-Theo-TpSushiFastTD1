import { useNavigate } from "react-router-dom";
import boxes from "../data/boxes.json";

export default function PrixMoins13() {
  const navigate = useNavigate();

  // Filtrer les menus avec moins de 13 pièces
  const menusMoins13 = boxes.filter(menu => menu.pieces < 13);

  // Calculer le prix total
  const prixTotal = menusMoins13.reduce((total, menu) => total + menu.prix, 0);

  return (
    <div className="my-5">
      <h1 className="text-center mb-4" style={{ fontSize: "2rem" }}>
        Commande – Menus avec moins de 13 pièces
      </h1>

      <h2 className="text-center mb-4">Liste des menus concernés</h2>

      <div className="row">
        {menusMoins13.map(menu => (
          <div key={menu.id} className="col-md-4 mb-4">
            <div
              className="card shadow-sm p-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/menu/${menu.id}`)}
            >
              <img
                src={`../images/${menu.image}.jpg`}
                alt={menu.nom}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <h5 className="mt-2">{menu.nom}</h5>
              <p>{menu.pieces} pièces</p>
              <p className="fw-bold">{menu.prix}€</p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2 className="text-center mt-4">Prix total à payer :</h2>
      <p className="text-center" style={{ fontSize: "22px", fontWeight: "bold" }}>
        {prixTotal.toFixed(2)} €
      </p>
    </div>
  );
}
