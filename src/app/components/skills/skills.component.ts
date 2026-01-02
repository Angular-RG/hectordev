import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Skill, SkillCategory } from '../../models/skill.interface';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TiltDirective, NgOptimizedImage],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  selectedCategory = signal<SkillCategory>('Todos');

  categories: SkillCategory[] = ['Todos', 'Frontend', 'Backend', 'Base de Datos', 'Nube', 'Herramientas'];

  skills: Skill[] = [
    { name: 'TypeScript', percentage: 90, level: 'Avanzado', years: 5, category: 'Frontend', icon: 'assets/icons/typescript-plain.svg' },
    { name: 'Angular', percentage: 90, level: 'Avanzado', years: 5, category: 'Frontend', icon: 'assets/icons/angularjs-plain.svg' },
    { name: 'ExpressJs', percentage: 80, level: 'Experto', years: 3, category: 'Backend', icon: 'assets/icons/express-original.svg' },
    { name: 'Java', percentage: 80, level: 'Experto', years: 4, category: 'Backend', icon: 'assets/icons/java-plain.svg' },
    { name: 'Spring Boot', percentage: 88, level: 'Experto', years: 4, category: 'Backend', icon: 'assets/icons/spring-original.svg' },
    { name: 'Spring Security', percentage: 50, level: 'Intermedio', years: 1, category: 'Backend', icon: 'assets/icons/spring-original.svg' },
    { name: 'Oracle', percentage: 75, level: 'Experto', years: 4, category: 'Base de Datos', icon: 'assets/icons/oracle-original.svg' },
    { name: 'PostgreSQL', percentage: 86, level: 'Experto', years: 3, category: 'Base de Datos', icon: 'assets/icons/postgresql-plain.svg' },
    { name: 'Redis', percentage: 30, level: 'Principiante', years: 1, category: 'Base de Datos', icon: 'assets/icons/redis-plain.svg' },
    { name: 'Docker', percentage: 35, level: 'Intermedio', years: 2, category: 'Herramientas', icon: 'assets/icons/docker-plain.svg' },
    { name: 'AWS', percentage: 35, level: 'Intermedio', years: 2, category: 'Nube', icon: 'assets/icons/amazonwebservices-plain-wordmark.svg' },
    { name: 'Git', percentage: 95, level: 'Avanzado', years: 5, category: 'Herramientas', icon: 'assets/icons/git-plain.svg' }
  ];

  filteredSkills = computed(() => {
    const category = this.selectedCategory();
    if (category === 'Todos') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === category);
  });

  setCategory(category: SkillCategory) {
    this.selectedCategory.set(category);
  }
}
