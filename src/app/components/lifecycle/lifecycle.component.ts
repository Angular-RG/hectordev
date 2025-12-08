import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleStep } from '../../models/lifecycle-step.interface';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleComponent {
  steps: LifecycleStep[] = [
    {
      id: 1,
      title: 'Discovery & Strategy',
      description: 'In-depth requirements analysis, roadmap planning, and defining clear objectives and actionable tasks.',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Ideation & Solution Design',
      description: 'Collaborative brainstorming, best practices in UI/UX, and comprehensive system architecture.',
      icon: '💡'
    },
    {
      id: 3,
      title: 'Implementation',
      description: 'Executing development with a focus on code quality, maintainability, and agile methodology.',
      icon: '💻'
    },
    {
      id: 4,
      title: 'Quality Assurance',
      description: 'Rigorous unit, integration, and end-to-end testing for reliable software solutions.',
      icon: '🛡️'
    }
  ];
}
