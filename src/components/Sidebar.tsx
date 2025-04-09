import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path: string) =>
    `block text-xl px-2 py-1 ${
      location.pathname === path
        ? "text-black border-l-4 border-[#6a4133] bg-[#f8f4f2]"
        : "text-[#6C6960] hover:text-black"
    }`;

  const desktopLinkClass = (path: string) =>
    `block text-[22px] pl-6 px-4 py-3 rounded ${
      location.pathname === path
        ? "text-black bg-[#f8f4f2] border-l-4 border-[#6a4133]"
        : "text-[#6C6960] hover:bg-gray-100 hover:text-black"
    }`;

  const isMainActive = location.pathname === "/";

  return (
    <aside className="md:w-96 w-full bg-white px-4 py-4 md:border-t-12 md:border-[#D0D0D0] border-b border-[#d5c1ba]">
      <div className="md:hidden flex justify-between items-center">
        <Link to="/" className={`text-2xl font-semibold ${isMainActive ? "text-black border-l-4 border-[#6a4133] pl-2 pr-2 bg-[#f8f4f2]" : "text-black"}`}>
          Список програм
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden space-y-4 mt-4">
          <div className="pt-6 border-t border-[#d5c1ba]">
            <div className="text-2xl font-semibold">Загальна інформація</div>
            <ul className="mt-2 space-y-1">
              <li><Link to="/organization" className={linkClass("/organization")}>Організація тренувань</Link></li>
              <li><Link to="/newcomers" className={linkClass("/newcomers")}>Для новачків</Link></li>
              <li><Link to="/nutrition" className={linkClass("/nutrition")}>Харчування</Link></li>
              <li><Link to="/author" className={linkClass("/author")}>Про автора</Link></li>
              <li><Link to="/coworking" className={linkClass("/coworking")}>Співпраця з нами</Link></li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[#d5c1ba]">
            <div className="text-2xl font-semibold">Види циклів</div>
            <ul className="mt-2 space-y-1">
              <li><Link to="/strength" className={linkClass("/strength")}>Силовий</Link></li>
              <li><Link to="/hypertrophy" className={linkClass("/hypertrophy")}>Гіпертрофія</Link></li>
              <li><Link to="/endurance" className={linkClass("/endurance")}>Силова витривалість</Link></li>
              <li><Link to="/recovery" className={linkClass("/recovery")}>Відновлювальний</Link></li>
            </ul>
          </div>
        </div>
      )}

      <div className="hidden md:block">
        <Link to="/">
          <div className={`text-4xl rounded-md font-semibold p-6 cursor-pointer ${
            isMainActive ? "text-black bg-[#f8f4f2] border-l-4 border-[#6a4133] pl-8" : ""
          }`}>
            Список програм
          </div>
        </Link>
        <div className="pt-8 pb-8 border-b border-[#d5c1ba]">
          <div className="text-3xl font-semibold pl-6">Загальна інформація</div>
          <ul className="mt-[10px]">
            <li><Link to="/organization" className={desktopLinkClass("/organization")}>Організація тренувань</Link></li>
            <li><Link to="/newcomers" className={desktopLinkClass("/newcomers")}>Для новачків</Link></li>
            <li><Link to="/nutrition" className={desktopLinkClass("/nutrition")}>Харчування</Link></li>
            <li><Link to="/author" className={desktopLinkClass("/author")}>Про автора</Link></li>
            <li><Link to="/coworking" className={desktopLinkClass("/coworking")}>Співпраця з нами</Link></li>
          </ul>
        </div>
        <div className="pt-8 pb-8 border-b border-[#d5c1ba]">
          <div className="text-3xl font-semibold pl-6">Види циклів</div>
          <ul className="mt-[10px]">
            <li><Link to="/strength" className={desktopLinkClass("/strength")}>Силовий</Link></li>
            <li><Link to="/hypertrophy" className={desktopLinkClass("/hypertrophy")}>Гіпертрофія</Link></li>
            <li><Link to="/endurance" className={desktopLinkClass("/endurance")}>Силова витривалість</Link></li>
            <li><Link to="/recovery" className={desktopLinkClass("/recovery")}>Відновлювальний</Link></li>
          </ul>
        </div>
        <ul className="mt-[10px]">
          <li><Link to="/future" className={desktopLinkClass("/future")}>*Тут у майбутньому буде тематична реклама</Link></li>
        </ul>
      </div>
    </aside>
  );
}
