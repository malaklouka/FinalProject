import { useState } from "react";
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";


const Dashboard= () => {

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
    </div>
  );
};

export default Dashboard;