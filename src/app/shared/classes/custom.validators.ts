import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
export class CustomValidators {

    static required(nullClassInstance: any): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            if (control.value === nullClassInstance) {
                return { classInstancesRequired: true };
            }

            return null;
        };
    }

    static notEmpty(control: AbstractControl): ValidationErrors | null {
        if (control.value.trim().length === 0) {
            return { empty: true };
        }

        return null;
    }

    static confirmValue(value: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            if (control.value !== value) {
                return { notSame: true };
            }

            return null;
        };
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
        };
    }

    private static _control(control: AbstractControl, compareControl: AbstractControl, controlName: string, compareControlName: string) {
        const value = control.value.getTime();
        const compareValue = compareControl.value.getTime();

        if(value > compareValue) {
            control.setErrors({ notLesser: new ControlError(controlName)});
            compareControl.setErrors({ notGreater: new ControlError(compareControlName)})
        }
    }

    static dateOrder(formGroup: FormGroup): ValidationErrors | null {
        CustomValidators._resetControl(formGroup.controls.published);
        CustomValidators._resetControl(formGroup.controls.started);
        CustomValidators._resetControl(formGroup.controls.read);

        if (formGroup.controls.published && formGroup.controls.started && !formGroup.controls.read) {
            if (!formGroup.controls.published.value || !formGroup.controls.started.value) {
                return null;
            }

            CustomValidators._control(formGroup.controls.published, formGroup.controls.started, 'started', 'published');
        }

        if (formGroup.controls.published && formGroup.controls.started && formGroup.controls.read) {
            if (!formGroup.controls.published.value || !formGroup.controls.started.value || !formGroup.controls.read.value) {
                return null;
            }

            CustomValidators._control(formGroup.controls.published, formGroup.controls.started, 'started', 'published');
            CustomValidators._control(formGroup.controls.published, formGroup.controls.read, 'read', 'published');
            CustomValidators._control(formGroup.controls.started, formGroup.controls.read, 'read', 'started');
        }

        return null;
    }

    private static _resetControl(control: AbstractControl) {
        if(control && control.value) {
            control.setErrors(null);
        }
    }
}

export class ControlError {
    public constructor(public name: string) { }
}
