import { HeartPulse } from "lucide-react";

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

export default function PhysicalHealth() {
  return (
    <div className="content-inner">
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-sub">Student Wellness Services + Athletics</p>
          <h1 className="hero-heading">Physical Health</h1>
          <p className="hero-body">Health appointments, urgent care, medical leave, and campus recreation.</p>
        </div>
        <div className="hero-visual">
          <div className="visual-ring outer" />
          <div className="visual-ring middle" />
          <div className="visual-ring inner" />
          <div className="visual-icon"><HeartPulse size={56} strokeWidth={1.2} /></div>
        </div>
      </div>

      <Section title="Health Portal & Appointments" links={[
        { label: "SWS Health Portal", href: "https://wellness.caltech.edu/health-portal" },
        { label: "How to Make a Health Appointment", href: "https://wellness.caltech.edu/health/make-an-appointment" },
        { label: "CARE Referral", href: "https://caltech-gme-advocate.symplicity.com/care_report/index.php/pid686733?" },
        { label: "Help Now — Urgent Care & Timely Care", href: "https://wellness.caltech.edu/health/after-hours-weekend-care", note: "For urgent needs" },
        { label: "Health Services Available", href: "https://wellness.caltech.edu/health/getting-medical-care-and-services-available" },
        { label: "Medical Leave", href: "https://wellness.caltech.edu/resources/medical-leave" },
      ]} />

      <Section title="Athletics & Recreation" links={[
        { label: "Athletics — General Website", href: "https://gocaltech.com/" },
        { label: "Athletics Facilities", href: "https://gocaltech.com/facilities#1" },
        { label: "Live Streams", href: "https://flosports.link/4d3HNuN" },
        { label: "Sports Medicine", href: "https://gocaltech.com/sports/2022/8/23/AthleticTraining-info.aspx" },
        { label: "Student-Athlete Resources", href: "https://gocaltech.com/sports/2023/2/15/student-resources.aspx" },
        { label: "Recreation Home Page", href: "https://gocaltech.com/recreation?path=rec" },
        { label: "Facility Hours & Services", href: "https://gocaltech.com/sports/2023/4/12/recreational-facilities.aspx" },
        { label: "Fitness & Wellness Instruction", href: "https://gocaltech.com/sports/2023/4/11/fitness-and-wellness-instruction.aspx" },
        { label: "Membership Services & Reservations", href: "https://gocaltech.com/sports/2023/4/10/membership-services.aspx" },
        { label: "Aquatics", href: "https://gocaltech.com/sports/2022/8/25/aquatics.aspx" },
        { label: "Bouldering & Climbing", href: "https://gocaltech.com/sports/2023/4/12/bouldering-and-climbing.aspx" },
        { label: "League Play", href: "https://gocaltech.com/sports/2022/8/23/Recreation-Programs-GSC-Intramurals.aspx" },
        { label: "PE Home Page", href: "https://gocaltech.com/sports/physical-education" },
      ]} />
    </div>
  );
}