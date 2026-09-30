import type { Product } from "@/types/catalogue";

/**
 * FICHE TECHNIQUE
 * Pompes triphasées YB95
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

interface PompeYB95 {
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
  { debitLMin: 1000, debitM3H: 60 },
  { debitLMin: 1167, debitM3H: 70 },
  { debitLMin: 1333, debitM3H: 80 },
  { debitLMin: 1500, debitM3H: 90 }, // À VÉRIFIER : "00" affiché dans l'image 1, 90 dans l'image 2
  { debitLMin: 1667, debitM3H: 100 },
  { debitLMin: 1833, debitM3H: 110 }, // À VÉRIFIER : "1830" affiché dans l'image 1, 1833 dans l'image 2
  { debitLMin: 2000, debitM3H: 120 }, // Colonne présente uniquement dans l'image 2 (YB95-11 à YB95-20)
  { debitLMin: 2033, debitM3H: 122 },
];

// ============================================
// POMPES YB95
// ============================================

const pompesYB95: PompeYB95[] = [
  // ============================================
  // YB95-1 → YB95-10
  // (image 1 : pas de colonne 2000 L/min, DEBITS[12] non utilisé)
  // ============================================

  {
    modele: "YB95-1",
    nombreEtages: 1,
    puissance: { kw: 5.5, ch: 7.5 },
    courantNominalA: 12,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 23 },
      { ...DEBITS[1], hauteurManometriqueM: 22 },
      { ...DEBITS[2], hauteurManometriqueM: 21 },
      { ...DEBITS[3], hauteurManometriqueM: 20 },
      { ...DEBITS[4], hauteurManometriqueM: 18 },
      { ...DEBITS[5], hauteurManometriqueM: 17 },
      { ...DEBITS[6], hauteurManometriqueM: 15 },
      { ...DEBITS[7], hauteurManometriqueM: 14 },
      { ...DEBITS[8], hauteurManometriqueM: 13 },
      { ...DEBITS[9], hauteurManometriqueM: 13 },
      { ...DEBITS[10], hauteurManometriqueM: 11 },
      { ...DEBITS[11], hauteurManometriqueM: 9 },
      { ...DEBITS[13], hauteurManometriqueM: 6 },
    ],
  },

  {
    modele: "YB95-2",
    nombreEtages: 2,
    puissance: { kw: 9.3, ch: 12.5 },
    courantNominalA: 20,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 44 },
      { ...DEBITS[1], hauteurManometriqueM: 43 },
      { ...DEBITS[2], hauteurManometriqueM: 41 },
      { ...DEBITS[3], hauteurManometriqueM: 39 },
      { ...DEBITS[4], hauteurManometriqueM: 36 },
      { ...DEBITS[5], hauteurManometriqueM: 33 },
      { ...DEBITS[6], hauteurManometriqueM: 31 },
      { ...DEBITS[7], hauteurManometriqueM: 29 },
      { ...DEBITS[8], hauteurManometriqueM: 27 },
      { ...DEBITS[9], hauteurManometriqueM: 25 },
      { ...DEBITS[10], hauteurManometriqueM: 22 },
      { ...DEBITS[11], hauteurManometriqueM: 17 },
      { ...DEBITS[13], hauteurManometriqueM: 12 },
    ],
  },

  {
    modele: "YB95-3",
    nombreEtages: 3,
    puissance: { kw: 13, ch: 17.5 },
    courantNominalA: 28,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 65 },
      { ...DEBITS[1], hauteurManometriqueM: 64 },
      { ...DEBITS[2], hauteurManometriqueM: 62 },
      { ...DEBITS[3], hauteurManometriqueM: 58 },
      { ...DEBITS[4], hauteurManometriqueM: 55 },
      { ...DEBITS[5], hauteurManometriqueM: 51 },
      { ...DEBITS[6], hauteurManometriqueM: 47 },
      { ...DEBITS[7], hauteurManometriqueM: 44 },
      { ...DEBITS[8], hauteurManometriqueM: 42 },
      { ...DEBITS[9], hauteurManometriqueM: 38 },
      { ...DEBITS[10], hauteurManometriqueM: 33 },
      { ...DEBITS[11], hauteurManometriqueM: 27 },
      { ...DEBITS[13], hauteurManometriqueM: 19 },
    ],
  },

  {
    modele: "YB95-4",
    nombreEtages: 4,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 40,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 86 },
      { ...DEBITS[1], hauteurManometriqueM: 84 },
      { ...DEBITS[2], hauteurManometriqueM: 82 },
      { ...DEBITS[3], hauteurManometriqueM: 78 },
      { ...DEBITS[4], hauteurManometriqueM: 73 },
      { ...DEBITS[5], hauteurManometriqueM: 67 },
      { ...DEBITS[6], hauteurManometriqueM: 63 },
      { ...DEBITS[7], hauteurManometriqueM: 59 },
      { ...DEBITS[8], hauteurManometriqueM: 55 },
      { ...DEBITS[9], hauteurManometriqueM: 51 },
      { ...DEBITS[10], hauteurManometriqueM: 44 },
      { ...DEBITS[11], hauteurManometriqueM: 26 }, // À VÉRIFIER : chute brutale par rapport aux modèles voisins
      { ...DEBITS[13], hauteurManometriqueM: 25 }, // À VÉRIFIER
    ],
  },

  {
    modele: "YB95-5",
    nombreEtages: 5,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 56,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 106 },
      { ...DEBITS[1], hauteurManometriqueM: 105 },
      { ...DEBITS[2], hauteurManometriqueM: 101 },
      { ...DEBITS[3], hauteurManometriqueM: 96 },
      { ...DEBITS[4], hauteurManometriqueM: 90 },
      { ...DEBITS[5], hauteurManometriqueM: 84 },
      { ...DEBITS[6], hauteurManometriqueM: 78 },
      { ...DEBITS[7], hauteurManometriqueM: 73 },
      { ...DEBITS[8], hauteurManometriqueM: 69 },
      { ...DEBITS[9], hauteurManometriqueM: 63 },
      { ...DEBITS[10], hauteurManometriqueM: 55 },
      { ...DEBITS[11], hauteurManometriqueM: 44 },
      { ...DEBITS[13], hauteurManometriqueM: 30 },
    ],
  },

  {
    modele: "YB95-6",
    nombreEtages: 6,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 64,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 129 },
      { ...DEBITS[1], hauteurManometriqueM: 127 },
      { ...DEBITS[2], hauteurManometriqueM: 123 },
      { ...DEBITS[3], hauteurManometriqueM: 117 },
      { ...DEBITS[4], hauteurManometriqueM: 110 },
      { ...DEBITS[5], hauteurManometriqueM: 102 },
      { ...DEBITS[6], hauteurManometriqueM: 96 },
      { ...DEBITS[7], hauteurManometriqueM: 90 },
      { ...DEBITS[8], hauteurManometriqueM: 84 },
      { ...DEBITS[9], hauteurManometriqueM: 77 },
      { ...DEBITS[10], hauteurManometriqueM: 68 },
      { ...DEBITS[11], hauteurManometriqueM: 55 },
      { ...DEBITS[13], hauteurManometriqueM: 41 },
    ],
  },

  {
    modele: "YB95-7",
    nombreEtages: 7,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 80,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 148 },
      { ...DEBITS[1], hauteurManometriqueM: 146 },
      { ...DEBITS[2], hauteurManometriqueM: 142 },
      { ...DEBITS[3], hauteurManometriqueM: 135 },
      { ...DEBITS[4], hauteurManometriqueM: 126 },
      { ...DEBITS[5], hauteurManometriqueM: 118 },
      { ...DEBITS[6], hauteurManometriqueM: 110 },
      { ...DEBITS[7], hauteurManometriqueM: 103 },
      { ...DEBITS[8], hauteurManometriqueM: 96 },
      { ...DEBITS[9], hauteurManometriqueM: 88 },
      { ...DEBITS[10], hauteurManometriqueM: 77 },
      { ...DEBITS[11], hauteurManometriqueM: 62 },
      { ...DEBITS[13], hauteurManometriqueM: 43 },
    ],
  },

  {
    modele: "YB95-8",
    nombreEtages: 8,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 170 },
      { ...DEBITS[1], hauteurManometriqueM: 167 },
      { ...DEBITS[2], hauteurManometriqueM: 163 },
      { ...DEBITS[3], hauteurManometriqueM: 155 },
      { ...DEBITS[4], hauteurManometriqueM: 145 },
      { ...DEBITS[5], hauteurManometriqueM: 136 },
      { ...DEBITS[6], hauteurManometriqueM: 127 },
      { ...DEBITS[7], hauteurManometriqueM: 119 },
      { ...DEBITS[8], hauteurManometriqueM: 112 },
      { ...DEBITS[9], hauteurManometriqueM: 102 },
      { ...DEBITS[10], hauteurManometriqueM: 90 },
      { ...DEBITS[11], hauteurManometriqueM: 73 },
      { ...DEBITS[13], hauteurManometriqueM: 54 },
    ],
  },

  {
    modele: "YB95-9",
    nombreEtages: 9,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 96,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 189 },
      { ...DEBITS[1], hauteurManometriqueM: 187 },
      { ...DEBITS[2], hauteurManometriqueM: 182 },
      { ...DEBITS[3], hauteurManometriqueM: 173 },
      { ...DEBITS[4], hauteurManometriqueM: 162 },
      { ...DEBITS[5], hauteurManometriqueM: 151 },
      { ...DEBITS[6], hauteurManometriqueM: 141 },
      { ...DEBITS[7], hauteurManometriqueM: 133 },
      { ...DEBITS[8], hauteurManometriqueM: 124 },
      { ...DEBITS[9], hauteurManometriqueM: 114 },
      { ...DEBITS[10], hauteurManometriqueM: 99 },
      { ...DEBITS[11], hauteurManometriqueM: 80 },
      { ...DEBITS[13], hauteurManometriqueM: 59 },
    ],
  },

  {
    modele: "YB95-10",
    nombreEtages: 10,
    puissance: { kw: 45, ch: 60 },
    courantNominalA: 120,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 214 },
      { ...DEBITS[1], hauteurManometriqueM: 212 },
      { ...DEBITS[2], hauteurManometriqueM: 206 },
      { ...DEBITS[3], hauteurManometriqueM: 197 },
      { ...DEBITS[4], hauteurManometriqueM: 185 },
      { ...DEBITS[5], hauteurManometriqueM: 173 },
      { ...DEBITS[6], hauteurManometriqueM: 162 },
      { ...DEBITS[7], hauteurManometriqueM: 152 },
      { ...DEBITS[8], hauteurManometriqueM: 143 },
      { ...DEBITS[9], hauteurManometriqueM: 132 },
      { ...DEBITS[10], hauteurManometriqueM: 116 },
      { ...DEBITS[11], hauteurManometriqueM: 95 },
      { ...DEBITS[13], hauteurManometriqueM: 71 },
    ],
  },

  // ============================================
  // YB95-11 → YB95-20
  // (image 2 : 14 colonnes de débit)
  // ============================================

  {
    modele: "YB95-11",
    nombreEtages: 11,
    puissance: { kw: 55, ch: 75 },
    courantNominalA: 120,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 237 },
      { ...DEBITS[1], hauteurManometriqueM: 234 },
      { ...DEBITS[2], hauteurManometriqueM: 228 },
      { ...DEBITS[3], hauteurManometriqueM: 217 },
      { ...DEBITS[4], hauteurManometriqueM: 205 },
      { ...DEBITS[5], hauteurManometriqueM: 191 },
      { ...DEBITS[6], hauteurManometriqueM: 179 },
      { ...DEBITS[7], hauteurManometriqueM: 169 },
      { ...DEBITS[8], hauteurManometriqueM: 158 },
      { ...DEBITS[9], hauteurManometriqueM: 146 },
      { ...DEBITS[10], hauteurManometriqueM: 129 },
      { ...DEBITS[11], hauteurManometriqueM: 106 },
      { ...DEBITS[12], hauteurManometriqueM: 79 },
      { ...DEBITS[13], hauteurManometriqueM: 74 },
    ],
  },

  {
    modele: "YB95-12",
    nombreEtages: 12,
    puissance: { kw: 55, ch: 75 },
    courantNominalA: 120,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 257 },
      { ...DEBITS[1], hauteurManometriqueM: 254 },
      { ...DEBITS[2], hauteurManometriqueM: 248 },
      { ...DEBITS[3], hauteurManometriqueM: 236 },
      { ...DEBITS[4], hauteurManometriqueM: 222 },
      { ...DEBITS[5], hauteurManometriqueM: 208 },
      { ...DEBITS[6], hauteurManometriqueM: 195 },
      { ...DEBITS[7], hauteurManometriqueM: 183 },
      { ...DEBITS[8], hauteurManometriqueM: 172 },
      { ...DEBITS[9], hauteurManometriqueM: 158 },
      { ...DEBITS[10], hauteurManometriqueM: 140 },
      { ...DEBITS[11], hauteurManometriqueM: 115 },
      { ...DEBITS[12], hauteurManometriqueM: 86 },
      { ...DEBITS[13], hauteurManometriqueM: 80 },
    ],
  },

  {
    modele: "YB95-13",
    nombreEtages: 13,
    puissance: { kw: 55, ch: 75 },
    courantNominalA: 136,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 278 },
      { ...DEBITS[1], hauteurManometriqueM: 275 },
      { ...DEBITS[2], hauteurManometriqueM: 267 },
      { ...DEBITS[3], hauteurManometriqueM: 255 },
      { ...DEBITS[4], hauteurManometriqueM: 240 },
      { ...DEBITS[5], hauteurManometriqueM: 224 },
      { ...DEBITS[6], hauteurManometriqueM: 210 },
      { ...DEBITS[7], hauteurManometriqueM: 198 },
      { ...DEBITS[8], hauteurManometriqueM: 185 },
      { ...DEBITS[9], hauteurManometriqueM: 170 },
      { ...DEBITS[10], hauteurManometriqueM: 150 },
      { ...DEBITS[11], hauteurManometriqueM: 123 },
      { ...DEBITS[12], hauteurManometriqueM: 92 },
      { ...DEBITS[13], hauteurManometriqueM: 86 },
    ],
  },

  {
    modele: "YB95-14",
    nombreEtages: 14,
    puissance: { kw: 63, ch: 85 },
    courantNominalA: 136,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 300 },
      { ...DEBITS[1], hauteurManometriqueM: 297 },
      { ...DEBITS[2], hauteurManometriqueM: 289 },
      { ...DEBITS[3], hauteurManometriqueM: 276 },
      { ...DEBITS[4], hauteurManometriqueM: 259 },
      { ...DEBITS[5], hauteurManometriqueM: 243 },
      { ...DEBITS[6], hauteurManometriqueM: 227 },
      { ...DEBITS[7], hauteurManometriqueM: 214 },
      { ...DEBITS[8], hauteurManometriqueM: 201 },
      { ...DEBITS[9], hauteurManometriqueM: 185 },
      { ...DEBITS[10], hauteurManometriqueM: 163 },
      { ...DEBITS[11], hauteurManometriqueM: 134 },
      { ...DEBITS[12], hauteurManometriqueM: 100 },
      { ...DEBITS[13], hauteurManometriqueM: 93 },
    ],
  },

  {
    modele: "YB95-15",
    nombreEtages: 15,
    puissance: { kw: 75, ch: 100 },
    courantNominalA: 160,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 321 },
      { ...DEBITS[1], hauteurManometriqueM: 318 },
      { ...DEBITS[2], hauteurManometriqueM: 310 },
      { ...DEBITS[3], hauteurManometriqueM: 296 },
      { ...DEBITS[4], hauteurManometriqueM: 278 },
      { ...DEBITS[5], hauteurManometriqueM: 260 },
      { ...DEBITS[6], hauteurManometriqueM: 244 },
      { ...DEBITS[7], hauteurManometriqueM: 230 },
      { ...DEBITS[8], hauteurManometriqueM: 215 },
      { ...DEBITS[9], hauteurManometriqueM: 198 },
      { ...DEBITS[10], hauteurManometriqueM: 175 },
      { ...DEBITS[11], hauteurManometriqueM: 144 },
      { ...DEBITS[12], hauteurManometriqueM: 107 },
      { ...DEBITS[13], hauteurManometriqueM: 100 },
    ],
  },

  {
    modele: "YB95-16",
    nombreEtages: 16,
    puissance: { kw: 75, ch: 100 },
    courantNominalA: 160,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 341 },
      { ...DEBITS[1], hauteurManometriqueM: 338 },
      { ...DEBITS[2], hauteurManometriqueM: 329 },
      { ...DEBITS[3], hauteurManometriqueM: 314 },
      { ...DEBITS[4], hauteurManometriqueM: 296 },
      { ...DEBITS[5], hauteurManometriqueM: 277 },
      { ...DEBITS[6], hauteurManometriqueM: 259 },
      { ...DEBITS[7], hauteurManometriqueM: 244 },
      { ...DEBITS[8], hauteurManometriqueM: 229 },
      { ...DEBITS[9], hauteurManometriqueM: 211 },
      { ...DEBITS[10], hauteurManometriqueM: 186 },
      { ...DEBITS[11], hauteurManometriqueM: 152 },
      { ...DEBITS[12], hauteurManometriqueM: 114 },
      { ...DEBITS[13], hauteurManometriqueM: 106 },
    ],
  },

  {
    modele: "YB95-17",
    nombreEtages: 17,
    puissance: { kw: 75, ch: 100 },
    courantNominalA: 160,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 362 },
      { ...DEBITS[1], hauteurManometriqueM: 358 },
      { ...DEBITS[2], hauteurManometriqueM: 349 },
      { ...DEBITS[3], hauteurManometriqueM: 333 },
      { ...DEBITS[4], hauteurManometriqueM: 313 },
      { ...DEBITS[5], hauteurManometriqueM: 293 },
      { ...DEBITS[6], hauteurManometriqueM: 275 },
      { ...DEBITS[7], hauteurManometriqueM: 258 },
      { ...DEBITS[8], hauteurManometriqueM: 242 },
      { ...DEBITS[9], hauteurManometriqueM: 223 },
      { ...DEBITS[10], hauteurManometriqueM: 196 },
      { ...DEBITS[11], hauteurManometriqueM: 160 },
      { ...DEBITS[12], hauteurManometriqueM: 120 },
      { ...DEBITS[13], hauteurManometriqueM: 112 },
    ],
  },

  {
    modele: "YB95-18",
    nombreEtages: 18,
    puissance: { kw: 93, ch: 125 },
    courantNominalA: 200,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 382 },
      { ...DEBITS[1], hauteurManometriqueM: 378 },
      { ...DEBITS[2], hauteurManometriqueM: 368 },
      { ...DEBITS[3], hauteurManometriqueM: 352 },
      { ...DEBITS[4], hauteurManometriqueM: 331 },
      { ...DEBITS[5], hauteurManometriqueM: 309 },
      { ...DEBITS[6], hauteurManometriqueM: 290 },
      { ...DEBITS[7], hauteurManometriqueM: 272 },
      { ...DEBITS[8], hauteurManometriqueM: 255 },
      { ...DEBITS[9], hauteurManometriqueM: 235 },
      { ...DEBITS[10], hauteurManometriqueM: 206 },
      { ...DEBITS[11], hauteurManometriqueM: 169 },
      { ...DEBITS[12], hauteurManometriqueM: 125 },
      { ...DEBITS[13], hauteurManometriqueM: 117 },
    ],
  },

  {
    modele: "YB95-19",
    nombreEtages: 19,
    puissance: { kw: 93, ch: 125 },
    courantNominalA: 200,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 402 },
      { ...DEBITS[1], hauteurManometriqueM: 398 },
      { ...DEBITS[2], hauteurManometriqueM: 388 },
      { ...DEBITS[3], hauteurManometriqueM: 370 },
      { ...DEBITS[4], hauteurManometriqueM: 348 },
      { ...DEBITS[5], hauteurManometriqueM: 325 },
      { ...DEBITS[6], hauteurManometriqueM: 305 },
      { ...DEBITS[7], hauteurManometriqueM: 287 },
      { ...DEBITS[8], hauteurManometriqueM: 269 },
      { ...DEBITS[9], hauteurManometriqueM: 247 },
      { ...DEBITS[10], hauteurManometriqueM: 216 },
      { ...DEBITS[11], hauteurManometriqueM: 177 },
      { ...DEBITS[12], hauteurManometriqueM: 131 },
      { ...DEBITS[13], hauteurManometriqueM: 122 },
    ],
  },

  {
    modele: "YB95-20",
    nombreEtages: 20,
    puissance: { kw: 93, ch: 125 },
    courantNominalA: 200,
    debit: [
      { ...DEBITS[0], hauteurManometriqueM: 423 },
      { ...DEBITS[1], hauteurManometriqueM: 418 },
      { ...DEBITS[2], hauteurManometriqueM: 407 },
      { ...DEBITS[3], hauteurManometriqueM: 388 },
      { ...DEBITS[4], hauteurManometriqueM: 365 },
      { ...DEBITS[5], hauteurManometriqueM: 341 },
      { ...DEBITS[6], hauteurManometriqueM: 320 },
      { ...DEBITS[7], hauteurManometriqueM: 301 },
      { ...DEBITS[8], hauteurManometriqueM: 281 },
      { ...DEBITS[9], hauteurManometriqueM: 258 },
      { ...DEBITS[10], hauteurManometriqueM: 226 },
      { ...DEBITS[11], hauteurManometriqueM: 184 },
      { ...DEBITS[12], hauteurManometriqueM: 137 },
      { ...DEBITS[13], hauteurManometriqueM: 128 },
    ],
  },
];

export const yb95Products: readonly Product[] = pompesYB95.map((pompe) => ({
  slug: pompe.modele.toLowerCase(),
  name: pompe.modele,
  categoryId: "pompes",
  subcategoryId: "yb95",
  shortDescription: `Pompe triphasée YB95 à ${pompe.nombreEtages} étage${pompe.nombreEtages > 1 ? "s" : ""}.`,
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