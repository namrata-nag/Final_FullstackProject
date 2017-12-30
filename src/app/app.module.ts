import { UpdateBook } from './Books/updateBook.component';
import { BookFilterPipe } from './Books/book-Filter.pipe';
import { map } from './app.routing';
import { ViewDetail } from './Books/viewDetail.component';
import { AddBook } from './Books/addBook.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BookService} from './Books/books.service';
import {ViewBook} from './Books/viewBook.component';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ViewBook,
    AddBook,
    ViewDetail,
    BookFilterPipe,
    UpdateBook
  ],
  imports: [
    BrowserModule,
    FormsModule,
    map,
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
