import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

type FunctionCallback = (image: string | null) => {};
@Component({
  selector: 'sm-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ImageUploadComponent,
    multi: true
  }]
})
export class ImageUploadComponent implements ControlValueAccessor {

  image = new BehaviorSubject<string | null>('');
  image$: Observable<string | null> = this.image.asObservable();
  onChange!: FunctionCallback;

  writeValue(value: string): void { this.image.next(value); }
  registerOnTouched(): void {}
  registerOnChange(fn: FunctionCallback): void { this.onChange = fn; }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const image = reader.result?.toString() ?? null;
      this.image.next(image);
      this.onChange(image);
    };
  }
}

