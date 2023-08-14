import {  Footer, Navbar } from "@/components";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className={"min-h-screen bg-white" }>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
