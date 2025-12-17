import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./accueil.css";

export default function AvocatCoriandre() {
  const [menus_cor, setMenus_cor] = useState([]);
  const [menus_avo, setMenus_avo] = useState([]);

  // Permet de récupérer tous les menus contenant "avocat"
  useEffect(() => {
    fetch("/data/boxes.json")
      .then((res) => res.json())
      .then((data) => {
        const menusAvocat = data.filter((s) =>
          s.saveurs.map((saveur) => saveur.toLowerCase()).includes("avocat")
        );
        setMenus_avo(menusAvocat);
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  // Permet de récupérer tous les menus contenant "Coriandre"
  useEffect(() => {
    fetch("/data/boxes.json")
      .then((res) => res.json())
      .then((data) => {
        const menusCoriandre = data.filter((s) =>
          s.saveurs.map((saveur) => saveur.toLowerCase()).includes("coriandre")
        );
        setMenus_cor(menusCoriandre);
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  // template pour afficher les cards
  const CarteMenu = ({ menu }) => (
    <div className="col-md-3 mb-4">
      <div className="card menu-card h-100 text-start border-0">
        <div className="card-body shadow">
          <img className="card-img w-100 mb-2" src={`/img/${menu.image}.jpg`} alt={menu.nom}/>
          <h4 className="card-title">{menu.nom}</h4>
          <p className="card-text mb-1">Prix : {menu.prix} €</p>
          <p className="card-text mb-1">Saveurs :</p>
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
    //afficher les menus avec uniquement avocat ou coriandre
    <div className="container py-4">
      <h3 className="text-center mb-5 fw-bold">Nos Menus Avocat</h3>
      <div className="row">
        {menus_avo.length > 0 ? (
          menus_avo.map((menu) => <CarteMenu key={menu.id} menu={menu} />)
        ) : (
          <p className="text-center">Aucun menu trouvé pour Avocat.</p>
        )}
      </div>
      <h3 className="text-center mb-5 mt-4 fw-bold">Nos Menus Coriandre</h3>
      <div className="row">
        {menus_cor.length > 0 ? (
          menus_cor.map((menu) => <CarteMenu key={menu.id} menu={menu} />)
        ) : (
          <p className="text-center">Aucun menu trouvé pour Coriandre.</p>
        )}
      </div>
    </div>
  );
}
