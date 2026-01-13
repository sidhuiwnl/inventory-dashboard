export default function MaterialAvailabilityTable({ data }) {
  const totalRequired = data.reduce((s, r) => s + r.required, 0);
  const totalAvailable = data.reduce((s, r) => s + r.available, 0);
  const shortageItems = data.filter(r => r.available < r.required).length;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-100">
        <h3 className="text-base font-semibold text-gray-900">
          Material Availability
        </h3>
        <p className="text-sm text-gray-500">
          Inventory readiness for production planning
        </p>
      </div>

      {/* Summary */}
      <div className="px-4 sm:px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm border-b border-gray-100">
        <div>
          <p className="text-gray-500">Total Required</p>
          <p className="font-semibold text-gray-900">
            {totalRequired.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Total Available</p>
          <p className="font-semibold text-gray-900">
            {totalAvailable.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-gray-500">Materials Short</p>
          <p className={`font-semibold ${shortageItems ? "text-red-600" : "text-emerald-600"}`}>
            {shortageItems}
          </p>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                Material
              </th>
              <th className="px-6 py-3 text-right font-semibold text-gray-600">
                Required
              </th>
              <th className="px-6 py-3 text-right font-semibold text-gray-600">
                Available
              </th>
              <th className="px-6 py-3 text-center font-semibold text-gray-600">
                Status
              </th>
              <th className="px-6 py-3 text-right font-semibold text-gray-600">
                Gap
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map(row => {
              const shortage = row.available < row.required;
              const gap = row.required - row.available;

              return (
                <tr
                  key={row.item}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-6 py-3">
                    <p className="font-medium text-gray-900">{row.item}</p>
                    <p className="text-xs text-gray-500">
                      SKU: {row.sku || "N/A"}
                    </p>
                  </td>

                  <td className="px-6 py-3 text-right font-medium text-gray-900">
                    {row.required.toLocaleString()}
                  </td>

                  <td className="px-6 py-3 text-right font-medium text-gray-900">
                    {row.available.toLocaleString()}
                  </td>

                  <td className="px-6 py-3 text-center">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${
                        shortage
                          ? "bg-red-100 text-red-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {shortage ? "SHORT" : "OK"}
                    </span>
                  </td>

                  <td className="px-6 py-3 text-right font-medium">
                    {shortage ? (
                      <span className="text-red-600">
                        -{gap.toLocaleString()}
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-gray-100">
        {data.map(row => {
          const shortage = row.available < row.required;
          const gap = row.required - row.available;

          return (
            <div key={row.item} className="p-4 text-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-gray-900">
                    {row.item}
                  </p>
                  <p className="text-xs text-gray-500">
                    SKU: {row.sku || "N/A"}
                  </p>
                </div>
                <span
                  className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${
                    shortage
                      ? "bg-red-100 text-red-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {shortage ? "SHORT" : "OK"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-gray-500">Required</p>
                  <p className="font-medium">{row.required}</p>
                </div>
                <div>
                  <p className="text-gray-500">Available</p>
                  <p className="font-medium">{row.available}</p>
                </div>
                <div>
                  <p className="text-gray-500">Gap</p>
                  <p className={shortage ? "text-red-600 font-medium" : "text-gray-400"}>
                    {shortage ? `-${gap}` : "—"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 py-3 text-sm text-gray-500">
        {data.length} materials tracked • {shortageItems} require action
      </div>
    </div>
  );
}
