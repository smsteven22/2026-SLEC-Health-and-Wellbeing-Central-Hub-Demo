import { GraduationCap } from "lucide-react";

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

export default function Academics() {
  return (
    <div className="content-inner">
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-sub">Deans, Registrar & Academic Support</p>
          <h1 className="hero-heading">Academics</h1>
          <p className="hero-body">Tutoring, advising, course loads, and academic policies at Caltech.</p>
        </div>
        <div className="hero-visual">
          <div className="visual-ring outer" />
          <div className="visual-ring middle" />
          <div className="visual-ring inner" />
          <div className="visual-icon"><GraduationCap size={56} strokeWidth={1.2} /></div>
        </div>
      </div>

      <Section title="Dean of Students" links={[
        { label: "Finding a Peer Tutor", href: "https://deans.caltech.edu/AcademicSupport/pac" },
        { label: "Guidelines for Overloads", href: "https://deans.caltech.edu/AcademicSupport/guidelines-overloads" },
        { label: "Guidelines for Underloads", href: "https://deans.caltech.edu/AcademicSupport/guidelines-underloads" },
        { label: "Make an Appointment with a Dean", href: "https://deans.caltech.edu/AcademicSupport/DeanAppointment" },
        { label: "Advising & Support — Q&A", href: "https://deans.caltech.edu/AcademicSupport" },
        { label: "Honor Code Violation Info", href: "https://caltech-gme-advocate.symplicity.com/public_report/" },
        { label: "Student Affairs Policies", href: "https://studentaffairs.caltech.edu/policies" },
        { label: "CARE Team", href: "https://caltechcares.caltech.edu/" },
        { label: "Leaves of Absence", href: "https://deans.caltech.edu/leaves-absence" },
        { label: "Forms & Petitions", href: "https://deans.caltech.edu/AcademicSupport/forms" },
      ]} />

      <Section title="Registrar & Enrollment" links={[
        { label: "Registrar", href: "http://registrar.caltech.edu/" },
        { label: "ISP — International Student Programs", href: "https://international.caltech.edu/about/isp" },
        { label: "Financial Aid Website", href: "https://www.finaid.caltech.edu/", note: "More detail coming soon" },
      ]} />

      <Section title="Academic Support Programs" links={[
        { label: "Hixon Writing Center", href: "http://www.writing.caltech.edu/" },
        { label: "Neurodiversity at Caltech", href: "https://neurodiversity.caltech.edu/" },
        { label: "CALE — Career Achievement, Leadership, and Exploration", href: "https://career.caltech.edu/" },
        { label: "SWS OT — Time Management Resources", href: "https://wellness.caltech.edu/ot/time-management-resources" },
        { label: "SA 82 — Building Habits", href: "https://wellness.caltech.edu/ot/sa82" },
      ]} />
    </div>
  );
}