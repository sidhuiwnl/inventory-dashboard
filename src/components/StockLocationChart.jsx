import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell
} from "recharts";

const COLORS = [
  "#2563EB", // Blue
  "#059669", // Green
  "#D97706", // Amber
  "#DC2626", // Red
  "#6B7280"  // Gray
];

export default function StockLocationChart({ data }) {
  const totalStock = data.reduce((sum, d) => sum + d.qty, 0);
  const highest = [...data].sort((a, b) => b.qty - a.qty)[0];

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;

    return (
      <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md">
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        <p className="text-xs text-gray-600">
          Stock: <span className="font-medium">{payload[0].value}</span>
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-base font-semibold text-gray-900">
          Stock by Location
        </h3>
        <p className="text-sm text-gray-500">
          Warehouse-wise inventory distribution
        </p>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            <CartesianGrid
              stroke="#E5E7EB"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="location"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar dataKey="qty" radius={[4, 4, 0, 0]} barSize={36}>
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Insight */}
      <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-600">
        <span className="font-semibold text-gray-900">
          {highest?.location}
        </span>{" "}
        holds the highest stock ({highest?.qty} units) out of{" "}
        <span className="font-medium">{totalStock}</span>.
      </div>
    </div>
  );
}
