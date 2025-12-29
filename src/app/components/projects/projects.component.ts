import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Project, Arquitectura } from '../../models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  searchQuery = signal('');
  activeFilter = signal('Todos');
  selectedProject = signal<Project | null>(null);

  selectedProjectMigrationList = computed(() => {
    const project = this.selectedProject();
    if (!project || !project.migration || !project.migration.legacyVersion || !project.migration.currentVersion) {
      return [];
    }

    const legacyItems = project.migration.legacyVersion.split('/').map(s => s.trim());
    const currentItems = project.migration.currentVersion.split('/').map(s => s.trim());
    const maxLength = Math.max(legacyItems.length, currentItems.length);

    const list = [];
    for (let i = 0; i < maxLength; i++) {
      list.push({
        legacy: legacyItems[i] || '',
        current: currentItems[i] || ''
      });
    }
    return list;
  });

  projects: Project[] = [
    {
      projectImg: 'assets/images/sei.png',
      projectName: 'Sistema Estatal de Ingresos (SEI)',
      projectDescription: 'Sistema integral para el manejo de datos vehiculares del estado de Durango. Incluye trámites de altas, bajas, cambios, replaqueos, concesiones vehiculares. Sistema de cobros, reportes y validaciones con arquitectura de microservicios.',
      isProjectLinkPresent: false,
      projectLiveLink: '',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: false,
      arquitectura: Arquitectura.MICRO,
      category: 'Gobierno Digital',
      migration: {
        status: 'Migrating',
        legacyVersion: 'Java 8 / Spring Boot 2.x / Angular 8 / Oracle 11g / Docker',
        currentVersion: 'Java 21 / Spring Boot 3.5.x / Angular 21 / PostgreSQL 16 / Kubernetes'
      },
      tecnologias: [
        { nombre: 'Java', logo: 'devicon-java-plain' },
        { nombre: 'TypeScript', logo: 'devicon-typescript-plain' },
        { nombre: 'Angular', logo: 'devicon-angular-plain' },
        { nombre: 'Spring Boot', logo: 'devicon-spring-plain' },
        { nombre: 'Hibernate', logo: 'devicon-hibernate-plain' },
        { nombre: 'Oracle', logo: 'devicon-oracle-original' },
        { nombre: 'AWS', logo: 'devicon-amazonwebservices-plain-wordmark' }
      ]
    },
    {
      projectImg: 'assets/images/sidi.png',
      projectName: 'Sistema de Incidencias (SIDI)',
      projectDescription: 'Plataforma para gestión de recursos humanos en el sector público. Manejo de faltas, permisos económicos, vacaciones, permisos de mando superior. Dashboard administrativo con filtros avanzados y reportes.',
      isProjectLinkPresent: false,
      projectLiveLink: '',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: false,
      arquitectura: Arquitectura.MONO,
      category: 'Gobierno Digital',
      migration: {
        status: 'Legacy',
        currentVersion: 'Java 11 / Spring Boot 2.x / Angular 12 / Oracle 11g'
      },
      tecnologias: [
        { nombre: 'Java', logo: 'devicon-java-plain' },
        { nombre: 'TypeScript', logo: 'devicon-typescript-plain' },
        { nombre: 'Angular', logo: 'devicon-angular-plain' },
        { nombre: 'Spring Boot', logo: 'devicon-spring-plain' },
        { nombre: 'Hibernate', logo: 'devicon-hibernate-plain' },
        { nombre: 'Oracle', logo: 'devicon-oracle-original' }
      ]
    },
    {
      projectImg: 'assets/images/sere.png',
      projectName: 'Sistema de Entrega Recepción Estatal (SERE)',
      projectDescription: 'Sistema digitalizado para procesos de entrega-recepción gubernamental. Roles configurables, notificaciones automáticas por email, gestión de unidades administrativas, secretarías y direcciones.',
      isProjectLinkPresent: false,
      projectLiveLink: '',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: false,
      arquitectura: Arquitectura.MONO,
      category: 'Gobierno Digital',
       migration: {
        status: 'Legacy',
        currentVersion: 'Java 11 / Spring Boot 2.x / Angular 12 / Oracle 11g'
      },
      tecnologias: [
        { nombre: 'Java', logo: 'devicon-java-plain' },
        { nombre: 'TypeScript', logo: 'devicon-typescript-plain' },
        { nombre: 'Angular', logo: 'devicon-angular-plain' },
        { nombre: 'Spring Boot', logo: 'devicon-spring-plain' },
        { nombre: 'Hibernate', logo: 'devicon-hibernate-plain' },
        { nombre: 'Oracle', logo: 'devicon-oracle-original' }
      ]
    },
    {
      projectImg: 'assets/images/api.png',
      projectName: 'API DD',
      projectDescription: 'API REST robusta para servicios gubernamentales digitales. Gestión de trámites vehiculares, registro civil, impuesto predial y declaraciones fiscales. Integración con múltiples sistemas.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://www.pagos.durango.gob.mx/',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: false,
      arquitectura: Arquitectura.MONO,
      category: 'APIs',
      migration: {
        status: 'Migrating',
        legacyVersion: 'Java 11 / Spring Boot 2.x / Oracle 11g / Docker',
        currentVersion: 'Java 21 / Spring Boot 3.5.x / Spring Security / OAuth2.0 / PostgreSQL 16 / Kubernetes'
      },
      tecnologias: [
        { nombre: 'Java', logo: 'devicon-java-plain' },
        { nombre: 'Spring Boot', logo: 'devicon-spring-plain' },
        { nombre: 'Hibernate', logo: 'devicon-hibernate-plain' },
        { nombre: 'Oracle', logo: 'devicon-oracle-original' }
      ]
    },
    {
      projectImg: 'assets/images/rub.png',
      projectName: 'Registro Único de Beneficiarios (RUB)',
      projectDescription: 'Sistema municipal para gestión de beneficiarios. Creación, supervisión y gestión de solicitudes ciudadanas. Interfaz intuitiva y procesos automatizados para mayor eficiencia.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://rub.municipiodurango.gob.mx/sign-in?redirectURL=%2Finicio',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: true,
      arquitectura: Arquitectura.MONO,
      category: 'Freelancer',
      tecnologias: [
        { nombre: 'Java', logo: 'devicon-java-plain' },
        { nombre: 'Spring Boot', logo: 'devicon-spring-plain' },
        { nombre: 'Hibernate', logo: 'devicon-hibernate-plain' },
        { nombre: 'PostgreSQL', logo: 'devicon-postgresql-plain' },
        { nombre: 'Angular', logo: 'devicon-angular-plain' },
        { nombre: 'TypeScript', logo: 'devicon-typescript-plain' }
      ]
    },
    {
      projectImg: 'assets/images/licco.png',
      projectName: 'Licencias de Construcción (LICCO)',
      projectDescription: 'Plataforma digital para trámites de construcción. Gestión completa de licencias, uso de suelo, números oficiales. Incluye módulos de revisión, inspección y pagos en línea.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://desarrollourbanodigital.municipiodurango.gob.mx/#/login',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: true,
      arquitectura: Arquitectura.MONO,
      category: 'Freelancer',
      tecnologias: [
        { nombre: 'Java', logo: 'devicon-java-plain' },
        { nombre: 'Spring Boot', logo: 'devicon-spring-plain' },
        { nombre: 'Hibernate', logo: 'devicon-hibernate-plain' },
        { nombre: 'PostgreSQL', logo: 'devicon-postgresql-plain' },
        { nombre: 'Angular', logo: 'devicon-angular-plain' },
        { nombre: 'TypeScript', logo: 'devicon-typescript-plain' }
      ]
    },
    {
      projectImg: 'assets/images/sdare.png',
      projectName: 'Sistema de Apertura Rápida de Empresas (SDARE)',
      projectDescription: 'Sistema integral para registro empresarial. Gestión de empresas en ámbitos de Fomento Económico, Salud y Protección Civil. Procesos de alta, revisión, inspección y seguimiento automatizados.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://sdare.municipiodurango.gob.mx/sign-in?redirectURL=%2Fredirect',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: true,
      arquitectura: Arquitectura.MONO,
      category: 'Freelancer',
      tecnologias: [
        { nombre: 'Java', logo: 'devicon-java-plain' },
        { nombre: 'Spring Boot', logo: 'devicon-spring-plain' },
        { nombre: 'Hibernate', logo: 'devicon-hibernate-plain' },
        { nombre: 'PostgreSQL', logo: 'devicon-postgresql-plain' },
        { nombre: 'Angular', logo: 'devicon-angular-plain' },
        { nombre: 'TypeScript', logo: 'devicon-typescript-plain' }
      ]
    }
  ];

  filteredProjects = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const filter = this.activeFilter();

    return this.projects.filter(project => {
      const matchesSearch = project.projectName.toLowerCase().includes(query) ||
                            project.projectDescription.toLowerCase().includes(query);
      const matchesFilter = filter === 'Todos' || project.category === filter;

      return matchesSearch && matchesFilter;
    });
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

  openModal(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }
}
