import {  Footer, Navbar } from "@/components";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className={"min-h-[100vh] bg-black " }>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
