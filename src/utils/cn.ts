import { twMerge } from 'tailwind-merge'
// src/utils/cn.ts
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
