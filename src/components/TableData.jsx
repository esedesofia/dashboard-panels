import { BarChart } from "@mui/x-charts/BarChart";

function TableData({ solarPanels }) {
  const totalPanels = solarPanels.length;
  const totalEnergyGenerated = solarPanels.reduce(
    (sum, panel) =>
      sum +
      panel.energyGenerated.reduce(
        (panelSum, entry) => panelSum + entry.watts,
        0,
      ),
    0,
  );
  const averageAngle = (
    solarPanels.reduce((sum, panel) => sum + panel.panelAngle, 0) / totalPanels
  ).toFixed(2);
  const operationalPanels = solarPanels.filter(
    (panel) => panel.panelEfficiency > 0.9,
  ).length;
  const operationalPercentage = (
    (operationalPanels / totalPanels) *
    100
  ).toFixed(2);

  const averageEnergyPerPanel = solarPanels.map((panel) => {
    const totalEnergy = panel.energyGenerated.reduce(
      (sum, entry) => sum + entry.watts,
      0,
    );
    return {
      id: panel.id,
      averageEnergy: totalEnergy / panel.energyGenerated.length,
    };
  });

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mt-6 text-lg font-semibold">
        Promedio de Energía Generada por Panel
      </h2>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: averageEnergyPerPanel.map((panel) => panel.id),
          },
        ]}
        series={[
          {
            data: averageEnergyPerPanel.map((panel) => panel.averageEnergy),
            label: "Promedio Energía (W)",
            color: (index) =>
              ["#FF5733", "#33FF57", "#3357FF", "#3357FF"][index], // Cambia cada barra
          },
        ]}
        height={300}
      />

      <h2 className="text-lg font-semibold">Resumen General de los Paneles</h2>
      <table className="my-4 w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Número Total de Paneles</th>
            <th className="border p-2">Energía Total Generada (W)</th>
            <th className="border p-2">Ángulo Promedio (°)</th>
            <th className="border p-2">% Paneles Operativos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-center">{totalPanels}</td>
            <td className="border p-2 text-center">{totalEnergyGenerated}</td>
            <td className="border p-2 text-center">{averageAngle}</td>
            <td className="border p-2 text-center">{operationalPercentage}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
