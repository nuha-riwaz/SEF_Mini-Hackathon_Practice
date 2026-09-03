import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tasks from "./pages/Tasks.jsx";

function App() {
  return (
    <>
      <nav className="navbar">
        <strong>Hackathon Starter</strong>

        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
