import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, SkillCategory } from '../../models/skill.interface';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TiltDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  selectedCategory = signal<SkillCategory>('All');

  categories: SkillCategory[] = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'Tools'];

  skills: Skill[] = [
    { name: 'TypeScript', percentage: 90, level: 'Advanced', years: 5, category: 'Frontend', icon: 'devicon-typescript-plain' },
    { name: 'Angular', percentage: 90, level: 'Advanced', years: 5, category: 'Frontend', icon: 'devicon-angularjs-plain' },
    { name: 'ExpressJs', percentage: 80, level: 'Expert', years: 3, category: 'Backend', icon: 'devicon-express-original' },
    { name: 'Java', percentage: 80, level: 'Expert', years: 4, category: 'Backend', icon: 'devicon-java-plain' },
    { name: 'Spring Boot', percentage: 88, level: 'Expert', years: 4, category: 'Backend', icon: 'devicon-spring-plain' },
    { name: 'Spring Security', percentage: 50, level: 'Intermediate', years: 1, category: 'Backend', icon: 'devicon-spring-original' },
    { name: 'Oracle', percentage: 75, level: 'Expert', years: 4, category: 'Database', icon: 'devicon-oracle-original' },
    { name: 'PostgreSQL', percentage: 86, level: 'Expert', years: 3, category: 'Database', icon: 'devicon-postgresql-plain' },
    { name: 'Redis', percentage: 30, level: 'Beginner', years: 1, category: 'Database', icon: 'devicon-redis-plain' },
    { name: 'Docker', percentage: 35, level: 'Intermediate', years: 2, category: 'Tools', icon: 'devicon-docker-plain' },
    { name: 'AWS', percentage: 35, level: 'Intermediate', years: 2, category: 'Cloud', icon: 'devicon-amazonwebservices-plain-wordmark' },
    { name: 'Git', percentage: 95, level: 'Advanced', years: 5, category: 'Tools', icon: 'devicon-git-plain' }
  ];

  filteredSkills = computed(() => {
    const category = this.selectedCategory();
    if (category === 'All') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === category);
  });

  setCategory(category: SkillCategory) {
    this.selectedCategory.set(category);
  }
}
