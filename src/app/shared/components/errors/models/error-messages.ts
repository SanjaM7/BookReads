import { InjectionToken, TemplateRef } from "@angular/core";

export const SB_ERROR_DEFAULT_OPTIONS = new InjectionToken<IDefaultErrors>('SB_ERROR_DEFAULT_OPTIONS');

export interface IDefaultErrors {
  [key: string]: string | ErrorFunction;
}

export interface ErrorContext<T> {
  controlName: string;
  error: T
}

export type ErrorFunction = (context?: ErrorContext<any>) => string;

export class ValidationError {

  public get template(): TemplateRef<any> {
    return this._template;
  }

  public get context(): any {
    return this._context;
  }

  constructor(
    private readonly _template: TemplateRef<any>,
    private readonly _context: any) {
  }
}

export interface LengthError {
  requiredLength: number;
  actualLength: number;
}

export const DEFAULT_ERROR_MESSAGES: IDefaultErrors = {
  required: (context: ErrorContext<any>) => `${context.controlName} is required.`,
  minlength: (context: ErrorContext<LengthError>) => `${context.controlName} min length is ${context.error.requiredLength} characters.`,
  maxlength: (context: ErrorContext<LengthError>) => `${context.controlName} max length is ${context.error.requiredLength} characters.`,
  empty: (context: ErrorContext<any>) => `${context.controlName} must be non-empty string`,
  notSame: (context: ErrorContext<any>) => `${context.controlName} is not the same`,
  exists: (context: ErrorContext<any>) => `${context.controlName} already exists`,
  email: `Must be a valid email`,
  url: (context: ErrorContext<any>) => `${context.controlName} must be valid url`,
  invalidFileSize: (context: ErrorContext<any>) => `Maximum allowed ${context.controlName.toLowerCase()} size is ${context.error.maxFileSize / 1024}kb`,
  pattern: (context: ErrorContext<any>) => `Invalid pattern for ${context.controlName.toLowerCase()}`
};