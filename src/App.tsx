import { Route, Routes } from "react-router-dom";
import "./App.css";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/home";
import AuthLayout from "./layouts/AuthorizedLayout";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Playlist from "./pages/playlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/playlist/:playlistId" element={<Playlist />} />
        </Route>
        <Route path="/me" element={<AuthLayout />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
