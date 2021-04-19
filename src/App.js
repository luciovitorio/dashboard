import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
    </div>
  );
};

export default App;
