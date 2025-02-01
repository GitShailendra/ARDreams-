import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;
  