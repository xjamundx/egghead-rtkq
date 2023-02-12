import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { ServicesPage } from "./pages/services/ServicesPage";
import { ServiceDetailsPage } from "./pages/services/ServiceDetailsPage";
import { DogsPage } from "./pages/dogs/DogsPage";
import { ContactPage } from "./pages/contact/ContactPage";
import { TopNav } from "./components/TopNav";
import "./App.css";

function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
