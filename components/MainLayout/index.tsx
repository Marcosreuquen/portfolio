import Footer from "components/Footer";
import Nav from "components/Nav";

const MainLayout = ({
  children,
  ListItem,
}: {
  children: any;
  ListItem: any;
}) => {
  return (
    <>
      <Nav ListItem={ListItem} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
