import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './books/book.module';
import { booksPreloadFactory, BooksPreloadService } from './books/books-preload.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    BookModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: booksPreloadFactory,
      multi: true,
      deps: [BooksPreloadService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
