import { useState } from "react";
import "./App.css";
import HomeP from "./components/Home.jsx";
import Food from "./components/Food.jsx";
import PhysicalHealth from "./components/PhysicalHealth.jsx";
import MentalHealth from "./components/MentalHealth.jsx";
import Academics from "./components/Academics.jsx";
import HousingLife from "./components/HousingLife.jsx";
import SupportIdentity from "./components/SupportIdentity.jsx";
import CampusFinance from "./components/CampusFinance.jsx";
import { Home, UtensilsCrossed, HeartPulse, Brain, GraduationCap, Building2, Users, Landmark } from "lucide-react";

const tabs = [
  { id: "home",      label: "Home",               icon: Home,            color: "#e8c547", Component: HomeP },
  { id: "food",      label: "Food",               icon: UtensilsCrossed, color: "#e87c47", Component: Food },
  { id: "physical",  label: "Physical Health",    icon: HeartPulse,      color: "#47b8e8", Component: PhysicalHealth },
  { id: "mental",    label: "Mental Health",      icon: Brain,           color: "#a47be8", Component: MentalHealth },
  { id: "academics", label: "Academics",          icon: GraduationCap,   color: "#47e8a4", Component: Academics },
  { id: "housing",   label: "Housing & Life",     icon: Building2,       color: "#e84775", Component: HousingLife },
  { id: "support",   label: "Support & Identity", icon: Users,           color: "#e8a447", Component: SupportIdentity },
  { id: "campus",    label: "Campus & Finance",   icon: Landmark,        color: "#47e8d4", Component: CampusFinance },
];

export default function App() {
  const [active, setActive] = useState("home");
  const current = tabs.find((t) => t.id === active);
  const { Component } = current;

  return (
    <div className="app" style={{ "--accent": current.color }}>
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-mark">✦</span>
          <span className="brand-name">Caltech Hub</span>
        </div>
        <div className="nav-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`nav-tab ${active === tab.id ? "active" : ""}`}
                onClick={() => setActive(tab.id)}
                style={{ "--tab-color": tab.color }}
              >
                <Icon size={15} />
                <span className="tab-label">{tab.label}</span>
                {active === tab.id && <span className="tab-indicator" />}
              </button>
            );
          })}
        </div>
        <div className="nav-end">
          <div className="avatar">CT</div>
        </div>
      </nav>
      <main className="content" key={active}>
        <Component />
      </main>
    </div>
  );
}