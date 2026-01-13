export default function ExpiryTable({ data }) {
  const criticalCount = data.filter(d => d.daysLeft <= 7).length;
  const warningCount = data.filter(d => d.daysLeft > 7 && d.daysLeft <= 15).length;

  const getAgingStyle = (days) => {
    if (days <= 0) return "text-red-700 font-semibold";
    if (days <= 7) return "text-red-600 font-semibold";
    if (days <= 15) return "text-amber-600 font-semibold";
    if (days <= 30) return "text-blue-600";
    return "text-gray-600";
  };

  const getStatusBadge = (days) => {
    if (days <= 0) return "bg-red-100 text-red-700";
    if (days <= 7) return "bg-red-100 text-red-700";
    if (days <= 15) return "bg-amber-100 text-amber-700";
    if (days <= 30) return "bg-blue-100 text-blue-700";
    return "bg-emerald-100 text-emerald-700";
  };

  const getStatusLabel = (days) => {
    if (days <= 0) return "EXPIRED";
    if (days <= 7) return "CRITICAL";
    if (days <= 15) return "WARNING";
    if (days <= 30) return "SOON";
    return "SAFE";
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full">
      
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            Expiry & Shelf-Life Monitoring
          </h3>
          <p className="text-sm text-gray-500">
            Materials approaching or past expiry
          </p>
        </div>

        <div className="text-sm text-gray-700">
          <span className="font-semibold text-red-600">
            {criticalCount}
          </span>{" "}
          critical •{" "}
          <span className="font-semibold text-amber-600">
            {warningCount}
          </span>{" "}
          warning
        </div>
      </div>

      {/* Desktop / Tablet Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                Item
              </th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                Batch
              </th>
              <th className="px-6 py-3 text-center font-semibold text-gray-600">
                Expiry Date
              </th>
              <th className="px-6 py-3 text-right font-semibold text-gray-600">
                Days Left
              </th>
              <th className="px-6 py-3 text-center font-semibold text-gray-600">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map(row => (
              <tr
                key={row.batch}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-6 py-3 font-medium text-gray-900 break-words">
                  {row.item}
                </td>

                <td className="px-6 py-3 font-mono text-gray-700 break-all">
                  {row.batch}
                </td>

                <td className="px-6 py-3 text-center text-gray-700">
                  {row.expiryDate || "—"}
                </td>

                <td className="px-6 py-3 text-right">
                  <span className={getAgingStyle(row.daysLeft)}>
                    {row.daysLeft}
                  </span>
                </td>

                <td className="px-6 py-3 text-center">
                  <span
                    className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${getStatusBadge(
                      row.daysLeft
                    )}`}
                  >
                    {getStatusLabel(row.daysLeft)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-gray-100">
        {data.map(row => (
          <div key={row.batch} className="p-4 space-y-3 text-sm">
            
            {/* Top Row */}
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="font-medium text-gray-900 truncate">
                  {row.item}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  Batch: {row.batch}
                </p>
              </div>
              <span
                className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold shrink-0 ${getStatusBadge(
                  row.daysLeft
                )}`}
              >
                {getStatusLabel(row.daysLeft)}
              </span>
            </div>

            {/* Expiry Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-xs">Expiry Date</p>
                <p className="text-gray-900">
                  {row.expiryDate || "—"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-xs">Days Left</p>
                <p className={getAgingStyle(row.daysLeft)}>
                  {row.daysLeft}
                </p>
              </div>
            </div>

            {row.daysLeft <= 15 && (
              <p className="text-xs font-semibold text-red-600">
                Action required (consume or block)
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 py-3 text-sm text-gray-500">
        {data.length} batches monitored • FIFO & quality compliance
      </div>
    </div>
  );
}
