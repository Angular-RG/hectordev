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
    { label: 'Home', link: '#home' },
    { label: 'Approach', link: '#approach' },
    { label: 'Skills', link: '#skills' },
    { label: 'Testimonials', link: '#testimonials' },
    { label: 'Contact', link: '#contact' }
  ];
}
