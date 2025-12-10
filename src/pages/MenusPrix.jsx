import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/boxes.json";

function MenusPrix() {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMenus(data);
  }, []);

  if (menus.length === 0) return <p className="text-center">Aucun menu disponible.</p>;

  const menuMax = [...menus].sort((a, b) => b.prix - a.prix)[0];
  const menuMin = [...menus].sort((a, b) => a.prix - b.prix)[0];

  return (
    <div className="my-5">
      <h2 className="text-center mb-4" style={{ fontSize: "2rem" }}>
        Menu le plus cher & le moins cher
      </h2>

      <div className="row justify-content-center">
        {/* Menu le plus cher */}
        <div className="col-md-4 mb-4">
          <div
            className="card shadow-sm p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/menu/${menuMax.id}`)}
          >
            <img
              src={`../images/${menuMax.image}.jpg`}
              alt={menuMax.nom}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-2">{menuMax.nom}</h5>
            <p>{menuMax.pieces} pièces</p>
            <p className="fw-bold">{menuMax.prix}€</p>
          </div>
        </div>

        {/* Menu le moins cher */}
        <div className="col-md-4 mb-4">
          <div
            className="card shadow-sm p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/menu/${menuMin.id}`)}
          >
            <img
              src={`../images/${menuMin.image}.jpg`}
              alt={menuMin.nom}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-2">{menuMin.nom}</h5>
            <p>{menuMin.pieces} pièces</p>
            <p className="fw-bold">{menuMin.prix}€</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenusPrix;
