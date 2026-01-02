export enum Arquitectura {
  MICRO = 'Microservicios',
  MONO = 'Monolito'
}

export interface Technology {
  nombre: string;
  logo: string;
}

export interface Project {
  projectImg: string;
  projectStatus: ProjectStatusClass;
  projectName: string;
  projectDescription: string;
  isProjectLinkPresent: boolean;
  projectLiveLink: string;
  isProjectGithubLinkPresent: boolean;
  tecnologias: Technology[];
  arquitectura: Arquitectura;
  isOpenSource: boolean;
  freelance: boolean;
  projectGithubLink?: string;
  projectAcronym?: string;
  category?: string; // Added for filtering
  migration?: ProjectMigrationStatus;
}

interface ProjectMigrationStatus{
  status: 'Legado' | 'Migrando' | 'Modernizado' | 'Actual';
  legacyVersion?: string;
  currentVersion?: string;
}

interface ProjectStatusClass {
  status: string;
  showStatus: String;
}


