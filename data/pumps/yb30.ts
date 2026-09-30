import type { Product } from "@/types/catalogue";

/**
 * FICHE TECHNIQUE
 * Pompes triphasées YB30
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

interface PompeYB30 {
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
  { debitLMin: 67, debitM3H: 4 },
  { debitLMin: 133, debitM3H: 8 },
  { debitLMin: 200, debitM3H: 12 },
  { debitLMin: 267, debitM3H: 16 },
  { debitLMin: 333, debitM3H: 20 },
  { debitLMin: 400, debitM3H: 24 },
  { debitLMin: 467, debitM3H: 28 },
  { debitLMin: 533, debitM3H: 32 },
  { debitLMin: 650, debitM3H: 39 },
];

// ============================================
// POMPES YB30
// ============================================

const pompesYB30: PompeYB30[] = [
  {
    modele: "YB30-1",
    nombreEtages: 1,
    puissance: { kw: 1.1, ch: 1.5 },
    courantNominalA: 2,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 11 },
      { ...DEBITS[1], hauteurManometriqueM: 11 },
      { ...DEBITS[2], hauteurManometriqueM: 11 },
      { ...DEBITS[3], hauteurManometriqueM: 10 },
      { ...DEBITS[4], hauteurManometriqueM: 10 },
      { ...DEBITS[5], hauteurManometriqueM: 9 },
      { ...DEBITS[6], hauteurManometriqueM: 8 },
      { ...DEBITS[7], hauteurManometriqueM: 7 },
      { ...DEBITS[8], hauteurManometriqueM: 6 },
      { ...DEBITS[9], hauteurManometriqueM: 3 },
    ],
  },

  {
    modele: "YB30-2",
    nombreEtages: 2,
    puissance: { kw: 2.2, ch: 3 },
    courantNominalA: 5,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 23 },
      { ...DEBITS[1], hauteurManometriqueM: 23 },
      { ...DEBITS[2], hauteurManometriqueM: 23 },
      { ...DEBITS[3], hauteurManometriqueM: 21 },
      { ...DEBITS[4], hauteurManometriqueM: 20 },
      { ...DEBITS[5], hauteurManometriqueM: 19 },
      { ...DEBITS[6], hauteurManometriqueM: 17 },
      { ...DEBITS[7], hauteurManometriqueM: 16 },
      { ...DEBITS[8], hauteurManometriqueM: 13 },
      { ...DEBITS[9], hauteurManometriqueM: 8 },
    ],
  },

  {
    modele: "YB30-3",
    nombreEtages: 3,
    puissance: { kw: 3, ch: 4 },
    courantNominalA: 6,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 35 },
      { ...DEBITS[1], hauteurManometriqueM: 35 },
      { ...DEBITS[2], hauteurManometriqueM: 33 },
      { ...DEBITS[3], hauteurManometriqueM: 32 },
      { ...DEBITS[4], hauteurManometriqueM: 30 },
      { ...DEBITS[5], hauteurManometriqueM: 28 },
      { ...DEBITS[6], hauteurManometriqueM: 26 },
      { ...DEBITS[7], hauteurManometriqueM: 24 },
      { ...DEBITS[8], hauteurManometriqueM: 20 },
      { ...DEBITS[9], hauteurManometriqueM: 12 },
    ],
  },

  {
    modele: "YB30-4",
    nombreEtages: 4,
    puissance: { kw: 4, ch: 5.5 },
    courantNominalA: 9,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 46 },
      { ...DEBITS[1], hauteurManometriqueM: 46 },
      { ...DEBITS[2], hauteurManometriqueM: 45 },
      { ...DEBITS[3], hauteurManometriqueM: 43 },
      { ...DEBITS[4], hauteurManometriqueM: 40 },
      { ...DEBITS[5], hauteurManometriqueM: 38 },
      { ...DEBITS[6], hauteurManometriqueM: 35 },
      { ...DEBITS[7], hauteurManometriqueM: 32 },
      { ...DEBITS[8], hauteurManometriqueM: 27 },
      { ...DEBITS[9], hauteurManometriqueM: 16 },
    ],
  },

  {
    modele: "YB30-5",
    nombreEtages: 5,
    puissance: { kw: 5.5, ch: 7.5 },
    courantNominalA: 12,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 58 },
      { ...DEBITS[1], hauteurManometriqueM: 58 },
      { ...DEBITS[2], hauteurManometriqueM: 56 },
      { ...DEBITS[3], hauteurManometriqueM: 54 },
      { ...DEBITS[4], hauteurManometriqueM: 51 },
      { ...DEBITS[5], hauteurManometriqueM: 48 },
      { ...DEBITS[6], hauteurManometriqueM: 45 },
      { ...DEBITS[7], hauteurManometriqueM: 41 },
      { ...DEBITS[8], hauteurManometriqueM: 35 },
      { ...DEBITS[9], hauteurManometriqueM: 22 },
    ],
  },

  {
    modele: "YB30-6",
    nombreEtages: 6,
    puissance: { kw: 5.5, ch: 7.5 },
    courantNominalA: 12,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 69 },
      { ...DEBITS[1], hauteurManometriqueM: 69 },
      { ...DEBITS[2], hauteurManometriqueM: 67 },
      { ...DEBITS[3], hauteurManometriqueM: 64 },
      { ...DEBITS[4], hauteurManometriqueM: 60 },
      { ...DEBITS[5], hauteurManometriqueM: 57 },
      { ...DEBITS[6], hauteurManometriqueM: 53 },
      { ...DEBITS[7], hauteurManometriqueM: 48 },
      { ...DEBITS[8], hauteurManometriqueM: 41 },
      { ...DEBITS[9], hauteurManometriqueM: 25 },
    ],
  },

  {
    modele: "YB30-7",
    nombreEtages: 7,
    puissance: { kw: 7.5, ch: 10 },
    courantNominalA: 16,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 80 },
      { ...DEBITS[1], hauteurManometriqueM: 81 },
      { ...DEBITS[2], hauteurManometriqueM: 79 },
      { ...DEBITS[3], hauteurManometriqueM: 75 },
      { ...DEBITS[4], hauteurManometriqueM: 71 },
      { ...DEBITS[5], hauteurManometriqueM: 67 },
      { ...DEBITS[6], hauteurManometriqueM: 63 },
      { ...DEBITS[7], hauteurManometriqueM: 57 },
      { ...DEBITS[8], hauteurManometriqueM: 49 },
      { ...DEBITS[9], hauteurManometriqueM: 31 },
    ],
  },

  {
    modele: "YB30-8",
    nombreEtages: 8,
    puissance: { kw: 7.5, ch: 10 },
    courantNominalA: 16,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 91 },
      { ...DEBITS[1], hauteurManometriqueM: 92 },
      { ...DEBITS[2], hauteurManometriqueM: 89 },
      { ...DEBITS[3], hauteurManometriqueM: 85 },
      { ...DEBITS[4], hauteurManometriqueM: 80 },
      { ...DEBITS[5], hauteurManometriqueM: 76 },
      { ...DEBITS[6], hauteurManometriqueM: 71 },
      { ...DEBITS[7], hauteurManometriqueM: 64 },
      { ...DEBITS[8], hauteurManometriqueM: 55 },
      { ...DEBITS[9], hauteurManometriqueM: 34 },
    ],
  },

  {
    modele: "YB30-9",
    nombreEtages: 9,
    puissance: { kw: 9.3, ch: 12.5 },
    courantNominalA: 20,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 103 },
      { ...DEBITS[1], hauteurManometriqueM: 104 },
      { ...DEBITS[2], hauteurManometriqueM: 101 },
      { ...DEBITS[3], hauteurManometriqueM: 96 },
      { ...DEBITS[4], hauteurManometriqueM: 91 },
      { ...DEBITS[5], hauteurManometriqueM: 86 },
      { ...DEBITS[6], hauteurManometriqueM: 80 },
      { ...DEBITS[7], hauteurManometriqueM: 73 },
      { ...DEBITS[8], hauteurManometriqueM: 63 },
      { ...DEBITS[9], hauteurManometriqueM: 39 },
    ],
  },

  {
    modele: "YB30-10",
    nombreEtages: 10,
    puissance: { kw: 9.3, ch: 12.5 },
    courantNominalA: 20,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 114 },
      { ...DEBITS[1], hauteurManometriqueM: 115 },
      { ...DEBITS[2], hauteurManometriqueM: 111 },
      { ...DEBITS[3], hauteurManometriqueM: 106 },
      { ...DEBITS[4], hauteurManometriqueM: 100 },
      { ...DEBITS[5], hauteurManometriqueM: 95 },
      { ...DEBITS[6], hauteurManometriqueM: 88 },
      { ...DEBITS[7], hauteurManometriqueM: 80 },
      { ...DEBITS[8], hauteurManometriqueM: 69 },
      { ...DEBITS[9], hauteurManometriqueM: 43 },
    ],
  },

  {
    modele: "YB30-11",
    nombreEtages: 11,
    puissance: { kw: 9.3, ch: 12.5 },
    courantNominalA: 20,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 125 },
      { ...DEBITS[1], hauteurManometriqueM: 125 },
      { ...DEBITS[2], hauteurManometriqueM: 122 },
      { ...DEBITS[3], hauteurManometriqueM: 116 },
      { ...DEBITS[4], hauteurManometriqueM: 110 },
      { ...DEBITS[5], hauteurManometriqueM: 103 },
      { ...DEBITS[6], hauteurManometriqueM: 96 },
      { ...DEBITS[7], hauteurManometriqueM: 87 },
      { ...DEBITS[8], hauteurManometriqueM: 75 },
      { ...DEBITS[9], hauteurManometriqueM: 46 },
    ],
  },

  {
    modele: "YB30-12",
    nombreEtages: 12,
    puissance: { kw: 11, ch: 15 },
    courantNominalA: 24,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 137 },
      { ...DEBITS[1], hauteurManometriqueM: 137 },
      { ...DEBITS[2], hauteurManometriqueM: 134 },
      { ...DEBITS[3], hauteurManometriqueM: 127 },
      { ...DEBITS[4], hauteurManometriqueM: 121 },
      { ...DEBITS[5], hauteurManometriqueM: 114 },
      { ...DEBITS[6], hauteurManometriqueM: 106 },
      { ...DEBITS[7], hauteurManometriqueM: 97 },
      { ...DEBITS[8], hauteurManometriqueM: 83 },
      { ...DEBITS[9], hauteurManometriqueM: 51 },
    ],
  },

  {
    modele: "YB30-13",
    nombreEtages: 13,
    puissance: { kw: 11, ch: 15 },
    courantNominalA: 24,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 148 },
      { ...DEBITS[1], hauteurManometriqueM: 148 },
      { ...DEBITS[2], hauteurManometriqueM: 144 },
      { ...DEBITS[3], hauteurManometriqueM: 137 },
      { ...DEBITS[4], hauteurManometriqueM: 130 },
      { ...DEBITS[5], hauteurManometriqueM: 122 },
      { ...DEBITS[6], hauteurManometriqueM: 114 },
      { ...DEBITS[7], hauteurManometriqueM: 103 },
      { ...DEBITS[8], hauteurManometriqueM: 89 },
      { ...DEBITS[9], hauteurManometriqueM: 55 },
    ],
  },

  {
    modele: "YB30-14",
    nombreEtages: 14,
    puissance: { kw: 13, ch: 17.5 },
    courantNominalA: 28,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 160 },
      { ...DEBITS[1], hauteurManometriqueM: 161 },
      { ...DEBITS[2], hauteurManometriqueM: 156 },
      { ...DEBITS[3], hauteurManometriqueM: 149 },
      { ...DEBITS[4], hauteurManometriqueM: 141 },
      { ...DEBITS[5], hauteurManometriqueM: 133 },
      { ...DEBITS[6], hauteurManometriqueM: 125 },
      { ...DEBITS[7], hauteurManometriqueM: 113 },
      { ...DEBITS[8], hauteurManometriqueM: 98 },
      { ...DEBITS[9], hauteurManometriqueM: 61 },
    ],
  },

  {
    modele: "YB30-15",
    nombreEtages: 15,
    puissance: { kw: 13, ch: 17.5 },
    courantNominalA: 28,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 171 },
      { ...DEBITS[1], hauteurManometriqueM: 171 },
      { ...DEBITS[2], hauteurManometriqueM: 167 },
      { ...DEBITS[3], hauteurManometriqueM: 159 },
      { ...DEBITS[4], hauteurManometriqueM: 150 },
      { ...DEBITS[5], hauteurManometriqueM: 142 },
      { ...DEBITS[6], hauteurManometriqueM: 132 },
      { ...DEBITS[7], hauteurManometriqueM: 120 },
      { ...DEBITS[8], hauteurManometriqueM: 104 },
      { ...DEBITS[9], hauteurManometriqueM: 64 },
    ],
  },

  {
    modele: "YB30-16",
    nombreEtages: 16,
    puissance: { kw: 15, ch: 20 },
    courantNominalA: 32,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 183 },
      { ...DEBITS[1], hauteurManometriqueM: 184 },
      { ...DEBITS[2], hauteurManometriqueM: 179 },
      { ...DEBITS[3], hauteurManometriqueM: 171 },
      { ...DEBITS[4], hauteurManometriqueM: 162 },
      { ...DEBITS[5], hauteurManometriqueM: 153 },
      { ...DEBITS[6], hauteurManometriqueM: 143 },
      { ...DEBITS[7], hauteurManometriqueM: 130 },
      { ...DEBITS[8], hauteurManometriqueM: 112 },
      { ...DEBITS[9], hauteurManometriqueM: 70 },
    ],
  },

  {
    modele: "YB30-17",
    nombreEtages: 17,
    puissance: { kw: 15, ch: 20 },
    courantNominalA: 32,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 194 },
      { ...DEBITS[1], hauteurManometriqueM: 195 },
      { ...DEBITS[2], hauteurManometriqueM: 189 },
      { ...DEBITS[3], hauteurManometriqueM: 180 },
      { ...DEBITS[4], hauteurManometriqueM: 171 },
      { ...DEBITS[5], hauteurManometriqueM: 161 },
      { ...DEBITS[6], hauteurManometriqueM: 151 },
      { ...DEBITS[7], hauteurManometriqueM: 137 },
      { ...DEBITS[8], hauteurManometriqueM: 118 },
      { ...DEBITS[9], hauteurManometriqueM: 74 },
    ],
  },

  {
    modele: "YB30-18",
    nombreEtages: 18,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 40,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 207 },
      { ...DEBITS[1], hauteurManometriqueM: 208 },
      { ...DEBITS[2], hauteurManometriqueM: 202 },
      { ...DEBITS[3], hauteurManometriqueM: 193 },
      { ...DEBITS[4], hauteurManometriqueM: 183 },
      { ...DEBITS[5], hauteurManometriqueM: 173 },
      { ...DEBITS[6], hauteurManometriqueM: 163 },
      { ...DEBITS[7], hauteurManometriqueM: 148 },
      { ...DEBITS[8], hauteurManometriqueM: 129 },
      { ...DEBITS[9], hauteurManometriqueM: 82 },
    ],
  },

  {
    modele: "YB30-19",
    nombreEtages: 19,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 40,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 218 },
      { ...DEBITS[1], hauteurManometriqueM: 219 },
      { ...DEBITS[2], hauteurManometriqueM: 213 },
      { ...DEBITS[3], hauteurManometriqueM: 203 },
      { ...DEBITS[4], hauteurManometriqueM: 193 },
      { ...DEBITS[5], hauteurManometriqueM: 182 },
      { ...DEBITS[6], hauteurManometriqueM: 171 },
      { ...DEBITS[7], hauteurManometriqueM: 156 },
      { ...DEBITS[8], hauteurManometriqueM: 135 },
      { ...DEBITS[9], hauteurManometriqueM: 85 },
    ],
  },

  {
    modele: "YB30-20",
    nombreEtages: 20,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 40,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 229 },
      { ...DEBITS[1], hauteurManometriqueM: 230 },
      { ...DEBITS[2], hauteurManometriqueM: 223 },
      { ...DEBITS[3], hauteurManometriqueM: 213 },
      { ...DEBITS[4], hauteurManometriqueM: 202 },
      { ...DEBITS[5], hauteurManometriqueM: 191 },
      { ...DEBITS[6], hauteurManometriqueM: 179 },
      { ...DEBITS[7], hauteurManometriqueM: 163 },
      { ...DEBITS[8], hauteurManometriqueM: 141 },
      { ...DEBITS[9], hauteurManometriqueM: 89 },
    ],
  },

  // ============================================
  // YB30-21 → YB30-35
  // ============================================

  {
    modele: "YB30-21",
    nombreEtages: 21,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 40,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 240 },
      { ...DEBITS[1], hauteurManometriqueM: 241 },
      { ...DEBITS[2], hauteurManometriqueM: 234 },
      { ...DEBITS[3], hauteurManometriqueM: 223 },
      { ...DEBITS[4], hauteurManometriqueM: 212 },
      { ...DEBITS[5], hauteurManometriqueM: 200 },
      { ...DEBITS[6], hauteurManometriqueM: 189 },
      { ...DEBITS[7], hauteurManometriqueM: 170 },
      { ...DEBITS[8], hauteurManometriqueM: 147 },
      { ...DEBITS[9], hauteurManometriqueM: 92 },
    ],
  },

  {
    modele: "YB30-22",
    nombreEtages: 22,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 252 },
      { ...DEBITS[1], hauteurManometriqueM: 253 },
      { ...DEBITS[2], hauteurManometriqueM: 246 },
      { ...DEBITS[3], hauteurManometriqueM: 235 },
      { ...DEBITS[4], hauteurManometriqueM: 223 },
      { ...DEBITS[5], hauteurManometriqueM: 211 },
      { ...DEBITS[6], hauteurManometriqueM: 198 },
      { ...DEBITS[7], hauteurManometriqueM: 180 },
      { ...DEBITS[8], hauteurManometriqueM: 156 },
      { ...DEBITS[9], hauteurManometriqueM: 99 },
    ],
  },

  {
    modele: "YB30-23",
    nombreEtages: 23,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 263 },
      { ...DEBITS[1], hauteurManometriqueM: 264 },
      { ...DEBITS[2], hauteurManometriqueM: 257 },
      { ...DEBITS[3], hauteurManometriqueM: 245 },
      { ...DEBITS[4], hauteurManometriqueM: 233 },
      { ...DEBITS[5], hauteurManometriqueM: 220 },
      { ...DEBITS[6], hauteurManometriqueM: 206 },
      { ...DEBITS[7], hauteurManometriqueM: 188 },
      { ...DEBITS[8], hauteurManometriqueM: 162 },
      { ...DEBITS[9], hauteurManometriqueM: 102 },
    ],
  },

  {
    modele: "YB30-24",
    nombreEtages: 24,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 274 },
      { ...DEBITS[1], hauteurManometriqueM: 275 },
      { ...DEBITS[2], hauteurManometriqueM: 268 },
      { ...DEBITS[3], hauteurManometriqueM: 255 },
      { ...DEBITS[4], hauteurManometriqueM: 242 },
      { ...DEBITS[5], hauteurManometriqueM: 228 },
      { ...DEBITS[6], hauteurManometriqueM: 214 },
      { ...DEBITS[7], hauteurManometriqueM: 195 },
      { ...DEBITS[8], hauteurManometriqueM: 168 },
      { ...DEBITS[9], hauteurManometriqueM: 105 },
    ],
  },

  {
    modele: "YB30-25",
    nombreEtages: 25,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 285 },
      { ...DEBITS[1], hauteurManometriqueM: 286 },
      { ...DEBITS[2], hauteurManometriqueM: 278 },
      { ...DEBITS[3], hauteurManometriqueM: 265 },
      { ...DEBITS[4], hauteurManometriqueM: 251 },
      { ...DEBITS[5], hauteurManometriqueM: 237 },
      { ...DEBITS[6], hauteurManometriqueM: 221 },
      { ...DEBITS[7], hauteurManometriqueM: 201 },
      { ...DEBITS[8], hauteurManometriqueM: 174 },
      { ...DEBITS[9], hauteurManometriqueM: 108 },
    ],
  },

  {
    modele: "YB30-26",
    nombreEtages: 26,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 296 },
      { ...DEBITS[1], hauteurManometriqueM: 297 },
      { ...DEBITS[2], hauteurManometriqueM: 288 },
      { ...DEBITS[3], hauteurManometriqueM: 275 },
      { ...DEBITS[4], hauteurManometriqueM: 260 },
      { ...DEBITS[5], hauteurManometriqueM: 245 },
      { ...DEBITS[6], hauteurManometriqueM: 229 },
      { ...DEBITS[7], hauteurManometriqueM: 208 },
      { ...DEBITS[8], hauteurManometriqueM: 179 },
      { ...DEBITS[9], hauteurManometriqueM: 111 },
    ],
  },

  {
    modele: "YB30-27",
    nombreEtages: 27,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 309 },
      { ...DEBITS[1], hauteurManometriqueM: 310 },
      { ...DEBITS[2], hauteurManometriqueM: 302 },
      { ...DEBITS[3], hauteurManometriqueM: 288 },
      { ...DEBITS[4], hauteurManometriqueM: 274 },
      { ...DEBITS[5], hauteurManometriqueM: 259 },
      { ...DEBITS[6], hauteurManometriqueM: 242 },
      { ...DEBITS[7], hauteurManometriqueM: 221 },
      { ...DEBITS[8], hauteurManometriqueM: 191 },
      { ...DEBITS[9], hauteurManometriqueM: 121 },
    ],
  },

  {
    modele: "YB30-28",
    nombreEtages: 28,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 320 },
      { ...DEBITS[1], hauteurManometriqueM: 321 },
      { ...DEBITS[2], hauteurManometriqueM: 313 },
      { ...DEBITS[3], hauteurManometriqueM: 298 },
      { ...DEBITS[4], hauteurManometriqueM: 283 },
      { ...DEBITS[5], hauteurManometriqueM: 267 },
      { ...DEBITS[6], hauteurManometriqueM: 250 },
      { ...DEBITS[7], hauteurManometriqueM: 228 },
      { ...DEBITS[8], hauteurManometriqueM: 197 },
      { ...DEBITS[9], hauteurManometriqueM: 124 },
    ],
  },

  {
    modele: "YB30-29",
    nombreEtages: 29,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 331 },
      { ...DEBITS[1], hauteurManometriqueM: 332 },
      { ...DEBITS[2], hauteurManometriqueM: 323 },
      { ...DEBITS[3], hauteurManometriqueM: 308 },
      { ...DEBITS[4], hauteurManometriqueM: 292 },
      { ...DEBITS[5], hauteurManometriqueM: 276 },
      { ...DEBITS[6], hauteurManometriqueM: 258 },
      { ...DEBITS[7], hauteurManometriqueM: 235 },
      { ...DEBITS[8], hauteurManometriqueM: 203 },
      { ...DEBITS[9], hauteurManometriqueM: 127 },
    ],
  },

  {
    modele: "YB30-30",
    nombreEtages: 30,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 342 },
      { ...DEBITS[1], hauteurManometriqueM: 343 },
      { ...DEBITS[2], hauteurManometriqueM: 333 },
      { ...DEBITS[3], hauteurManometriqueM: 318 },
      { ...DEBITS[4], hauteurManometriqueM: 301 },
      { ...DEBITS[5], hauteurManometriqueM: 284 },
      { ...DEBITS[6], hauteurManometriqueM: 266 },
      { ...DEBITS[7], hauteurManometriqueM: 242 },
      { ...DEBITS[8], hauteurManometriqueM: 209 },
      { ...DEBITS[9], hauteurManometriqueM: 130 },
    ],
  },

  {
    modele: "YB30-31",
    nombreEtages: 31,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 353 },
      { ...DEBITS[1], hauteurManometriqueM: 353 },
      { ...DEBITS[2], hauteurManometriqueM: 344 },
      { ...DEBITS[3], hauteurManometriqueM: 328 },
      { ...DEBITS[4], hauteurManometriqueM: 310 },
      { ...DEBITS[5], hauteurManometriqueM: 293 },
      { ...DEBITS[6], hauteurManometriqueM: 274 },
      { ...DEBITS[7], hauteurManometriqueM: 249 },
      { ...DEBITS[8], hauteurManometriqueM: 215 },
      { ...DEBITS[9], hauteurManometriqueM: 133 },
    ],
  },

  {
    modele: "YB30-32",
    nombreEtages: 32,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 64,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 367 },
      { ...DEBITS[1], hauteurManometriqueM: 368 },
      { ...DEBITS[2], hauteurManometriqueM: 358 },
      { ...DEBITS[3], hauteurManometriqueM: 342 },
      { ...DEBITS[4], hauteurManometriqueM: 324 },
      { ...DEBITS[5], hauteurManometriqueM: 306 },
      { ...DEBITS[6], hauteurManometriqueM: 287 },
      { ...DEBITS[7], hauteurManometriqueM: 262 },
      { ...DEBITS[8], hauteurManometriqueM: 227 },
      { ...DEBITS[9], hauteurManometriqueM: 143 },
    ],
  },

  {
    modele: "YB30-33",
    nombreEtages: 33,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 64,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 378 },
      { ...DEBITS[1], hauteurManometriqueM: 379 },
      { ...DEBITS[2], hauteurManometriqueM: 369 },
      { ...DEBITS[3], hauteurManometriqueM: 352 },
      { ...DEBITS[4], hauteurManometriqueM: 334 },
      { ...DEBITS[5], hauteurManometriqueM: 315 },
      { ...DEBITS[6], hauteurManometriqueM: 295 },
      { ...DEBITS[7], hauteurManometriqueM: 269 },
      { ...DEBITS[8], hauteurManometriqueM: 232 },
      { ...DEBITS[9], hauteurManometriqueM: 146 },
    ],
  },

  {
    modele: "YB30-34",
    nombreEtages: 34,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 64,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 389 },
      { ...DEBITS[1], hauteurManometriqueM: 390 },
      { ...DEBITS[2], hauteurManometriqueM: 379 },
      { ...DEBITS[3], hauteurManometriqueM: 362 },
      { ...DEBITS[4], hauteurManometriqueM: 343 },
      { ...DEBITS[5], hauteurManometriqueM: 324 },
      { ...DEBITS[6], hauteurManometriqueM: 303 },
      { ...DEBITS[7], hauteurManometriqueM: 276 },
      { ...DEBITS[8], hauteurManometriqueM: 238 },
      { ...DEBITS[9], hauteurManometriqueM: 149 },
    ],
  },

  {
    modele: "YB30-35",
    nombreEtages: 35,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 64,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 399 },
      { ...DEBITS[1], hauteurManometriqueM: 401 },
      { ...DEBITS[2], hauteurManometriqueM: 390 },
      { ...DEBITS[3], hauteurManometriqueM: 372 },
      { ...DEBITS[4], hauteurManometriqueM: 352 },
      { ...DEBITS[5], hauteurManometriqueM: 332 },
      { ...DEBITS[6], hauteurManometriqueM: 310 },
      { ...DEBITS[7], hauteurManometriqueM: 283 },
      { ...DEBITS[8], hauteurManometriqueM: 244 },
      { ...DEBITS[9], hauteurManometriqueM: 152 },
    ],
  },

  // ============================================
  // YB30-39
  // ============================================

  {
    modele: "YB30-39",
    nombreEtages: 39,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 445 },
      { ...DEBITS[1], hauteurManometriqueM: 447 },
      { ...DEBITS[2], hauteurManometriqueM: 435 },
      { ...DEBITS[3], hauteurManometriqueM: 416 },
      { ...DEBITS[4], hauteurManometriqueM: 395 },
      { ...DEBITS[5], hauteurManometriqueM: 374 },
      { ...DEBITS[6], hauteurManometriqueM: 351 },
      { ...DEBITS[7], hauteurManometriqueM: 320 },
      { ...DEBITS[8], hauteurManometriqueM: 278 },
      { ...DEBITS[9], hauteurManometriqueM: 176 },
    ],
  },

  // ============================================
  // YB30-43
  // ============================================

  {
    modele: "YB30-43",
    nombreEtages: 43,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 489 },
      { ...DEBITS[1], hauteurManometriqueM: 491 },
      { ...DEBITS[2], hauteurManometriqueM: 478 },
      { ...DEBITS[3], hauteurManometriqueM: 456 },
      { ...DEBITS[4], hauteurManometriqueM: 433 },
      { ...DEBITS[5], hauteurManometriqueM: 409 },
      { ...DEBITS[6], hauteurManometriqueM: 383 },
      { ...DEBITS[7], hauteurManometriqueM: 350 },
      { ...DEBITS[8], hauteurManometriqueM: 302 },
      { ...DEBITS[9], hauteurManometriqueM: 190 },
    ],
  },

  // ============================================
  // YB30-46
  // ============================================

  {
    modele: "YB30-46",
    nombreEtages: 46,
    puissance: { kw: 45, ch: 60 },
    courantNominalA: 96,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 531 },
      { ...DEBITS[1], hauteurManometriqueM: 535 },
      { ...DEBITS[2], hauteurManometriqueM: 521 },
      { ...DEBITS[3], hauteurManometriqueM: 499 },
      { ...DEBITS[4], hauteurManometriqueM: 475 },
      { ...DEBITS[5], hauteurManometriqueM: 451 },
      { ...DEBITS[6], hauteurManometriqueM: 424 },
      { ...DEBITS[7], hauteurManometriqueM: 389 },
      { ...DEBITS[8], hauteurManometriqueM: 341 },
      { ...DEBITS[9], hauteurManometriqueM: 220 },
    ],
  },

  // ============================================
  // YB30-49
  // ============================================

  {
    modele: "YB30-49",
    nombreEtages: 49,
    puissance: { kw: 45, ch: 60 },
    courantNominalA: 96,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 565 },
      { ...DEBITS[1], hauteurManometriqueM: 568 },
      { ...DEBITS[2], hauteurManometriqueM: 554 },
      { ...DEBITS[3], hauteurManometriqueM: 530 },
      { ...DEBITS[4], hauteurManometriqueM: 504 },
      { ...DEBITS[5], hauteurManometriqueM: 478 },
      { ...DEBITS[6], hauteurManometriqueM: 450 },
      { ...DEBITS[7], hauteurManometriqueM: 413 },
      { ...DEBITS[8], hauteurManometriqueM: 361 },
      { ...DEBITS[9], hauteurManometriqueM: 233 },
    ],
  },
];

export const yb30Products: readonly Product[] = pompesYB30.map((pompe) => ({
  slug: pompe.modele.toLowerCase(),
  name: pompe.modele,
  categoryId: "pompes",
  subcategoryId: "yb30",
  shortDescription: `Pompe triphasée YB30 à ${pompe.nombreEtages} étage${pompe.nombreEtages > 1 ? "s" : ""}.`,
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
