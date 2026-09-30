import type { Product } from "@/types/catalogue";

/**
 * FICHE TECHNIQUE
 * Pompes triphasées YB17
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

interface PompeYB17 {
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
  { debitLMin: 33, debitM3H: 2 },
  { debitLMin: 67, debitM3H: 4 },
  { debitLMin: 100, debitM3H: 6 },
  { debitLMin: 133, debitM3H: 8 },
  { debitLMin: 167, debitM3H: 10 },
  { debitLMin: 200, debitM3H: 12 },
  { debitLMin: 233, debitM3H: 14 },
  { debitLMin: 267, debitM3H: 16 },
  { debitLMin: 300, debitM3H: 18 },
  { debitLMin: 333, debitM3H: 20 },
  { debitLMin: 367, debitM3H: 22 },
];

/**
 * Associe une liste de hauteurs (dans l'ordre des colonnes de DEBITS)
 * aux points de débit correspondants.
 * Si la liste est plus courte que DEBITS, les derniers débits sont ignorés.
 */
const buildDebit = (hauteurs: number[]): DebitPoint[] =>
  hauteurs.map((h, i) => ({ ...DEBITS[i], hauteurManometriqueM: h }));

// ============================================
// POMPES YB17
// ============================================

const pompesYB17: PompeYB17[] = [
  // ============================================
  // YB17-1 → YB17-22
  // (image 2 : 12 colonnes de débit, 0 → 367 L/min)
  // ============================================

  {
    modele: "YB17-1",
    nombreEtages: 1,
    puissance: { kw: 0.55, ch: 0.75 },
    courantNominalA: 1,
    debit: buildDebit([12, 11, 11, 11, 10, 10, 9, 8, 7, 6, 5, 4]),
  },
  {
    modele: "YB17-2",
    nombreEtages: 2,
    puissance: { kw: 1.1, ch: 1.5 },
    courantNominalA: 3,
    debit: buildDebit([23, 23, 22, 22, 21, 20, 19, 17, 16, 14, 12, 9]),
  },
  {
    modele: "YB17-3",
    nombreEtages: 3,
    puissance: { kw: 2.2, ch: 3 },
    courantNominalA: 5,
    debit: buildDebit([34, 34, 33, 33, 33, 31, 29, 27, 25, 22, 19, 15]),
  },
  {
    modele: "YB17-4",
    nombreEtages: 4,
    puissance: { kw: 2.2, ch: 3 },
    courantNominalA: 5,
    debit: buildDebit([45, 45, 44, 44, 43, 41, 39, 36, 33, 29, 24, 19]),
  },
  {
    modele: "YB17-5",
    nombreEtages: 5,
    puissance: { kw: 3, ch: 4 },
    courantNominalA: 6,
    debit: buildDebit([56, 56, 55, 55, 54, 51, 49, 45, 41, 37, 31, 25]),
  },
  {
    modele: "YB17-6",
    nombreEtages: 6,
    puissance: { kw: 4, ch: 5.5 },
    courantNominalA: 9,
    debit: buildDebit([68, 67, 66, 66, 65, 63, 59, 55, 50, 45, 38, 31]),
  },
  {
    modele: "YB17-7",
    nombreEtages: 7,
    puissance: { kw: 4, ch: 5.5 },
    courantNominalA: 9,
    debit: buildDebit([78, 78, 77, 77, 75, 72, 68, 64, 58, 52, 44, 35]),
  },
  {
    modele: "YB17-8",
    nombreEtages: 8,
    puissance: { kw: 5.5, ch: 7.5 },
    courantNominalA: 12,
    debit: buildDebit([90, 90, 89, 89, 87, 84, 80, 74, 68, 61, 52, 42]),
  },
  {
    modele: "YB17-9",
    nombreEtages: 9,
    puissance: { kw: 5.5, ch: 7.5 },
    courantNominalA: 12,
    debit: buildDebit([101, 101, 99, 99, 97, 94, 89, 83, 76, 67, 58, 46]),
  },
  {
    modele: "YB17-10",
    nombreEtages: 10,
    puissance: { kw: 5.5, ch: 7.5 },
    courantNominalA: 12,
    debit: buildDebit([112, 111, 110, 110, 107, 103, 98, 91, 83, 74, 63, 50]),
  },
  {
    modele: "YB17-11",
    nombreEtages: 11,
    puissance: { kw: 7.5, ch: 10 },
    courantNominalA: 16,
    debit: buildDebit([124, 124, 122, 122, 119, 115, 110, 102, 94, 84, 72, 58]),
  },
  {
    modele: "YB17-12",
    nombreEtages: 12,
    puissance: { kw: 7.5, ch: 10 },
    courantNominalA: 16,
    debit: buildDebit([135, 134, 132, 132, 130, 125, 119, 111, 101, 90, 77, 62]),
  },
  {
    modele: "YB17-13",
    nombreEtages: 13,
    puissance: { kw: 7.5, ch: 10 },
    courantNominalA: 16,
    debit: buildDebit([145, 145, 143, 143, 140, 135, 128, 119, 109, 97, 83, 66]),
  },
  {
    modele: "YB17-14",
    nombreEtages: 14,
    puissance: { kw: 9.3, ch: 12.5 },
    courantNominalA: 20,
    debit: buildDebit([157, 157, 155, 155, 152, 147, 139, 130, 119, 106, 91, 74]),
  },
  {
    modele: "YB17-15",
    nombreEtages: 15,
    puissance: { kw: 9.3, ch: 12.5 },
    courantNominalA: 20,
    debit: buildDebit([168, 168, 165, 165, 162, 156, 149, 139, 127, 113, 97, 78]),
  },
  {
    modele: "YB17-16",
    nombreEtages: 16,
    puissance: { kw: 9.3, ch: 12.5 },
    courantNominalA: 20,
    debit: buildDebit([179, 178, 176, 176, 172, 166, 158, 147, 134, 119, 102, 82]),
  },
  {
    modele: "YB17-17",
    nombreEtages: 17,
    puissance: { kw: 9.3, ch: 12.5 },
    courantNominalA: 20,
    debit: buildDebit([189, 189, 186, 186, 182, 175, 166, 155, 141, 126, 107, 86]),
  },
  {
    modele: "YB17-18",
    nombreEtages: 18,
    puissance: { kw: 11, ch: 15 },
    courantNominalA: 24,
    debit: buildDebit([202, 201, 199, 199, 194, 188, 178, 167, 152, 136, 116, 94]),
  },
  {
    modele: "YB17-19",
    nombreEtages: 19,
    puissance: { kw: 11, ch: 15 },
    courantNominalA: 24,
    debit: buildDebit([212, 212, 209, 209, 204, 197, 187, 175, 160, 142, 121, 97]),
  },
  {
    modele: "YB17-20",
    nombreEtages: 20,
    puissance: { kw: 11, ch: 15 },
    courantNominalA: 24,
    debit: buildDebit([223, 222, 219, 219, 214, 207, 196, 183, 167, 148, 126, 101]),
  },
  {
    modele: "YB17-21",
    nombreEtages: 21,
    puissance: { kw: 13, ch: 17.5 },
    courantNominalA: 28,
    // À VÉRIFIER : ligne difficile à lire dans l'image 2
    debit: buildDebit([235, 234, 232, 227, 220, 209, 195, 179, 159, 137, 116, 106]),
  },
  {
    modele: "YB17-22",
    nombreEtages: 22,
    puissance: { kw: 13, ch: 17.5 },
    courantNominalA: 28,
    debit: buildDebit([246, 246, 243, 243, 237, 229, 218, 204, 186, 166, 142, 114]),
  },

  // ============================================
  // YB17-23 → YB17-60
  // (image 1 : la colonne 367 L/min est coupée dans l'image,
  //  donc seuls 11 points de débit sont renseignés : 0 → 333 L/min)
  // À COMPLÉTER : ajouter la valeur à 367 L/min (22 m³/h) pour chaque modèle
  // ============================================

  {
    modele: "YB17-23",
    nombreEtages: 23,
    puissance: { kw: 13, ch: 17.5 },
    courantNominalA: 28,
    debit: buildDebit([257, 256, 255, 253, 248, 239, 227, 212, 193, 172, 147]),
  },
  {
    modele: "YB17-24",
    nombreEtages: 24,
    puissance: { kw: 13, ch: 17.5 },
    courantNominalA: 28,
    debit: buildDebit([267, 267, 266, 263, 258, 248, 236, 220, 201, 178, 152]),
  },
  {
    modele: "YB17-25",
    nombreEtages: 25,
    puissance: { kw: 15, ch: 20 },
    courantNominalA: 32,
    debit: buildDebit([280, 279, 276, 276, 261, 248, 232, 212, 189, 162, 13]),
  },
  {
    modele: "YB17-26",
    nombreEtages: 26,
    puissance: { kw: 15, ch: 20 },
    courantNominalA: 32,
    debit: buildDebit([291, 290, 289, 286, 280, 271, 257, 240, 220, 196, 168]),
  },
  {
    modele: "YB17-27",
    nombreEtages: 27,
    puissance: { kw: 15, ch: 20 },
    courantNominalA: 32,
    debit: buildDebit([301, 300, 300, 297, 290, 280, 266, 247, 226, 202, 173]),
  },
  {
    modele: "YB17-28",
    nombreEtages: 28,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 32,
    debit: buildDebit([315, 314, 314, 311, 305, 295, 281, 263, 241, 215, 186]),
  },
  {
    modele: "YB17-29",
    nombreEtages: 29,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 32,
    debit: buildDebit([326, 326, 324, 321, 315, 305, 290, 272, 249, 222, 191]),
  },
  {
    modele: "YB17-30",
    nombreEtages: 30,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 32,
    debit: buildDebit([336, 336, 336, 332, 325, 315, 299, 280, 257, 229, 197]),
  },
  {
    modele: "YB17-31",
    nombreEtages: 31,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 32,
    debit: buildDebit([347, 346, 346, 342, 336, 324, 309, 289, 264, 236, 202]),
  },
  {
    modele: "YB17-32",
    nombreEtages: 32,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 32,
    // À VÉRIFIER : 334 à 167 L/min (lu "344" ou "334")
    debit: buildDebit([358, 357, 356, 353, 346, 334, 318, 297, 272, 242, 208]),
  },
  {
    modele: "YB17-33",
    nombreEtages: 33,
    puissance: { kw: 18.5, ch: 25 },
    courantNominalA: 32,
    debit: buildDebit([368, 368, 367, 363, 356, 344, 327, 305, 279, 249, 213]),
  },
  {
    modele: "YB17-34",
    nombreEtages: 34,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 40,
    debit: buildDebit([382, 381, 380, 377, 369, 357, 340, 318, 291, 260, 223]),
  },
  {
    modele: "YB17-35",
    nombreEtages: 35,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: buildDebit([392, 392, 391, 387, 380, 367, 349, 326, 299, 266, 229]),
  },
  {
    modele: "YB17-36",
    nombreEtages: 36,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: buildDebit([403, 402, 401, 398, 390, 377, 358, 335, 306, 273, 234]),
  },
  {
    modele: "YB17-37",
    nombreEtages: 37,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: buildDebit([414, 413, 412, 408, 400, 386, 367, 343, 314, 279, 240]),
  },
  {
    modele: "YB17-38",
    nombreEtages: 38,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: buildDebit([425, 424, 423, 418, 410, 396, 376, 351, 321, 286, 245]),
  },
  {
    modele: "YB17-39",
    nombreEtages: 39,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: buildDebit([435, 434, 433, 429, 420, 405, 385, 360, 328, 292, 250]),
  },
  {
    modele: "YB17-40",
    nombreEtages: 40,
    puissance: { kw: 22, ch: 30 },
    courantNominalA: 48,
    debit: buildDebit([446, 445, 444, 439, 430, 415, 394, 368, 336, 298, 255]),
  },
  {
    modele: "YB17-43",
    nombreEtages: 43,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: buildDebit([481, 481, 479, 475, 466, 450, 428, 400, 366, 326, 280]),
  },
  {
    modele: "YB17-45",
    nombreEtages: 45,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: buildDebit([503, 502, 501, 496, 486, 469, 446, 417, 381, 339, 291]),
  },
  {
    modele: "YB17-48",
    nombreEtages: 48,
    puissance: { kw: 26, ch: 35 },
    courantNominalA: 56,
    debit: buildDebit([535, 534, 532, 527, 516, 498, 473, 441, 403, 358, 306]),
  },
  {
    modele: "YB17-51",
    nombreEtages: 51,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 64,
    // À VÉRIFIER : lignes 51 → 60 difficiles à lire dans l'image 1
    debit: buildDebit([577, 576, 575, 567, 558, 552, 513, 483, 467, 415, 342]),
  },
  {
    modele: "YB17-53",
    nombreEtages: 53,
    puissance: { kw: 30, ch: 40 },
    courantNominalA: 64,
    // À VÉRIFIER
    debit: buildDebit([600, 598, 596, 591, 582, 574, 533, 504, 485, 431, 355]),
  },
  {
    modele: "YB17-55",
    nombreEtages: 55,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    // À VÉRIFIER
    debit: buildDebit([623, 621, 619, 614, 605, 596, 553, 525, 504, 447, 368]),
  },
  {
    modele: "YB17-58",
    nombreEtages: 58,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    // À VÉRIFIER
    debit: buildDebit([657, 655, 652, 649, 639, 628, 583, 553, 531, 472, 389]),
  },
  {
    modele: "YB17-60",
    nombreEtages: 60,
    puissance: { kw: 37, ch: 50 },
    courantNominalA: 80,
    // À VÉRIFIER
    debit: buildDebit([679, 678, 675, 672, 661, 650, 604, 575, 550, 488, 402]),
  },
];

export const yb17Products: readonly Product[] = pompesYB17.map((pompe) => ({
  slug: pompe.modele.toLowerCase(),
  name: pompe.modele,
  categoryId: "pompes",
  subcategoryId: "yb17",
  shortDescription: `Pompe triphasée YB17 à ${pompe.nombreEtages} étage${pompe.nombreEtages > 1 ? "s" : ""}.`,
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