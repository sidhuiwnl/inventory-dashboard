import {
  inventoryKpis,
  stockStatusData,
  stockByLocation,
  materialAvailability,
  ncrData,
  expiryData,
  transactions,
  asnGrnData 
} from "../data/inventoryData";

import KpiCard from "../components/KpiCard";
import StockStatusChart from "../components/StockStatusChart";
import StockLocationChart from "../components/StockLocationChart";
import MaterialAvailabilityTable from "../components/MaterialAvailabilityTable";
import NcrTable from "../components/NcrTable";
import ExpiryTable from "../components/ExpiryTable";
import TransactionsTable from "../components/TransactionsTable";
import Tabs from "../components/Tabs";
import AsnGrnTable from "../components/AsnGrnTable";

export default function   InventoryDashboard() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">

      {/* KPI SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {inventoryKpis.map(k => (
          <KpiCard key={k.title} {...k} />
        ))}
      </div>

      {/* TAB SECTION */}
      <Tabs
        tabs={[
          { label: "Overview", value: "overview" },
          { label: "Inventory", value: "inventory" },
          { label: "Inbound (ASN → GRN)", value: "asn-grn" },
          { label: "Quality", value: "quality" },
          { label: "Transactions", value: "transactions" }
        ]}
      >
        {(activeTab) => (
          <>
            {/* OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-2 gap-6">
                <StockStatusChart data={stockStatusData} />
                <StockLocationChart data={stockByLocation} />
              </div>
            )}

            {/* INVENTORY TAB */}
            {activeTab === "inventory" && (
              <MaterialAvailabilityTable data={materialAvailability} />
            )}

            {activeTab === "asn-grn" && (
              <AsnGrnTable data={asnGrnData} />
            )}

            {/* QUALITY TAB */}
            {activeTab === "quality" && (
              <div className="grid md:grid-cols-2 gap-6">
                <NcrTable data={ncrData} />
                <ExpiryTable data={expiryData} />
              </div>
            )}

            {/* TRANSACTIONS TAB */}
            {activeTab === "transactions" && (
              <TransactionsTable data={transactions} />
            )}
          </>
        )}
      </Tabs>

    </div>
  );
}
