import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from 'interfaces/i-book';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: IBook[], filterBy: string): IBook[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filter ?
        books.filter(prod => prod.title.toLocaleLowerCase().includes(filter) ||
          prod.author.toLocaleLowerCase().includes(filter)) :
        books;
  }

}
