// src/types/index.ts
export interface ProjectLink {
  name: string
  url: string
}

export interface Project {
  name: string
  description: string
  fullDescription: string
  technologies: string[]
  links: ProjectLink[]
}

export interface ProjectGroup {
  title: string
  summary: string
  features: string[]
  examples: string[]
}

export interface SkillCategory {
  category: string
  skills: string[]
}