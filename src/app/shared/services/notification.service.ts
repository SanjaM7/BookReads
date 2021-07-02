import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  displaySuccess(message: string): void {
    this.displayMessage(message, 'alert-success');
  }

  displayFail(message: string, error?: Error): Observable<never> {
    this.displayMessage(message, 'alert-danger');
    return throwError(error);
  }

  private displayMessage(message: string, panelClass: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass
    });
  }
}
