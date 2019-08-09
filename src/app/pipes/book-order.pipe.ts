import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from 'interfaces/i-book';

@Pipe({
  name: 'bookOrder'
})
export class BookOrderPipe implements PipeTransform {

  transform(books: IBook[]): IBook[] {
    return books.sort(function (a: IBook, b: IBook) {
      if(a.yearOfReading > b.yearOfReading)
        return 1;
      else if(a.yearOfReading < b.yearOfReading)
        return -1;
      else {
        if(a.author > b.author)
          return 1;
        else if(a.author < b.author)
          return -1;
        else
          return 0;
      }
    })
  }
}
