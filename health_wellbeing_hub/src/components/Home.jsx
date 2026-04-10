import { Home } from "lucide-react";

export default function HomeP() {
  return (
    <div className="content-inner">
      <div className="hero-section">
        <div className="hero-text">
          <p className="hero-sub">Caltech Student Resources</p>
          <h1 className="hero-heading">Welcome to the Hub</h1>
          <p className="hero-body">
            Everything you need at Caltech — dining, health, academics, housing,
            and more — organized in one place. Use the flowchart below to find
            where to start.
          </p>
        </div>
        <div className="hero-visual">
          <div className="visual-ring outer" />
          <div className="visual-ring middle" />
          <div className="visual-ring inner" />
          <div className="visual-icon"><Home size={56} strokeWidth={1.2} /></div>
        </div>
      </div>

      <div className="section-heading">Where do you need help?</div>
      <div className="flowchart">
        <div className="flow-row">
          <div className="flow-start">I'm feeling… / I need…</div>
        </div>
        <div className="flow-branches">
          <div className="flow-branch">
            <div className="flow-label amber">🍽 Hungry</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-dest amber">Food tab</div>
            <div className="flow-items">Browne · Red Door · House dinner · Special meals · Late plate</div>
          </div>
          <div className="flow-branch">
            <div className="flow-label blue">🏥 Unwell / Physical Health</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-dest blue">Physical Health tab</div>
            <div className="flow-items">SWS health portal · Urgent care · Timely Care · Health apt · Athletics & Recreation</div>
          </div>
          <div className="flow-branch">
            <div className="flow-label purple">🧠 Stressed / Mental Health</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-dest purple">Mental Health tab</div>
            <div className="flow-items">Counseling · Crisis line · Workshops · Grief · Peer advocates</div>
          </div>
          <div className="flow-branch">
            <div className="flow-label teal">📚 Academic support</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-dest teal">Academics tab</div>
            <div className="flow-items">Deans · Tutoring · Registrar · Hixon · Neurodiversity · OT</div>
          </div>
          <div className="flow-branch">
            <div className="flow-label pink">🏠 Housing / Campus life</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-dest pink">Housing & Life tab</div>
            <div className="flow-items">Housing contracts · SFE · RAs · Clubs · Finances · Events</div>
          </div>
          <div className="flow-branch">
            <div className="flow-label orange">🤝 Identity / Accommodation</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-dest orange">Support & Identity tab</div>
            <div className="flow-items">CASS · Title IX · CCID · Advocates · Affinity groups</div>
          </div>
          <div className="flow-branch">
            <div className="flow-label cyan">💰 Finance / Campus ops</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-dest cyan">Campus & Finance tab</div>
            <div className="flow-items">Financial Aid · Bursar · Security · ASCIT · ISP · CALE</div>
          </div>
        </div>
        <div className="flow-crisis">
          🚨 <strong>In crisis right now?</strong> → Mental Health tab → "Counseling after hours / crisis"
        </div>
      </div>
    </div>
  );
}