import { useState } from "react";
import solarPanels from "./data/dummyData";
import Navigation from "./components/Navigation";
import GraphData from "./components/GraphData";
import TableData from "./components/TableData";

function App() {
  // Estado para almacenar el objeto solarPanels con los datos simulados
  const [panels, setPanels] = useState(solarPanels);
  // Estado para almacenar la "vista" actual
  const [view, setView] = useState("graphs");

  // Funciòn para manejar el cambio de àngulo del panel solar
  const handleAngleChange = (id, newAngle) => {
    setPanels((prevPanels) =>
      prevPanels.map((panel) =>
        panel.id === id ? { ...panel, panelAngle: newAngle } : panel,
      ),
    );
  };

  // Funciòn para manejar la "vista" actual de la aplicaciòn. Ya sea "Gràficos" o "Tabla"
  const handleNavigationClick = (selectedView) => {
    setView(selectedView);
  };

  return (
    <div className="flex h-screen">
      <Navigation handleNavigationClick={handleNavigationClick} />
      <main className="grid flex-1 grid-cols-2 gap-10 px-24 py-8">
        {view === "graphs" ? (
          panels.map((panel) => (
            <GraphData
              key={panel.id}
              panel={panel}
              handleAngleChange={handleAngleChange}
            />
          ))
        ) : (
          <TableData solarPanels={solarPanels} />
        )}
      </main>
    </div>
  );
}

export default App;
