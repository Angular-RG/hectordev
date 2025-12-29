import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleStep } from '../../models/lifecycle-step.interface';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleComponent {
  steps: LifecycleStep[] = [
    {
      id: 1,
      title: 'Descubrimiento y Estrategia',
      description: 'Análisis profundo de requerimientos, planificación de hoja de ruta y definición de objetivos claros y tareas accionables.',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Ideación y Diseño de Solución',
      description: 'Lluvia de ideas colaborativa, mejores prácticas en UI/UX y arquitectura de sistemas integral.',
      icon: '💡'
    },
    {
      id: 3,
      title: 'Implementación',
      description: 'Ejecución del desarrollo con enfoque en calidad de código, mantenibilidad y metodología ágil.',
      icon: '💻'
    },
    {
      id: 4,
      title: 'Aseguramiento de Calidad',
      description: 'Pruebas rigurosas unitarias, de integración y de extremo a extremo para soluciones de software confiables.',
      icon: '🛡️'
    }
  ];
}
