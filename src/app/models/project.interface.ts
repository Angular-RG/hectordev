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
  projectName: string;
  projectDescription: string;
  isProjectLinkPresent: boolean;
  projectLiveLink: string;
  isProjectGithubLinkPresent: boolean;
  projectGithubLink?: string;
  isOpenSource: boolean;
  freelance: boolean;
  arquitectura: Arquitectura;
  tecnologias: Technology[];
  category?: string; // Added for filtering
  migration?: {
    status: 'Legado' | 'Migrando' | 'Modernizado';
    legacyVersion?: string;
    currentVersion?: string;
  };
}
