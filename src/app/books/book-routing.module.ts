import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddEditComponent } from './book-add-edit/book-add-edit.component';
import { BookAddEditGuard } from './book-add-edit/book-add-edit.guard';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookGenresComponent } from './book-genres/book-genres.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookGuard } from './shared/book.guard';
import { BookResolver } from './shared/book.resolver';

const routes: Routes = [
  { path: '', component: BookListComponent },
  {
    path: 'genres',
    component: BookGenresComponent
  },
  {
    path: ':id',
    component: BookDetailsComponent,
    canActivate: [BookGuard],
    resolve: { book$: BookResolver }
  },
  {
    path: 'edit',
    children: [
      {
        path: ':id',
        component: BookAddEditComponent,
        canActivate: [BookGuard],
        canDeactivate: [BookAddEditGuard],
        resolve: { book$: BookResolver },
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
