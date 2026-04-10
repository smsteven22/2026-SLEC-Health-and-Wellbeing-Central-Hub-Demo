import { Users } from "lucide-react";

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

export default function SupportIdentity() {
  return (
    <div className="content-inner">
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-sub">CASS, Title IX, CCID & Advocates</p>
          <h1 className="hero-heading">Support & Identity</h1>
          <p className="hero-body">Accommodations, identity resources, reporting options, and community support.</p>
        </div>
        <div className="hero-visual">
          <div className="visual-ring outer" />
          <div className="visual-ring middle" />
          <div className="visual-ring inner" />
          <div className="visual-icon"><Users size={56} strokeWidth={1.2} /></div>
        </div>
      </div>

      <Section title="CASS — Center for Student Success" links={[
        { label: "Accommodate Portal", href: "https://c292-shib.symplicity.com/sso/" },
        { label: "General Accommodation Info", href: "https://css.caltech.edu/accessibility-services/students" },
        { label: "Service & Emotional Support Animals", href: "https://css.caltech.edu/accessibility-services/students/service_and_emotional_support_animals" },
        { label: "Housing Accommodations", href: "https://css.caltech.edu/accessibility-services/housing-accommodations" },
        { label: "CASS Resources", href: "https://css.caltech.edu/accessibility-services/Resources" },
      ]} />

      <Section title="Title IX" links={[
        { label: "What Title IX Does", href: "https://titleix.caltech.edu/what-we-do" },
        { label: "Reporting Options", href: "https://titleix.caltech.edu/reporting/reporting-options" },
        { label: "Deciding to Report", href: "https://titleix.caltech.edu/reporting/deciding-to-report" },
        { label: "Online Report Form", href: "https://titleix.caltech.edu/reporting/online-report-form" },
        { label: "Campus Sexual Violence Advocate", href: "https://titleix.caltech.edu/campus-advocate/campus-sexual-violence-advocate" },
        { label: "Peace Over Violence Resources", href: "https://titleix.caltech.edu/campus-advocate/peace-over-violence-resources" },
        { label: "Campus Advocate Support Options", href: "https://titleix.caltech.edu/campus-advocate/support-options" },
        { label: "Title IX Policies", href: "https://titleix.caltech.edu/resources/policies" },
        { label: "FAQs", href: "https://titleix.caltech.edu/resources/faqs" },
        { label: "Support Resources", href: "https://titleix.caltech.edu/resources/support-resources" },
        { label: "Healthy Interactions", href: "https://titleix.caltech.edu/resources/healthy-interactions" },
      ]} />

      <Section title="CCID — Caltech Center for Inclusion & Diversity" links={[
        { label: "CCID General Website", href: "https://ccid.caltech.edu/" },
        { label: "MMUF — Mellon Mays Undergraduate Fellowship", href: "https://ccid.caltech.edu/buildcommunity/signature-programs/mellon-mays-undergraduate-fellowship-mmuf" },
        { label: "Affinity Groups", href: "https://ccid.caltech.edu/buildcommunity/affinity-groups" },
        { label: "Related Clubs", href: "https://ccid.caltech.edu/buildcommunity/student-clubs" },
        { label: "Signature Events", href: "https://ccid.caltech.edu/events/signature-ccid-events", note: "Dine & Dialogue, Unpacking Hate, etc." },
        { label: "CCID Calendar", href: "https://ccid.caltech.edu/events/calendar" },
        { label: "Event RSVP", href: "https://ccid.caltech.edu/events/rsvp" },
        { label: "Newsletter", href: "https://ccid.caltech.edu/events/newsletter" },
        { label: "Workshops", href: "https://ccid.caltech.edu/resources/workshops" },
        { label: "CCID Services", href: "https://ccid.caltech.edu/resources/ccid-services" },
        { label: "Campus Resources", href: "https://ccid.caltech.edu/resources/campus-resources" },
        { label: "Resources for Self-Guided Learning", href: "https://ccid.caltech.edu/resources/resources-for-self-guided-learning" },
      ]} />
    </div>
  );
}