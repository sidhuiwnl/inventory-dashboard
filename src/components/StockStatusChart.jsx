import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = [
  "#2563EB", // Blue
  "#059669", // Green
  "#D97706", // Amber
  "#DC2626", // Red
  "#6B7280"  // Gray
];

export default function StockStatusChart({ data }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;

    const { name, value } = payload[0].payload;

    return (
      <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md">
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-600">
          Qty: <span className="font-medium">{value}</span>
        </p>
        <p className="text-xs text-gray-500">
          {((value / total) * 100).toFixed(1)}%
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-base font-semibold text-gray-900">
          Stock by Status
        </h3>
        <p className="text-sm text-gray-500">
          Inventory distribution overview
        </p>
      </div>

      {/* Chart */}
      <div className="relative h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={1}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold text-gray-900">
            {total}
          </span>
          <span className="text-xs text-gray-500">
            Total Items
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 space-y-2">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-gray-700">
                {item.name}
              </span>
            </div>
            <span className="font-medium text-gray-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
