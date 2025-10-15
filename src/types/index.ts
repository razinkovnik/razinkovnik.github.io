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
  drawings?: string[]
}

export interface ProjectGroup {
  title: string
  regions: string[] // Добавьте это свойство
  summary: string
  features: string[]
  examples: string[]
}

export interface SkillCategory {
  category: string
  skills: SkillItem[]
}

export interface SkillItem {
  name: string
  level: number
}
