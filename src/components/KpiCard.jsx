export default function KpiCard({ title, value, accent = "blue" }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 px-6 py-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      
      {/* Title */}
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
        {title}
      </p>

      {/* Value */}
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold text-gray-900">
          {value}
        </h2>

        {/* Accent Indicator */}
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            accent === "green"
              ? "bg-emerald-500"
              : accent === "orange"
              ? "bg-orange-500"
              : "bg-blue-600"
          }`}
        />
      </div>

      {/* Divider */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 8v4l3 3"
          />
        </svg>
        <span>Updated just now</span>
      </div>
    </div>
  );
}
