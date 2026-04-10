import { Landmark } from "lucide-react";

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

export default function CampusFinance() {
  return (
    <div className="content-inner">
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-sub">Finance, Security & Campus Operations</p>
          <h1 className="hero-heading">Campus & Finance</h1>
          <p className="hero-body">Financial aid, campus security, bursar, and other essential campus services.</p>
        </div>
        <div className="hero-visual">
          <div className="visual-ring outer" />
          <div className="visual-ring middle" />
          <div className="visual-ring inner" />
          <div className="visual-icon"><Landmark size={56} strokeWidth={1.2} /></div>
        </div>
      </div>

      <Section title="Financial Resources" links={[
        { label: "Financial Aid Website", href: "https://www.finaid.caltech.edu/", note: "More detail coming soon" },
        { label: "Bursar", href: "https://bursar.caltech.edu/" },
        { label: "Caltech Credit Union", href: "https://www.caltechefcu.org/home/home" },
      ]} />

      <Section title="Campus Security" links={[
        { label: "Security — Home Page", href: "https://security.caltech.edu/" },
        { label: "Important Phone Numbers", href: "https://security.caltech.edu/our-mission/important-phone-numbers", note: "Campus-wide emergency contacts" },
        { label: "Security Services", href: "https://security.caltech.edu/our-mission/services" },
        { label: "Announcements", href: "https://security.caltech.edu/our-mission/announcements" },
        { label: "Emergency Info", href: "https://security.caltech.edu/emergency-information" },
        { label: "Parking & Commuter Services", href: "https://parking.caltech.edu/" },
        { label: "Everbridge Download Guide", href: "https://emergencypreparedness.caltech.edu/documents/28345/Caltech_Everbridge_360_App_Instructions_and_Disclosures_05302024.pdf", note: "Emergency alert system" },
      ]} />

      <Section title="Other Campus Resources" links={[
        { label: "Facilities", href: "https://facilities.caltech.edu/" },
        { label: "Mail Services", href: "https://mailservices.caltech.edu/mail-services" },
        { label: "Caltech.dev", href: "https://www.caltech.dev" },
        { label: "Caltech Y", href: "https://www.caltechy.org/" },
        { label: "CALE - Career Achievement, Leadership, and Exploration", href: "https://career.caltech.edu/" },
      ]} />
    </div>
  );
}