import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./accueil.css"; 

export default function California() {
  const [menus, setMenus] = useState([]);

  //permet de recuperer les menus sans california saumon avocat
useEffect(() => {
  fetch("/data/boxes.json")
    .then((res) => res.json())
    .then((data) => {
      const menus = data.filter(menu =>
        !menu.aliments.some(a =>
          a.nom.toLowerCase() === "california saumon avocat".toLowerCase()
        )
      );
      
      setMenus(menus);
    })
    .catch((err) => console.error("Erreur de chargement :", err));
}, []);

// template de la carte menu
  const CarteMenu = ({ menu }) => (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card menu-card h-100 text-start border-0">
        <div className="card-body shadow">
          <img className="card-img w-100 mb-2" src={`/img/${menu.image}.jpg`} alt={menu.nom}/>
          <h5 className="card-title">{menu.nom}</h5>
          
          <p className="card-text fw-bold">Aliments :</p>
          <ul className="ps-3">
            {menu.aliments.map((aliment, index) => (
              <li key={index}>{aliment.quantite} - {aliment.nom}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    //affichage des menus sans california saumon avocat
    <div className="container py-4">
      <h3 className="text-center mb-5 fw-bold">Nos Menus Sans California</h3>
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
