import { Component, OnInit, Input } from '@angular/core';
import { IBook } from 'interfaces/i-book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: IBook;
  @Input() rating: number;

  changeRating(rating: number) {
    this.book.rating = rating;
  }

  constructor() { }

  ngOnInit() {
  }

}
