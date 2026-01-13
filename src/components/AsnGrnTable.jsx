export default function AsnGrnTable({ data }) {
  const getStatus = (asnQty, grnQty, expectedDate) => {
    const today = new Date();
    const expected = new Date(expectedDate);

    if (grnQty === 0 && today > expected) return "DELAYED";
    if (grnQty === 0) return "IN TRANSIT";
    if (grnQty < asnQty) return "PARTIAL";
    return "RECEIVED";
  };

  const delayedCount = data.filter(
    r => getStatus(r.asnQty, r.grnQty, r.expectedGrnDate) === "DELAYED"
  ).length;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            ASN → GRN Tracking
          </h3>
          <p className="text-sm text-gray-500">
            Inbound shipment receipt status
          </p>
        </div>

        {delayedCount > 0 && (
          <span className="text-sm font-semibold text-red-600">
            {delayedCount} delayed
          </span>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                ASN No
              </th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                Supplier
              </th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                Item
              </th>
              <th className="px-6 py-3 text-right font-semibold text-gray-600">
                ASN Qty
              </th>
              <th className="px-6 py-3 text-right font-semibold text-gray-600">
                GRN Qty
              </th>
              <th className="px-6 py-3 text-center font-semibold text-gray-600">
                Status
              </th>
              <th className="px-6 py-3 text-center font-semibold text-gray-600">
                Expected GRN
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map(row => {
              const status = getStatus(
                row.asnQty,
                row.grnQty,
                row.expectedGrnDate
              );

              const statusStyle =
                status === "RECEIVED"
                  ? "bg-emerald-100 text-emerald-700"
                  : status === "PARTIAL"
                  ? "bg-amber-100 text-amber-700"
                  : status === "DELAYED"
                  ? "bg-red-100 text-red-700"
                  : "bg-blue-100 text-blue-700";

              return (
                <tr
                  key={row.asnNo}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-6 py-3 font-medium text-gray-900">
                    {row.asnNo}
                  </td>

                  <td className="px-6 py-3 text-gray-700">
                    {row.supplier}
                  </td>

                  <td className="px-6 py-3 text-gray-700">
                    {row.item}
                  </td>

                  <td className="px-6 py-3 text-right font-medium text-gray-900">
                    {row.asnQty}
                  </td>

                  <td className="px-6 py-3 text-right font-medium text-gray-900">
                    {row.grnQty}
                  </td>

                  <td className="px-6 py-3 text-center">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${statusStyle}`}
                    >
                      {status}
                    </span>
                  </td>

                  <td className="px-6 py-3 text-center text-gray-600">
                    {row.expectedGrnDate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 text-sm text-gray-500">
        {data.length} shipments tracked • ASN to GRN reconciliation
      </div>
    </div>
  );
}
