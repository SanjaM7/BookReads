import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from '../shared/shared.module';
import { BookAddEditComponent } from './book-add-edit/book-add-edit.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookGenresComponent } from './book-genres/book-genres.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BookService } from './book.service';
import { BooksDataService } from './books-data.service';
import { BooksPreloadService } from './books-preload.service';
import { BookResolver } from './shared/book.resolver';
import { StatusDependantFormComponent } from './status-dependant-form/status-dependant-form.component';
@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    BookAddEditComponent,
    BookGenresComponent,
    StatusDependantFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BookRoutingModule,
    HttpClientInMemoryWebApiModule.forFeature(BooksDataService, { delay: 500 }),
    SharedModule,
  ],
  providers: [
    BookService,
    BookResolver,
    BooksPreloadService
  ]
})
export class BookModule { }
