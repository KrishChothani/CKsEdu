import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './JSX/Components/Navbar';
import Footer from './JSX/Components/Footer';
import Sidebar from './JSX/Components/Sidebar';
import { useState } from 'react';
import { useTheme } from './JSX/Context/ThemeContext';
import BackToTop from "/src/BackToTop.jsx";
    // <>
    //   {/* existing layout / routes / pages */}
    //   <BackToTop />    {/* <-- add this line, inside the existing App return */}
    // </>

function App() {
  const { darkMode } = useTheme();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className={`transition-colors duration-300 ${darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900"
          : "bg-gradient-to-br from-indigo-50 via-white to-purple-50"
        }`}>
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <div
          className={`
           transition-all duration-300 ease-in-out
           // On large screens, apply margin to account for the sidebar
           lg:ml-20 ${!isSidebarCollapsed && "lg:ml-64"} 
           // On mobile, sidebar is an overlay, so no margin is needed
         `}
        >
          <Navbar />

          <main className="p-4 pt-24 lg:p-6 lg:pt-28">
            <Outlet />
          </main>

          <BackToTop /> 

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App
