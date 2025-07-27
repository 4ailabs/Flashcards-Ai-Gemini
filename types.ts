export type MicrobeCategory = 'Bacterias' | 'Virus' | 'Parásitos' | 'Hongos';

export const ALL_CATEGORIES = 'Todos';

export interface Microbe {
  code: string;
  name: string;
  scientificName: string;
  category: MicrobeCategory;
  characteristics: string;
  codigoPatogeno: string;
  conflictoBase: string;
  vivenciaAsociada: string;
  sensaciones: string[];
  manifestacionesClinicas: string;
  simbologia: string;
}

export enum AiAction {
    EXPLAIN = "Explicar",
    SUMMARIZE = "Resumir",
    SIMPLIFY = "Simplificar",
    EMOTIONAL_CONFLICT = "Conflicto Emocional",
    CLINICAL_EXAMPLES = "Ejemplos Clínicos",
    SYMBOLIC_METAPHOR = "Metáfora Simbólica",
    HEALING_APPROACHES = "Enfoques de Sanación"
}

export interface CategoryColor {
    bg: string;
    text: string;
    border: string;
    activeBg: string;
    hoverBg: string;
}
