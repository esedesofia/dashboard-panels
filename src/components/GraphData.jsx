import { LineChart } from "@mui/x-charts/LineChart";

function GraphData({ panel, handleAngleChange }) {
  // Array de fechas de energyGenerated de cada panel
  const labels = panel.energyGenerated.map((entry) => entry.date);
  // Array de watts de energyGenerated de cada panel
  const values = panel.energyGenerated.map((entry) => entry.watts);

  return (
    <div className="overflow-y-scroll rounded-lg bg-white p-4 shadow">
      <h2 className="text-lg font-semibold">{panel.id}</h2>
      <LineChart
        xAxis={[{ scaleType: "point", data: labels }]}
        yAxis={[{ min: Math.min(...values) - 300 }]}
        series={[
          {
            data: values,
            label: "Energía Generada (W)",
            color: "#1976d2",
            area: true,
          },
        ]}
        height={250}
      />

      {/* Información del panel */}
      <div className="mt-4">
        <p>
          <span className="font-bold">Ángulo del Panel:</span>{" "}
          {panel.panelAngle}°
        </p>
        <input
          type="range"
          min="0"
          max="90"
          value={panel.panelAngle}
          onChange={(e) => handleAngleChange(panel.id, Number(e.target.value))}
        />
        <p>
          <span className="font-bold">Eficiencia:</span>{" "}
          {panel.panelEfficiency * 100}%
        </p>
        <p>
          <span className="font-bold">Potencia Máxima:</span> {panel.panelPower}{" "}
          W
        </p>
      </div>
    </div>
  );
}

export default GraphData;
