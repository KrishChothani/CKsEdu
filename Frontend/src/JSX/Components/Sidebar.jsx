import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Bot,
  BookOpen,
  MessageCircle,
  FileQuestion,
  Calendar,
  FolderOpen,
  Heart,
  Trophy,
  Home,
  ChevronDown,
  ChevronUp,
  Inbox,
  Send,
  Pencil
} from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  { name: "Home", id: "home", icon: Home, href: "/app" },
  { name: "Mentoring", id: "mentoring", icon: Users, href: "/app/mentoring" },
  { name: "AIAssist", id: "ai-assist", icon: Bot, href: "/app/ai-assist" },
  { name: "E-Library", id: "e-library", icon: BookOpen, href: "/e-library" },
  {
    name: "Student Chat",
    id: "student-chat",
    icon: MessageCircle,
    href: "/student-chat",
  },
  {
    name: "Email",
    id: "email",
    icon: MessageCircle,
    children: [
      { name: "Inbox", id: "inbox", icon: Inbox, href: "/app/email/inbox" },
      { name: "Sent", id: "sent", icon: Send, href: "/app/email/sent" },
      // { name: "Compose", id: "compose", icon: Pencil, href: "/app/email/compose" }
    ]
  },
  { name: "Quizzes", id: "quizzes", icon: FileQuestion, href: "/quizzes" },
  { name: "Events", id: "events", icon: Calendar, href: "/events" },
  {
    name: "Resources",
    id: "resources",
    icon: FolderOpen,
    href: "/app/resources",
  },
  { name: "Counseling", id: "counseling", icon: Heart, href: "/counseling" },
  { name: "Leaderboard", id: "leaderboard", icon: Trophy, href: "/leaderboard" },
];

const Sidebar = ({ isCollapsed, setIsCollapsed, activeSection, onSectionChange }) => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMenu = (id) => {
    setExpandedMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNavClick = (sectionId, href) => {
    onSectionChange(sectionId);
    navigate(href);
    if (window.innerWidth < 1024) {
      setIsCollapsed(true);
    }
  };

  return (
    <>
      <aside
        className={`
          fixed left-4 z-40
          top-1/2 -translate-y-1/2
          transition-all duration-300 ease-in-out
          ${darkMode
            ? "bg-gray-800/20 backdrop-blur-lg shadow-lg border border-gray-700/30"
            : "bg-white/20 backdrop-blur-lg shadow-lg border border-white/30"}
          rounded-2xl
          ${isCollapsed ? "w-20" : "w-64"}
        `}
      >
        <div className="p-2">
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const hasChildren = Array.isArray(item.children);
              const isExpanded = expandedMenus[item.id];

              return (
                <div key={item.id}>
                  <button
                    onClick={() =>
                      hasChildren
                        ? toggleMenu(item.id)
                        : handleNavClick(item.id, item.href)
                    }
                    className={`
                      w-full flex items-center p-3 rounded-lg
                      transition-all duration-200 text-left
                      ${isActive
                        ? darkMode
                          ? "bg-blue-600/40 text-white font-semibold shadow-sm"
                          : "bg-white/40 text-slate-900 font-semibold shadow-sm"
                        : darkMode
                          ? "text-gray-300 hover:bg-gray-700/30 hover:text-white"
                          : "text-slate-700 hover:bg-white/20 hover:text-slate-900"}
                      ${isCollapsed ? "justify-center" : ""}
                    `}
                    title={isCollapsed ? item.name : ""}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className="ml-4 text-sm font-medium flex-1">
                          {item.name}
                        </span>
                        {hasChildren &&
                          (isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                      </>
                    )}
                  </button>

                  {/* Submenu */}
                  {!isCollapsed && hasChildren && isExpanded && (
                    <ul className="pl-10 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li
                          key={child.id}
                          onClick={() => handleNavClick(child.id, child.href)}
                          className={`
                            flex items-center gap-2 text-sm p-2 rounded-md cursor-pointer
                            transition-colors duration-150
                            ${activeSection === child.id
                              ? "bg-blue-500/30 font-medium text-blue-700"
                              : darkMode
                                ? "text-gray-300 hover:bg-gray-700/20"
                                : "text-slate-700 hover:bg-gray-100"}
                          `}
                        >
                          <child.icon size={16} />
                          <span>{child.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className={`
            absolute top-1/2 -translate-y-1/2 -right-4
            w-8 h-8 rounded-full flex items-center justify-center
            transition-all duration-200
            ${darkMode
              ? "bg-gray-800/20 backdrop-blur-lg shadow-md border border-gray-700/30 hover:bg-gray-700/40"
              : "bg-white/20 backdrop-blur-lg shadow-md border border-white/30 hover:bg-white/40"}
          `}
        >
          {isCollapsed ? (
            <ChevronRight className={`w-5 h-5 ${darkMode ? "text-gray-300" : "text-slate-700"}`} />
          ) : (
            <ChevronLeft className={`w-5 h-5 ${darkMode ? "text-gray-300" : "text-slate-700"}`} />
          )}
        </button>
      </aside>

      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
