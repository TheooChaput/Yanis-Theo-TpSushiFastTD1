import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./accueil.css";

export default function Aliments() {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Le useEffect permet de charger les données de tous les menus depuis le fichier JSON
  useEffect(() => {
    fetch("/data/boxes.json")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  // pop qui va servrir a afficher le detail des aliments 
  const popup = (menu) => setSelectedMenu(menu);
  const popout = () => setSelectedMenu(null);

  // création d'une template pour afficher les cards
  const CarteMenu = ({ menu }) => (
    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card menu-card h-100 text-start hover border-0 clickable-card"
        
        onClick={() => popup(menu)}
  
      >
        <div className="card-body shadow">
          <img className="card-img w-100 mb-2" src={`/img/${menu.image}.jpg`} alt={menu.nom} />
          <h5 className="card-title">{menu.nom}</h5>
          <p className="text-muted small">Cliquez pour voir le détail des aliments</p>
        </div>
      </div>
    </div>
  );

  return (
    // Affichage des cards avec le template avec la liste des aliments en pop up
    <div className="container py-4">
      <h3 className="text-center mb-5 fw-bold">Nos Menus</h3>
      <div className="row">
        {menus.length > 0 ? (
          menus.map((menu) => <CarteMenu key={menu.id} menu={menu} />)
        ) : (
          <p className="text-center">Aucun menu trouvé.</p>
        )}
      </div>
      
      {selectedMenu && (
        <div className="bg-popup" onClick={popout}>
          <div className="popup-overlay" onClick={(e) => e.stopPropagation()}>
            <button className="croix-fermer" onClick={popout}>
              ×
            </button>
            <div>
              <h4 className="mb-3">{selectedMenu.nom}</h4>
              <p className="fw-bold">Aliments :</p>
              <ul className="ps-3">
                {selectedMenu.aliments.map((aliment, idx) => (
                  <li key={idx}>
                    {aliment.quantite} - {aliment.nom}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
