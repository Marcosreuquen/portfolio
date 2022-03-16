import Footer from "components/Footer";
import Nav from "components/Nav";

const MainLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
