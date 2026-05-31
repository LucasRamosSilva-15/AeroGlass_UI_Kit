import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginDemo from "./pages/LoginDemo.jsx";
import ComponentsShowcase from "./pages/ComponentsShowcase.jsx";
import About from "./pages/About.jsx";
import GlassTransparencyTest from "./pages/GlassTransparencyTest.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<LoginDemo />} path="/login" />
      <Route element={<Navigate replace to="/login" />} path="/login-demo" />
      <Route element={<ComponentsShowcase />} path="/showcase" />
      <Route element={<Navigate replace to="/showcase" />} path="/components" />
      <Route element={<About />} path="/about" />
      <Route element={<Navigate replace to="/about" />} path="/sobre" />
      <Route element={<GlassTransparencyTest />} path="/glass-test" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}
