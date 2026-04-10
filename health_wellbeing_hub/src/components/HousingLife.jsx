import { Building2 } from "lucide-react";

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

export default function HousingLife() {
  return (
    <div className="content-inner">
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-sub">Housing, SFE & Student Life</p>
          <h1 className="hero-heading">Housing & Life</h1>
          <p className="hero-body">Housing contracts, your house, student life programming, clubs, and more.</p>
        </div>
        <div className="hero-visual">
          <div className="visual-ring outer" />
          <div className="visual-ring middle" />
          <div className="visual-ring inner" />
          <div className="visual-icon"><Building2 size={56} strokeWidth={1.2} /></div>
        </div>
      </div>

      <Section title="Housing Office" links={[
        { label: "Housing Contracts & Lotteries", href: "https://www.housing.caltech.edu/undergrads/housing-contract-lottery", note: "Summer/Fall" },
        { label: "UG Houses & Residences", href: "https://www.housing.caltech.edu/undergrads/undergrad-houses-and-residences" },
        { label: "Moving In", href: "https://www.housing.caltech.edu/undergrads/undergraduate-moving-in" },
        { label: "Moving Out", href: "https://www.housing.caltech.edu/undergrads/undergraduate-moving-out" },
        { label: "Maintenance Services", href: "https://www.housing.caltech.edu/maintenance" },
        { label: "Move-In Condition Form", href: "https://www.housing.caltech.edu/maintenance/maintenanceservices" },
        { label: "Housing Resources", href: "https://www.housing.caltech.edu/housing-resources" },
        { label: "Housing Policies", href: "https://www.housing.caltech.edu/policies" },
      ]} />

      <Section title="Student and Family Engagement (SFE)" links={[
        { label: "RLCs — Residential Life Coordinators", href: "https://ose.caltech.edu/residential-experience/rlc" },
        { label: "RAs", href: "https://ose.caltech.edu/residential-experience/RA" },
        { label: "UG House Info & House Websites", href: "https://ose.caltech.edu/residential-experience/ug#" },
        { label: "FIRs — Faculty In Residence", href: "https://fir.caltech.edu/" },
        { label: "Clubs", href: "https://ose.caltech.edu/student-engagement/clubs" },
        { label: "Student Leadership", href: "https://ose.caltech.edu/student-engagement/student-leadership" },
        { label: "Event Management", href: "https://ose.caltech.edu/student-engagement/event-reg" },
        { label: "Off-Campus Programming", href: "https://ose.caltech.edu/student-engagement/off-campus-programming" },
        { label: "First Year Resources", href: "https://ose.caltech.edu/llg" },
        { label: "Finances Hub", href: "https://ose.caltech.edu/student-financial-hub" },
        { label: "SFE Resources", href: "https://ose.caltech.edu/resources" },
      ]} />

      <Section title="Student Government & Orgs" links={[
        { label: "ASCIT - Associated Student of the California Institute of Technology", href: "https://ascit.caltech.edu/" },
        { label: "IHC — Interhouse Committee", href: "https://ihc.caltech.edu/" },
        { label: "Donut (ASCIT portal)", href: "https://donut.caltech.edu/" },
        { label: "Caltech Y", href: "https://www.caltechy.org/" },
        { label: "SFP — Student-Faculty Programs", href: "https://sfp.caltech.edu/" },
        { label: "FASA - Fellowship Advising and Study Abroad", href: "https://fasa.caltech.edu/studyabroad" },
      ]} />

      <Section title="Campus Services" links={[
        { label: "Mail Services", href: "https://mailservices.caltech.edu/mail-services" },
        { label: "Facilities", href: "https://facilities.caltech.edu/" },
        { label: "Caltech.dev", href: "https://www.caltech.dev", note: "Schedule planning" },
        { label: "Caltech Credit Union", href: "https://www.caltechefcu.org/home/home" },
        { label: "Everbridge Download Guide", href: "https://emergencypreparedness.caltech.edu/documents/28345/Caltech_Everbridge_360_App_Instructions_and_Disclosures_05302024.pdf", note: "Emergency alerts app" },
      ]} />
    </div>
  );
}