import type { Product } from "@/types/catalogue";

/**
 * FICHE TECHNIQUE
 * Pompes triphasées YB60
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

interface PompeYB60 {
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
  { debitLMin: 1300, debitM3H: 78 },
];

/**
 * Associe une liste de hauteurs (dans l'ordre des colonnes de DEBITS)
 * aux points de débit correspondants.
 */
const buildDebit = (hauteurs: number[]): DebitPoint[] =>
  hauteurs.map((h, i) => ({ ...DEBITS[i], hauteurManometriqueM: h }));

// ============================================
// POMPES YB60
// ============================================

const pompesYB60: PompeYB60[] = [
  // ============================================
  // YB60-2-B → YB60-12
  // (image 2)
  // ============================================

  {
    modele: "YB60-2-B",
    nombreEtages: 2,
    puissance: { kw: 3, ch: 4 },
    courantNominalA: 6,
    debit: buildDebit([22, 22, 21, 18, 15, 13, 10, 6, 1]),
  },
  {
    modele: "YB60-2",
    nombreEtages: 2,
    puissance: { kw: 4, ch: 5.5 },
    courantNominalA: 9,
    debit: buildDebit([28, 27, 26, 23, 19, 17, 14, 10, 5]),
  },
  {
    modele: "YB60-3",
    nombreEtages: 3,
    puissance: { kw: 5.5, ch: 7.5 },
    courantNominalA: 12,
    debit: buildDebit([42, 41, 39, 35, 30, 26, 22, 16, 10]),
  },
  {
    modele: "YB60-4",
    nombreEtages: 4,
    puissance: { kw: 7.5, ch: 10 },
    courantNominalA: 16,
    debit: buildDebit([56, 55, 52, 47, 41, 35, 30, 22, 14]),
  },
  {
    modele: "YB60-5",
    nombreEtages: 5,
    puissance: { kw: 9.3, ch: 12.5 },
    courantNominalA: 20,
    debit: buildDebit([71, 69, 66, 59, 51, 44, 38, 28, 18]),
  },
  {
    modele: "YB60-6",
    nombreEtages: 6,
    puissance: { kw: 11, ch: 15 },
    courantNominalA: 24,
    debit: buildDebit([85, 83, 79, 71, 62, 54, 45, 34, 22]),
  },
  {
    modele: "YB60-7",
    nombreEtages: 7,
    puissance: { kw: 13, ch: 17.5 },
    courantNominalA: 28,
    debit: buildDebit([99, 97, 92, 83, 73, 63, 53, 40, 26]),
  },
  {
    modele: "YB60-8-B",
    nombreEtages: 8,
    puissance: { kw: 13, ch: 17.5 },
    courantNominalA: 28,
    debit: buildDebit([108, 105, 100, 90, 79, 68, 57, 42, 26]),
  },
  {
    modele: "YB60-8",
    nombreEtages: 8,
    puissance: { kw: 15, ch: 20 },
    courantNominalA: 32,
    debit: buildDebit([114, 112, 106, 96, 84, 73, 61, 47, 31]),
  },
  {
    modele: "YB60-9-B",
    nombreEtages: 9,
    puissance: { kw: 15, ch: 20 },
    courantNominalA: 32,
    debit: buildDebit([122, 119, 113, 102, 90, 78, 65, 48, 30]),
  },
  {
    modele: "YB60-9",
    nombreEtages: 9,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 40,
    debit: buildDebit([129, 127, 121, 109, 95, 83, 71, 54, 37]),
  },
  {
    modele: "YB60-10",
    nombreEtages: 10,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 40,
    debit: buildDebit([143, 140, 133, 120, 105, 92, 78, 60, 41]),
  },
  {
    modele: "YB60-11",
    nombreEtages: 11,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: buildDebit([158, 154, 147, 133, 116, 101, 86, 67, 45]),
  },
  {
    modele: "YB60-12",
    nombreEtages: 12,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: buildDebit([171, 167, 159, 144, 126, 110, 94, 72, 50]),
  },

  // ============================================
  // YB60-13 → YB60-30
  // (image 1)
  // ============================================

  {
    modele: "YB60-13",
    nombreEtages: 13,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: buildDebit([187, 183, 174, 157, 138, 120, 103, 79, 54]),
  },
  {
    modele: "YB60-14",
    nombreEtages: 14,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: buildDebit([200, 196, 186, 168, 148, 129, 110, 85, 58]),
  },
  {
    modele: "YB60-15",
    nombreEtages: 15,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: buildDebit([214, 209, 198, 179, 157, 136, 116, 89, 60]),
  },
  {
    modele: "YB60-16",
    nombreEtages: 16,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 64,
    debit: buildDebit([230, 224, 213, 192, 169, 147, 125, 96, 65]),
  },
  {
    modele: "YB60-17",
    nombreEtages: 17,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 64,
    debit: buildDebit([243, 237, 225, 203, 179, 155, 132, 101, 69]),
  },
  {
    modele: "YB60-18",
    nombreEtages: 18,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    debit: buildDebit([260, 254, 242, 219, 193, 168, 143, 111, 77]),
  },
  {
    modele: "YB60-19",
    nombreEtages: 19,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    debit: buildDebit([274, 268, 255, 231, 203, 177, 151, 117, 81]),
  },
  {
    modele: "YB60-20",
    nombreEtages: 20,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    debit: buildDebit([287, 281, 267, 242, 213, 186, 158, 123, 85]),
  },
  {
    modele: "YB60-21",
    nombreEtages: 21,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    debit: buildDebit([301, 294, 279, 253, 223, 194, 166, 129, 89]),
  },
  {
    modele: "YB60-22",
    nombreEtages: 22,
    puissance: { kw: 45, ch: 60 },
    courantNominalA: 96,
    debit: buildDebit([323, 316, 302, 274, 242, 211, 181, 142, 100]),
  },
  {
    modele: "YB60-24",
    nombreEtages: 24,
    puissance: { kw: 45, ch: 60 },
    courantNominalA: 96,
    debit: buildDebit([344, 336, 319, 289, 255, 222, 190, 147, 102]),
  },
  {
    modele: "YB60-26",
    nombreEtages: 26,
    puissance: { kw: 55, ch: 75 },
    courantNominalA: 120,
    debit: buildDebit([373, 364, 345, 313, 276, 240, 205, 160, 110]),
  },
  {
    modele: "YB60-28",
    nombreEtages: 28,
    puissance: { kw: 55, ch: 75 },
    courantNominalA: 120,
    debit: buildDebit([401, 392, 372, 337, 297, 259, 221, 172, 119]),
  },
  {
    modele: "YB60-30",
    nombreEtages: 30,
    puissance: { kw: 55, ch: 75 },
    courantNominalA: 120,
    debit: buildDebit([430, 420, 398, 362, 319, 277, 237, 184, 127]),
  },
];

export const yb60Products: readonly Product[] = pompesYB60.map((pompe) => ({
  slug: pompe.modele.toLowerCase(),
  name: pompe.modele,
  categoryId: "pompes",
  subcategoryId: "yb60",
  shortDescription: `Pompe triphasée YB60 à ${pompe.nombreEtages} étage${pompe.nombreEtages > 1 ? "s" : ""}.`,
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