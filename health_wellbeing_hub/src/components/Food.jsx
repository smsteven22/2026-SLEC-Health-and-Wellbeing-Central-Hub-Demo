import { UtensilsCrossed } from "lucide-react";

const Section = ({ title, links }) => (
  <div className="resource-section">
    <h3 className="resource-section-title">{title}</h3>
    <div className="resource-grid">
      {links.map(({ label, href, note }) => (
        <a key={label} href={href || "#"} className="resource-card" target="_blank" rel="noreferrer">
          <span className="resource-label">{label}</span>
          {note && <span className="resource-note">{note}</span>}
          <span className="resource-arrow">→</span>
        </a>
      ))}
    </div>
  </div>
);

export default function Food() {
  return (
    <div className="content-inner">
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-sub">Dining at Caltech</p>
          <h1 className="hero-heading">Food</h1>
          <p className="hero-body">Menus, meal orders, and special dining accommodations.</p>
        </div>
        <div className="hero-visual">
          <div className="visual-ring outer" />
          <div className="visual-ring middle" />
          <div className="visual-ring inner" />
          <div className="visual-icon"><UtensilsCrossed size={56} strokeWidth={1.2} /></div>
        </div>
      </div>

      <Section title="Dining Menus" links={[
        { label: "Browne Dining Hall Menu", href: "https://diningcaltech.info/browne-dining-specials" },
        { label: "Red Door — Normal Hours Menu", href: "https://diningcaltech.info/red-door-menu" },
        { label: "Red Door — Coffee House Menu", href: "https://diningcaltech.info/red-door-menu/coffee-house-menu" },
        { label: "House Dinner Menu", href: "https://caltechdining.my.canva.site/meal-plan-menus" },
      ]} />

      <Section title="Special & Late Meals" links={[
        { label: "Special Meals Application", href: "https://dining.caltech.edu/caltech-dining-services-meals-program-application" },
        { label: "Special Meals — Weekly Order Form", href: "https://dining.caltech.edu/special-meals-program-weekly-order-form" },
        { label: "Suhoor & Iftar Meals", href: "https://dining.caltech.edu/special-meals-program-weekly-order-form-suhoor-iftar-meals", note: "Ramadan special meals" },
        { label: "Late Plate Order Form", href: "https://dining.caltech.edu/late-plate-order-form" },
      ]} />
    </div>
  );
}