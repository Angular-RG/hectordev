export type SkillCategory = 'Frontend' | 'Backend' | 'Base de Datos' | 'Nube' | 'Herramientas' | 'Todos';

export interface Skill {
  name: string;
  percentage: number;
  level: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Experto';
  years: number;
  category: SkillCategory;
  icon?: string;
}
