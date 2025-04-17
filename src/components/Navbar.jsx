import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      setDark(true);
    } else {
      root.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    const newTheme = dark ? "light" : "dark";
    root.classList.remove(dark ? "dark" : "light");
    root.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setDark(!dark);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 w-8 h-8 rounded-lg"></div>
          <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            AdaptoSoft
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-slate-600 dark:text-white hover:bg-transparent"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          <a
            href="#solucoes"
            className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Soluções
          </a>
          <a
            href="#processo"
            className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Processo
          </a>
          <a
            href="#diferenciais"
            className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Diferenciais
          </a>
          {/* <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white">
            Contato
          </Button> */}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {dark ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
