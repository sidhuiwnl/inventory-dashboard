export default function NcrTable({ data }) {
  const criticalCount = data.filter(ncr => ncr.days > 14).length;

  const getStatusStyle = (status) => {
    if (status === "Open") return "bg-amber-100 text-amber-700";
    if (status === "Closed") return "bg-emerald-100 text-emerald-700";
    if (status === "Pending") return "bg-blue-100 text-blue-700";
    return "bg-gray-100 text-gray-700";
  };

  const getAgingStyle = (days) => {
    if (days > 30) return "text-red-600 font-semibold";
    if (days > 14) return "text-amber-600 font-semibold";
    if (days > 7) return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full">
      
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            Non-Conformance Reports (NCR)
          </h3>
          <p className="text-sm text-gray-500">
            Open quality deviations requiring action
          </p>
        </div>

        {criticalCount > 0 && (
          <span className="text-sm font-semibold text-red-600">
            {criticalCount} critical
          </span>
        )}
      </div>

      {/* Desktop / Tablet Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                NCR No
              </th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                Item
              </th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                Supplier
              </th>
              <th className="px-6 py-3 text-center font-semibold text-gray-600">
                Status
              </th>
              <th className="px-6 py-3 text-right font-semibold text-gray-600">
                Aging (Days)
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map(ncr => (
              <tr
                key={ncr.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-6 py-3 font-medium text-gray-900">
                  {ncr.id}
                </td>
                <td className="px-6 py-3 text-gray-700 break-words">
                  {ncr.item}
                </td>
                <td className="px-6 py-3 text-gray-700 break-words">
                  {ncr.supplier}
                </td>
                <td className="px-6 py-3 text-center">
                  <span
                    className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${getStatusStyle(
                      ncr.status
                    )}`}
                  >
                    {ncr.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-right">
                  <span className={getAgingStyle(ncr.days)}>
                    {ncr.days}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile / Small Device Cards */}
      <div className="md:hidden divide-y divide-gray-100">
        {data.map(ncr => (
          <div key={ncr.id} className="p-4 space-y-3 text-sm">
            
            {/* Top Row */}
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="font-medium text-gray-900 truncate">
                  NCR #{ncr.id}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {ncr.supplier}
                </p>
              </div>
              <span
                className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold shrink-0 ${getStatusStyle(
                  ncr.status
                )}`}
              >
                {ncr.status}
              </span>
            </div>

            {/* Item */}
            <div>
              <p className="text-gray-500 text-xs">Item</p>
              <p className="font-medium text-gray-900 break-words">
                {ncr.item}
              </p>
            </div>

            {/* Aging */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-xs">Aging</p>
                <p className={getAgingStyle(ncr.days)}>
                  {ncr.days} days
                </p>
              </div>

              {ncr.days > 14 && (
                <span className="text-xs font-semibold text-red-600">
                  Attention required
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 py-3 text-sm text-gray-500">
        {data.length} NCRs tracked • Aging-based quality risk monitoring
      </div>
    </div>
  );
}
