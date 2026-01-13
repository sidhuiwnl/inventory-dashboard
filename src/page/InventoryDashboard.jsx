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
import GenealogyTraceabilityReport from "../components/GenealogyTraceabilityReport";


export default function   InventoryDashboard() {

  

   const handleLogout = () => {
  window.location.href = "https://electraev.vercel.app";
};


  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">

      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900">
          Inventory Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        >
          Logout
        </button>
      </div>

      {/* KPI SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {inventoryKpis.map(k => (
          <KpiCard key={k.title} {...k} />
        ))}
      </div>

      

      
      <Tabs
        tabs={[
          { label: "Overview", value: "overview" },
          { label: "Inventory", value: "inventory" },
          { label: "Inbound (ASN → GRN)", value: "asn-grn" },
          { label: "Quality", value: "quality" },
          { label: "Genealogy Traceability Report", value: "genealogy" },
          { label: "Transactions", value: "transactions" }
        ]}
      >
        {(activeTab) => (
          <>
           
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

            {activeTab === "genealogy" && (
              <GenealogyTraceabilityReport />
            )}
          </>
        )}
      </Tabs>

    </div>
  );
}
