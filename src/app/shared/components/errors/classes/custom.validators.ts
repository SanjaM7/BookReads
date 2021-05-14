import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {

    static notEmpty(control: AbstractControl): ValidationErrors | null {
        if (control.value.trim().length === 0) {
            return { empty: true };
        }

        return null;
    }

    static confirmElementValue(elementValue: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            if (control.value !== elementValue) {
                return { notSame: true };
            }

            return null;
        }
    }

    static fileSizeValidator(maxSize: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            if (control.value) {
                const file = control.value as File;
                if (file.size > maxSize) {
                    return { invalidFileSize: true };
                }
            }

            return null;
        }
    }
}