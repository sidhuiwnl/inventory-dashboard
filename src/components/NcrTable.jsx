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
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
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

      {/* Table */}
      <div className="overflow-x-auto">
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

                <td className="px-6 py-3 text-gray-700">
                  {ncr.item}
                </td>

                <td className="px-6 py-3 text-gray-700">
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

      {/* Footer */}
      <div className="px-6 py-3 text-sm text-gray-500">
        {data.length} NCRs tracked • Aging based quality risk monitoring
      </div>
    </div>
  );
}
