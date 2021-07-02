import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomValidators } from '../../classes/custom.validators';
import { DeleteData } from './delete-data';

@Component({
  selector: 'sm-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteData,
    ) { }

  ngOnInit(): void {
    this._initDeleteForm();
  }

  private _initDeleteForm(): void {
    this.form = this._formBuilder.group({
      confirmValue: ['', [
        CustomValidators.confirmValue(this.data.elementValue)
      ]]
    });
  }

  delete(): void {
    this._dialogRef.close(true);
  }
}
