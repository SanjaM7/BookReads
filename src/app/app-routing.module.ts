import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books/book.module').then(m => m.BookModule)
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
