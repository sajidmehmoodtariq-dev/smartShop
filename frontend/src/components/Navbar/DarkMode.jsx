import lightButton from "../../assets/website/light-mode-button.png"
import DarkButton from "../../assets/website/dark-mode-button.png"
import { useState, useEffect } from "react"


const DarkMode = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // apply theme to document and persist
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <div className="relative">
      <img
        src={lightButton}
        alt="Light Mode"
        className={`w-12 right-0 z-10 absolute cursor-pointer transition-opacity duration-200 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
        onClick={toggleTheme}
      />
      <img
        src={DarkButton}
        alt="Dark Mode"
        className={`w-12 cursor-pointer transition-opacity duration-200 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}
        onClick={toggleTheme}
      />
    </div>
  )
}

export default DarkMode