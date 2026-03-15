import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background relative w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />

      {/* Global background glows — centered to avoid overflow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 h-[50vw] max-h-[500px] w-[70vw] max-w-[500px] rounded-full bg-primary/[0.04] blur-[140px]" />
        <div className="absolute top-[35%] left-1/2 -translate-x-[30%] h-[40vw] max-h-[400px] w-[50vw] max-w-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute top-[60%] left-1/2 -translate-x-[70%] h-[45vw] max-h-[450px] w-[55vw] max-w-[450px] rounded-full bg-primary/[0.04] blur-[130px]" />
        <div className="absolute top-[85%] left-1/2 -translate-x-1/2 h-[40vw] max-h-[400px] w-[50vw] max-w-[400px] rounded-full bg-primary/[0.03] blur-[110px]" />
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
