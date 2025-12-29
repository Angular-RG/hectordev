import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  menuItems = [
    { label: 'Inicio', link: '#home' },
    { label: 'Sobre Mí', link: '#about' },
    { label: 'Proyectos', link: '#projects' },
    { label: 'Enfoque', link: '#approach' },
    { label: 'Habilidades', link: '#skills' },
    { label: 'Testimonios', link: '#testimonials' },
    { label: 'Contacto', link: '#contact' }
  ];
}
