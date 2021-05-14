import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: ':id', component: BookDetailsComponent },
  { 
    path: 'add', 
    children: [
      {
        path: ':id',
        component: BookAddComponent,
      },
      {
        path: '',
        redirectTo: 'add/0',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
