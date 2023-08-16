import React, { useEffect, useState } from 'react';
import { PanelSnap } from '../../panelsnap'; // Make sure to use the correct import path for PanelSnap

const App = () => {
  const [activePanelName, setActivePanelName] = useState(undefined);

  useEffect(() => {
    const panelSnapInstance = new PanelSnap({
      panelSelector: '> #root > #app > section'
    });

    const activatePanel = (panel) => {
      setActivePanelName(panel.querySelector('h1').innerText);
    };

    panelSnapInstance.on('activatePanel', activatePanel);

    // Clean up event listener when component unmounts
    return () => {
      panelSnapInstance.off('activatePanel', activatePanel);
    };
  }, []);

  return (
    <div id="app">
      <section>
        <h1>First</h1>
      </section>
      <section>
        <h1>Second</h1>
      </section>
      <section>
        <h1>Third</h1>
      </section>

      <div className="status">
        Active panel: {activePanelName}
      </div>
    </div>
  );
};

export default App;
