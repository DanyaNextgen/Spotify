import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import BaseLayout from "@/layouts/BaseLayout";
import AuthorizedLayout from "@/layouts/AuthorizedLayout";
import Login from "@/pages/login";
import SpotifyDashboard from "./pages/SpotifyDashboard";


function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <BaseLayout /> : <Navigate to="/login" />} >
        <Route index element={<SpotifyDashboard />} />
      </Route>

      <Route path="/me" element={<AuthorizedLayout />}>
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
