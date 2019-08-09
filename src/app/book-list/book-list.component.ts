import { Component, OnInit } from '@angular/core';
import { IBook } from 'interfaces/i-book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  title = "Libros que he leído";
  headers = {title: 'Título', author: 'Autor', yearOfReading: 'Año de lectura', rating: 'Puntuación'};
  books: IBook[] = [{
    title: 'Un cocodrilo bajo la cama',
    author: 'Mariasun Landa',
    yearOfReading: null,
    rating: 1
  }, {
    title: 'El crim del mas maleït',
    author: 'Joan Pla',
    yearOfReading: null,
    rating: 1
  }];

  filterSearch: string = '';

  constructor() { }

  ngOnInit() {
  }

}
