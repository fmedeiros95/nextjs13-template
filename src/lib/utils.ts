import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
