import type { Product } from "@/types/catalogue";
import { yb17Products } from "@/data/pumps/yb17";
import { yb30Products } from "@/data/pumps/yb30";
import { yb46Products } from "@/data/pumps/yb46";
import { yb60Products } from "@/data/pumps/yb60";
import { yb77Products } from "@/data/pumps/yb77";
import { yb95Products } from "@/data/pumps/yb95";

// TEMPORARY development data. This is NOT company content. Replace it with the real
// products when the catalogue is supplied, and never deploy it publicly.
// Array order is display order.

const nonPumpProducts: readonly Product[] = [
	{
		slug: "moteur-6-pouces",
		name: "Moteur 6 pouces",
		categoryId: "moteurs",
		shortDescription: "Moteur submersible 6 pouces.",
	},
	{
		slug: "moteur-8-pouces",
		name: "Moteur 8 pouces",
		categoryId: "moteurs",
		shortDescription: "Moteur submersible 8 pouces.",
	},
	{
		slug: "fil-cuivre-isole",
		name: "Fil isolé en cuivre",
		categoryId: "autres-produits",
		shortDescription: "Fil Polyine en cuivre isolé, de 0,95 à 2,50 mm.",
		description:
			"Fil Polyine en cuivre à 99,90 %, isolé pour le bobinage des moteurs électriques immergés. Diamètre : de 0,95 à 2,50 mm.",
	},
	{
		slug: "cavalier",
		name: "Cavalier",
		categoryId: "autres-produits",
		shortDescription: "Fermeture d'encoche disponible en R12, R15, R18, R20 et R25.",
		description: "Fermeture d'encoche R12, R15, R18, R20 et R25.",
	},
];

export const products: readonly Product[] = [
	...nonPumpProducts,
	...yb17Products,
	...yb30Products,
	...yb46Products,
	...yb60Products,
	...yb77Products,
	...yb95Products,
];