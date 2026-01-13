export default function TransactionsTable({ data }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            Recent Transactions
          </h3>
          <p className="text-sm text-gray-500">
            Latest inventory movements
          </p>
        </div>
        <span className="text-sm text-gray-600">
          {data.length} entries
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                Item
              </th>
              <th className="px-6 py-3 text-left font-semibold text-gray-600">
                Transaction Type
              </th>
              <th className="px-6 py-3 text-right font-semibold text-gray-600">
                Quantity
              </th>
            </tr>
          </thead>

          <tbody>
            {data.slice(0, 5).map((t, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-6 py-3 font-medium text-gray-900">
                  {t.item}
                </td>

                <td className="px-6 py-3 text-gray-700">
                  {t.type}
                </td>

                <td className="px-6 py-3 text-right font-semibold">
                  <span
                    className={
                      t.qty < 0
                        ? "text-red-600"
                        : "text-emerald-600"
                    }
                  >
                    {t.qty < 0 ? t.qty : `+${t.qty}`}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 text-sm text-gray-500">
        Showing latest {Math.min(5, data.length)} transactions
      </div>
    </div>
  );
}
