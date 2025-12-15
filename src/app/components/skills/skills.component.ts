import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill, SkillCategory } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  selectedCategory = signal<SkillCategory>('All');

  categories: SkillCategory[] = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'Tools'];

  skills: Skill[] = [
    { name: 'TypeScript', percentage: 90, level: 'Advanced', years: 5, category: 'Frontend', icon: '🅰️' },
    { name: 'Angular', percentage: 90, level: 'Advanced', years: 5, category: 'Frontend', icon: '🅰️' },
    { name: 'ExpressJs', percentage: 80, level: 'Expert', years: 3, category: 'Backend', icon: '🍃' },
    { name: 'Java', percentage: 80, level: 'Expert', years: 4, category: 'Backend', icon: '🍃' },
    { name: 'Spring Boot', percentage: 88, level: 'Expert', years: 4, category: 'Backend', icon: '🍃' },
    { name: 'Spring Security', percentage: 50, level: 'Intermediate', years: 1, category: 'Backend', icon: '🍃' },
    { name: 'Oracle', percentage: 75, level: 'Expert', years: 4, category: 'Database', icon: '🔴' },
    { name: 'PostgreSQL', percentage: 86, level: 'Expert', years: 3, category: 'Database', icon: '🔴' },
    { name: 'Redis', percentage: 30, level: 'Beginner', years: 1, category: 'Database', icon: '🔴' },
    { name: 'Docker', percentage: 35, level: 'Intermediate', years: 2, category: 'Tools', icon: '🐳' },
    { name: 'AWS', percentage: 35, level: 'Intermediate', years: 2, category: 'Cloud', icon: '🐳' },
    { name: 'Git', percentage: 95, level: 'Advanced', years: 5, category: 'Tools', icon: '🐍' }
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
