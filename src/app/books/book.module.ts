import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from '../shared/shared.module';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { BookService } from './book.service';
import { BooksDataService } from './books-data.service';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    BookAddComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BookRoutingModule,
    HttpClientInMemoryWebApiModule.forFeature(BooksDataService, { delay: 500 }),
    SharedModule
  ],
  providers: [
    BookService,
  ]
})
export class BookModule { }
