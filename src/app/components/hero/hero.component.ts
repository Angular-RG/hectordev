import { Component, ChangeDetectionStrategy, signal, computed, effect, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TiltDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  activeTab = signal<'frontend' | 'backend'>('frontend');
  displayedCode = signal('');

  private readonly frontendCode = `const developer = {
  name: 'Hector Adrian Roman',
  role: 'Senior Full Stack',
  skills: [
    'JavaScript',
    'TypeScript',
    'Angular',
    'PrimeNG',
    'Angular Material',
  ],
  status: 'Ready to Innovate'
};`;

  private readonly backendCode = `@RestController
@RequestMapping("/api/dev")
public class PortfolioController {

  @GetMapping("/skills")
  public List<String> getSkills() {
    return List.of(
      "Java 8+",
      "Java 21",
      "Monolithic",
      "Microservices",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "System Design"
    );
  }
}`;

  currentCode = computed(() =>
    this.activeTab() === 'frontend' ? this.frontendCode : this.backendCode
  );

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect((onCleanup) => {
      const code = this.currentCode();
      this.displayedCode.set('');

      if (isPlatformBrowser(this.platformId)) {
        let i = 0;
        const intervalId = setInterval(() => {
          if (i < code.length) {
            this.displayedCode.update(c => c + code.charAt(i));
            i++;
          } else {
            clearInterval(intervalId);
          }
        }, 20);

        onCleanup(() => clearInterval(intervalId));
      } else {
        this.displayedCode.set(code);
      }
    });
  }

  setActiveTab(tab: 'frontend' | 'backend') {
    this.activeTab.set(tab);
  }
}
