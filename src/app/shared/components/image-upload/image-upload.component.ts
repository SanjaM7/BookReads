import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

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

  image = new BehaviorSubject<string>('');
  image$: Observable<string> = this.image.asObservable();
  onChange!: Function;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    if(!file) {
      return;
    }
    
    this.onChange(file);
    this.image$ = getFile(file);
  }

  writeValue(value: string) {
    this.image.next(value);
  };
  registerOnTouched(fn: Function) {};
  registerOnChange(fn: Function) { this.onChange = fn };
}

const getFile = (file: File): Observable<string> => {
  const readFile = new Subject<any>();
  const reader = new FileReader();

  reader.onload = () => {
    readFile.next(reader.result);
    readFile.complete();
  };

  reader.readAsDataURL(file);
  return readFile.asObservable();
}
