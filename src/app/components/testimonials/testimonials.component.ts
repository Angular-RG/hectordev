import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../models/testimonial.interface';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  featuredOnly = signal(false);

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Luis Angel Flores',
      role: 'Director',
      company: 'Angoic Boot Company',
      content: '"Luis Angel Flores showcases excellence in solutions and demonstrates deep expertise in the great tools he wields so expertly."',
      date: '28 de 2023',
      featured: true,
      imageUrl: 'assets/avatar1.png'
    },
    {
      id: 2,
      name: 'Tania Espinoza Gómez',
      role: 'Director',
      company: 'Coinments, Inc.',
      content: '"Tania Angel Flores covered with best practices in UI/UX, and commits, and meeting complex project components..."',
      date: '27 de 2023',
      featured: true,
      imageUrl: 'assets/avatar2.png'
    },
    {
      id: 3,
      name: 'Iumatri Ednano',
      role: 'Community Management',
      company: 'Orecie',
      content: '"I have been impressed as questions software and valuation in design charts and eating and recommendations obscure forms..."',
      date: '28 de 2023',
      featured: false,
      imageUrl: 'assets/avatar3.png'
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
