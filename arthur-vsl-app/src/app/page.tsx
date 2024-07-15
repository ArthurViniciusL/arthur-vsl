'use client';

import './styles/global.css'
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { Header } from "./components/Header";
import Home from "./pages/Home/pages";
import { Footer } from "./components/Footer";


export default function Index() {

  const { theme, setPageTheme } = useContext(ThemeContext);

  return (
    <main>
      <header className="HeaderBox">
        <Header title="Início" />
      </header>
      <Home />
      <p>
        <button onClick={setPageTheme}>
          {theme}
        </button>
      </p>
      <footer className="FooterBox">
        <Footer />
      </footer>
    </main>
  );
}
