import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./accueil.css"; 

export default function Saveurs() {
  const [menus, setMenus] = useState([]);

  // Le useEffect permet de charger les données de tous les menus depuis le fichier JSON
  useEffect(() => {
    fetch("/data/boxes.json")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data); 
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  // création d'une template pour afficher les cards
  const CarteMenu = ({ menu }) => (
    <div className="col-md-3 mb-4 ">
      <div className="card menu-card h-100 text-start hover-shift border-0">
        <div className="card-body shadow">
          <img className="card-img w-100 mb-2" src={`/img/${menu.image}.jpg`} alt={menu.nom} />
          <h4 className="card-title">{menu.nom}</h4>
          <p className="card-text mb-1">Nombre de pièces : {menu.pieces}</p>
          <p className="card-text mb-1">Prix :  {menu.prix} €</p>
        </div>
      </div>
    </div>
  );

  return (
    // Affichage des cards avec le template
    <div className="container py-4">
      <h3 className="text-center mb-5 fw-bold">Nos Menus</h3>
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
