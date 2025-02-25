import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet /> {/* This will render the child components for nested routes */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
