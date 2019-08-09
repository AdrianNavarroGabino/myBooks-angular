import { BookOrderPipe } from './book-order.pipe';

describe('BookOrderPipe', () => {
  it('create an instance', () => {
    const pipe = new BookOrderPipe();
    expect(pipe).toBeTruthy();
  });
});
