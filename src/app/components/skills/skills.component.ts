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
    { name: 'Angular', percentage: 90, level: 'Advanced', years: 4, category: 'Frontend', icon: '🅰️' },
    { name: 'Spring Boot', percentage: 88, level: 'Advanced', years: 4, category: 'Backend', icon: '🍃' },
    { name: 'Oracle', percentage: 86, level: 'Expert', years: 5, category: 'Database', icon: '🔴' },
    { name: 'Docker', percentage: 85, level: 'Expert', years: 5, category: 'Tools', icon: '🐳' },
    { name: 'Python', percentage: 87, level: 'Expert', years: 5, category: 'Backend', icon: '🐍' },
    { name: 'Graen', percentage: 80, level: 'Expert', years: 5, category: 'Tools', icon: '📦' },
    { name: 'Patamaom', percentage: 89, level: 'Expert', years: 5, category: 'Cloud', icon: '☁️' },
    { name: 'WebVIL', percentage: 85, level: 'Expert', years: 5, category: 'Frontend', icon: '🌐' }
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
