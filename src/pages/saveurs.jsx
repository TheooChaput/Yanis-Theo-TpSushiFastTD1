import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./accueil.css"; 

export default function Saveurs() {
  const [menus, setMenus] = useState([]);

  // Charger les données des menus depuis le fichier JSON
  useEffect(() => {
    fetch("/data/boxes.json")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data); 
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  // Composant pour afficher chaque carte de menu
  const CarteMenu = ({ menu }) => (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card menu-card h-100 text-start border-0">
        <div className="card-body shadow">
          <img className="card-img w-100 mb-2" src={`/img/${menu.image}.jpg`} alt={menu.nom}/>
          <h5 className="card-title">{menu.nom}</h5>
          <p className="card-text">Saveurs :</p>
          <ul className="ps-3 mb-1">
            {menu.saveurs.map((saveur, index) => (
              <li key={index}>{saveur}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    // Affichage de la liste des menus
    <div className="container py-4">
      <h3 className="text-center mb-5 fw-bold">Nos Saveurs</h3>
      <div className="row">
        {menus.length > 0 ? (
          menus.map((menu) => <CarteMenu key={menu.id} menu={menu} />)
        ) : (
          <p className="text-center">Aucun menu trouvé.</p>
        )}
      </div>
    </div>
  );
}
