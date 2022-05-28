// components
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Orders from "../pages/Orders";

const Layout = ({ children }) => {
  return (
    <>
      <Orders />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
