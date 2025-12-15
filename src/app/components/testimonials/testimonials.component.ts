import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../models/testimonial.interface';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  featuredOnly = signal(false);

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Luis Angel Flores',
      role: 'Desarrollador Java-Spring Boot',
      company: 'CETIC - Gobierno de Durango',
      content: 'Ingeniero de software orientado a resultados, con experiencia en múltiples lenguajes y frameworks. Demuestra un fuerte compromiso con la excelencia en el código, la resolución eficiente de problemas y el crecimiento profesional continuo. Destaca en entornos colaborativos para aportar valor al negocio.',
      date: '2023',
      featured: true,
      imageUrl: ''
    },
    {
      id: 2,
      name: 'Antonio Vazquez',
      role: 'Líder del área de desarrollo',
      company: 'CETIC - Gobierno de Durango',
      content: 'Héctor es un desarrollador de primer nivel, con habilidades analíticas y de pensamiento crítico excepcionales. Su amplia experiencia en sistemas gubernamentales y dominio del stack Java-Angular lo convierten en un recurso invaluable para cualquier equipo de alto rendimiento.',
      date: '2023',
      featured: true,
      imageUrl: ''
    },
    {
      id: 3,
      name: 'Tania Espinoza Gomez',
      role: 'Backend Senior',
      company: 'Proyectos Freelance',
      content: 'Colaborar con Héctor ha sido una experiencia sobresaliente. Su profundo conocimiento técnico en Spring Boot y Angular, junto con su capacidad para entregar proyectos puntualmente, lo distingue como un desarrollador senior altamente confiable.',
      date: '2023',
      featured: true,
      imageUrl: ''
    },
    {
      id: 4,
      name: 'Rodolfo Nava',
      role: 'Jefe de Gobierno Digital',
      company: 'CETIC - Gobierno de Durango',
      content: 'La arquitectura de microservicios diseñada e implementada por Héctor ha mejorado drásticamente el rendimiento y la escalabilidad de nuestros sistemas recaudacionales. Su visión estratégica y liderazgo son realmente sobresalientes.',
      date: '2023',
      featured: true,
      imageUrl: ''
    },
    {
      id: 5,
      name: 'Juan Carlos',
      role: 'Subdirector de Tecnologías de la Información',
      company: 'Municipio de Durango',
      content: 'Héctor entrega soluciones innovadoras que superan las expectativas. Su capacidad para traducir requerimientos de negocio en arquitecturas técnicas escalables es sobresaliente. Es un pilar clave en el éxito de nuestros productos.',
      date: '2023',
      featured: false,
      imageUrl: ''
    },
    {
      id: 6,
      name: 'Victor Manuel Rivera',
      role: 'Ingeniero Backend Semi Senior',
      company: 'CETIC - Gobierno de Durango',
      content: 'Trabajar junto a Héctor ha sido un privilegio. Su experiencia en tecnologías cloud y microservicios, sumada a su espíritu colaborativo, ha elevado el desempeño y los resultados de nuestro equipo.',
      date: '2023',
      featured: false,
      imageUrl: ''
    },
    {
      id: 7,
      name: 'Susana Chirinos',
      role: 'Diseñadora UX/UI',
      company: 'Proyectos Freelance',
      content: 'La atención al detalle y el enfoque en el usuario de Héctor lo convierten en un desarrollador excepcional. Logra unir diseño y desarrollo, garantizando experiencias de usuario sobresalientes en cada proyecto.',
      date: '2023',
      featured: false,
      imageUrl: ''
    },
    {
      id: 8,
      name: 'Diego Villarreal',
      role: 'Líder DevOps',
      company: 'CETIC - Gobierno de Durango',
      content: 'Héctor trabaja de la mano con el equipo DevOps para coordinar las liberaciones, la integración de herramientas como SonarQube y el manejo de buenas prácticas en Git. Aunque su enfoque principal es el desarrollo, su colaboración y comunicación con el área de DevOps facilita procesos de integración y despliegue eficientes.',
      date: '2023',
      featured: false,
      imageUrl: ''
    }
  ];

  get displayTestimonials() {
    return this.featuredOnly()
      ? this.testimonials.filter(t => t.featured)
      : this.testimonials;
  }

  toggleFeatured() {
    this.featuredOnly.update(v => !v);
  }
}
