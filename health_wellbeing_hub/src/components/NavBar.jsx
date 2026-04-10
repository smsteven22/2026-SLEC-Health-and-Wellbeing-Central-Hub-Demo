// import './NavBar.css';

// function NavBar({ setSelectedTab, selectedTab }) {
//   const tabs = ['food', 'physical', 'mental', 'academic'];

//   return (
//     <nav className="nav">
//       <div className="nav-logo">MyApp</div>
//       <div className="nav-tab-group">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setSelectedTab(tab)}
//             className={`nav-tab ${selectedTab === tab ? 'active' : ''}`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

import { useEffect, useRef } from 'react';
import './NavBar.css';

function NavBar({ setSelectedTab, selectedTab, tabs }) {
  const pillRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const activeBtn = navRef.current?.querySelector('.nav-tab.active');
    const pill = pillRef.current;
    if (!activeBtn || !pill) return;

    const navRect = navRef.current.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();

    pill.style.left = `${btnRect.left - navRect.left}px`;
    pill.style.width = `${btnRect.width}px`;
  }, [selectedTab]);

  return (
    <header className="nav-header">
      <nav className="nav" ref={navRef}>
        <span className="nav-logo">●</span>

        <div className="nav-tabs">
          <div className="nav-pill" ref={pillRef} />
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`nav-tab ${selectedTab === tab ? 'active' : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;