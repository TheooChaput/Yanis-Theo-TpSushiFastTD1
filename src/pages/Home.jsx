import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <--- pour navigation
import data from "../data/boxes.json";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredMenus = data.filter(menu =>
    menu.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* HERO */}
      <div className="text-center my-5">
        <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
          Découvrez nos Sushis
        </h1>
        <p className="text-secondary mb-4" style={{ fontSize: "1.2rem" }}>
          Les meilleurs du monde. 
        </p>
        {/* BARRE DE RECHERCHE */}
        <div className="d-flex justify-content-center">
          <div className="input-group shadow" style={{ maxWidth: "700px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher un menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ height: "50px", borderRadius: "10px 0 0 10px" }}
            />
            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
      </div>

      {/* LISTE DES MENUS */}
      <div className="row">
        {filteredMenus.map((menu) => (
          <div key={menu.id} className="col-md-4 mb-4">
            <div
              className="card shadow-sm p-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/menu/${menu.id}`)} // <--- clic
            >
              <img
                src={`../images/${menu.image}.jpg`}
                alt={menu.nom}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  objectFit: "cover"
                }}
              />
              <h5>{menu.nom}</h5>
              <p>{menu.pieces} pièces</p>
              <p className="fw-bold">{menu.prix}€</p>
            </div>
          </div>
        ))}

        {filteredMenus.length === 0 && (
          <p className="text-center mt-4">Aucun menu trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
