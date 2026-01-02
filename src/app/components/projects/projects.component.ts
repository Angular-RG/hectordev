import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Arquitectura, Project } from '../../models/project.interface';

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
      projectAcronym: 'SEI',
      projectStatus: { status: 'en-progreso', showStatus: 'Migracion en Progreso' },
      projectName: 'Sistema Estatal de Ingresos',
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
        status: 'Migrando',
        legacyVersion: 'Java 8 / Spring Boot 2.x / Angular 8 / Oracle 11g / Docker',
        currentVersion: 'Java 21 / Spring Boot 3.5.x / Angular 20 / PostgreSQL 16 / Kubernetes'
      },
      tecnologias: [
        { nombre: 'Java', logo: 'assets/icons/java-plain.svg' },
        { nombre: 'TypeScript', logo: 'assets/icons/typescript-plain.svg' },
        { nombre: 'Angular', logo: 'assets/icons/angular-plain.svg' },
        { nombre: 'Spring Boot', logo: 'assets/icons/spring-original.svg' },
        { nombre: 'Hibernate', logo: 'assets/icons/hibernate-plain.svg' },
        { nombre: 'PostgreSQL', logo: 'assets/icons/postgresql-plain.svg' },
        { nombre: 'AWS', logo: 'assets/icons/amazonwebservices-plain-wordmark.svg' }
      ]
    },
    {
      projectImg: 'assets/images/sidi.png',
      projectAcronym: 'SIDI',
      projectStatus: { status: 'finalizado', showStatus: 'Finalizado' },
      projectName: 'Sistema de Incidencias Digitales',
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
        status: 'Actual',
        currentVersion: 'Java 11 / Spring Boot 2.x / Angular 12 / Oracle 11g'
      },
      tecnologias: [
        { nombre: 'Java', logo: 'assets/icons/java-plain.svg' },
        { nombre: 'TypeScript', logo: 'assets/icons/typescript-plain.svg' },
        { nombre: 'Angular', logo: 'assets/icons/angular-plain.svg' },
        { nombre: 'Spring Boot', logo: 'assets/icons/spring-original.svg' },
        { nombre: 'Hibernate', logo: 'assets/icons/hibernate-plain.svg' },
        { nombre: 'Oracle', logo: 'assets/icons/oracle-original.svg' }
      ]
    },
    {
      projectImg: 'assets/images/sere.png',
      projectAcronym: 'SERE',
      projectStatus: { status: 'finalizado', showStatus: 'Finalizado' },
      projectName: 'Sistema de Entrega Recepción Estatal',
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
        status: 'Actual',
        currentVersion: 'Java 11 / Spring Boot 2.x / Angular 12 / Oracle 11g'
      },
      tecnologias: [
        { nombre: 'Java', logo: 'assets/icons/java-plain.svg' },
        { nombre: 'TypeScript', logo: 'assets/icons/typescript-plain.svg' },
        { nombre: 'Angular', logo: 'assets/icons/angular-plain.svg' },
        { nombre: 'Spring Boot', logo: 'assets/icons/spring-original.svg' },
        { nombre: 'Hibernate', logo: 'assets/icons/hibernate-plain.svg' },
        { nombre: 'Oracle', logo: 'assets/icons/oracle-original.svg' }
      ]
    },
    {
      projectImg: 'assets/images/api.png',
      projectAcronym: 'API DD',
      projectStatus: { status: 'finalizado', showStatus: 'Migracion Finalizada' },
      projectName: 'API Durango Digital',
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
        status: 'Migrando',
        legacyVersion: 'Java 11 / Spring Boot 2.x / / / Oracle 11g / Docker',
        currentVersion: 'Java 21 / Spring Boot 3.5.x / Spring Security / OAuth2.0 / PostgreSQL 16 / Kubernetes'
      },
      tecnologias: [
        { nombre: 'Java', logo: 'assets/icons/java-plain.svg' },
        { nombre: 'Spring Boot', logo: 'assets/icons/spring-original.svg' },
        { nombre: 'Hibernate', logo: 'assets/icons/hibernate-plain.svg' },
        { nombre: 'Oracle', logo: 'assets/icons/oracle-original.svg' }
      ]
    },
    {
      projectImg: 'assets/images/rub.png',
      projectAcronym: 'RUB',
      projectStatus: { status: 'finalizado', showStatus: 'Migracion Finalizada' },
      projectName: 'Registro Único de Beneficiarios',
      projectDescription: 'Sistema municipal para gestión de beneficiarios. Creación, supervisión y gestión de solicitudes ciudadanas. Interfaz intuitiva y procesos automatizados para mayor eficiencia.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://rub.municipiodurango.gob.mx/sign-in?redirectURL=%2Finicio',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: true,
      arquitectura: Arquitectura.MONO,
      category: 'Freelancer',
      migration: {
        status: 'Migrando',
        currentVersion: 'Java 17 / Spring Boot 3.4.x / Angular 19 / PostgreSQL 14.2',
        legacyVersion: 'Java 11 / Spring Boot 2.6.x / Angular 15 / PostgreSQL 16.4'
      },
      tecnologias: [
        { nombre: 'Java', logo: 'assets/icons/java-plain.svg' },
        { nombre: 'Spring Boot', logo: 'assets/icons/spring-original.svg' },
        { nombre: 'Hibernate', logo: 'assets/icons/hibernate-plain.svg' },
        { nombre: 'PostgreSQL', logo: 'assets/icons/postgresql-plain.svg' },
        { nombre: 'Angular', logo: 'assets/icons/angular-plain.svg' },
        { nombre: 'TypeScript', logo: 'assets/icons/typescript-plain.svg' }
      ]
    },
    {
      projectImg: 'assets/images/licco.png',
      projectAcronym: 'LICCO',
      projectStatus: { status: 'finalizado', showStatus: 'Finalizado' },
      projectName: 'Licencias de Construcción',
      projectDescription: 'Plataforma digital para trámites de construcción. Gestión completa de licencias, uso de suelo, números oficiales. Incluye módulos de revisión, inspección y pagos en línea.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://desarrollourbanodigital.municipiodurango.gob.mx/#/login',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: true,
      arquitectura: Arquitectura.MONO,
      migration: {
        status: 'Actual',
        currentVersion: 'Java 11 / Spring Boot 2.x / Angular 15 / PostgreSQL 14.2'
      },
      category: 'Freelancer',
      tecnologias: [
        { nombre: 'Java', logo: 'assets/icons/java-plain.svg' },
        { nombre: 'Spring Boot', logo: 'assets/icons/spring-original.svg' },
        { nombre: 'Hibernate', logo: 'assets/icons/hibernate-plain.svg' },
        { nombre: 'PostgreSQL', logo: 'assets/icons/postgresql-plain.svg' },
        { nombre: 'Angular', logo: 'assets/icons/angular-plain.svg' },
        { nombre: 'TypeScript', logo: 'assets/icons/typescript-plain.svg' }
      ]
    },
    {
      projectImg: 'assets/images/sdare.png',
      projectAcronym: 'SDARE',
      projectStatus: { status: 'finalizado', showStatus: 'Finalizado' },
      projectName: 'Sistema de Apertura Rápida de Empresas',
      projectDescription: 'Sistema integral para registro empresarial. Gestión de empresas en ámbitos de Fomento Económico, Salud y Protección Civil. Procesos de alta, revisión, inspección y seguimiento automatizados.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://sdare.municipiodurango.gob.mx/sign-in?redirectURL=%2Fredirect',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: true,
      arquitectura: Arquitectura.MONO,
      migration: {
        status: 'Actual',
        currentVersion: 'Java 17 / Spring Boot 3.x / Angular 16 / PostgreSQL 16.2'
      },
      category: 'Freelancer',
      tecnologias: [
        { nombre: 'Java', logo: 'assets/icons/java-plain.svg' },
        { nombre: 'Spring Boot', logo: 'assets/icons/spring-original.svg' },
        { nombre: 'Hibernate', logo: 'assets/icons/hibernate-plain.svg' },
        { nombre: 'PostgreSQL', logo: 'assets/icons/postgresql-plain.svg' },
        { nombre: 'Angular', logo: 'assets/icons/angular-plain.svg' },
        { nombre: 'TypeScript', logo: 'assets/icons/typescript-plain.svg' }
      ]
    },
    {
      projectImg: 'assets/images/sdare.png',
      projectAcronym: 'PEM',
      projectStatus: { status: 'finalizado', showStatus: 'Finalizado' },
      projectName: 'Portal del Empleo',
      projectDescription: 'Sistema integral para registro de empresas. Gestión de vacantes, postulaciones y procesos de selección. Plataforma intuitiva para empleadores y buscadores de empleo.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://sdare.municipiodurango.gob.mx/sign-in?redirectURL=%2Fredirect',
      isProjectGithubLinkPresent: false,
      projectGithubLink: undefined,
      isOpenSource: false,
      freelance: true,
      arquitectura: Arquitectura.MONO,
      migration: {
        status: 'Actual',
        currentVersion: 'Java 17 / Spring Boot 3.x / Angular 19 / PostgreSQL 16.2'
      },
      category: 'Freelancer',
      tecnologias: [
        { nombre: 'Java', logo: 'assets/icons/java-plain.svg' },
        { nombre: 'Spring Boot', logo: 'assets/icons/spring-original.svg' },
        { nombre: 'Hibernate', logo: 'assets/icons/hibernate-plain.svg' },
        { nombre: 'PostgreSQL', logo: 'assets/icons/postgresql-plain.svg' },
        { nombre: 'Angular', logo: 'assets/icons/angular-plain.svg' },
        { nombre: 'TypeScript', logo: 'assets/icons/typescript-plain.svg' }
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
