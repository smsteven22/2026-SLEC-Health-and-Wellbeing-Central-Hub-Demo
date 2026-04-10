import { Brain } from "lucide-react";

const Section = ({ title, links, urgent }) => (
  <div className={`resource-section ${urgent ? "resource-section--urgent" : ""}`}>
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

export default function MentalHealth() {
  return (
    <div className="content-inner">
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-sub">Student Wellness Services — Counseling & Support</p>
          <h1 className="hero-heading">Mental Health</h1>
          <p className="hero-body">Counseling, crisis support, workshops, and mental health resources at Caltech.</p>
        </div>
        <div className="hero-visual">
          <div className="visual-ring outer" />
          <div className="visual-ring middle" />
          <div className="visual-ring inner" />
          <div className="visual-icon"><Brain size={56} strokeWidth={1.2} /></div>
        </div>
      </div>

      <div className="crisis-banner">
        🚨 <strong>In crisis or need immediate support?</strong>
        <a href="https://wellness.caltech.edu/counseling/after-hours-crisis" className="crisis-link">Counseling After Hours / Crisis Line →</a>
      </div>

      <Section title="Counseling Services" links={[
        { label: "Counseling Services Available", href: "https://wellness.caltech.edu/counseling/services-offered" },
        { label: "Making a Counseling Appointment", href: "https://wellness.caltech.edu/counseling/make-an-appointment" },
        { label: "Finding a Community Therapist", href: "https://wellness.caltech.edu/counseling/find-a-community-therapist" },
        { label: "Counseling Workshops & Groups", href: "https://wellness.caltech.edu/resources/workshops-and-groups" },
        { label: "Mental Health Resources", href: "https://wellness.caltech.edu/counseling/mental-health-resources" },
      ]} />

      <Section title="Crisis & Urgent Support" urgent links={[
        { label: "Counseling After Hours / Crisis Line", href: "https://wellness.caltech.edu/counseling/after-hours-crisis", note: "24/7 support" },
        { label: "Psychiatric Hospitalization Info", href: "https://wellness.caltech.edu/counseling/psychiatric-hospitalization-and-resources" },
        { label: "Suicide Prevention", href: "https://wellness.caltech.edu/counseling/depression-and-suicide/suicide-prevention" },
        { label: "Grief & Loss Resources", href: "https://wellness.caltech.edu/counseling/grief-loss" },
        { label: "Depression Resources", href: "https://wellness.caltech.edu/counseling/depression-and-suicide/depression" },
      ]} />

      <Section title="Occupational Therapy & Wellness" links={[
        { label: "OT — Getting Started", href: "https://wellness.caltech.edu/ot/getting-started" },
        { label: "OT Workshops & Groups", href: "https://wellness.caltech.edu/resources/workshops-and-groups" },
        { label: "Time Management Resources", href: "https://wellness.caltech.edu/ot/time-management-resources" },
        { label: "SA 82 — Building Habits", href: "https://wellness.caltech.edu/ot/sa82" },
        { label: "Overall Wellness Resources", href: "https://wellness.caltech.edu/resources" },
      ]} />

      <Section title="Advocates" links={[
        { label: "Health Advocate Info", href: "https://wellness.caltech.edu/advocate-programs/health-advocate" },
        { label: "Health Advocates Directory", href: "https://wellness.caltech.edu/advocate-programs/health-advocate/program-staff-and-has", note: "May not be current" },
        { label: "Peer Advocate Info", href: "https://wellness.caltech.edu/advocate-programs/peer-advocate" },
        { label: "Peer Advocates Directory", href: "https://wellness.caltech.edu/advocate-programs/peer-advocate/peer-advocate-coordinators-and-PAs", note: "May not be current" },
      ]} />
    </div>
  );
}