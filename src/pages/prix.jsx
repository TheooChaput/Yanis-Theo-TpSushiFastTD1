import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./accueil.css";

export default function Prix() {
  const [menus, setMenus] = useState([]);
  const [menuMax, setMenuMax] = useState(null);
  const [menuMin, setMenuMin] = useState(null);

  // Charger les données des menus depuis le fichier JSON du menu le plus cher et le moins cher
  useEffect(() => {
    fetch("/data/boxes.json")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);

        const maxMenu = data.reduce((max, m) => (m.prix > max.prix ? m : max), data[0]);
        const minMenu = data.reduce((min, m) => (m.prix < min.prix ? m : min), data[0]);

        setMenuMax(maxMenu);
        setMenuMin(minMenu);
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  //template carte menu
const Carte = ({ menu }) => (
  <div className="col-12 mb-5">
    <div className="card p-4 shadow-lg border-0 w-100 border-0">

      <div className="row align-items-center">

        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={`/img/${menu.image}.jpg`}  alt={menu.nom}  className="img-fluid rounded"  style={{ width: "320px", objectFit: "cover" }}
          />
        </div>
        <div className="col-12 col-md-4">
          <h3 className="fw-bold mb-3">{menu.nom}</h3>
          <p className="mb-1"><strong>Prix :</strong> {menu.prix} €</p>
          <p className="mb-1"><strong>Pièces :</strong> {menu.pieces}</p>

          <p className="mt-3 mb-1 fw-bold">Saveurs :</p>
          <ul>
            {menu.saveurs.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-4">
          <p className="fw-bold mb-1">Aliments :</p>
          <ul>
            {menu.aliments.map((a, i) => (
              <li key={i}>{a.nom} — {a.quantite}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </div>
);



  return (
    //affichage des menus le plus cher et le moins cher
    <div className="container py-4">

      <h3 className="text-center mb-4 fw-bold">Le menu le plus cher</h3>
      <div className="row">
        {menuMax ? <Carte menu={menuMax} /> : <p>Aucun menu trouvé.</p>}
      </div>

      <h3 className="text-center mt-5 mb-4 fw-bold">Le menu le moins cher</h3>
      <div className="row">
        {menuMin ? <Carte menu={menuMin} /> : <p>Aucun menu trouvé.</p>}
      </div>

    </div>
  );
}
