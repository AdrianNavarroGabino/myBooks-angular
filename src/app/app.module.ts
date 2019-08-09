import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import { BookOrderPipe } from './pipes/book-order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    BookListComponent,
    StarRatingComponent,
    BookFilterPipe,
    BookOrderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
