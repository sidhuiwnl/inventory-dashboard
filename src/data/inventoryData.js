export const inventoryKpis = [
  { title: "Total Stock", value: 1280 },
  { title: "Available Stock", value: 945 },
  { title: "Blocked Stock", value: 120 },
  { title: "Shortage Items", value: 8 },
  { title: "Expiring Soon", value: 14 },
  { title: "Slow Moving", value: 22 }
];

export const stockStatusData = [
  { name: "Available", value: 945 },
  { name: "Blocked", value: 120 },
  { name: "In Quality", value: 75 },
  { name: "In Transit", value: 140 }
];

export const stockByLocation = [
  { location: "Main Store", qty: 620 },
  { location: "Line Side Store", qty: 210 },
  { location: "QC Store", qty: 110 },
  { location: "Transit Store", qty: 340 }
];

export const materialAvailability = [
  { item: "Battery Cell 21700", required: 500, available: 420 },
  { item: "BMS Board", required: 200, available: 260 },
  { item: "Nickel Strip", required: 300, available: 300 }
];

export const ncrData = [
  { id: "NCR-1023", item: "Battery Cell", supplier: "ABC Energy", status: "CAPA Pending", days: 12 },
  { id: "NCR-1024", item: "Electrolyte", supplier: "PowerChem", status: "Under Review", days: 5 }
];

export const expiryData = [
  { item: "Electrolyte X", batch: "B-2409", daysLeft: 28 },
  { item: "Separator Film", batch: "SF-2312", daysLeft: 7 }
];

export const transactions = [
  { type: "GRN", item: "Battery Cell", qty: 1000, time: "12 Jan 09:45" },
  { type: "ISSUE", item: "Battery Cell", qty: -450, time: "12 Jan 13:10" }
];


export const asnGrnData = [
  {
    asnNo: "ASN-1001",
    supplier: "ABC Energy",
    item: "Battery Cell 21700",
    asnQty: 1000,
    grnQty: 1000,
    dispatchDate: "10 Jan 2026",
    expectedGrnDate: "12 Jan 2026",
    grnDate: "12 Jan 2026"
  },
  {
    asnNo: "ASN-1002",
    supplier: "PowerChem",
    item: "Electrolyte",
    asnQty: 500,
    grnQty: 0,
    dispatchDate: "11 Jan 2026",
    expectedGrnDate: "13 Jan 2026",
    grnDate: null
  },
  {
    asnNo: "ASN-1003",
    supplier: "XYZ Metals",
    item: "Nickel Strip",
    asnQty: 800,
    grnQty: 600,
    dispatchDate: "09 Jan 2026",
    expectedGrnDate: "11 Jan 2026",
    grnDate: "11 Jan 2026"
  }
];
