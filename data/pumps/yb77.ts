import type { Product } from "@/types/catalogue";

/**
 * FICHE TECHNIQUE
 * Pompes triphasées YB77
 *
 * Tension : 380-415 V
 * Fréquence : 50 Hz
 * Débit (Q) : L/min et m³/h
 * Hauteur manométrique totale (H) : mètres de colonne d'eau
 */

// ============================================
// TYPES
// ============================================

interface DebitPoint {
  debitLMin: number;
  debitM3H: number;
  hauteurManometriqueM: number;
}

interface PompeYB77 {
  modele: string;
  nombreEtages: number;
  puissance: {
    kw: number;
    ch: number;
  };
  courantNominalA: number;
  debit: DebitPoint[];
}

// ============================================
// DEBITS STANDARD
// ============================================

const DEBITS: Omit<DebitPoint, "hauteurManometriqueM">[] = [
  { debitLMin: 0, debitM3H: 0 },
  { debitLMin: 167, debitM3H: 10 },
  { debitLMin: 333, debitM3H: 20 },
  { debitLMin: 500, debitM3H: 30 },
  { debitLMin: 667, debitM3H: 40 },
  { debitLMin: 833, debitM3H: 50 },
  { debitLMin: 1000, debitM3H: 70 }, // À VÉRIFIER : affiché tel quel dans l'image (70 répété sous 1000 et 1167 L/min)
  { debitLMin: 1167, debitM3H: 70 },
  { debitLMin: 1333, debitM3H: 80 },
  { debitLMin: 1500, debitM3H: 90 },
  { debitLMin: 1667, debitM3H: 100 },
];

// ============================================
// POMPES YB77
// ============================================

const pompesYB77: PompeYB77[] = [
  {
    modele: "YB77-1",
    nombreEtages: 1,
    puissance: { kw: 5.5, ch: 7.5 },
    courantNominalA: 12,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 21 },
      { ...DEBITS[1], hauteurManometriqueM: 21 },
      { ...DEBITS[2], hauteurManometriqueM: 20 },
      { ...DEBITS[3], hauteurManometriqueM: 18 },
      { ...DEBITS[4], hauteurManometriqueM: 17 },
      { ...DEBITS[5], hauteurManometriqueM: 15 },
      { ...DEBITS[6], hauteurManometriqueM: 14 },
      { ...DEBITS[7], hauteurManometriqueM: 13 },
      { ...DEBITS[8], hauteurManometriqueM: 12 },
      { ...DEBITS[9], hauteurManometriqueM: 10 },
      { ...DEBITS[10], hauteurManometriqueM: 7 },
    ],
  },

  {
    modele: "YB77-2",
    nombreEtages: 2,
    puissance: { kw: 7.5, ch: 10 },
    courantNominalA: 16,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 41 },
      { ...DEBITS[1], hauteurManometriqueM: 40 },
      { ...DEBITS[2], hauteurManometriqueM: 39 },
      { ...DEBITS[3], hauteurManometriqueM: 36 },
      { ...DEBITS[4], hauteurManometriqueM: 33 },
      { ...DEBITS[5], hauteurManometriqueM: 31 },
      { ...DEBITS[6], hauteurManometriqueM: 28 },
      { ...DEBITS[7], hauteurManometriqueM: 26 },
      { ...DEBITS[8], hauteurManometriqueM: 23 },
      { ...DEBITS[9], hauteurManometriqueM: 18 },
      { ...DEBITS[10], hauteurManometriqueM: 13 },
    ],
  },

  {
    modele: "YB77-3",
    nombreEtages: 3,
    puissance: { kw: 11, ch: 15 },
    courantNominalA: 24,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 61 },
      { ...DEBITS[1], hauteurManometriqueM: 60 },
      { ...DEBITS[2], hauteurManometriqueM: 58 },
      { ...DEBITS[3], hauteurManometriqueM: 55 },
      { ...DEBITS[4], hauteurManometriqueM: 50 },
      { ...DEBITS[5], hauteurManometriqueM: 46 },
      { ...DEBITS[6], hauteurManometriqueM: 42 },
      { ...DEBITS[7], hauteurManometriqueM: 39 },
      { ...DEBITS[8], hauteurManometriqueM: 34 },
      { ...DEBITS[9], hauteurManometriqueM: 28 },
      { ...DEBITS[10], hauteurManometriqueM: 20 },
    ],
  },

  {
    modele: "YB77-4",
    nombreEtages: 4,
    puissance: { kw: 15, ch: 20 },
    courantNominalA: 32,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 81 },
      { ...DEBITS[1], hauteurManometriqueM: 80 },
      { ...DEBITS[2], hauteurManometriqueM: 78 },
      { ...DEBITS[3], hauteurManometriqueM: 73 },
      { ...DEBITS[4], hauteurManometriqueM: 68 },
      { ...DEBITS[5], hauteurManometriqueM: 62 },
      { ...DEBITS[6], hauteurManometriqueM: 57 },
      { ...DEBITS[7], hauteurManometriqueM: 52 },
      { ...DEBITS[8], hauteurManometriqueM: 46 },
      { ...DEBITS[9], hauteurManometriqueM: 38 },
      { ...DEBITS[10], hauteurManometriqueM: 22 },
    ],
  },

  {
    modele: "YB77-5",
    nombreEtages: 5,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 40,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 100 },
      { ...DEBITS[1], hauteurManometriqueM: 100 },
      { ...DEBITS[2], hauteurManometriqueM: 97 },
      { ...DEBITS[3], hauteurManometriqueM: 92 },
      { ...DEBITS[4], hauteurManometriqueM: 85 },
      { ...DEBITS[5], hauteurManometriqueM: 78 },
      { ...DEBITS[6], hauteurManometriqueM: 72 },
      { ...DEBITS[7], hauteurManometriqueM: 66 },
      { ...DEBITS[8], hauteurManometriqueM: 58 },
      { ...DEBITS[9], hauteurManometriqueM: 47 },
      { ...DEBITS[10], hauteurManometriqueM: 34 },
    ],
  },

  {
    modele: "YB77-6",
    nombreEtages: 6,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 120 },
      { ...DEBITS[1], hauteurManometriqueM: 120 },
      { ...DEBITS[2], hauteurManometriqueM: 116 },
      { ...DEBITS[3], hauteurManometriqueM: 110 },
      { ...DEBITS[4], hauteurManometriqueM: 102 },
      { ...DEBITS[5], hauteurManometriqueM: 94 },
      { ...DEBITS[6], hauteurManometriqueM: 86 },
      { ...DEBITS[7], hauteurManometriqueM: 78 },
      { ...DEBITS[8], hauteurManometriqueM: 69 },
      { ...DEBITS[9], hauteurManometriqueM: 56 },
      { ...DEBITS[10], hauteurManometriqueM: 41 },
    ],
  },

  {
    modele: "YB77-7",
    nombreEtages: 7,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 140 },
      { ...DEBITS[1], hauteurManometriqueM: 140 },
      { ...DEBITS[2], hauteurManometriqueM: 136 },
      { ...DEBITS[3], hauteurManometriqueM: 129 },
      { ...DEBITS[4], hauteurManometriqueM: 119 },
      { ...DEBITS[5], hauteurManometriqueM: 110 },
      { ...DEBITS[6], hauteurManometriqueM: 101 },
      { ...DEBITS[7], hauteurManometriqueM: 92 },
      { ...DEBITS[8], hauteurManometriqueM: 81 },
      { ...DEBITS[9], hauteurManometriqueM: 66 },
      { ...DEBITS[10], hauteurManometriqueM: 48 },
    ],
  },

  {
    modele: "YB77-8",
    nombreEtages: 8,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 64,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 160 },
      { ...DEBITS[1], hauteurManometriqueM: 160 },
      { ...DEBITS[2], hauteurManometriqueM: 156 },
      { ...DEBITS[3], hauteurManometriqueM: 147 },
      { ...DEBITS[4], hauteurManometriqueM: 137 },
      { ...DEBITS[5], hauteurManometriqueM: 126 },
      { ...DEBITS[6], hauteurManometriqueM: 116 },
      { ...DEBITS[7], hauteurManometriqueM: 105 },
      { ...DEBITS[8], hauteurManometriqueM: 93 },
      { ...DEBITS[9], hauteurManometriqueM: 76 },
      { ...DEBITS[10], hauteurManometriqueM: 55 },
    ],
  },

  {
    modele: "YB77-9",
    nombreEtages: 9,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 64,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 179 },
      { ...DEBITS[1], hauteurManometriqueM: 179 },
      { ...DEBITS[2], hauteurManometriqueM: 174 },
      { ...DEBITS[3], hauteurManometriqueM: 164 },
      { ...DEBITS[4], hauteurManometriqueM: 152 },
      { ...DEBITS[5], hauteurManometriqueM: 140 },
      { ...DEBITS[6], hauteurManometriqueM: 129 },
      { ...DEBITS[7], hauteurManometriqueM: 117 },
      { ...DEBITS[8], hauteurManometriqueM: 103 },
      { ...DEBITS[9], hauteurManometriqueM: 85 },
      { ...DEBITS[10], hauteurManometriqueM: 61 },
    ],
  },

  {
    modele: "YB77-10",
    nombreEtages: 10,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 199 },
      { ...DEBITS[1], hauteurManometriqueM: 199 },
      { ...DEBITS[2], hauteurManometriqueM: 194 },
      { ...DEBITS[3], hauteurManometriqueM: 184 },
      { ...DEBITS[4], hauteurManometriqueM: 171 },
      { ...DEBITS[5], hauteurManometriqueM: 157 },
      { ...DEBITS[6], hauteurManometriqueM: 145 },
      { ...DEBITS[7], hauteurManometriqueM: 132 },
      { ...DEBITS[8], hauteurManometriqueM: 117 },
      { ...DEBITS[9], hauteurManometriqueM: 96 },
      { ...DEBITS[10], hauteurManometriqueM: 69 },
    ],
  },

  {
    modele: "YB77-11",
    nombreEtages: 11,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 218 },
      { ...DEBITS[1], hauteurManometriqueM: 218 },
      { ...DEBITS[2], hauteurManometriqueM: 212 },
      { ...DEBITS[3], hauteurManometriqueM: 201 },
      { ...DEBITS[4], hauteurManometriqueM: 186 },
      { ...DEBITS[5], hauteurManometriqueM: 172 },
      { ...DEBITS[6], hauteurManometriqueM: 158 },
      { ...DEBITS[7], hauteurManometriqueM: 144 },
      { ...DEBITS[8], hauteurManometriqueM: 127 },
      { ...DEBITS[9], hauteurManometriqueM: 104 },
      { ...DEBITS[10], hauteurManometriqueM: 74 },
    ],
  },

  {
    modele: "YB77-12",
    nombreEtages: 12,
    puissance: { kw: 45, ch: 60 },
    courantNominalA: 96,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 242 },
      { ...DEBITS[1], hauteurManometriqueM: 243 },
      { ...DEBITS[2], hauteurManometriqueM: 237 },
      { ...DEBITS[3], hauteurManometriqueM: 225 },
      { ...DEBITS[4], hauteurManometriqueM: 209 },
      { ...DEBITS[5], hauteurManometriqueM: 193 },
      { ...DEBITS[6], hauteurManometriqueM: 178 },
      { ...DEBITS[7], hauteurManometriqueM: 163 },
      { ...DEBITS[8], hauteurManometriqueM: 145 },
      { ...DEBITS[9], hauteurManometriqueM: 120 },
      { ...DEBITS[10], hauteurManometriqueM: 88 },
    ],
  },

  {
    modele: "YB77-13",
    nombreEtages: 13,
    puissance: { kw: 55, ch: 75 },
    courantNominalA: 120,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 264 },
      { ...DEBITS[1], hauteurManometriqueM: 264 },
      { ...DEBITS[2], hauteurManometriqueM: 258 },
      { ...DEBITS[3], hauteurManometriqueM: 245 },
      { ...DEBITS[4], hauteurManometriqueM: 228 },
      { ...DEBITS[5], hauteurManometriqueM: 211 },
      { ...DEBITS[6], hauteurManometriqueM: 195 },
      { ...DEBITS[7], hauteurManometriqueM: 178 },
      { ...DEBITS[8], hauteurManometriqueM: 159 },
      { ...DEBITS[9], hauteurManometriqueM: 132 },
      { ...DEBITS[10], hauteurManometriqueM: 98 },
    ],
  },

  {
    modele: "YB77-14",
    nombreEtages: 14,
    puissance: { kw: 55, ch: 75 },
    courantNominalA: 120,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 283 },
      { ...DEBITS[1], hauteurManometriqueM: 284 },
      { ...DEBITS[2], hauteurManometriqueM: 277 },
      { ...DEBITS[3], hauteurManometriqueM: 263 },
      { ...DEBITS[4], hauteurManometriqueM: 245 },
      { ...DEBITS[5], hauteurManometriqueM: 226 },
      { ...DEBITS[6], hauteurManometriqueM: 209 },
      { ...DEBITS[7], hauteurManometriqueM: 191 },
      { ...DEBITS[8], hauteurManometriqueM: 170 },
      { ...DEBITS[9], hauteurManometriqueM: 141 },
      { ...DEBITS[10], hauteurManometriqueM: 104 },
    ],
  },

  {
    modele: "YB77-15",
    nombreEtages: 15,
    puissance: { kw: 55, ch: 75 },
    courantNominalA: 120,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 303 },
      { ...DEBITS[1], hauteurManometriqueM: 303 },
      { ...DEBITS[2], hauteurManometriqueM: 296 },
      { ...DEBITS[3], hauteurManometriqueM: 281 },
      { ...DEBITS[4], hauteurManometriqueM: 262 },
      { ...DEBITS[5], hauteurManometriqueM: 242 },
      { ...DEBITS[6], hauteurManometriqueM: 223 },
      { ...DEBITS[7], hauteurManometriqueM: 204 },
      { ...DEBITS[8], hauteurManometriqueM: 181 },
      { ...DEBITS[9], hauteurManometriqueM: 150 },
      { ...DEBITS[10], hauteurManometriqueM: 110 },
    ],
  },

  {
    modele: "YB77-16",
    nombreEtages: 16,
    puissance: { kw: 63, ch: 85 },
    courantNominalA: 136,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 324 },
      { ...DEBITS[1], hauteurManometriqueM: 325 },
      { ...DEBITS[2], hauteurManometriqueM: 317 },
      { ...DEBITS[3], hauteurManometriqueM: 301 },
      { ...DEBITS[4], hauteurManometriqueM: 281 },
      { ...DEBITS[5], hauteurManometriqueM: 259 },
      { ...DEBITS[6], hauteurManometriqueM: 239 },
      { ...DEBITS[7], hauteurManometriqueM: 219 },
      { ...DEBITS[8], hauteurManometriqueM: 195 },
      { ...DEBITS[9], hauteurManometriqueM: 162 },
      { ...DEBITS[10], hauteurManometriqueM: 119 },
    ],
  },

  {
    modele: "YB77-17",
    nombreEtages: 17,
    puissance: { kw: 63, ch: 85 },
    courantNominalA: 136,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 343 },
      { ...DEBITS[1], hauteurManometriqueM: 344 },
      { ...DEBITS[2], hauteurManometriqueM: 336 },
      { ...DEBITS[3], hauteurManometriqueM: 319 },
      { ...DEBITS[4], hauteurManometriqueM: 297 },
      { ...DEBITS[5], hauteurManometriqueM: 274 },
      { ...DEBITS[6], hauteurManometriqueM: 253 },
      { ...DEBITS[7], hauteurManometriqueM: 232 },
      { ...DEBITS[8], hauteurManometriqueM: 206 },
      { ...DEBITS[9], hauteurManometriqueM: 171 },
      { ...DEBITS[10], hauteurManometriqueM: 126 },
    ],
  },

  {
    modele: "YB77-18",
    nombreEtages: 18,
    puissance: { kw: 63, ch: 85 },
    courantNominalA: 136,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 363 },
      { ...DEBITS[1], hauteurManometriqueM: 363 },
      { ...DEBITS[2], hauteurManometriqueM: 355 },
      { ...DEBITS[3], hauteurManometriqueM: 337 },
      { ...DEBITS[4], hauteurManometriqueM: 314 },
      { ...DEBITS[5], hauteurManometriqueM: 290 },
      { ...DEBITS[6], hauteurManometriqueM: 267 },
      { ...DEBITS[7], hauteurManometriqueM: 244 },
      { ...DEBITS[8], hauteurManometriqueM: 217 },
      { ...DEBITS[9], hauteurManometriqueM: 180 },
      { ...DEBITS[10], hauteurManometriqueM: 132 },
    ],
  },

  {
    modele: "YB77-19",
    nombreEtages: 19,
    puissance: { kw: 75, ch: 100 },
    courantNominalA: 160,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 383 },
      { ...DEBITS[1], hauteurManometriqueM: 384 },
      { ...DEBITS[2], hauteurManometriqueM: 376 },
      { ...DEBITS[3], hauteurManometriqueM: 357 },
      { ...DEBITS[4], hauteurManometriqueM: 332 },
      { ...DEBITS[5], hauteurManometriqueM: 307 },
      { ...DEBITS[6], hauteurManometriqueM: 283 },
      { ...DEBITS[7], hauteurManometriqueM: 259 },
      { ...DEBITS[8], hauteurManometriqueM: 230 },
      { ...DEBITS[9], hauteurManometriqueM: 191 },
      { ...DEBITS[10], hauteurManometriqueM: 140 },
    ],
  },

  {
    modele: "YB77-20",
    nombreEtages: 20,
    puissance: { kw: 75, ch: 100 },
    courantNominalA: 160,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 402 },
      { ...DEBITS[1], hauteurManometriqueM: 404 },
      { ...DEBITS[2], hauteurManometriqueM: 395 },
      { ...DEBITS[3], hauteurManometriqueM: 375 },
      { ...DEBITS[4], hauteurManometriqueM: 349 },
      { ...DEBITS[5], hauteurManometriqueM: 322 },
      { ...DEBITS[6], hauteurManometriqueM: 297 },
      { ...DEBITS[7], hauteurManometriqueM: 271 },
      { ...DEBITS[8], hauteurManometriqueM: 241 },
      { ...DEBITS[9], hauteurManometriqueM: 200 },
      { ...DEBITS[10], hauteurManometriqueM: 146 },
    ],
  },
];

export const yb77Products: readonly Product[] = pompesYB77.map((pompe) => ({
  slug: pompe.modele.toLowerCase(),
  name: pompe.modele,
  categoryId: "pompes",
  subcategoryId: "yb77",
  shortDescription: `Pompe triphasée YB77 à ${pompe.nombreEtages} étage${pompe.nombreEtages > 1 ? "s" : ""}.`,
  pumpTechnicalData: {
    type: "Pompe triphasée",
    tension: "380-415 V",
    frequenceHz: 50,
    uniteHauteur: "mCE",
    uniteDebit: "L/min et m³/h",
    nombreEtages: pompe.nombreEtages,
    puissanceKw: pompe.puissance.kw,
    puissanceCh: pompe.puissance.ch,
    courantNominalA: pompe.courantNominalA,
    performance: pompe.debit,
  },
}));