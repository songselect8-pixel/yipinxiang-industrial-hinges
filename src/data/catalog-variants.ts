// Public-safe transcription of the approved 2026 catalog. Do not round or relabel dimensions.
// Internal IDs are provenance references, never manufacturer part numbers.
export type CatalogVariant = {
  id: string;
  familyId: string;
  model: string;
  size: string;
  parameters: Readonly<Record<string, string>> | null;
  unit: "mm" | "TBD";
  weightG: string;
  page: number;
};

export const catalogVariants: readonly CatalogVariant[] = [
  {
    "id": "catalog-p05-r01",
    "familyId": "20-type",
    "model": "20-A",
    "size": "TBD",
    "parameters": {
      "D": "20.00",
      "D-1": "24.80",
      "L": "140",
      "d": "10.85",
      "L-1": "60",
      "c": "20.00",
      "L-2": "7"
    },
    "unit": "TBD",
    "weightG": "TBD",
    "page": 5
  },
  {
    "id": "catalog-p05-r02",
    "familyId": "20-type",
    "model": "20-B",
    "size": "TBD",
    "parameters": {
      "D": "20.00",
      "D-1": "24.80",
      "L": "140",
      "d": "10.85",
      "L-1": "60",
      "c": "20.00",
      "L-2": "7"
    },
    "unit": "TBD",
    "weightG": "TBD",
    "page": 5
  },
  {
    "id": "catalog-p06-r01",
    "familyId": "12-14-16-type",
    "model": "12-A",
    "size": "TBD",
    "parameters": {
      "D": "11.80",
      "D-1": "14.10",
      "L": "80",
      "d": "6.80",
      "L-1": "30"
    },
    "unit": "TBD",
    "weightG": "TBD",
    "page": 6
  },
  {
    "id": "catalog-p06-r02",
    "familyId": "12-14-16-type",
    "model": "14-A",
    "size": "TBD",
    "parameters": {
      "D": "13.80",
      "D-1": "15.60",
      "L": "100",
      "d": "7.85",
      "L-1": "32"
    },
    "unit": "TBD",
    "weightG": "TBD",
    "page": 6
  },
  {
    "id": "catalog-p06-r03",
    "familyId": "12-14-16-type",
    "model": "16-A",
    "size": "TBD",
    "parameters": {
      "D": "15.80",
      "D-1": "18.20",
      "L": "120",
      "d": "8.85",
      "L-1": "44"
    },
    "unit": "TBD",
    "weightG": "TBD",
    "page": 6
  },
  {
    "id": "catalog-p07-r01",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф16*100mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "142",
    "page": 7
  },
  {
    "id": "catalog-p07-r02",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф16*120mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "158",
    "page": 7
  },
  {
    "id": "catalog-p07-r03",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф18*100mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "180",
    "page": 7
  },
  {
    "id": "catalog-p07-r04",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф18*120mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "230",
    "page": 7
  },
  {
    "id": "catalog-p07-r05",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф20*100mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "242",
    "page": 7
  },
  {
    "id": "catalog-p07-r06",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф20*120mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "288",
    "page": 7
  },
  {
    "id": "catalog-p07-r07",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф20*140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "330",
    "page": 7
  },
  {
    "id": "catalog-p07-r08",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф20*160mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "391",
    "page": 7
  },
  {
    "id": "catalog-p07-r09",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф22*120mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "354",
    "page": 7
  },
  {
    "id": "catalog-p07-r10",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф22*140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "416",
    "page": 7
  },
  {
    "id": "catalog-p07-r11",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф25*140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "525",
    "page": 7
  },
  {
    "id": "catalog-p07-r12",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф25*160mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "597",
    "page": 7
  },
  {
    "id": "catalog-p07-r13",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф28*140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "694",
    "page": 7
  },
  {
    "id": "catalog-p07-r14",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф28*160mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "798",
    "page": 7
  },
  {
    "id": "catalog-p07-r15",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф30*140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "754",
    "page": 7
  },
  {
    "id": "catalog-p07-r16",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф30*160mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "869",
    "page": 7
  },
  {
    "id": "catalog-p07-r17",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф32*160mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "917",
    "page": 7
  },
  {
    "id": "catalog-p07-r18",
    "familyId": "bearing",
    "model": "TBD",
    "size": "ф32*180mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "1180",
    "page": 7
  },
  {
    "id": "catalog-p08-r01",
    "familyId": "round",
    "model": "TBD",
    "size": "Φ10*47mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "26",
    "page": 8
  },
  {
    "id": "catalog-p08-r02",
    "familyId": "round",
    "model": "TBD",
    "size": "Φ12*60mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "50",
    "page": 8
  },
  {
    "id": "catalog-p08-r03",
    "familyId": "round",
    "model": "TBD",
    "size": "Φ13*51mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "50",
    "page": 8
  },
  {
    "id": "catalog-p08-r04",
    "familyId": "round",
    "model": "TBD",
    "size": "Φ16*60mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "83",
    "page": 8
  },
  {
    "id": "catalog-p08-r05",
    "familyId": "round",
    "model": "TBD",
    "size": "Φ20*74mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "160",
    "page": 8
  },
  {
    "id": "catalog-p08-r06",
    "familyId": "round",
    "model": "TBD",
    "size": "Φ24*106mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "336",
    "page": 8
  },
  {
    "id": "catalog-p09-r01",
    "familyId": "pin",
    "model": "TBD",
    "size": "Φ16*75mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "107",
    "page": 9
  },
  {
    "id": "catalog-p09-r02",
    "familyId": "pin",
    "model": "TBD",
    "size": "Φ18*75mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "142",
    "page": 9
  },
  {
    "id": "catalog-p09-r03",
    "familyId": "pin",
    "model": "TBD",
    "size": "Φ20*110mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "269",
    "page": 9
  },
  {
    "id": "catalog-p09-r04",
    "familyId": "pin",
    "model": "TBD",
    "size": "Φ20*120mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "285",
    "page": 9
  },
  {
    "id": "catalog-p09-r05",
    "familyId": "pin",
    "model": "TBD",
    "size": "Φ20*140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "320",
    "page": 9
  },
  {
    "id": "catalog-p10-r01",
    "familyId": "gasket",
    "model": "TBD",
    "size": "Φ12x14x100mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "77",
    "page": 10
  },
  {
    "id": "catalog-p10-r02",
    "familyId": "gasket",
    "model": "TBD",
    "size": "Φ14x16x140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "132",
    "page": 10
  },
  {
    "id": "catalog-p10-r03",
    "familyId": "gasket",
    "model": "TBD",
    "size": "Φ16x18x160mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "251",
    "page": 10
  },
  {
    "id": "catalog-p10-r04",
    "familyId": "gasket",
    "model": "TBD",
    "size": "Φ18x20x180mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "356",
    "page": 10
  },
  {
    "id": "catalog-p10-r05",
    "familyId": "gasket",
    "model": "TBD",
    "size": "Φ20x25x200mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "476",
    "page": 10
  },
  {
    "id": "catalog-p10-r06",
    "familyId": "gasket",
    "model": "TBD",
    "size": "Φ22x27x220mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "633",
    "page": 10
  },
  {
    "id": "catalog-p10-r07",
    "familyId": "gasket",
    "model": "TBD",
    "size": "Φ25x30x250mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "929",
    "page": 10
  },
  {
    "id": "catalog-p11-r01",
    "familyId": "grease-nipple",
    "model": "TBD",
    "size": "Φ10x12x60mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "34",
    "page": 11
  },
  {
    "id": "catalog-p11-r02",
    "familyId": "grease-nipple",
    "model": "TBD",
    "size": "Φ14x16x100mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "101",
    "page": 11
  },
  {
    "id": "catalog-p11-r03",
    "familyId": "grease-nipple",
    "model": "TBD",
    "size": "Φ16x18x120mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "164",
    "page": 11
  },
  {
    "id": "catalog-p11-r04",
    "familyId": "grease-nipple",
    "model": "TBD",
    "size": "Φ18x20x140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "230",
    "page": 11
  },
  {
    "id": "catalog-p11-r05",
    "familyId": "grease-nipple",
    "model": "TBD",
    "size": "Φ20x25x180mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "421",
    "page": 11
  },
  {
    "id": "catalog-p11-r06",
    "familyId": "grease-nipple",
    "model": "TBD",
    "size": "Φ22x27x160mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "470",
    "page": 11
  },
  {
    "id": "catalog-p12-r01",
    "familyId": "adjustable",
    "model": "TBD",
    "size": "Φ20x25x140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "354",
    "page": 12
  },
  {
    "id": "catalog-p12-r02",
    "familyId": "adjustable",
    "model": "TBD",
    "size": "Φ22x27x140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "416",
    "page": 12
  },
  {
    "id": "catalog-p12-r03",
    "familyId": "adjustable",
    "model": "TBD",
    "size": "Φ25x30x140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "525",
    "page": 12
  },
  {
    "id": "catalog-p13-r01",
    "familyId": "square",
    "model": "TBD",
    "size": "Φ20x25x140mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "354",
    "page": 13
  },
  {
    "id": "catalog-p14-r01",
    "familyId": "flag",
    "model": "TBD",
    "size": "Φ14*80*3mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "113",
    "page": 14
  },
  {
    "id": "catalog-p14-r02",
    "familyId": "flag",
    "model": "TBD",
    "size": "Φ16*100*3mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "178",
    "page": 14
  },
  {
    "id": "catalog-p14-r03",
    "familyId": "flag",
    "model": "TBD",
    "size": "Φ18*110*3.5mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "218",
    "page": 14
  },
  {
    "id": "catalog-p14-r04",
    "familyId": "flag",
    "model": "TBD",
    "size": "Φ20*120*5mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "340",
    "page": 14
  },
  {
    "id": "catalog-p14-r05",
    "familyId": "flag",
    "model": "TBD",
    "size": "Φ25*120*5mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "453",
    "page": 14
  },
  {
    "id": "catalog-p15-r01",
    "familyId": "flag",
    "model": "TBD",
    "size": "80*45*2.8mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "135",
    "page": 15
  },
  {
    "id": "catalog-p15-r02",
    "familyId": "flag",
    "model": "TBD",
    "size": "100*55*2.8mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "185",
    "page": 15
  },
  {
    "id": "catalog-p15-r03",
    "familyId": "flag",
    "model": "TBD",
    "size": "120*60*2.8mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "241",
    "page": 15
  },
  {
    "id": "catalog-p15-r04",
    "familyId": "flag",
    "model": "TBD",
    "size": "140*60*2.8mm",
    "parameters": null,
    "unit": "mm",
    "weightG": "288",
    "page": 15
  }
];
