import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./accueil.css"; 

export default function Inferieur() {
  const [menus, setMenus] = useState([]);

// permet de charger les données du fichier JSON
  useEffect(() => {
    fetch("/data/boxes.json")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

//template
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
          
          <p className="card-text mb-1">Prix : {menu.prix} €</p>
        </div>
      </div>
    </div>
  );
//filtrage des menus avec pieces < 13
  const filteredMenus = menus.filter((m) => m.pieces < 13);
  
//calcul du prix total des menus
  const totalPrice = filteredMenus
    .slice(0, 4)
    .reduce((sum, m) => sum + (m.prix || 0), 0);

  return (
    //affichage des menus
    <div className="container py-4">
      <h3 className="text-center mb-5 fw-bold">Nos Menus Inferieur a 13</h3>
      
      <div className="row">
        {filteredMenus.length > 0 ? (
          filteredMenus.map((menu) => <CarteMenu key={menu.id} menu={menu} />)
        ) : (
          <p className="text-center">Aucun menu trouvé.</p>
        )}
      </div>
      <div className="total">Prix total (4 menus) : <span className="fw-bold">{totalPrice.toFixed(2)} €</span></div>
    </div>
  );
}
