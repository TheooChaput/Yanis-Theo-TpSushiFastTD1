import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MenuDetail from "./pages/MenuDetail";
import MenusSaveurs from "./pages/MenusSaveurs";
import MenusPrix from "./pages/MenusPrix";
import PrixMoins13 from "./pages/PrixMoins13";
import MenusSansCalifornia from "./pages/MenusSansCalifornia";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER BOOTSTRAP */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">SushiFast</Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Menus</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menus-saveurs">Saveurs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menus-prix">Prix (Max/Min)</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/prix-menus-13">Pièces inferieur 13</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menus-sans-california">Sans California</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* CONTENU PRINCIPAL */}
        <div className="container mt-4 mb-5" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
            <Route path="/menus-saveurs" element={<MenusSaveurs />} />
            <Route path="/menus-prix" element={<MenusPrix />} />
            <Route path="/menus-sans-california" element={<MenusSansCalifornia />} />
            <Route path="/prix-menus-13" element={<PrixMoins13 />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <footer className="bg-dark text-light text-center py-3">
          <p className="mb-0">© 2025 SushiFast</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
