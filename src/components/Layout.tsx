import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background relative w-full overflow-x-hidden">
      <Navbar />

      {/* Global background glows — behind all content, contained within viewport */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[5%] left-[10%] h-[60vw] max-h-[600px] w-[60vw] max-w-[600px] rounded-full bg-primary/[0.04] blur-[160px]" />
        <div className="absolute top-[30%] right-[5%] h-[50vw] max-h-[500px] w-[50vw] max-w-[500px] rounded-full bg-primary/[0.03] blur-[140px]" />
        <div className="absolute top-[55%] left-[20%] h-[55vw] max-h-[550px] w-[55vw] max-w-[550px] rounded-full bg-primary/[0.04] blur-[150px]" />
        <div className="absolute top-[80%] right-[15%] h-[50vw] max-h-[500px] w-[50vw] max-w-[500px] rounded-full bg-primary/[0.03] blur-[130px]" />
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
