import { InjectionToken, TemplateRef } from '@angular/core';

export const SB_ERROR_DEFAULT_OPTIONS = new InjectionToken<IDefaultErrors>('SB_ERROR_DEFAULT_OPTIONS');

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
export interface IDefaultErrors {
  [key: string]: string | ErrorFunction;
}
export interface ErrorContext<T> {
  controlName: string;
  error: T;
}

export type ErrorFunction = (context: ErrorContext<IDefaultError>) => string;

export const DEFAULT_ERROR_MESSAGES: IDefaultErrors = {
  required: (context: ErrorContext<IDefaultError>) => `${context.controlName} is required.`,
  classInstancesRequired: (context: ErrorContext<IDefaultError>) => `${context.controlName} is required.`,
  minlength: (context: ErrorContext<IDefaultError>) => `${context.controlName} min length is ${context.error?.requiredLength} characters.`,
  maxlength: (context: ErrorContext<IDefaultError>) => `${context.controlName} max length is ${context.error?.requiredLength} characters.`,
  min: (context: ErrorContext<IDefaultError>) => `${context.controlName} min value is ${context.error?.min}.`,
  max: (context: ErrorContext<IDefaultError>) => `${context.controlName} max value is ${context.error?.max}.`,
  empty: (context: ErrorContext<IDefaultError>) => `${context.controlName} must be non-empty string`,
  notSame: (context: ErrorContext<IDefaultError>) => `${context.controlName} must be entered`,
  email: `Must be a valid email`,
  url: (context: ErrorContext<IDefaultError>) => `${context.controlName} must be valid url`,
  invalidFileSize: (context: ErrorContext<IDefaultError>) => `Maximum allowed ${context.controlName.toLowerCase()} size is ${context.error.maxFileSize / 1024}kb`,
  pattern: (context: ErrorContext<IDefaultError>) => `Invalid pattern for ${context.controlName.toLowerCase()}`,
  notGreater: (context: ErrorContext<IDefaultError>) => `${context.controlName} must be greater than ${context.error?.name}.`,
  notLesser: (context: ErrorContext<IDefaultError>) => `${context.controlName} must be lesser than ${context.error?.name}.`,
};

export interface IDefaultError {
  [key: string]: any;
}