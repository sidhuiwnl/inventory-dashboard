import React from "react";

const Badge = ({ label, type = "success" }) => {
  const styles = {
    success: "bg-emerald-50 text-emerald-700",
    danger: "bg-rose-50 text-rose-700",
    info: "bg-indigo-50 text-indigo-700",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${styles[type]}`}
    >
      {label}
    </span>
  );
};

const Card = ({ title, children, right }) => (
  <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
        {title}
      </h3>
      {right}
    </div>
    {children}
  </div>
);

export default function GenealogyTraceabilityReport() {
  return (
    <div className="space-y-8 bg-slate-50 p-8 rounded-3xl">

      {/* HEADER */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900">
            Genealogy Traceability Report
          </h1>
          <p className="text-xs tracking-widest uppercase text-slate-400 mt-1">
            End-to-End Battery Life Cycle Data
          </p>
        </div>
        
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-6">

        {/* 1. FINISHED BATTERY */}
        <Card title="1. Finished Battery Details">
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <div className="text-slate-400 font-semibold">Battery Serial No</div>
            <div className="font-extrabold text-indigo-600">
              BAT-IND-2024-000123
            </div>

            <div className="text-slate-400 font-semibold">Model / Variant</div>
            <div className="font-semibold">48V Lithium-Ion Pack</div>

            <div className="text-slate-400 font-semibold">Production Order No</div>
            <div className="font-semibold">PRD-45001234</div>

            <div className="text-slate-400 font-semibold">Assembly Line</div>
            <div className="font-semibold">Line-2</div>

            <div className="text-slate-400 font-semibold">
              Shift / Date / Time
            </div>
            <div className="font-semibold">Shift-B / 10-Jan-2026 / 14:32</div>

            <div className="text-slate-400 font-semibold">Final QC Status</div>
            <Badge label="PASS" />
          </div>
        </Card>

        {/* 4. SUPPLIER & PROCUREMENT */}
        <Card title="4. Supplier & Procurement Reference">
          <div className="grid grid-cols-2 gap-y-4 text-sm">
            <div className="text-slate-400 font-semibold">Supplier Code</div>
            <div className="font-extrabold">SUP-10234</div>

            <div className="text-slate-400 font-semibold">Supplier Name</div>
            <div className="font-semibold">ABC Cells Pvt Ltd</div>

            <div className="text-slate-400 font-semibold">PO Number</div>
            <div className="font-semibold">4500012345</div>

            <div className="text-slate-400 font-semibold">ASN Number</div>
            <div className="font-semibold">ASN-987654</div>

            <div className="text-slate-400 font-semibold">GRN Number</div>
            <div className="font-semibold">5000456789</div>

            <div className="text-slate-400 font-semibold">
              Quality Inspection Lot
            </div>
            <div className="font-semibold">QL-332211</div>
          </div>
        </Card>
      </div>

      {/* TRACEABILITY */}
      <div className="grid grid-cols-2 gap-6">

        {/* 2. SUB-ASSEMBLY */}
        <Card title="2. Sub-Assembly Traceability">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-slate-400">
              <tr>
                <th className="text-left py-2">Sub-Assembly</th>
                <th className="text-left">Serial / Batch No</th>
                <th className="text-left">Supplier</th>
              </tr>
            </thead>
            <tbody className="font-semibold">
              <tr>
                <td className="py-2">Cell Module</td>
                <td className="text-indigo-600">CM-BAT-0923</td>
                <td>ABC Cells Pvt Ltd</td>
              </tr>
              <tr>
                <td>BMS</td>
                <td className="text-indigo-600">BMS-778899</td>
                <td>XYZ Electronics</td>
              </tr>
              <tr>
                <td>Wiring Harness</td>
                <td className="text-indigo-600">WH-4567</td>
                <td>LMN Auto</td>
              </tr>
              <tr>
                <td>Cooling Plate</td>
                <td className="text-indigo-600">CP-8899</td>
                <td>ThermoTech</td>
              </tr>
            </tbody>
          </table>
        </Card>

        {/* 3. RAW MATERIAL */}
        <Card title="3. Raw Material Traceability">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-slate-400">
              <tr>
                <th className="text-left py-2">Material</th>
                <th className="text-left">Batch / Lot</th>
                <th className="text-left">Supplier</th>
                <th className="text-left">Expiry</th>
              </tr>
            </thead>
            <tbody className="font-semibold">
              <tr>
                <td className="py-2">Cells</td>
                <td className="text-indigo-600">CELL-B-0923</td>
                <td>ABC Cells Pvt Ltd</td>
                <td>30-Dec-2027</td>
              </tr>
              <tr>
                <td>Electrolyte</td>
                <td className="text-indigo-600">EL-5566</td>
                <td>ChemSource Ltd</td>
                <td>15-Aug-2026</td>
              </tr>
              <tr>
                <td>Adhesive</td>
                <td className="text-indigo-600">ADH-8890</td>
                <td>BondIt Chemicals</td>
                <td>10-Jul-2026</td>
              </tr>
              <tr>
                <td>Fasteners</td>
                <td className="text-indigo-600">FST-3322</td>
                <td>FastenPro</td>
                <td>NA</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>

      {/* PROCESS HISTORY */}
      <Card
        title="5. Process & Quality History"
        right={
          <span className="text-xs font-extrabold text-indigo-600 uppercase">
            Line-2 Sequence
          </span>
        }
      >
        <table className="w-full text-sm">
          <thead className="text-xs uppercase text-slate-400">
            <tr>
              <th className="text-left py-2">Station</th>
              <th className="text-left">Operation</th>
              <th className="text-left">Key Parameters</th>
              <th className="text-left">Result</th>
              <th className="text-left">Timestamp</th>
            </tr>
          </thead>
          <tbody className="font-semibold">
            <tr>
              <td className="py-2">S01</td>
              <td>Cell Welding</td>
              <td className="text-indigo-600">Voltage: 3.65V</td>
              <td><Badge label="OK" /></td>
              <td>10-Jan-2026 13:10</td>
            </tr>
            <tr>
              <td>S03</td>
              <td>Module Assembly</td>
              <td className="text-indigo-600">Torque: 6Nm</td>
              <td><Badge label="OK" /></td>
              <td>10-Jan-2026 13:45</td>
            </tr>
            <tr>
              <td>S05</td>
              <td>Final Testing</td>
              <td className="text-indigo-600">Pack Voltage: 48.2V</td>
              <td><Badge label="OK" /></td>
              <td>10-Jan-2026 14:25</td>
            </tr>
          </tbody>
        </table>
      </Card>

      {/* NCR / CAPA */}
      <Card title="6. NCR / CAPA Reference">
        <div className="grid grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-xs uppercase text-slate-400 font-bold">NCR No</p>
            <p className="font-extrabold">NCR-2024-014</p>
          </div>
          <div>
            <p className="text-xs uppercase text-slate-400 font-bold">
              Defect Description
            </p>
            <p className="font-semibold">Voltage deviation at initial test</p>
          </div>
          <div>
            <p className="text-xs uppercase text-slate-400 font-bold">
              Root Cause
            </p>
            <p className="font-semibold">Loose terminal connection</p>
          </div>
          <div>
            <p className="text-xs uppercase text-slate-400 font-bold">
              CAPA Reference
            </p>
            <p className="font-extrabold">CAPA-2024-009</p>
          </div>
          <div>
            <p className="text-xs uppercase text-slate-400 font-bold">
              Disposition
            </p>
            <p className="font-semibold">Reworked and Accepted</p>
          </div>
        </div>
      </Card>

    </div>
  );
}
