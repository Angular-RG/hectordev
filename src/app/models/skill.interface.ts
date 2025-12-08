export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Tools' | 'All';

export interface Skill {
  name: string;
  percentage: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  years: number;
  category: SkillCategory;
  icon?: string;
}
