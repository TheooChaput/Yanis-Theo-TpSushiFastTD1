import { useNavigate } from "react-router-dom";
import boxes from "../data/boxes.json";

export default function MenusSansCalifornia() {
  const navigate = useNavigate();

  // Filtre menu PAS l'aliment California Saumon Avocat
  const menusFiltres = boxes.filter(
    (menu) =>
      !menu.aliments.some((a) => a.nom === "California Saumon Avocat")
  );

  return (
    <div className="my-5">
      <h2 className="text-center mb-4" style={{ fontSize: "2rem" }}>
        Menus SANS “California Saumon Avocat”
      </h2>

      <div className="row">
        {menusFiltres.length === 0 && (
          <p className="text-center mt-4">Aucun menu trouvé.</p>
        )}

        {menusFiltres.map((menu) => (
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
              <h5>{menu.nom}</h5>
              <p>{menu.pieces} pièces</p>
              <p className="fw-bold">{menu.prix}€</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
